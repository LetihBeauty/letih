import React, {  useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import data from "../data.json";

function DesktopNavbar() {
  const navItems = data.navbar;
  const location = useLocation();

  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [facialDropdownOpen, setFacialDropdownOpen] = useState(false);

  const toggleServiceDropdown = () => setServiceDropdownOpen(!serviceDropdownOpen);
  const toggleFacialDropdown = () => setFacialDropdownOpen(!facialDropdownOpen);

  return (
    <div className="navbar-desktop">
      <ul>
        {navItems.slice(0, 3).map((item) => (
          <li key={item.id} className="items">
            {item.title === "SERVICE" ? (
              <>
                <button onClick={toggleServiceDropdown}>
                  {item.title}
                </button>
                {serviceDropdownOpen && (
                  <div className="dropdown">
                    {item.submenu.map(subItem => (
                      <div key={subItem.id}>
                        <button onClick={subItem.submenu ? toggleFacialDropdown : null}>
                          {subItem.title}
                        </button>
                        {subItem.submenu && facialDropdownOpen && (
                          <div className="submenu">
                            {subItem.submenu.map(subSubItem => (
                              <Link key={subSubItem.id} to={subSubItem.url}>
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
              <Link
                className={location.pathname === item.url ? "active" : ""}
                to={item.url}
              >
                {item.title}
              </Link>
            )}
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

const Navbar = () => {
  const desktopView = data.desktop;
  const mobileView = data.mobile;

  const isDesktop = useMediaQuery({ query: `(min-width: ${desktopView}px)` });
  const isMobile = useMediaQuery({ query: `(max-width: ${mobileView}px)` });

  return (
    <>
      {isDesktop && <DesktopNavbar />}
      {isMobile && <MobileNavbar />}
    </>
  );
};

export default Navbar;
