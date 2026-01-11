import React from "react";
// import "./Layout.css";
import data from "../data.json";
import { Link, useLocation } from "react-router-dom";
import { footerLinks } from "../components/constants/index.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

// import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const navItems = data.navbar;
  const location = useLocation();
  const developedBy = data.footer.developed;
  const copyright = data.footer.title;
  const phone = data.footer.phone;
  const year = new Date().getFullYear();

  return (
    <div>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
