import type { Metadata } from 'next'
import { Syne, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Providers from '@/components/Providers'
import './globals.css'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

export const metadata: Metadata = {
  title: 'Xpense — Smart Expense Tracker',
  description: 'Track, analyze, and control your spending with real-time insights.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${syne.variable} ${jetbrains.variable} font-sans antialiased bg-[#0a0d14] text-white min-h-screen`}>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#1a1d27',
                color: '#fff',
                border: '1px solid #2a2d3d',
                fontFamily: 'var(--font-syne)',
                fontSize: '14px',
              },
              success: { iconTheme: { primary: '#22c55e', secondary: '#0a0d14' } },
              error: { iconTheme: { primary: '#ef4444', secondary: '#0a0d14' } },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
