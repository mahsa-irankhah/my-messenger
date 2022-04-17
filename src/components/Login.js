import React from 'react';
import "./Login.css";

//logo
import google from "../assets/google.svg";

const Login = () => {
    return (
      <div className="login-container">
        <h1>Welcome to Ava Messenger</h1>
        <div className='signin-container'>
          <img src={google} alt="google" />
          Sign up with Google
        </div>
      </div>
    );
};

export default Login;