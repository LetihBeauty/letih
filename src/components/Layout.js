import React from "react";
// import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Layout;
