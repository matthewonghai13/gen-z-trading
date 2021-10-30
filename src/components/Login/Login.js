import React from "react";
import "./login.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Login({}) {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    console.log("login!");
  };

  // auth.signOut();

  return (
    <div id="loginBody">
      {user ? <Redirect to="/home" /> : <></>}
      <header id="Header">
        <p id="login">Login or Sign Up</p>
      </header>
      <p> Welcome to "web name"! You can track your Cryptocurrency
        status, accessing varity amount of resourses, and communicate with 
        virtue asistance on "wbe name."
      </p>
      <div id="button">
        <Button size="lg" onClick={handleLogin} variant="dark">
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
