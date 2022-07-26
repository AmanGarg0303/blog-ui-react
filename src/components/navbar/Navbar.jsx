import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;

  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-facebook-square"></i>
        <i className="navIcon fa-brands fa-instagram"></i>
        <i className="navIcon fa-brands fa-twitter-square"></i>
        <i className="navIcon fa-brands fa-youtube"></i>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/AmanGarg0303"
        >
          <i className="navIcon fa-brands fa-github"></i>
        </a>
      </div>

      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>

          <li className="navListItem">ABOUT</li>

          <li className="navListItem">CONTACT</li>

          <li className="navListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>

          <li className="navListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="navRight">
        {user ? (
          <Link to="/settings">
            <img
              className="navImg"
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000"
              alt=""
            />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Navbar;
