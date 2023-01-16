import { Button } from '@mui/material';
import React from 'react';
import "../Styles/Login.css";
import { auth, provider } from "../firebase";
import { signInWithPopup, signInAnonymously } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("user", true);
      setUser(true);
    });
    
      navigate("/dropdown", { replace: true });
  };

  const signInAsGuest = () => {
    signInAnonymously(auth).then((result) => {
      console.log(result);
      localStorage.setItem("user", true);
      setUser(true);
    })

    navigate("/dropdown", { replace: true });
  }
    
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsapp logo"
        />
        <div className="login_text">
          <h1>Sing in to Whatsapp</h1>
        </div>
        <Button type="submit" onClick = {signInWithGoogle}>Sign in With Google</Button>
        <div className="login_button">
        <Button type="submit" className="btn-login"onClick = {signInAsGuest}>Sign in As Guest</Button>
        </div>
      </div>
    </div>
  );
}

export default Login