import React from "react";
import navbar from "../styles/navbar.css";
const Navbar = ({ onNavbarClick, activeComponent, forceUpdate }) => {
  const handleLogout = () => {
    localStorage.setItem("currentUser", JSON.stringify(""));
    forceUpdate();
  };

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
            activeComponent === "EvenOdd" ? "active" : ""
          }`}
          onClick={() => onNavbarClick("EvenOdd")}
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

        <span className="navbar-item " onClick={handleLogout}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default Navbar;
