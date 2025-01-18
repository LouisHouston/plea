import React from 'react';

const fetchProtectedData = async () => {
  const response = await fetch('/api/protected', {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();
    console.log('Protected data:', data);
  } else {
    console.error('Error fetching protected data');
  }
}; 

const Home = () => {

  fetchProtectedData();
  return (
    <div>
      <h1>Welcome to home</h1>
      <p>This is myf custom homepage.</p>
    </div>
  );
};

export default Home;