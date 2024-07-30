import React, { createContext, useState, useEffect } from 'react';
import authService from './authService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setUser(user);
    }
  }, []);

  const login = async (username, password) => {
    const user = await authService.login(username, password);
    setUser(user);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
