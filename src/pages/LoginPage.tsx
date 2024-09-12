// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { login as apiLogin } from '../services/api';
import { useAuth } from '../services/auth';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/quotes" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await apiLogin(username, otp);
      login(response.token);
      navigate('/quotes');
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="OTP"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;