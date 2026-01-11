import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import { footerLinks } from "../components/constants/index.js";
import data from "../data.json";

const Footer = () => {
  const navItems = data.navbar;
  const location = useLocation();
  const developedBy = data.footer.developed;
  const copyright = data.footer.title;
  const phone = data.footer.phone;
  const instagram = data.footer.instagram;
  const year = new Date().getFullYear();

  return (
    <footer>
      <img id="logo" src="/images/Logo.svg" alt="" />
      <div className="footer-menu">
        <ul className="footer-menu-list">
          {navItems.slice(0, 6).map((item) => (
            <li key={item.id} className="items">
              <Link
                className={location.pathname === item.url ? "active" : ""}
                to={item.url}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <img id="line-footer" src="/images/Linefooter.svg" alt="" />
      </div>
      <div className="footer-contact">
        <div className="email-phone">
          <img src="/images/icon-email.svg" alt="" />
          <a href="mailto:letihbeauty@gmail.com">letihbeauty@gmail.com</a>
        </div>
        <div className="email-phone">
          <img src="/images/icon-phone.svg" alt="" />
          <p>{phone}</p>
        </div>
        <div className="email-phone">
          <img src="/images/icon-instagram.svg" alt="" />
          <a
            href="https://www.instagram.com/letihbeauty/"
            target="_blank"
            rel="noreferrer"
          >
            <span>letihbeauty</span>
          </a>
        </div>
      </div>

      <p id="copyright">
        COPYRIGHT © <span>{year}</span> {copyright}
        <br></br>
        <span>{developedBy.title}</span>{" "}
        <a href={developedBy.karenUrl} target="_blank" rel="noreferrer">
          {developedBy.karen}
        </a>{" "}
        &
        <a href={developedBy.victorUrl} target="_blank" rel="noreferrer">
          {developedBy.victor}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
