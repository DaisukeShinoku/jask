import React, { useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Start from './component/Start'
import Dashboard from './component/Dashboard'
import Test from './component/Test'

import { LoginContext } from './component/providers/LoginProvider'

import axios from 'axios'

const App = () => {

  const { loggedInStatus, setLoggedInStatus, setUser } = useContext(LoginContext);

  const checkLoginStatus = () => {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && loggedInStatus === false) {
          setLoggedInStatus(true)
          setUser(response.data.user)
        } else if (!response.data.logged_in && loggedInStatus === true) {
          setLoggedInStatus(false)
          setUser({})
        }
      }).catch(error => {
        console.log('ログインエラー', error)
    })
  }

  useEffect(() => {
    checkLoginStatus()
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/start' element={<Start/>} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/test' element={<Test title={'This is Test'}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App