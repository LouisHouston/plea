"use client";

import React from 'react';
import { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  //NOTE: try to see if this is resuable for other forms or if it can be made into a custom hook
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        setSuccess(data.message);
      } else {
        setError(data.message);
        console.error(data.message);
      }
    }
    catch (err) {
      console.error('Something went wrong.');
    }
  }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="register"
            placeholder="Username"
          value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="register"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button-8" type="submit">Submit</button>
        </form>
        {success && <p style={{ color: 'green' }}>{success}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  };


  export default Login;