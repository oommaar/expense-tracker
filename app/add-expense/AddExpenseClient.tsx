'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { addExpense } from '@/lib/expenses'
import { CATEGORIES, CATEGORY_ICONS, Category } from '@/types'
import toast from 'react-hot-toast'
import { format } from 'date-fns'
import { ArrowLeft, Receipt } from 'lucide-react'
import Link from 'next/link'

export default function AddExpenseClient() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState<Category>('Other')
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !amount || !date) return

    const amountNum = parseFloat(amount)
    if (isNaN(amountNum) || amountNum <= 0) {
      toast.error('Enter a valid amount')
      return
    }

    setLoading(true)
    const { error } = await addExpense({
      title,
      amount: amountNum,
      category,
      date: new Date(date).toISOString(),
      notes: notes || undefined,
    })

    if (error) {
      toast.error('Failed to add expense')
      setLoading(false)
      return
    }

    toast.success('Expense added! 💸')
    router.push('/expenses')
  }

  return (
    <div className="p-6 lg:p-8 max-w-xl mx-auto">
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-[#8891aa] hover:text-white text-sm mb-4 transition-colors"
        >
          <ArrowLeft size={15} /> Back
        </Link>
        <h1 className="text-2xl font-bold">Add Expense</h1>
        <p className="text-[#8891aa] text-sm mt-0.5">Record a new transaction</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Amount - prominent */}
        <div className="glass-card rounded-2xl p-6 text-center">
          <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-3">
            Amount
          </label>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold text-[#4a5270]">$</span>
            <input
              type="number"
              step="0.01"
              min="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              placeholder="0.00"
              className="w-48 text-4xl font-bold text-center bg-transparent border-none outline-none text-white placeholder-[#2a2d45] font-mono"
            />
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="What did you spend on?"
            className="input-dark w-full rounded-xl px-4 py-3 text-sm"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-2">
            Category
          </label>
          <div className="grid grid-cols-5 gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-xs font-medium transition-all ${
                  category === cat
                    ? 'border-green-500/50 bg-green-500/10 text-green-400'
                    : 'border-[#1e2235] bg-transparent text-[#8891aa] hover:border-[#2a2d45] hover:text-white'
                }`}
              >
                <span className="text-lg">{CATEGORY_ICONS[cat]}</span>
                <span className="text-[9px] leading-tight text-center">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-2">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="input-dark w-full rounded-xl px-4 py-3 text-sm"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-2">
            Notes <span className="text-[#4a5270] normal-case font-normal">(optional)</span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any additional details..."
            rows={3}
            className="input-dark w-full rounded-xl px-4 py-3 text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Adding...
            </>
          ) : (
            <>
              <Receipt size={16} />
              Add Expense
            </>
          )}
        </button>
      </form>
    </div>
  )
}
