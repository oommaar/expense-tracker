'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { format, parseISO } from 'date-fns'
import { formatCurrency } from '@/lib/expenses'

interface SpendingTrendChartProps {
  data: { date: string; total: number }[]
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="custom-tooltip">
        <p className="text-[#8891aa] text-xs mb-1">
          {label ? format(parseISO(label), 'MMM d, yyyy') : ''}
        </p>
        <p className="font-semibold text-white font-mono">{formatCurrency(payload[0]?.value || 0)}</p>
      </div>
    )
  }
  return null
}

export default function SpendingTrendChart({ data }: SpendingTrendChartProps) {
  if (!data.length) {
    return (
      <div className="flex items-center justify-center h-64 text-[#4a5270] text-sm">
        No trend data available
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e2235" vertical={false} />
        <XAxis
          dataKey="date"
          tickFormatter={(v) => format(parseISO(v), 'MMM d')}
          tick={{ fill: '#4a5270', fontSize: 11, fontFamily: 'var(--font-syne)' }}
          axisLine={false}
          tickLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          tickFormatter={(v) => `$${v}`}
          tick={{ fill: '#4a5270', fontSize: 11, fontFamily: 'var(--font-syne)' }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#22c55e"
          strokeWidth={2}
          fill="url(#spendGrad)"
          dot={false}
          activeDot={{ r: 4, fill: '#22c55e', strokeWidth: 0 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
