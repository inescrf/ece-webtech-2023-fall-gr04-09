import {createContext, useState, useEffect} from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'


const Context = createContext()

export default Context

export const ContextProvider = ({
  children
}) => {
  const supabase = useSupabaseClient()
  const supabaseUser = useUser()
  const [user, setUser] = useState()
  const router = useRouter()

  useEffect(function () {
    if (supabaseUser) setUser(supabaseUser)
  }, [supabaseUser])

  return (
    <Context.Provider
      value={{
        user: user,
        logout: async () => {
          await supabase.auth.signOut()
          router.push('/')
          setUser(null)
          

        }
      }}
    >
      {children}
    </Context.Provider>
  )
}
