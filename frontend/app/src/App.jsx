import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './component/Home'
import Dashboard from './component/Dashboard'
import Test from './component/Test'

import { LoginProvider } from './component/providers/LoginProvider'

const App = () => {
  return (
    <>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/test' element={<Test title={'This is Test'}/>} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </>
  )
}

export default App