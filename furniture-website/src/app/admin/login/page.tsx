'use client'

import { useState } from 'react'
import { useAuth } from '@/providers/AuthProvider'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

export default function AdminLogin() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error } = await signIn(email, password)
      if (error) {
        setError(error.message)
      } else {
        window.location.href = '/dashboard'
      }
    } catch (err) {
      setError('Unexpected error occurred')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-100 to-gray-200 px-4">
      
      {/* Logo & Title */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="text-8xl text-amber-600 font-extrabold">🛋️</span>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-700">Karis Admin Portal</h1>
        <p className="text-gray-600 mt-1">Sign in to manage your furniture catalog</p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-xl space-y-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center">
            <span className="mr-2">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <AiOutlineMail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>

          <div className="relative">
            <AiOutlineLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            ) : null}
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <a href="#" className="hover:underline text-amber-600">Forgot password?</a>
        </div>
      </div>
    </div>
  )
}
