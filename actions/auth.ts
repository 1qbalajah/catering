'use server'

import bcrypt from 'bcryptjs'

import { supabaseAdmin }
from '@/lib/supabase-admin'

export async function staffLogin(
  email: string,
  password: string
) {
  const { data: user, error } =
    await supabaseAdmin
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

  if (error || !user) {
    throw new Error(
      'Admin tidak ditemukan'
    )
  }

  const isValid =
    await bcrypt.compare(
      password,
      user.password
    )

  if (!isValid) {
    throw new Error(
      'Password salah'
    )
  }

  return {
    id: user.id,
    name: user.name,
    level: user.level,
  }
}