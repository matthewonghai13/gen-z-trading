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
        <Nav className="logoutButton" onClick={() => auth.signOut()}>
          Sign Out
        </Nav>
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
    <Navbar id= "navBar" bg="secondary" variant="dark">
      <Container>
      <Navbar.Brand  href="/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link color="white" href="/resources">Resources</Nav.Link>
        <Nav.Link href="/checkup">Check Up</Nav.Link>
        {!user ? <Nav.Link href="/login">Login</Nav.Link> : <Nav.Link>{logOut()}</Nav.Link>}
       </Nav>
      </Container>
    </Navbar>
  );
}
