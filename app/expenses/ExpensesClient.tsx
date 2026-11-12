'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { fetchExpenses, formatCurrency, exportToCSV, updateExpense, addExpense } from '@/lib/expenses'
import { Expense, ExpenseFilters, CATEGORIES, Category, CATEGORY_ICONS } from '@/types'
import ExpenseRow from '@/components/ui/ExpenseRow'
import toast from 'react-hot-toast'
import {
  Search, Filter, Download, Plus, X, ChevronLeft, ChevronRight, Pencil
} from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'

const PAGE_SIZE = 15

export default function ExpensesClient() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState<ExpenseFilters>({ limit: PAGE_SIZE })
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | ''>('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [editExpense, setEditExpense] = useState<Expense | null>(null)
  const searchTimeout = useRef<ReturnType<typeof setTimeout>>()

  const load = useCallback(async (f: ExpenseFilters) => {
    setLoading(true)
    const { data, count } = await fetchExpenses(f)
    setExpenses(data || [])
    setTotal(count || 0)
    setLoading(false)
  }, [])

  useEffect(() => {
    const f = { ...filters, page, limit: PAGE_SIZE, search, category: category || undefined, dateFrom: dateFrom || undefined, dateTo: dateTo || undefined }
    load(f)
  }, [page, filters, search, category, dateFrom, dateTo, load])

  const handleSearch = (val: string) => {
    setSearch(val)
    setPage(1)
    clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => {}, 300)
  }

  const handleExport = async () => {
    const { data } = await fetchExpenses({ search, category: category || undefined, dateFrom: dateFrom || undefined, dateTo: dateTo || undefined, limit: 5000 })
    if (data) exportToCSV(data)
  }

  const clearFilters = () => {
    setSearch('')
    setCategory('')
    setDateFrom('')
    setDateTo('')
    setPage(1)
  }

  const hasFilters = search || category || dateFrom || dateTo
  const totalPages = Math.ceil(total / PAGE_SIZE)

  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">All Expenses</h1>
          <p className="text-[#8891aa] text-sm mt-0.5">
            {total} transaction{total !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            className="btn-ghost px-3 py-2 rounded-lg text-xs flex items-center gap-2"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Export</span>
          </button>
          <Link href="/add-expense" className="btn-primary px-4 py-2 rounded-lg text-xs flex items-center gap-2">
            <Plus size={13} /> Add
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-card rounded-2xl p-4 space-y-3">
        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a5270]" />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search expenses..."
            className="input-dark w-full rounded-xl pl-9 pr-4 py-2.5 text-sm"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5270] hover:text-white">
              <X size={14} />
            </button>
          )}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-2">
          {/* Category filter */}
          <select
            value={category}
            onChange={(e) => { setCategory(e.target.value as Category | ''); setPage(1) }}
            className="input-dark rounded-xl px-3 py-2 text-xs flex-shrink-0"
          >
            <option value="">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{CATEGORY_ICONS[c]} {c}</option>
            ))}
          </select>

          <input
            type="date"
            value={dateFrom}
            onChange={(e) => { setDateFrom(e.target.value); setPage(1) }}
            className="input-dark rounded-xl px-3 py-2 text-xs"
          />
          <span className="flex items-center text-[#4a5270] text-xs">to</span>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => { setDateTo(e.target.value); setPage(1) }}
            className="input-dark rounded-xl px-3 py-2 text-xs"
          />

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs hover:bg-red-500/20 transition-colors"
            >
              <X size={12} /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Expense list */}
      <div className="glass-card rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-6 space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-14 skeleton rounded-xl" />
            ))}
          </div>
        ) : expenses.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[#4a5270] text-sm mb-3">
              {hasFilters ? 'No expenses match your filters' : 'No expenses yet'}
            </p>
            {!hasFilters && (
              <Link href="/add-expense" className="btn-primary px-4 py-2 rounded-lg text-xs inline-flex items-center gap-2">
                <Plus size={13} /> Add first expense
              </Link>
            )}
          </div>
        ) : (
          <div className="divide-y divide-[#1e2235]">
            {expenses.map((expense) => (
              <div key={expense.id} className="px-4">
                <ExpenseRow
                  expense={expense}
                  onDelete={() => {
                    setExpenses((prev) => prev.filter((e) => e.id !== expense.id))
                    setTotal((t) => t - 1)
                  }}
                  onEdit={setEditExpense}
                  compact
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#4a5270]">
            Page {page} of {totalPages} · {total} total
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="btn-ghost p-2 rounded-lg disabled:opacity-40"
            >
              <ChevronLeft size={15} />
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
              const p = i + 1
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                    page === p ? 'bg-green-500/20 text-green-400' : 'text-[#8891aa] hover:text-white'
                  }`}
                >
                  {p}
                </button>
              )
            })}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="btn-ghost p-2 rounded-lg disabled:opacity-40"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Edit modal */}
      {editExpense && (
        <EditModal
          expense={editExpense}
          onClose={() => setEditExpense(null)}
          onSave={(updated) => {
            setExpenses((prev) => prev.map((e) => e.id === updated.id ? updated : e))
            setEditExpense(null)
          }}
        />
      )}
    </div>
  )
}

function EditModal({ expense, onClose, onSave }: { expense: Expense; onClose: () => void; onSave: (e: Expense) => void }) {
  const [title, setTitle] = useState(expense.title)
  const [amount, setAmount] = useState(expense.amount.toString())
  const [category, setCategory] = useState<Category>(expense.category as Category)
  const [date, setDate] = useState(format(new Date(expense.date), 'yyyy-MM-dd'))
  const [notes, setNotes] = useState(expense.notes || '')
  const [loading, setLoading] = useState(false)

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { expense: updated, error } = await updateExpense(expense.id, {
      title,
      amount: parseFloat(amount),
      category,
      date: new Date(date).toISOString(),
      notes: notes || undefined,
    })
    if (error) {
      toast.error('Failed to update')
    } else if (updated) {
      toast.success('Updated!')
      onSave(updated as Expense)
    }
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="glass-card rounded-2xl p-6 w-full max-w-md animate-slide-up">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Pencil size={17} className="text-green-400" /> Edit Expense
          </h2>
          <button onClick={onClose} className="text-[#4a5270] hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-1.5">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="input-dark w-full rounded-xl px-4 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-1.5">Amount</label>
            <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} required className="input-dark w-full rounded-xl px-4 py-2.5 text-sm font-mono" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-1.5">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value as Category)} className="input-dark w-full rounded-xl px-4 py-2.5 text-sm">
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-1.5">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input-dark w-full rounded-xl px-4 py-2.5 text-sm" />
          </div>
          <div className="flex gap-2 pt-2">
            <button type="button" onClick={onClose} className="btn-ghost flex-1 py-2.5 rounded-xl text-sm">Cancel</button>
            <button type="submit" disabled={loading} className="btn-primary flex-1 py-2.5 rounded-xl text-sm disabled:opacity-50">
              {loading ? 'Saving...' : 'Save changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
