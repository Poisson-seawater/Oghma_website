import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';

export function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual authentication
    console.log('Login attempt:', { email, password });
  };

  return <LoginForm onSubmit={handleLogin} />;
}