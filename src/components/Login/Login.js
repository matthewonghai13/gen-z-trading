import React from "react";
import "./login.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Button from "react-bootstrap/Button";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

export default function Login({}) {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    console.log("login!");
  };

  return (
    !user && (
      <div id="loginBody">
        <Button onClick={handleLogin}>hello</Button>
      </div>
    )
  );
}
