import React, { useState, useContext } from 'react'

import axios from 'axios'

import { useNavigate } from "react-router-dom";

import { LoginContext } from '../providers/LoginProvider'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const { setLoggedInStatus, setUser } = useContext(LoginContext);

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    axios.post('http://localhost:3001/signup',
      {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        }
      },
      { withCredentials: true }
    ).then(response => {
      console.log("registration res", response)

      if(response.data.status === 'created') {
        setLoggedInStatus(true)
        setUser(response.data.user)
        navigate('/')
      }
    }).catch(error => {
      console.log("registration error", error)
    })
    event.preventDefault()
  }

  return (
    <>
      <p>新規登録</p>

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
        <input
          type='password'
          name='password_confirmation'
          placeholder='確認用パスワード'
          value={passwordConfirmation}
          onChange={event => setPasswordConfirmation(event.target.value)}
        />

        <button type="submit">登録</button>
      </form>
    </>
  )
}

export default Registration
