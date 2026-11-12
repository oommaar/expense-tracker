import { Category, CATEGORY_ICONS } from '@/types'

const CLASS_MAP: Record<Category, string> = {
  Food: 'cat-food',
  Transport: 'cat-transport',
  Bills: 'cat-bills',
  Shopping: 'cat-shopping',
  Health: 'cat-health',
  Entertainment: 'cat-entertainment',
  Education: 'cat-education',
  Travel: 'cat-travel',
  Personal: 'cat-personal',
  Other: 'cat-other',
}

interface CategoryBadgeProps {
  category: Category | string
  showIcon?: boolean
  size?: 'sm' | 'md'
}

export default function CategoryBadge({ category, showIcon = true, size = 'sm' }: CategoryBadgeProps) {
  const cls = CLASS_MAP[category as Category] || 'cat-other'
  const icon = CATEGORY_ICONS[category as Category] || '📦'

  return (
    <span
      className={`badge ${cls} ${size === 'md' ? 'text-xs px-3 py-1' : 'text-[10px] px-2 py-0.5'}`}
    >
      {showIcon && <span className="mr-1">{icon}</span>}
      {category}
    </span>
  )
}
