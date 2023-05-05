import { createContext, useState } from 'react'

export const LoginContext = createContext({})

export const LoginProvider = props => {
  const { children } = props
  
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setUser] = useState({})

  return (
    <LoginContext.Provider value={{ loggedInStatus, setLoggedInStatus, user, setUser }}>
      {children}
    </LoginContext.Provider>
  )
}