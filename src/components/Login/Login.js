import React from "react";
import "./login.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Button from "react-bootstrap/Button";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Login({ }) {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    console.log("login!");
  };

  function SignOut() {
    return (
      auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    );
  }

  return (
    !user && (
      <div id="loginBody">
        <header id="Header">
          <p id="login">Log In or Sign Up</p>
        </header>
        <p> description of website and what it does</p>

        <header id='Header'>
          <p id='login'>Log In or Sign Up</p>
        </header>
        <p> description of website and what it does
        </p>
        <div id='button'>
          <Button size='lg' onClick={handleLogin}>
            Link to Google
          </Button>
        </div>
      </div>
    )
  )
}
