'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { LayoutDashboard, Plus, List, TrendingDown, LogOut, X, LogIn, UserPlus } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Add Expense', href: '/add-expense', icon: Plus },
  { label: 'All Expenses', href: '/expenses', icon: List },
]

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const isLoggedIn = !!session?.user

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/dashboard' })
    toast.success('Signed out')
  }

  return (
    <aside className="flex flex-col h-full bg-[#0d1018] border-r border-[#1e2235] w-64">
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#1e2235]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
            <TrendingDown size={16} className="text-black" />
          </div>
          <span className="font-bold text-lg tracking-tight">Xpense</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[#4a5270] hover:text-white lg:hidden">
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active
                  ? 'bg-green-500/10 text-green-400 border-r-2 border-green-500'
                  : 'text-[#8891aa] hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={17} className={active ? 'text-green-400' : ''} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* User section */}
      <div className="px-3 py-4 border-t border-[#1e2235]">
        {isLoggedIn ? (
          <>
            <div className="px-3 py-2 mb-2">
              <p className="text-xs font-medium text-white truncate">{session.user.name || 'User'}</p>
              <p className="text-xs text-[#4a5270] truncate">{session.user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#8891aa] hover:text-red-400 hover:bg-red-500/5 transition-all"
            >
              <LogOut size={17} /> Sign out
            </button>
          </>
        ) : (
          <>
            <div className="px-3 py-2 mb-2">
              <p className="text-xs text-[#4a5270]">Browsing as guest</p>
              <p className="text-[10px] text-[#2a2d45] mt-0.5">Sign in to save your data</p>
            </div>
            <Link
              href="/login"
              onClick={onClose}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#8891aa] hover:text-green-400 hover:bg-green-500/5 transition-all"
            >
              <LogIn size={17} /> Sign in
            </Link>
            <Link
              href="/signup"
              onClick={onClose}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#8891aa] hover:text-blue-400 hover:bg-blue-500/5 transition-all"
            >
              <UserPlus size={17} /> Create account
            </Link>
          </>
        )}
      </div>
    </aside>
  )
}
