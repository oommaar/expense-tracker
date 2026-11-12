'use client'

import { useEffect, useState, useCallback } from 'react'
import { fetchDashboardStats, formatCurrency, exportToCSV, fetchExpenses } from '@/lib/expenses'
import { DashboardStats, Expense } from '@/types'
import StatCard from '@/components/ui/StatCard'
import ExpenseRow from '@/components/ui/ExpenseRow'
import CategoryPieChart from '@/components/charts/CategoryPieChart'
import SpendingTrendChart from '@/components/charts/SpendingTrendChart'
import Link from 'next/link'
import {
  Wallet, TrendingUp, Download, Plus, RefreshCw,
  AlertTriangle, ChevronRight
} from 'lucide-react'
import { format } from 'date-fns'

export default function DashboardClient() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [exporting, setExporting] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    const data = await fetchDashboardStats()
    setStats(data)
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const handleRefresh = async () => {
    setRefreshing(true)
    await load()
    setRefreshing(false)
  }

  const handleExport = async () => {
    setExporting(true)
    const { data } = await fetchExpenses({ limit: 1000 })
    if (data) exportToCSV(data)
    setExporting(false)
  }

  const monthlyChange = stats
    ? stats.totalExpensesLastMonth > 0
      ? ((stats.totalExpensesThisMonth - stats.totalExpensesLastMonth) / stats.totalExpensesLastMonth) * 100
      : 0
    : 0

  if (loading) return <DashboardSkeleton />

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-[#8891aa] text-sm mt-0.5">
            {format(new Date(), 'MMMM yyyy')} overview
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="btn-ghost px-3 py-2 rounded-lg text-xs flex items-center gap-2"
          >
            <RefreshCw size={13} className={refreshing ? 'animate-spin' : ''} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="btn-ghost px-3 py-2 rounded-lg text-xs flex items-center gap-2"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
          <Link
            href="/add-expense"
            className="btn-primary px-4 py-2 rounded-lg text-xs flex items-center gap-2"
          >
            <Plus size={13} />
            Add
          </Link>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          label="Total This Month"
          value={formatCurrency(stats?.totalExpensesThisMonth || 0)}
          change={monthlyChange}
          accent="green"
          icon={<Wallet size={15} />}
          subValue={`${stats?.categoryBreakdown.reduce((s, c) => s + c.count, 0) || 0} transactions`}
        />
        <StatCard
          label="Last Month"
          value={formatCurrency(stats?.totalExpensesLastMonth || 0)}
          accent="default"
          icon={<TrendingUp size={15} />}
          subValue="Previous period"
        />
        <StatCard
          label="Avg per Day"
          value={formatCurrency((stats?.totalExpensesThisMonth || 0) / new Date().getDate())}
          accent="blue"
          subValue={`Day ${new Date().getDate()} of ${new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()}`}
        />
      </div>

      {/* Budget alerts */}
      {stats && stats.categoryBreakdown.length > 0 && (
        <BudgetAlerts categoryBreakdown={stats.categoryBreakdown} />
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-[#8891aa] uppercase tracking-wider mb-1">
            Spending by Category
          </h2>
          <p className="text-xs text-[#4a5270] mb-4">This month's breakdown</p>
          <CategoryPieChart data={stats?.categoryBreakdown || []} />
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-[#8891aa] uppercase tracking-wider mb-1">
            Spending Trend
          </h2>
          <p className="text-xs text-[#4a5270] mb-4">Last 30 days</p>
          <SpendingTrendChart data={stats?.dailyTrend || []} />
        </div>
      </div>

      {/* Category breakdown table */}
      {stats && stats.categoryBreakdown.length > 0 && (
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-[#8891aa] uppercase tracking-wider mb-4">
            Category Breakdown
          </h2>
          <div className="space-y-3">
            {stats.categoryBreakdown
              .sort((a, b) => b.total - a.total)
              .map((cat) => {
                const pct = stats.totalExpensesThisMonth > 0
                  ? (cat.total / stats.totalExpensesThisMonth) * 100
                  : 0
                return (
                  <div key={cat.category}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-white">{cat.category}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[#8891aa]">{pct.toFixed(1)}%</span>
                        <span className="text-sm font-semibold font-mono">{formatCurrency(cat.total)}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-[#1e2235] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-green-500 transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      )}

      {/* Recent transactions */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-[#8891aa] uppercase tracking-wider">
            Recent Transactions
          </h2>
          <Link
            href="/expenses"
            className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors"
          >
            View all <ChevronRight size={13} />
          </Link>
        </div>

        {!stats?.recentExpenses.length ? (
          <div className="text-center py-10">
            <p className="text-[#4a5270] text-sm mb-3">No expenses yet</p>
            <Link href="/add-expense" className="btn-primary px-4 py-2 rounded-lg text-xs inline-flex items-center gap-2">
              <Plus size={13} /> Add your first expense
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-[#1e2235]">
            {stats.recentExpenses.map((expense) => (
              <ExpenseRow key={expense.id} expense={expense} compact />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function BudgetAlerts({ categoryBreakdown }: { categoryBreakdown: any[] }) {
  const alerts = categoryBreakdown.filter((c) => c.total > 300)
  if (!alerts.length) return null

  return (
    <div className="space-y-2">
      {alerts.slice(0, 2).map((cat) => (
        <div
          key={cat.category}
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-yellow-500/20 bg-yellow-500/5"
        >
          <AlertTriangle size={15} className="text-yellow-400 flex-shrink-0" />
          <p className="text-sm text-yellow-200">
            <span className="font-semibold">{cat.category}</span> spending is high this month —{' '}
            <span className="font-mono">{formatCurrency(cat.total)}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

function DashboardSkeleton() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <div className="h-8 w-48 skeleton rounded-lg" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card rounded-2xl p-5 h-28 skeleton" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <div key={i} className="glass-card rounded-2xl p-6 h-72 skeleton" />
        ))}
      </div>
      <div className="glass-card rounded-2xl p-6 h-64 skeleton" />
    </div>
  )
}
