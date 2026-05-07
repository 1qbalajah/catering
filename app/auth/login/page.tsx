'use client'
import { login } from '../action'
import { useState } from 'react'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const result = await login(new FormData(e.currentTarget))
    if (result?.success === false) {
      setError(result.message)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Login Admin/Kurir/Owner</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" />
      <input name="password" type="password" placeholder="Password" required className="w-full p-2 border rounded" />
      <button type="submit" disabled={loading} className="w-full p-2 bg-blue-600 text-white rounded disabled:opacity-50">
        {loading ? 'Memproses...' : 'Login'}
      </button>
    </form>
  )
}