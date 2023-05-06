import React, { useContext } from 'react'

import axios from 'axios'

import { useNavigate } from "react-router-dom";

import { LoginContext } from '../providers/LoginProvider'

const Logout = () => {
  const { setLoggedInStatus } = useContext(LoginContext);

  const navigate = useNavigate(); 

  const handleLogoutClick = (event) => {
    axios.delete('http://localhost:3001/logout',
      { withCredentials: true },
    ).then(response => {
      console.log('ログアウト成功', response)
      setLoggedInStatus(false)
      navigate('/')
    }).catch(error => {
      console.log('logout error', error)
    })
  }

  return (
    <>
      <p>ログアウト</p>
      <button onClick={handleLogoutClick}>ログアウト</button>
    </>
  )
}

export default Logout
