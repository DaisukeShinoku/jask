import { React, useContext } from 'react'

import Registration from './auth/Registration'
import Login from './auth/Login'
import Logout from './auth/Logout'

import { LoginContext } from './providers/LoginProvider'

const Start = () => {

  const { loggedInStatus } = useContext(LoginContext)

  return (
    <>
      <h1>Home</h1>
      <h2>ログイン状態: {loggedInStatus ? 'ログイン済' : '未ログイン'}</h2>
      {loggedInStatus ?
      <>
        <Logout />
      </>
      :
      <>
        <Registration />
        <Login />
      </>
      }
      
    </>
  )
}

export default Start