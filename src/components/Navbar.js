import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import data from "../data.json";

function Navbar() {
  const navItems = data.navbar;

  return (
    <div className="navbar-container">
      <ul>
        {navItems.slice(0, 3).map((item) => (
          <li key={item.id} className="items">
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="center-logo">
        <a href="/">
          <img src="https://via.placeholder.com/21" alt="logo" />
        </a>
      </div>
      <ul>
        {navItems.slice(3, 6).map((item) => (
          <li key={item.id}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
