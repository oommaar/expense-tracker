export type Category =
  | 'Food' | 'Transport' | 'Bills' | 'Shopping' | 'Health'
  | 'Entertainment' | 'Education' | 'Travel' | 'Personal' | 'Other'

export interface Expense {
  id: string
  userId: string
  title: string
  amount: number
  category: Category
  date: string
  notes?: string | null
  createdAt: string
  updatedAt: string
}

export interface Budget {
  id: string
  userId: string
  category: Category
  monthlyLimit: number
  createdAt: string
  updatedAt: string
}

export interface ExpenseFilters {
  search?: string
  category?: Category | ''
  dateFrom?: string
  dateTo?: string
  page?: number
  limit?: number
}

export interface DashboardStats {
  totalExpensesThisMonth: number
  totalExpensesLastMonth: number
  categoryBreakdown: { category: string; total: number; count: number }[]
  dailyTrend: { date: string; total: number }[]
  recentExpenses: Expense[]
}

export const CATEGORIES: Category[] = [
  'Food', 'Transport', 'Bills', 'Shopping', 'Health',
  'Entertainment', 'Education', 'Travel', 'Personal', 'Other',
]

export const CATEGORY_COLORS: Record<Category, string> = {
  Food: '#f59e0b', Transport: '#3b82f6', Bills: '#ef4444', Shopping: '#8b5cf6',
  Health: '#10b981', Entertainment: '#f97316', Education: '#06b6d4',
  Travel: '#84cc16', Personal: '#ec4899', Other: '#6b7280',
}

export const CATEGORY_ICONS: Record<Category, string> = {
  Food: '🍔', Transport: '🚗', Bills: '💡', Shopping: '🛍️', Health: '💊',
  Entertainment: '🎬', Education: '📚', Travel: '✈️', Personal: '💅', Other: '📦',
}

// Extend NextAuth types
declare module 'next-auth' {
  interface Session {
    user: { id: string; email: string; name?: string | null }
  }
}
