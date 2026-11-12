import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

const GUEST_USER_ID = 'guest-demo-user'

async function getUserId(): Promise<string> {
  try {
    const session = await getServerSession(authOptions)
    if (session?.user?.id) return session.user.id
  } catch (error) {
    console.error('Expenses session error:', error)
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

    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    const dateFrom = searchParams.get('dateFrom') || ''
    const dateTo = searchParams.get('dateTo') || ''
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
    const limit = Math.max(1, parseInt(searchParams.get('limit') || '20', 10))
    const skip = (page - 1) * limit

    const where: any = { userId }
    if (search) where.title = { contains: search, mode: 'insensitive' }
    if (category) where.category = category

    const dateFilters: any = {}
    const parsedFrom = dateFrom ? new Date(dateFrom) : null
    const parsedTo = dateTo ? new Date(`${dateTo}T23:59:59`) : null

    if (parsedFrom && !Number.isNaN(parsedFrom.getTime())) dateFilters.gte = parsedFrom
    if (parsedTo && !Number.isNaN(parsedTo.getTime())) dateFilters.lte = parsedTo
    if (Object.keys(dateFilters).length) where.date = dateFilters

    const [expenses, total] = await Promise.all([
      prisma.expense.findMany({ where, orderBy: { date: 'desc' }, skip, take: limit }),
      prisma.expense.count({ where }),
    ])

    return NextResponse.json({ expenses, total })
  } catch (error) {
    console.error('Expenses GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch expenses' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  let body: any

  try {
    await ensureGuestUser()
    body = await req.json()
  } catch (error) {
    console.error('Expenses POST parse error:', error)
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const title = typeof body?.title === 'string' ? body.title.trim() : ''
  const amount = typeof body?.amount === 'number' ? body.amount : parseFloat(body?.amount)
  const category = typeof body?.category === 'string' ? body.category : 'Other'
  const dateValue = typeof body?.date === 'string' ? new Date(body.date) : new Date()
  const date = !Number.isNaN(dateValue.getTime()) ? dateValue : new Date()
  const notes = typeof body?.notes === 'string' ? body.notes : null

  if (!title || !amount || Number.isNaN(amount) || amount <= 0) {
    return NextResponse.json({ error: 'Title and valid amount required' }, { status: 400 })
  }

  try {
    const userId = await getUserId()
    const expense = await prisma.expense.create({
      data: {
        userId,
        title,
        amount,
        category,
        date,
        notes,
      },
    })

    return NextResponse.json(expense, { status: 201 })
  } catch (error) {
    console.error('Expenses POST error:', error)
    return NextResponse.json({ error: 'Failed to create expense' }, { status: 500 })
  }
}
