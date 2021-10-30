import React from "react";
import "./login.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Button from "react-bootstrap/Button";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";

export default function Login({}) {
  // const [user] = useAuthState(auth);
  const auth = firebase.auth();
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
    <div id="loginBody">
      <Button onClick={handleLogin}>hello</Button>
    </div>
  );
}
