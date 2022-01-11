import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="header
  "
    >
      <NavLink to="/" className="title">
        INTUITIVE QUIZ HUB
      </NavLink>
      <hr />
    </div>
  );
};

export default Header;
