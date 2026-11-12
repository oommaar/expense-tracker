'use client'

import { useState } from 'react'
import { Expense } from '@/types'
import { formatCurrency, deleteExpense } from '@/lib/expenses'
import CategoryBadge from './CategoryBadge'
import { format } from 'date-fns'
import { Trash2, Pencil } from 'lucide-react'
import toast from 'react-hot-toast'

interface ExpenseRowProps {
  expense: Expense
  onDelete?: () => void
  onEdit?: (expense: Expense) => void
  compact?: boolean
}

export default function ExpenseRow({ expense, onDelete, onEdit, compact = false }: ExpenseRowProps) {
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm(`Delete "${expense.title}"?`)) return
    setDeleting(true)
    const { error } = await deleteExpense(expense.id)
    if (error) {
      toast.error('Failed to delete')
    } else {
      toast.success('Expense deleted')
      onDelete?.()
    }
    setDeleting(false)
  }

  return (
    <div className={`flex items-center gap-3 ${compact ? 'py-3' : 'py-4 px-4 glass-card rounded-xl'} group hover:bg-white/[0.02] transition-colors`}>
      {/* Icon */}
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-base">
        {getCategoryEmoji(expense.category)}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">{expense.title}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <CategoryBadge category={expense.category} showIcon={false} />
          <span className="text-[10px] text-[#4a5270]">
            {format(new Date(expense.date), 'MMM d')}
          </span>
        </div>
      </div>

      {/* Amount */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold font-mono text-white">
          -{formatCurrency(expense.amount)}
        </span>

        {/* Actions */}
        {(onEdit || onDelete) && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {onEdit && (
              <button
                onClick={() => onEdit(expense)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#4a5270] hover:text-blue-400 hover:bg-blue-500/10 transition-all"
              >
                <Pencil size={13} />
              </button>
            )}
            {onDelete && (
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#4a5270] hover:text-red-400 hover:bg-red-500/10 transition-all disabled:opacity-50"
              >
                <Trash2 size={13} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function getCategoryEmoji(category: string): string {
  const map: Record<string, string> = {
    Food: '🍔', Transport: '🚗', Bills: '💡', Shopping: '🛍️',
    Health: '💊', Entertainment: '🎬', Education: '📚', Travel: '✈️',
    Personal: '💅', Other: '📦',
  }
  return map[category] || '📦'
}
