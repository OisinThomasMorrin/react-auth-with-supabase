import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import Cookies from 'js-cookie'

export default function Account({ session }) {
  const [username, setUsername] = useState(null)

async function signOut(){
    try{
        const {error} = await supabase.auth.signOut()
        Cookies.remove('user-token')
        if(error) throw error
    }
    catch(err){
        console.log(err)
    }
}

  useEffect(() => {
    async function getProfile() {
      try{
      const { user } = session
      setUsername(user.email)
      Cookies.set('user-token', user.email)
      }
      catch(err){
        console.log(err)
      }
    }

    getProfile()
  }, [session])

  return (
    <div>
        <h1 className="primary">
            Hi, {username}!
        </h1>

      <div>
        <button className="button block" type="button" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}