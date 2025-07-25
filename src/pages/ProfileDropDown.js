import React, { useRef, useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import "./ProfileDropDown.css";

const ProfileDropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-container" ref={dropdownRef}>
      <button className="profile-icon-btn" onClick={toggleDropdown}>
        <CgProfile size={24} />
      </button>

      {open && (
        <div className="dropdown-menu">
            <p>To Access account and manage orders</p>
            <button onClick={() => navigate("/login")}>Login / SignUp</button>
          <ul>
            <li onClick={() => navigate("/orders")}>Orders</li>
            <li onClick={() => navigate("/giftcards")}>Gift Cards</li>
            <li onClick={() => navigate("/contact")}>Contact Us</li>
            <li onClick={() => navigate("/coupons")}>Coupons</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
