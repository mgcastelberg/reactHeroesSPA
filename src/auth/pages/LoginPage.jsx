import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    login('Manux Dark');

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
