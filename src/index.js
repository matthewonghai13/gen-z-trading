import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar.js";
import Checkup from "./components/Checkup/Checkup.js";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBRnQBoi13u9pnoRDIGK7ukgF9DvzW1x0c",
  authDomain: "genztrading-58118.firebaseapp.com",
  projectId: "genztrading-58118",
  storageBucket: "genztrading-58118.appspot.com",
  messagingSenderId: "470684132118",
  appId: "1:470684132118:web:bc3c094bc1c3dae51da637",
});

const auth = firebase.auth();
// const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CustomNavbar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route auth={auth} path="/login">
            <Login />
          </Route>
          <Route path="/checkup">
            <Checkup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
