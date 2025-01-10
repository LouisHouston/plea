import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">Plea</a>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/login" className="hover:text-gray-300">
            Login
          </a>
          <a href="/register" className="hover:text-gray-300">
            Register
          </a>
        </div>

        <div className="text-xl font-bold">
          <a href="/">UserName</a>
        </div>

        {/* button for mobiles */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;