import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_actions'

function LoginPage(props) {

  // const navigate = useNavigate();

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPaswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandelr = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }
    
    dispatch(loginUser(body))
      .then(response => {
        if (response.payload.loginSuccess) {
          props.history.push("/");
          // navigate('/');
        } else {
          alert('Error')
        }
      })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>

      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandelr}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPaswordHandler} />
        <br/>

        <button type='submit'>Login</button>
      </form>

    </div>
  )
}

export default LoginPage