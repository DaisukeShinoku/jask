import React, { useState, useContext } from 'react'

import axios from 'axios'

import { useNavigate } from "react-router-dom";

import { LoginContext } from '../providers/LoginProvider'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setLoggedInStatus, setUser } = useContext(LoginContext);

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    axios.post('http://localhost:3001/login',
      {
        user: {
          email: email,
          password: password,
        }
      },
      { withCredentials: true }
    ).then(response => {
      console.log("login res", response)

      if(response.data.logged_in) {
        setLoggedInStatus(true)
        setUser(response.data.user)
        navigate('/dashboard')
      }
    }).catch(error => {
      console.log("login error", error)
    })
    event.preventDefault()
  }

  return (
    <>
      <p>ログイン</p>

      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='メールアドレス'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='パスワード'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">登録</button>
      </form>
    </>
  )
}

export default Login
