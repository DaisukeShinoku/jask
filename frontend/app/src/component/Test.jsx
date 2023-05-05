import React, { useState } from 'react'

import axios from 'axios'

const Test = (props) => {
  const [testStatus, setTestStatus] = useState('')

  axios.get('http://localhost:3001/test')
  .then(response => {
    setTestStatus(response.data.message)
  }).catch(error => {
    setTestStatus('エラーが発生しました')
    console.log('エラー内容', error)
  })

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{testStatus}</h2>
    </div>
  )
}

export default Test