'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { staffLogin } from '@/actions/auth'

export default function LoginPage () {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin (e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const staff = await staffLogin(email, password)

      // ADMIN
      if (staff.level === 'admin') {
        router.push('/admin')
        return
      }

      // OWNER
      if (staff.level === 'owner') {
        router.push('/owner')
        return
      }

      // KURIR
      if (staff.level === 'kurir') {
        router.push('/kurir')
        return
      }
    } catch {
      // lanjut login customer
    }

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (authError) {
      setError('Email atau password salah')
      setIsLoading(false)
      return
    }

    if (data.user) {
      router.push('/')
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-stone-50 px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8 rounded-2xl border border-orange-100 bg-white p-8 shadow-[0_8px_30px_rgb(251,146,60,0.12)]'>
        <div className='text-center'>
          <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-6 w-6 text-orange-600'
            >
              <path
                fillRule='evenodd'
                d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            Selamat Datang
          </h2>
          <p className='mt-2 text-sm text-gray-500'>
            Masuk ke akun Anda untuk melanjutkan
          </p>
        </div>

        {error && (
          <div className='rounded-lg bg-red-50 p-3 text-sm text-red-600 text-center'>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className='space-y-6'>
          <div className='space-y-4'>
            <div className='space-y-1'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <div className='relative'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </div>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='block w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all duration-200'
                  placeholder='nama@email.com'
                />
              </div>
            </div>

            <div className='space-y-1'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='relative'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className='block w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all duration-200'
                  placeholder='••••••••'
                />
              </div>
            </div>
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className='group relative flex w-full justify-center rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:cursor-not-allowed disabled:opacity-70'
          >
            {isLoading ? (
              <span className='flex items-center gap-2'>
                <svg
                  className='h-4 w-4 animate-spin text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  />
                </svg>
                Memproses...
              </span>
            ) : (
              'Masuk'
            )}
          </button>
        </form>

        <div className='text-center'>
          <p className='text-sm text-gray-500'>
            Belum punya akun?{' '}
            <Link
              href='/register'
              className='font-semibold text-orange-600 hover:text-orange-500 transition-colors'
            >
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
