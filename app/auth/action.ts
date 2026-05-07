'use server'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error, data } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return { success: false, message: error.message }

  // Perbaikan: Gunakan { data: profile } bukan { { profile } }
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user.id).single()
  
  redirect(`/${profile?.role || 'user'}/dashboard`)
}

export async function register(formData: FormData) {
  const supabase = await createClient()
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } } // Perbaikan: options.data bukan options.{ name }
  })

  if (error) return { success: false, message: error.message }
  redirect('/auth/login?status=registered')
}