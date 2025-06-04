import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import data from "../data.json";
import Btn from "../components/Btn";
import { fetchPageData } from "../services/contentfulService.js";

import { useMediaQuery } from "react-responsive";

const DesktopNavbar = () => {
  const navItems = data.navbar;

  const location = useLocation(); // Get the current URL location
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false); // State for opening/closing service dropdown
  const [facialDropdownOpen, setFacialDropdownOpen] = useState(false); // State for opening/closing facial dropdown
  const dropdownRef = useRef(null); // Reference to the dropdown element for event handling

  // fetch data from Facial Service
  const [serviceFacialData, setServiceFacialData] = useState(null);
  const [servicePageData, setServicePageData] = useState(null);

  const getData = async () => {
    try {
      const facialData = await fetchPageData("facialService");
      setServiceFacialData(facialData.data.serviceFacialCollection.items);

      const serviceData = await fetchPageData("servicePage");
      console.log("serviceData", serviceData);
      let updatedServiceDataItems = [
        { title: "FACIALS", navbarTitle: "FACIALS" },
        ...serviceData.data.servicePageCollection.items,
      ];
      console.log("updatedServiceDataItems", updatedServiceDataItems);

      setServicePageData(updatedServiceDataItems);
    } catch (error) {
      console.error(`Error fetching data:`, error.response || error.message);
    }
  };

  console.log("serviceFacialPageData", servicePageData);

  useEffect(() => {
    getData();
  }, []);

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
                        {servicePageData &&
                          servicePageData.map(
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
                                    {subItem.navbarTitle}
                                  </Link>
                                )}

                                {subItem.title === "FACIALS" &&
                                  serviceFacialData &&
                                  facialDropdownOpen && ( // Check if there is a submenu and if it is open
                                    <div
                                      className={`submenu ${
                                        facialDropdownOpen ? "show" : ""
                                      }`}
                                    >
                                      {serviceFacialData.map(
                                        (
                                          subSubItem // Map through nested submenu items
                                        ) => (
                                          <Link
                                            key={subSubItem.id}
                                            to={`/service/facial/${subSubItem.slug}`}
                                            className="submenu-link"
                                            onClick={handleSubMenuClick} // Close dropdown on click
                                          >
                                            {subSubItem.navbarTitle}
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
        <Btn
          href="https://linktr.ee/letihbeauty?fbclid=PAZXh0bgNhZW0CMTEAAaZFH8U8o3AKmjeYzclFsrxCiOww4n79CtIQURzxz6uY3hKgtG0KfPOEJ_8_aem_rRU86kn6hJ7eEReWGb7xKg"
          customButtonClass="green"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </Btn>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const navItems = data.navbar; // Obter itens do menu de navegação
  const location = useLocation(); // Obter URL atual
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/fechar o menu móvel

  // Alternar o menu aberto/fechado
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fechar o menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevenir fechamento ao clicar no conteúdo do modal
  const preventClose = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <nav className="navbar-mobile">
        <div className="logo">
          <h3>LETIH BEAUTY</h3> {/* Logo móvel */}
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <img src="/images/hamburger.svg" alt="Menu" /> {/* Ícone do menu */}
        </div>
      </nav>
      {isOpen && ( // Mostrar o menu móvel se estiver aberto
        <div className="modal" onClick={closeMenu}>
          <div className="modal-content" onClick={preventClose}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id} className="items">
                  <Link
                    className={location.pathname === item.url ? "active" : ""} // Destacar se ativo
                    to={item.url}
                    onClick={closeMenu} // Fechar menu ao clicar
                  >
                    {item.title} {/* Exibir títulos de navegação móvel */}
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
  const isDesktop = useMediaQuery({ query: `(min-width: 993px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` });

  return (
    <>
      {isDesktop && !isMobile && <DesktopNavbar />}
      {isMobile && <MobileNavbar />}
    </>
  );
};

export default Navbar;
