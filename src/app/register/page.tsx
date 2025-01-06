import React from 'react';

const Register = () => {
  return (
    <div>
    <h2> REGISTER</h2>
    <form action={""} method={"post"}>
    <div>
      <label> User Name: 
      <input type="text"></input>
      </label>
      <label> Email: 
      <input type="text"></input>
      </label>
      <label> Password:  
      <input type="text"></input>
      </label>
      <button className="button-8" role="button">Submit</button>
      </div>
      </form>
      </div>
  );
};


export default Register;