'use client'
import { register } from '../action'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const success = searchParams.get('status') === 'registered'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const result = await register(new FormData(e.currentTarget))
    if (result?.success === false) {
      setError(result.message)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Registrasi</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">Berhasil! Silakan login.</p>}
      <input name="name" type="text" placeholder="Nama Lengkap" required className="w-full p-2 border rounded" />
      <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" />
      <input name="password" type="password" placeholder="Password" required className="w-full p-2 border rounded" />
      <button type="submit" disabled={loading} className="w-full p-2 bg-green-600 text-white rounded disabled:opacity-50">
        {loading ? 'Memproses...' : 'Daftar'}
      </button>
      <p className="text-sm">Sudah punya akun? <a href="/auth/login" className="text-blue-600">Login</a></p>
    </form>
  )
}