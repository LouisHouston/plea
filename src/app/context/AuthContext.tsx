"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

type User = {
  id: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedUser: User = JSON.parse(atob(token.split(".")[1])); 
      setUser(decodedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
