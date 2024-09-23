import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import data from "../data.json";
import BtnGreen from "./BtnGreen";

function DesktopNavbar() {
  const navItems = data.navbar;
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

  return (
    <div className="navbar-desktop" ref={dropdownRef}>
      <div className="center-logo">
        <h3>LETIH BEAUTY</h3>
      </div>
      <ul>
        {navItems.slice(0, 4).map((item) => (
          <li key={item.id} className="items">
            {item.title === "SERVICE" ? (
              <>
                <button onClick={toggleServiceDropdown} className="service-toggle">
                  {item.title}
                </button>
                {serviceDropdownOpen && (
                  <div className={`dropdown ${serviceDropdownOpen ? 'show' : ''}`}>
                    {item.submenu.map(subItem => (
                      <div key={subItem.id} className="submenu-item">
                        <button onClick={subItem.submenu ? toggleFacialDropdown : null}>
                          {subItem.title}
                        </button>
                        {subItem.submenu && facialDropdownOpen && (
                          <div className={`submenu ${facialDropdownOpen ? 'show' : ''}`}>
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
              <Link className={location.pathname === item.url ? "active" : ""} to={item.url}>
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <BtnGreen>Book Now</BtnGreen>
    </div>
  );
}

export default DesktopNavbar;
