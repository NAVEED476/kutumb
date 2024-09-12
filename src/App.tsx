
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import QuoteListPage from './pages/QuoteListPage';
import QuoteFormPage from './components/QuoteForm';
import { useAuth } from './services/auth';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quotes" element={
          <ProtectedRoute>
            <QuoteListPage />
          </ProtectedRoute>
        } />
        <Route path="/create-quote" element={
          <ProtectedRoute>
            <QuoteFormPage />
          </ProtectedRoute>
        } />
        <Route path="/" element={<Navigate to="/quotes" replace />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;