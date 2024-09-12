
import { useState, useEffect, useCallback } from 'react';

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
  };
  
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  export const isAuthenticated = () => {
    return !!getToken();
  };

 


  export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
      return !!localStorage.getItem('token');
    });
  
    const login = useCallback((token: string) => {
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
    }, []);
  
    const logout = useCallback(() => {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    }, []);
  
    return { isAuthenticated, login, logout };
  };