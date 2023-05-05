import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './component/Home'
import Dashboard from './component/Dashboard'
import Test from './component/Test'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/test' element={<Test title={'This is Test'}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App