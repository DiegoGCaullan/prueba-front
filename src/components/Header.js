import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

const Header = () => {
  const { data } = useUserContext();

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__nav-link">
          Home
        </Link>
        <Link to="/register" className="header__nav-link">
          Register
        </Link>
        <Link to="/login" className="header__nav-link">
          Login
        </Link>
        <Link to="/abm" className="header__nav-link">
          ABM
        </Link>
        {data.user ? (
          <Link to="/admin" className="header__nav-link">
            Admin
          </Link>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
