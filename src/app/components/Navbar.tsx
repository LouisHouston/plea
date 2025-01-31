"use client"; // Required if using React hooks in a component

import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    // Clear the user from context and any cookies (or storage)
    setUser(null); // Clear user in AuthContext
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; // Remove token cookie
    window.location.href = "/"; // Redirect to home or login page
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">Plea</a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          {user ? (
            <>
              <span className="text-gray-300">Hello, {user.name}!</span>
              <a href="/stalls" className="hover:text-gray-300">
                Stalls
              </a>
              <button
                onClick={handleLogout}
                className="hover:text-gray-300 focus:outline-none"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="hover:text-gray-300">
                Login
              </a>
              <a href="/login" className="hover:text-gray-300">
                Stalls
              </a>
              <a href="/register" className="hover:text-gray-300">
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
