import React from "react";
import logo from "../../assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navigation">
      <span className="navigation__logo">
        <img src={logo} alt="Logo" /> Kolibrium
      </span>
      <span></span>
    </nav>
  );
};

export default NavBar;
