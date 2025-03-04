import React, { useContext } from 'react'

export const RegisterPage = () => {

  return (
    <div className='container mt-5'>
      <h1>Registro</h1>
      <hr />
      <button
        onClick={()=> console.log('registrado') }
        className='btn btn-primary'
      >
        Registrar me
      </button>
    </div>
  )
}
