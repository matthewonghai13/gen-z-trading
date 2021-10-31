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
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import cat from './catgif.gif';

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Login({}) {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [user] = useAuthState(auth);
  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    
    // const username = user["displayName"];

    // // get user's document in users collection
    // const userData = await getDoc(await doc(firestore, "users", username)).data();
    // console.log(userData);

    // userData["total_account_value"] = 0.0;
    // userData["num_Ethereum"] = 0.0;
    // userData["num_Bitcoin"] = 0.0;
    // userData["num_XRP"] = 0.0;
    // userData["total_account_value"] = 0.0;
  
    // write back to firestore
    // setDoc(doc(firestore, "users", username), userData);

    console.log("login!");
  };

  return (
    <div id="loginBody">
      {user ? <Redirect to="/home" /> : <></>}
      <br/>
      <header id="Header">
        <p id="login">Login or Sign Up</p>
      </header>
      <p> Welcome to "web name"! You can track your Cryptocurrency
        status, accessing varity amount of resourses, and communicate with 
        virtue asistance on "wbe name."
      </p>
      <div id="button">
        <Button variant="outline-light" size="lg" onClick={handleLogin} >
          Sign in with Google
        </Button>
        
      </div>

      <img 
        id= "catType"
        src={cat} 
        class="center"
        />
    </div>
  );
}
