'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import { Menu } from 'lucide-react'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:block flex-shrink-0">
        <div className="h-full">
          <Sidebar />
        </div>
      </div>

      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10 h-full">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      <main className="flex-1 overflow-y-auto">
        <div className="lg:hidden flex items-center gap-4 px-4 py-4 border-b border-[#1e2235] sticky top-0 bg-[#0a0d14] z-10">
          <button onClick={() => setSidebarOpen(true)} className="text-[#8891aa] hover:text-white transition-colors">
            <Menu size={22} />
          </button>
          <span className="font-bold text-lg">Xpense</span>
        </div>
        <div className="page-enter">{children}</div>
      </main>
    </div>
  )
}
