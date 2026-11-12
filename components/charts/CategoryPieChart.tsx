'use client'

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { CATEGORY_COLORS } from '@/types'
import { formatCurrency } from '@/lib/expenses'

interface CategoryPieChartProps {
  data: { category: string; total: number; count: number }[]
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0].payload
    return (
      <div className="custom-tooltip">
        <p className="font-semibold text-white text-sm">{d.category}</p>
        <p className="text-green-400 font-mono">{formatCurrency(d.total)}</p>
        <p className="text-[#8891aa] text-xs">{d.count} transaction{d.count !== 1 ? 's' : ''}</p>
      </div>
    )
  }
  return null
}

const CustomLegend = ({ payload }: any) => (
  <div className="flex flex-wrap gap-2 justify-center mt-4">
    {payload?.map((entry: any) => (
      <div key={entry.value} className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
        <span className="text-[#8891aa] text-xs">{entry.value}</span>
      </div>
    ))}
  </div>
)

export default function CategoryPieChart({ data }: CategoryPieChartProps) {
  if (!data.length) {
    return (
      <div className="flex items-center justify-center h-64 text-[#4a5270] text-sm">
        No data for this period
      </div>
    )
  }

  const chartData = data.map((d) => ({
    ...d,
    name: d.category,
    value: d.total,
  }))

  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="45%"
          innerRadius={65}
          outerRadius={100}
          paddingAngle={3}
          dataKey="value"
          strokeWidth={0}
        >
          {chartData.map((entry) => (
            <Cell
              key={entry.category}
              fill={CATEGORY_COLORS[entry.category as keyof typeof CATEGORY_COLORS] || '#6b7280'}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer>
  )
}
