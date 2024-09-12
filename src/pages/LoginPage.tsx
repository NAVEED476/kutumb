import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { login as apiLogin } from '../services/api';
import { useAuth } from '../services/auth';
import './login.css';

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
    <div className="container">
      <div className="card">
        <h1 className='login_header'>Login</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="input"
          />
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="OTP"
            required
            className="input"
          />
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
