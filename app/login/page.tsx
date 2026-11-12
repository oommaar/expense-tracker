'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { Eye, EyeOff, TrendingDown, Zap } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      toast.error('Invalid email or password')
      setLoading(false)
      return
    }

    toast.success('Welcome back! 👋')
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#0a0d14] flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-[#0d1018] border-r border-[#1e2235] p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center">
              <TrendingDown size={18} className="text-black" />
            </div>
            <span className="font-bold text-xl tracking-tight">Xpense</span>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 text-green-400 text-xs font-semibold mb-6">
              <Zap size={10} /> Real-time insights
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-4 text-white">
              Take control of<br />your finances.
            </h2>
            <p className="text-[#8891aa] text-base leading-relaxed">
              Track every dollar, understand your spending patterns, and hit your financial goals.
            </p>
          </div>
        </div>
        <div className="relative z-10 space-y-4">
          {[
            { label: 'Powered by', value: 'Neon PostgreSQL' },
            { label: 'Auth', value: 'NextAuth.js' },
            { label: 'Framework', value: 'Next.js 14' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center justify-between py-3 border-b border-[#1e2235]">
              <span className="text-[#8891aa] text-sm">{stat.label}</span>
              <span className="text-white font-semibold font-mono text-sm">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm page-enter">
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center">
              <TrendingDown size={18} className="text-black" />
            </div>
            <span className="font-bold text-xl">Xpense</span>
          </div>

          <h1 className="text-2xl font-bold mb-1">Sign in</h1>
          <p className="text-[#8891aa] text-sm mb-8">
            Don't have an account?{' '}
            <Link href="/signup" className="text-green-400 hover:text-green-300 font-medium transition-colors">
              Sign up free
            </Link>
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" className="input-dark w-full rounded-xl px-4 py-3 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <input type={showPass ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" className="input-dark w-full rounded-xl px-4 py-3 text-sm pr-11" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5270] hover:text-[#8891aa] transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full py-3 rounded-xl text-sm font-semibold mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
