import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/marvel', {replace: true});
    console.log('login');
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button
        onClick={onLogin}
        className='btn btn-primary'
      >
        Login
      </button>
    </div>
  )
}
