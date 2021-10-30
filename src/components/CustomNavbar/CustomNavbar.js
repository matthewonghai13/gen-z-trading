import React from "react";
import "./customNavbar.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function CustomNavbar() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const logOut = () => {
    return (
      auth.currentUser && (
        <button className="logoutButton" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    );
  };
  return (
    // <nav id="customNavbarBody">
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     {!user ? (
    //       <li>
    //         <Link to="/login">Login</Link>
    //       </li>
    //     ) : (
    //       <li>{logOut()}</li>
    //     )}
    //   </ul>
    // </nav>
    <Navbar id= "navBar" bg="light" variant="light">
      <Container>
      <Navbar.Brand  href="/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/resources">Resources</Nav.Link>
        <Nav.Link href="/checkup">Check Up</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
       </Nav>
      </Container>
    </Navbar>
  );
}
