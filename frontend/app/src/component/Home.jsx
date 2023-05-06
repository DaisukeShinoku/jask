import { React, useContext } from 'react'

import Registration from './auth/Registration'
import Login from './auth/Login'

import { LoginContext } from './providers/LoginProvider'

const Home = () => {

  const { loggedInStatus } = useContext(LoginContext);

  return (
    <>
      <h1>Home</h1>
      <h2>ログイン状態: {loggedInStatus ? 'ログイン済' : '未ログイン'}</h2>
      <Registration />
      <Login />
    </>
  )
}

export default Home