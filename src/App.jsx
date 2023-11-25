import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabaseClient'
import Auth from './Components/Auth'
import Account from './Components/Account'
import Cookies from 'js-cookie'
function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      let user = Cookies.get('user-token')
      if (user && session) {
      setSession(session)
      }
      else if (user && !session) {
        Cookies.remove('user-token')
      }
      else if (!user && session) {
        Cookies.set('user-token', session.user.id)
        setSession(session)
      }
      else {
        Cookies.remove('user-token')
        await supabase.auth.signOut()
      }
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}

export default App