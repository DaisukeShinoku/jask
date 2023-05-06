import { React, useContext } from 'react'

import { LoginContext } from './providers/LoginProvider'

import Logout from './auth/Logout'

const Dashboard = () => {

  const { loggedInStatus, user } = useContext(LoginContext);

  return (
    <>
      <h1>Dashboard</h1>
      <h2>ログイン状態: {loggedInStatus ? 'ログイン済' : '未ログイン'}</h2>
      <h2>id: {user.id ? user.id : '不明'}</h2>
      <h2>email: {user.email ? user.email : '不明'}</h2>
      <Logout />
    </>
  )
}

export default Dashboard