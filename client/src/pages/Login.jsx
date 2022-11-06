import React, { useState } from "react";
import { Link } from "react-router-dom";
// https://www.youtube.com/watch?v=0aPLk2e2Z3g
export const Login = () => {

  const [inputs,setInputs] = useState({
     username:"",
     password:""
  });

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" name="username" />
        <input required type="password"placeholder="password"name="password"/>
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don't you have an account? <Link to = "/register">Register</Link></span>
      </form>
    </div>
  );
};
