import React from "react";
import Logo from "../tnclogo.png";
import { NavLink } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import "./Navbar.css";
import Categories from "../pages/Categories";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div onClick={() => navigate("/")}>
      <img src={Logo} alt="Logo" className="navbar-logo" />
      </div>
      <nav className="navbar-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/men" className="nav-link">Men</NavLink>
        <NavLink to="/women" className="nav-link">Women</NavLink>
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/beauty" className="nav-link">Beauty</NavLink>
      </nav>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search for products..." className="search-input" />
      </div>

      <div className="navbar-icons">
        <div className="nav-icon"><CgProfile /><p>Profile</p></div>
        <div className="nav-icon"><FiHeart /><p>Wishlist</p></div>
        <div className="nav-icon"><FiShoppingBag /><p>Bag</p></div>
      </div>
    </div>
  );
};

export default Navbar;
