import React from 'react';

const Login = () => {
  return (
    <form action={""} method={"post"}>
    <div>
      <label> User Name: 
      <input type="text"></input>
      </label>
      <label> Password:  
      <input type="text"></input>
      </label>
      <button className="button-8" role="button">Submit</button>
      </div>
      </form>
  );
};


export default Login;