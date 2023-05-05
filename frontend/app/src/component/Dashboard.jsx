import { React, useContext } from 'react'

import { LoginContext } from './providers/LoginProvider'

const Dashboard = () => {

  const { loggedInStatus, setLoggedInStatus } = useContext(LoginContext);

  return (
    <>
      <h1>Dashboard</h1>
      <h2>ログイン状態: {loggedInStatus ? 'ログイン済' : '未ログイン'}</h2>
    </>
  )
}

export default Dashboard