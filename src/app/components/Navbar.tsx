"use client"; // Required if using React hooks in a component

import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <a href="/">Plea</a>
        </div>
        <div className="space-x-4">
          {user ? (
            <>
              <span className="text-gray-300">{user.name}</span>
              <a href="/logout" className="hover:text-gray-300">Logout</a>
            </>
          ) : (
            <>
              <a href="/login" className="hover:text-gray-300">Login</a>
              <a href="/register" className="hover:text-gray-300">Register</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;