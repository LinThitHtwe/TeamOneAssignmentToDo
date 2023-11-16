import React from "react";
import navbar from "../styles/navbar.css";
const Navbar = ({ onNavbarClick, activeComponent }) => {
  return (
    <div className="navbar">
      <div className="navbar-items-container">
        <span
          className={`navbar-item ${
            activeComponent === "Factorial" ? "active" : ""
          }`}
          onClick={() => onNavbarClick("Factorial")}
        >
          Factorial
        </span>
        <span
          className={`navbar-item ${
            activeComponent === "Number" ? "active" : ""
          }`}
          onClick={() => onNavbarClick("Number")}
        >
          Number
        </span>
        <span
          className={`navbar-item ${
            activeComponent === "ToDo" ? "active" : ""
          }`}
          onClick={() => onNavbarClick("ToDo")}
        >
          ToDo
        </span>
      </div>
    </div>
  );
};

export default Navbar;
