import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import "./ServiceNavbar.css";
import data from "../data.json";
import { fetchPageData } from "../services/contentfulService.js";

// Componente para Navbar em Desktop
function DesktopServiceNavbar() {
  const navItems = data.service; // Retrieve service items from data
  const location = useLocation(); // Get the current location for active link highlighting
  // const treatmentId = data.treatmentId; // Retrieve treatment ID if needed
  const [serviceFacialData, setServiceFacialData] = useState(null);

  const getData = async () => {
    try {
      const facialData = await fetchPageData("facialService");
      setServiceFacialData(facialData.data.serviceFacialCollection.items);

      if (serviceFacialData) {
        setServiceFacialData(
          [...serviceFacialData].sort((a, b) => a.order - b.order)
        );
      }
    } catch (error) {
      console.error(`Error fetching data:`, error.response || error.message);
    }
  };
  console.log("serviceFacialData", serviceFacialData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="service-navbar-desktop">
      <div className="service-navbar-container">
        <div className="center-logo">
          <h1>FACIALS</h1>
        </div>
        <ul className="main-nav-items">
          {serviceFacialData &&
            serviceFacialData.map((item) => (
              <li key={item.order} className="items">
                <Link
                  className={location.pathname === item.url ? "active" : ""}
                  to={`/service/facial/${item.slug}`}
                >
                  {item.navbarTitle}
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
