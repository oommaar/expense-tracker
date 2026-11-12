'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { Eye, EyeOff, TrendingDown, CheckCircle2 } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 6) { toast.error('Password must be at least 6 characters'); return }
    setLoading(true)

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
    const data = await res.json()

    if (!res.ok) { toast.error(data.error || 'Signup failed'); setLoading(false); return }

    // Auto login after signup
    const result = await signIn('credentials', { email, password, redirect: false })
    if (result?.error) { toast.error('Account created! Please sign in.'); router.push('/login'); return }

    toast.success('Account created! Welcome 🎉')
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#0a0d14] flex items-center justify-center p-6">
      <div className="w-full max-w-sm page-enter">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center">
            <TrendingDown size={18} className="text-black" />
          </div>
          <span className="font-bold text-xl">Xpense</span>
        </div>

        <h1 className="text-2xl font-bold mb-1">Create account</h1>
        <p className="text-[#8891aa] text-sm mb-8">
          Already have an account?{' '}
          <Link href="/login" className="text-green-400 hover:text-green-300 font-medium transition-colors">Sign in</Link>
        </p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-2">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="John Doe" className="input-dark w-full rounded-xl px-4 py-3 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" className="input-dark w-full rounded-xl px-4 py-3 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#8891aa] uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <input type={showPass ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} placeholder="Min. 6 characters" className="input-dark w-full rounded-xl px-4 py-3 text-sm pr-11" />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5270] hover:text-[#8891aa] transition-colors">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <div className="flex gap-1 mt-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${password.length >= i*2 ? password.length >= 8 ? 'bg-green-500' : 'bg-yellow-500' : 'bg-[#1e2235]'}`} />
              ))}
            </div>
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full py-3 rounded-xl text-sm font-semibold mt-2 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                Creating account...
              </span>
            ) : 'Create account'}
          </button>
        </form>
      </div>
    </div>
  )
}
