import { useRouter } from 'next/router'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Layout from '../components/Layout.js'

export default function Page() {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const user = useUser()
  if (user) {
    router.push('/profile')
  }
  return (
    <Layout
      title="Sign in"
      description="User sign in"
    >
      <h1 className='text-3xl font-extrabold text-green-1 text-center mt-8'>
        Sign in
      </h1>
      <div className="flex items-center justify-center h-screen">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['github']}
        >
          {/* Réduisez l'espace en utilisant mt-2 au lieu de mt-4 */}
          <p className="mt-2">Connect with GitHub</p>
        </Auth>
      </div>
    </Layout>
  )
}
