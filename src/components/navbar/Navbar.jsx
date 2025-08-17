import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/">
        <img src="/name.svg" alt="Logo" />
      </Link>
      <ul className="navbar-ul">
        <Link to="/">
          <li className={location.pathname === "/" ? "active" : ""}>Home</li>
        </Link>
        <Link to="/about">
          <li className={location.pathname === "/about" ? "active" : ""}>About</li>
        </Link>
        <Link to="/contact">
          <li className={location.pathname === "/contact" ? "active" : ""}>Contact</li>
        </Link>
        <Link to="/cart">
          <li className={location.pathname === "/cart" ? "active" : ""}>
            <i className="bi bi-cart3"></i>
            <span className="card-count"> ({cart.length})</span>
          </li>
        </Link>
        <Link to="/orders">
          <li className={location.pathname === "/orders" ? "active" : ""}>Orders</li>
        </Link>
        <button className="nav-btn">Hi, Hashir</button>
      </ul>
    </div>
  );
};

export default Navbar;
