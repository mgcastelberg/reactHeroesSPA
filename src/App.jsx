import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth'
import './App.css'

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
