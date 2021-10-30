import React from "react";
import "./login.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Button from 'react-bootstrap/Button';

export default function Login() {

  const handleLogin = () => {
    console.log("login!")
  }

  return <div id="loginBody">
    <Button onClick={handleLogin}>
      hello
    </Button>
  </div>;
}
