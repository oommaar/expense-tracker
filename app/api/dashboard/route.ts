import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'
import { startOfMonth, endOfMonth, subMonths, subDays } from 'date-fns'

const GUEST_USER_ID = 'guest-demo-user'

async function getUserId(): Promise<string> {
  try {
    const session = await getServerSession(authOptions)
    if (session?.user?.id) return session.user.id
  } catch (error) {
    console.error('Dashboard session error:', error)
  }
  return GUEST_USER_ID
}

async function ensureGuestUser() {
  try {
    await prisma.user.upsert({
      where: { id: GUEST_USER_ID },
      update: {},
      create: {
        id: GUEST_USER_ID,
        email: 'guest@xpense.demo',
        name: 'Guest',
        password: 'guest-no-password',
      },
    })
  } catch (error) {
    console.error('Guest user ensure error:', error)
  }
}

export async function GET(req: NextRequest) {
  try {
    await ensureGuestUser()
    const userId = await getUserId()

    const now = new Date()
    const monthStart = startOfMonth(now)
    const monthEnd = endOfMonth(now)
    const lastMonthStart = startOfMonth(subMonths(now, 1))
    const lastMonthEnd = endOfMonth(subMonths(now, 1))
    const thirtyDaysAgo = subDays(now, 30)

    const [thisMonth, lastMonth, trend, recent] = await Promise.all([
      prisma.expense.findMany({
        where: { userId, date: { gte: monthStart, lte: monthEnd } },
        select: { amount: true, category: true },
      }),
      prisma.expense.findMany({
        where: { userId, date: { gte: lastMonthStart, lte: lastMonthEnd } },
        select: { amount: true },
      }),
      prisma.expense.findMany({
        where: { userId, date: { gte: thirtyDaysAgo } },
        select: { amount: true, date: true },
        orderBy: { date: 'asc' },
      }),
      prisma.expense.findMany({
        where: { userId },
        orderBy: { date: 'desc' },
        take: 8,
      }),
    ])

    const totalThisMonth = thisMonth.reduce((sum, expense) => sum + expense.amount, 0)
    const totalLastMonth = lastMonth.reduce((sum, expense) => sum + expense.amount, 0)

    const categoryBreakdown = thisMonth.reduce((acc, expense) => {
      const existing = acc.find((item) => item.category === expense.category)
      if (existing) {
        existing.total += expense.amount
        existing.count += 1
      } else {
        acc.push({ category: expense.category, total: expense.amount, count: 1 })
      }
      return acc
    }, [] as { category: string; total: number; count: number }[])

    const dailyTrend = trend.reduce((acc, expense) => {
      const day = expense.date.toISOString().split('T')[0]
      const existing = acc.find((item) => item.date === day)
      if (existing) {
        existing.total += expense.amount
      } else {
        acc.push({ date: day, total: expense.amount })
      }
      return acc
    }, [] as { date: string; total: number }[])

    return NextResponse.json({
      totalExpensesThisMonth: totalThisMonth,
      totalExpensesLastMonth: totalLastMonth,
      categoryBreakdown,
      dailyTrend,
      recentExpenses: recent,
    })
  } catch (error) {
    console.error('Dashboard API error:', error)
    return NextResponse.json({ error: 'Failed to load dashboard data' }, { status: 500 })
  }
}
