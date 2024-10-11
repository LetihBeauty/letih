import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Importando o CSS
import data from "../data.json";
import BtnGreen from "./BtnGreen";
import { useMediaQuery } from "react-responsive";


const DesktopNavbar = () => {
  const navItems = data.navbar;
  const singInItem = data.singIn;
  const location = useLocation();
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [facialDropdownOpen, setFacialDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleServiceDropdown = () => setServiceDropdownOpen(prev => !prev);
  const toggleFacialDropdown = () => setFacialDropdownOpen(prev => !prev);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setServiceDropdownOpen(false);
      setFacialDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const isServiceActive = navItems.some(item => item.title === "SERVICE" &&
    item.submenu.some(subItem => location.pathname.startsWith(subItem.url))
  );

  return (
    <div className="navbar-wrapper">
      <div className="navbar-desktop" ref={dropdownRef}>
        <div className="center-logo">
          <h3>LETIH BEAUTY</h3>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="items">
              {item.title === "SERVICE" ? (
                <>
                  <button
                    onClick={toggleServiceDropdown}
                    className={isServiceActive ? "active" : ""}
                  >
                    {item.title}
                  </button>
                  {serviceDropdownOpen && (
                    <div className={`dropdown ${serviceDropdownOpen ? 'show' : ''}`}>
                      {item.submenu.map(subItem => (
                        <div key={subItem.id} className="submenu-item">
                          {subItem.submenu ? (
                            <button onClick={toggleFacialDropdown}>
                              {subItem.title}
                            </button>
                          ) : (
                            <Link to={subItem.url} className={location.pathname === subItem.url ? "active" : ""}>
                              {subItem.title}
                            </Link>
                          )}
                          {subItem.submenu && facialDropdownOpen && (
                            <div className={`submenu ${facialDropdownOpen ? 'show' : ''}`}>
                              {subItem.submenu.map(subSubItem => (
                                <Link key={subSubItem.id} to={subSubItem.url} className="submenu-link">
                                  {subSubItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link className={location.pathname === item.url ? "active" : ""} to={item.url}>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="login-signup-buttons">
          <Link className={location.pathname === singInItem.url ? "active" : ""} to={singInItem.url}>
            {singInItem.title}
          </Link>
          <BtnGreen>Book Now</BtnGreen>
        </div>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
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
          <h3>LETIH BEAUTY</h3>
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <img src="images/hamburger.svg" alt="Menu" />
        </div>
      </nav>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
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

const Navbar = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: 768px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <>
      {isDesktop && <DesktopNavbar />}
      {isMobile && <MobileNavbar />}
    </>
  );
};

export default Navbar;
