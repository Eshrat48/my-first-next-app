// contexts/AuthContext.jsx
"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user data:", e);
        localStorage.removeItem('user'); 
      }
    }
    setLoading(false);
  }, []);


  const login = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = {
      id: '1',
      name: email.split('@')[0], 
      email,
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const loginWithGoogle = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = {
      id: '2',
      name: 'Google User',
      email: 'google.test@gmail.com',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Google',
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = async (name, email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = {
      id: '3',
      name,
      email,
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = { 
    user, 
    loading, 
    login, 
    loginWithGoogle, 
    register, 
    logout 
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}