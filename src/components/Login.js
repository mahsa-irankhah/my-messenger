import React from 'react';
import "./Login.css";
import firebase from "firebase/app";
import {auth} from "../firebase";

//logo
import google from "../assets/google.svg";

const Login = () => {
    return (
      <div className="login-container">
        <h1>Welcome to Ava Messenger</h1>
        <div className='signin-container' 
        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <img src={google} alt="google" />
          Sign in with Google
        </div>
      </div>
    );
};

export default Login;