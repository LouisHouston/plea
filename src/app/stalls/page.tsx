"use client";

import React from 'react';
import { useState } from 'react';
import CustomDropdown from '../components/dropdown';

const Stalls = () => {
  const [stallName, setstallName] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  //NOTE: try to see if this is resuable for other forms or if it can be made into a custom hook
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const response = await fetch('/api/stalls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stallName,  }),
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="register"
            placeholder="Stall Name"
          value={stallName}
            onChange={(e) => setstallName(e.target.value)}
          />
                   </form>
        {success && <p style={{ color: 'green' }}>{success}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <CustomDropdown></CustomDropdown>
      <button className="button-8" type="submit">Submit</button>
      </div>
    );
  };

export default Stalls;