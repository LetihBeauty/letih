import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import data from "../data.json";
import BtnGreen from "./BtnGreen";

function DesktopNavbar() {
  const navItems = data.navbar;
  const singInItem = data.singIn;
  const location = useLocation();
  // State to manage the visibility of the service dropdown
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  // State to manage the visibility of the facial dropdown
  const [facialDropdownOpen, setFacialDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle the service dropdown
  const toggleServiceDropdown = () => setServiceDropdownOpen(prev => !prev);
  // Function to toggle the facial dropdown
  const toggleFacialDropdown = () => setFacialDropdownOpen(prev => !prev);

  // Function to close the dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setServiceDropdownOpen(false);
      setFacialDropdownOpen(false);
    }
  };

  // Hook to add and remove the click event outside the dropdown
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Check if the current path is part of the SERVICE submenu
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
            <li key={item.id} className="items"> {/* List item for each navigation link */}
              {item.title === "SERVICE" ? ( // Check if the item is the service dropdown
                <>
                  <button
                    onClick={toggleServiceDropdown}  className={isServiceActive ? "active" : ""}>
                    {item.title}
                  </button>
                  {serviceDropdownOpen && ( // If the dropdown is open
                    <div className={`dropdown ${serviceDropdownOpen ? 'show' : ''}`}>
                      {item.submenu.map(subItem => (  // Map through submenu items
                        <div key={subItem.id} className="submenu-item">
                          {subItem.submenu ? (  // Check if the subitem has a submenu
                            <button onClick={toggleFacialDropdown}>
                              {subItem.title}
                            </button>
                          ) : (
                            <Link
                              to={subItem.url} // If there are no subitems, a link is displayed that navigates to the subItem.url.
                              className={location.pathname === subItem.url }
                            >
                              {subItem.title}
                            </Link>
                          )}
                          {subItem.submenu && facialDropdownOpen && ( // If there's a facial submenu and it's open
                            <div className={`submenu ${facialDropdownOpen ? 'show' : ''}`}>
                              {subItem.submenu.map(subSubItem => (  // Map through sub-subitems
                                <Link
                                  key={subSubItem.id}
                                  to={subSubItem.url}
                                  className="submenu-link"
                                >
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
                  {item.title}  {/* Link to other navigation items  home / aboutus / contact */}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div  className="login-signup-buttons">
          <Link className={location.pathname === singInItem.url ? "active" : ""} to={singInItem.url}>
            {singInItem.title}
          </Link>
          <BtnGreen>Book Now</BtnGreen>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
