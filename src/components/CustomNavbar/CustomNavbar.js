import React from "react";
import "./customNavbar.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function CustomNavbar() {
  return (
    <nav id="customNavbarBody">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
