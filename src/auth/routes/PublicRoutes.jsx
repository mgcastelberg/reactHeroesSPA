import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="privacy" element={<PrivacyPolicyPage />} />
    </Routes>
  );
}
