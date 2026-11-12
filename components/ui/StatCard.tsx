import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string
  subValue?: string
  change?: number
  changeLabel?: string
  accent?: 'green' | 'red' | 'blue' | 'purple' | 'default'
  icon?: React.ReactNode
}

const ACCENT_STYLES = {
  green: 'border-green-500/20 glow-green',
  red: 'border-red-500/20 glow-red',
  blue: 'border-blue-500/20',
  purple: 'border-purple-500/20',
  default: '',
}

const ACCENT_TEXT = {
  green: 'text-green-400',
  red: 'text-red-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  default: 'text-white',
}

export default function StatCard({
  label,
  value,
  subValue,
  change,
  changeLabel,
  accent = 'default',
  icon,
}: StatCardProps) {
  const isUp = change !== undefined && change > 0
  const isDown = change !== undefined && change < 0

  return (
    <div className={`glass-card rounded-2xl p-5 ${ACCENT_STYLES[accent]}`}>
      <div className="flex items-start justify-between mb-3">
        <p className="text-[#8891aa] text-xs font-semibold uppercase tracking-wider">{label}</p>
        {icon && (
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            accent === 'green' ? 'bg-green-500/10 text-green-400' :
            accent === 'red' ? 'bg-red-500/10 text-red-400' :
            accent === 'blue' ? 'bg-blue-500/10 text-blue-400' :
            'bg-white/5 text-[#8891aa]'
          }`}>
            {icon}
          </div>
        )}
      </div>

      <p className={`text-2xl font-bold font-mono ${ACCENT_TEXT[accent]}`}>{value}</p>

      {subValue && (
        <p className="text-[#4a5270] text-xs mt-1">{subValue}</p>
      )}

      {change !== undefined && (
        <div className="flex items-center gap-1.5 mt-3">
          {isUp ? (
            <TrendingUp size={13} className="text-red-400" />
          ) : isDown ? (
            <TrendingDown size={13} className="text-green-400" />
          ) : (
            <Minus size={13} className="text-[#4a5270]" />
          )}
          <span className={`text-xs font-medium ${
            isUp ? 'text-red-400' : isDown ? 'text-green-400' : 'text-[#4a5270]'
          }`}>
            {Math.abs(change).toFixed(1)}% {changeLabel || 'vs last month'}
          </span>
        </div>
      )}
    </div>
  )
}
