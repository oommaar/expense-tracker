import { Expense, ExpenseFilters } from '@/types'
import { format } from 'date-fns'

export async function fetchExpenses(filters: ExpenseFilters = {}) {
  const params = new URLSearchParams()
  if (filters.search) params.set('search', filters.search)
  if (filters.category) params.set('category', filters.category)
  if (filters.dateFrom) params.set('dateFrom', filters.dateFrom)
  if (filters.dateTo) params.set('dateTo', filters.dateTo)
  if (filters.page) params.set('page', filters.page.toString())
  if (filters.limit) params.set('limit', filters.limit.toString())

  const res = await fetch(`/api/expenses?${params.toString()}`)
  if (!res.ok) return { data: null, count: 0, error: 'Failed to fetch' }
  const json = await res.json()
  return { data: json.expenses as Expense[], count: json.total as number, error: null }
}

export async function fetchDashboardStats() {
  const res = await fetch('/api/dashboard')
  if (!res.ok) return null
  return res.json()
}

export async function addExpense(data: any) {
  const res = await fetch('/api/expenses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok) return { expense: null, error: json.error }
  return { expense: json as Expense, error: null }
}

export async function updateExpense(id: string, data: Partial<Expense>) {
  const res = await fetch(`/api/expenses/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok) return { expense: null, error: json.error }
  return { expense: json as Expense, error: null }
}

export async function deleteExpense(id: string) {
  const res = await fetch(`/api/expenses/${id}`, { method: 'DELETE' })
  if (!res.ok) return { error: 'Failed to delete' }
  return { error: null }
}

export function formatCurrency(amount: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount)
}

export function exportToCSV(expenses: Expense[]) {
  const headers = ['Date', 'Title', 'Category', 'Amount', 'Notes']
  const rows = expenses.map((e) => [
    format(new Date(e.date), 'yyyy-MM-dd'),
    `"${e.title}"`,
    e.category,
    e.amount.toString(),
    `"${e.notes || ''}"`,
  ])
  const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `expenses-${format(new Date(), 'yyyy-MM-dd')}.csv`
  a.click()
  URL.revokeObjectURL(url)
}
