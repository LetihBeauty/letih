/**
 * Navbar Component
 *
 * This component renders a responsive navigation bar for the "LETIH BEAUTY" website.
 * It provides links to various sections, including a dropdown menu for services.
 *
 * Key Features:
 * - Responsive design that adapts to desktop and mobile views.
 * - Dropdown menu for service items that allows nested submenus.
 * - Active state management for highlighting the current page.
 *
 * Dependencies:
 * - React
 * - React Router DOM for navigation
 * - React Responsive for media queries
 *
 * Usage:
 * Simply import and include the <Navbar /> component in your application.
 */

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import data from "../data.json";
import BtnGreen from "./BtnGreen";
import { useMediaQuery } from "react-responsive";

// DesktopNavbar Component
/**
 * Renders the navigation bar for desktop users.
 *
 * Functionalities:
 * - Displays main navigation items.
 * - Manages dropdown states for services.
 * - Highlights active service link based on the current URL.
 */
const DesktopNavbar = () => {
  const navItems = data.navbar;
  const myAccount = data.myAccount;
  const location = useLocation(); // Get the current URL location
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false); // State for opening/closing service dropdown
  const [facialDropdownOpen, setFacialDropdownOpen] = useState(false); // State for opening/closing facial dropdown
  const dropdownRef = useRef(null); // Reference to the dropdown element for event handling

  // Toggle the visibility of the service dropdown
  const toggleServiceDropdown = () => {
    setServiceDropdownOpen((prev) => !prev);
  };

  // Toggle the visibility of the facial dropdown
  const toggleFacialDropdown = () => setFacialDropdownOpen((prev) => !prev);

  // Close dropdowns if the user clicks outside of them
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setServiceDropdownOpen(false); // Close service dropdown
      setFacialDropdownOpen(false); // Close facial dropdown
    }
  };

  // Use effect to handle outside clicks for closing dropdowns
  useEffect(() => {
    document.addEventListener("click", handleClickOutside); // Add event listener for clicks
    return () => {
      document.removeEventListener("click", handleClickOutside); // Clean up event listener on unmount
    };
  }, []);

  // Close dropdowns when a submenu item is clicked
  const handleSubMenuClick = () => {
    setServiceDropdownOpen(false); // Close service dropdown
    setFacialDropdownOpen(false); // Close facial dropdown
  };

  // Determine if the "SERVICE" link should be highlighted as active
  /**
   * The `isServiceActive` variable checks if the user is on a service page.
   * It does so by verifying if the current path matches any submenu URLs
   * or if it starts with "/service".
   */
  const isServiceActive = navItems.some(
    (item) =>
      item.title === "SERVICE" &&
      (item.submenu.some((subItem) =>
        location.pathname.startsWith(subItem.url)
      ) ||
        location.pathname.startsWith("/service")) // Active if on any service page
  );

  return (
    <div className="navbar-wrapper">
      <div className="navbar-desktop" ref={dropdownRef}>
        {" "}
        {/* Main navbar container */}
        <div className="center-logo">
          <h3>LETIH BEAUTY</h3>
        </div>
        <ul>
          {navItems.map(
            (
              item // Map through navigation items
            ) => (
              <li key={item.id} className="items">
                {item.title === "SERVICE" ? ( // Check if item is "SERVICE"
                  <>
                    <Link
                      to="#"
                      onClick={
                        toggleServiceDropdown
                      } /* open or close dorpdown */
                      className={isServiceActive ? "active" : ""} // Highlight if active
                    >
                      {item.title}
                    </Link>
                    {serviceDropdownOpen && ( // Show dropdown if open
                      <div
                        className={`dropdown ${
                          serviceDropdownOpen ? "show" : ""
                        }`}
                      >
                        {item.submenu.map(
                          (
                            subItem // Map through submenu items
                          ) => (
                            <div key={subItem.id} className="submenu-item">
                              {subItem.submenu ? ( // Check if there is a nested submenu
                                <button onClick={toggleFacialDropdown}>
                                  {subItem.title}
                                </button>
                              ) : (
                                <Link // If there is no submenu, create a link to the subItem's URL
                                  to={subItem.url}
                                  className={
                                    location.pathname === subItem.url
                                      ? "active"
                                      : ""
                                  }
                                  onClick={handleSubMenuClick} // Close dropdown on click
                                >
                                  {subItem.title}
                                </Link>
                              )}
                              {subItem.submenu &&
                                facialDropdownOpen && ( // Check if there is a submenu and if it is open
                                  <div
                                    className={`submenu ${
                                      facialDropdownOpen ? "show" : ""
                                    }`}
                                  >
                                    {subItem.submenu.map(
                                      (
                                        subSubItem // Map through nested submenu items
                                      ) => (
                                        <Link
                                          key={subSubItem.id}
                                          to={subSubItem.url}
                                          className="submenu-link"
                                          onClick={handleSubMenuClick} // Close dropdown on click
                                        >
                                          {subSubItem.title}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    className={location.pathname === item.url ? "active" : ""}
                    to={item.url}
                  >
                    {item.title} {/* Display other navigation titles */}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
        <div className="login-signup-buttons">
          {" "}
          {/* Buttons for login and booking */}
          <Link
            className={location.pathname === myAccount.url ? "active" : ""}
            to={myAccount.url}
          >
            {myAccount.title} {/* Sign-in button */}
          </Link>
          <BtnGreen>Book Now</BtnGreen> {/* Button to book services */}
        </div>
      </div>
    </div>
  );
};

// MobileNavbar Component
/**
 * Renders a simplified navigation bar for mobile users.
 *
 * Functionalities:
 * - Displays a hamburger icon to toggle the menu.
 * - Closes the menu upon clicking any navigation link.
 */
const MobileNavbar = () => {
  const navItems = data.navbar; // Get navigation items
  const location = useLocation(); // Get current URL
  const [isOpen, setIsOpen] = useState(false); // State for opening/closing the mobile menu

  // Toggle the mobile menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar-mobile">
        <div className="logo">
          <h3>LETIH BEAUTY</h3> {/* Mobile logo */}
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <img src="images/hamburger.svg" alt="Menu" />{" "}
          {/* Hamburger icon for menu */}
        </div>
      </nav>
      {isOpen && ( // Show mobile menu if open
        <div className="modal">
          <div className="modal-content">
            <ul>
              {navItems.map(
                (
                  item // Map through navigation items
                ) => (
                  <li key={item.id} className="items">
                    <Link
                      className={location.pathname === item.url ? "active" : ""} // Highlight if active
                      to={item.url}
                      onClick={closeMenu} // Close menu on click
                    >
                      {item.title} {/* Display mobile navigation titles */}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

// Main Navbar Component
/**
 * The main component that decides which navbar to render based on the screen size.
 */

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
