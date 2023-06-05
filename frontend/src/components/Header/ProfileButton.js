import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { signout } from "../../store/auth/auth.actions";
import { FaUserCircle } from "react-icons/fa";
import "./ProfileButton.css";
import { useNavigate, Link } from "react-router-dom";
function ProfileButton({ user }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(signout());
  };

  return (
    <div ref={dropdownRef}>
      <button style={{ backgroundColor: "white" }} onClick={toggleDropdown}>
        <FaUserCircle style={{ color: "gray" }} size={30} />
      </button>
      {isOpen && (
        <ul className="profile-dropdown">
          <li onClick={logout}>Log Out</li>
          <li>
            <Link to={"/requested_tour"}>Tours</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
