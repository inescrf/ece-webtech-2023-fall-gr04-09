// components/UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for user authentication
export const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => {
  return useContext(UserContext);
};

// UserContextProvider component to manage the user state
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function to set the user object when logged in
  const login = (userData) => {
    setUser(userData);
  };

  // Logout function to set the user object to null when logged out
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
