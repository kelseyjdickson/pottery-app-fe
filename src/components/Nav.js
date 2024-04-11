import React from "react";
import logo from "../icons/logo.png";
import "../App.css";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <img
          src={logo}
          //   style={{ height: "200px", width: "200px", borderRadius: "20px" }}
          alt="coconut ceramics logo"
        />

        <ul className="nav-list">
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
