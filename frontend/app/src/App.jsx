import React, { useEffect, useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Start from './component/Start'
import Dashboard from './component/Dashboard'
import Test from './component/Test'

import { LoginContext } from './component/providers/LoginProvider'

import axios from 'axios'

const App = () => {

  const location = useLocation();

  const { loggedInStatus, setLoggedInStatus, setUser } = useContext(LoginContext);

  const checkLoginStatus = (path) => {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && loggedInStatus === false) {
          setLoggedInStatus(true)
          setUser(response.data.user)
        } else if (!response.data.logged_in && loggedInStatus === true) {
          setLoggedInStatus(false)
          setUser({})
        }

        if(path === '/' && !loggedInStatus) {
          document.location = '/start'
        }
      }).catch(error => {
        console.log('ログインエラー', error)
    })
  }

  useEffect(() => {
    checkLoginStatus(location.pathname)
  })

  return (
    <>
      <Routes>
        <Route path='/start' element={<Start />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/test' element={<Test title={'This is Test'}/>} />
      </Routes>
    </>
  )
}

export default App