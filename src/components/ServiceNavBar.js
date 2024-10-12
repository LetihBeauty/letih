/**
 * ServiceMobileNavbar Component
 *
 * This component is responsible for rendering a responsive navigation bar
 * for the "FACIALS" section of the application. It switches between
 * a desktop and a mobile version based on the screen size.
 *
 * The desktop version displays a horizontal navigation menu, while the
 * mobile version presents a more compact layout suitable for smaller
 * screens. Each navigation item is linked to corresponding URLs
 * specified in the data.json file.
 *
 * Features:
 * - Responsive design using media queries
 * - Active link highlighting based on the current route
 * - Supports nested navigation (future implementations)
 */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import "./ServiceNavbar.css";
import data from "../data.json";

// Componente para Navbar em Desktop
function DesktopServiceNavbar() {
  const navItems = data.service; // Retrieve service items from data
  const location = useLocation(); // Get the current location for active link highlighting

  return (
    <div className="service-navbar-desktop">
      <div className="service-navbar-container">
        <div className="center-logo">
          <h1>FACIALS</h1>
        </div>
        <ul className="main-nav-items">
          {navItems.map((item) => (
            <li key={item.id} className="items">
              <Link
                className={location.pathname === item.url ? "active" : ""} // Highlight active link
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

// Component for the Navbar in Mobile view
const MobileServiceNavbar = () => {
  const navItems = data.service;
  const location = useLocation();

  return (
    <>
    <div className="service-navbar-mobile">
      <div className="service-navbar-container">
        <nav className="mobile-center-logo">
            <h1>FACIALS</h1>
        </nav>
        <ul className="mobile-main-nav-items">
          {navItems.map((item) => (
            <li key={item.id} className="mobile-items">
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
    </>
  );
};

// Main component that toggles between Desktop and Mobile versions
const ServiceMobileNavbar = () => {
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

export default ServiceMobileNavbar;
