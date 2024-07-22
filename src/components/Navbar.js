import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import data from "../data.json";

function Navbar() {
  const navItems = data.navbar;
  const location = useLocation();

  return (
    <div className="navbar-container">
      <ul>
        {navItems.slice(0, 3).map((item) => (
          <li key={item.id} className="items">
            <Link
              className={location.pathname === item.url ? "active" : ""}
              to={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="center-logo">
        <h3>LETIH BEAUTY</h3>
      </div>
      <ul>
        {navItems.slice(3, 6).map((item) => (
          <li key={item.id}>
            <Link
              className={location.pathname === item.url ? "active" : ""}
              to={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
