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
    console.error('Expense item session error:', error)
  }
  return GUEST_USER_ID
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = await getUserId()
    let body: any

    try {
      body = await req.json()
    } catch (error) {
      console.error('Expense PUT parse error:', error)
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const expense = await prisma.expense.findFirst({ where: { id: params.id, userId } })
    if (!expense) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const updated = await prisma.expense.update({
      where: { id: params.id },
      data: {
        title: typeof body.title === 'string' ? body.title : expense.title,
        amount: typeof body.amount === 'number'
          ? body.amount
          : body.amount !== undefined
          ? parseFloat(body.amount)
          : expense.amount,
        category: typeof body.category === 'string' ? body.category : expense.category,
        date: body.date ? new Date(body.date) : expense.date,
        notes: body.notes !== undefined ? body.notes : expense.notes,
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Expense PUT error:', error)
    return NextResponse.json({ error: 'Failed to update expense' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = await getUserId()
    const expense = await prisma.expense.findFirst({ where: { id: params.id, userId } })
    if (!expense) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    await prisma.expense.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Expense DELETE error:', error)
    return NextResponse.json({ error: 'Failed to delete expense' }, { status: 500 })
  }
}
