import React from "react";
import Logo from "../tnclogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import ProfileDropDown from "../pages/ProfileDropDown";

import "./Navbar.css";
import Categories from "../pages/Categories";


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
        <NavLink to="/Homedecoration" className="nav-link">Home</NavLink>
        <NavLink to="/beauty" className="nav-link">Beauty</NavLink>
      </nav>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search for products..." className="search-input" />
      </div>

      <nav className="navbar-icons">
        <ProfileDropDown />
        <NavLink to="/wishlist" className="nav-icon"><FiHeart /><p>Wishlist</p></NavLink>
        <NavLink className="nav-icon"><FiShoppingBag /><p>Bag</p></NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
