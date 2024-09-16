import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import "./ServiceNavbar.css";
import data from "../data.json";

// Componente para Navbar em Desktop
function DesktopServiceNavbar() {
  const navItems = data.service;
  const location = useLocation();

  return (
    <div className="service-navbar-desktop">
      <div className="service-navbar-container">
        <div className="center-logo">
          <h1>FACIALS</h1>
        </div>
        <ul>
          {navItems.slice(3, 3).map((item) => (
            <li key={item.id}>
              <Link
              className={location.pathname === item.url ? "active" : ""}
              to={item.url}
              >
              <h5>{item.title}</h5>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="main-nav-items">
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
      </div>
    </div>
  );
}

// Componente para Navbar em Mobile
const MobileServiceNavbar = () => {
  const navItems = data.navbar;
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar-mobile">
        <div className="logo">
          <h3>FACIALS</h3>
        </div>
      </nav>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeMenu}>
              &times;
            </span>
            <ul>
              {navItems.map((item) => (
                <li key={item.id} className="items">
                  <Link
                    className={location.pathname === item.url ? "active" : ""}
                    to={item.url}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

// Componente principal que alterna entre Desktop e Mobile
const MobileNavbar = () => {
  const desktopView = data.desktop;
  const mobileView = data.mobile;

  const isDesktop = useMediaQuery({ query: `(min-width: ${desktopView}px)` });
  const isMobile = useMediaQuery({ query: `(max-width: ${mobileView}px)` });

  return (
    <>
      {isDesktop && <DesktopServiceNavbar />}
      {isMobile && <MobileServiceNavbar />}
    </>
  );
};

export default MobileNavbar; // Corrigido para exportar o componente correto
