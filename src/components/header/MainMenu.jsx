import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const MainMenu = ({ isOpen, closeMenu }) => {
  return (
    <>
      <div
        className={`collapse navbar-collapse collapse-mobile ${
          isOpen ? "show" : ""
        }`}
        id="navbar-menu"
      >
        <img
          src="/img/logo/logo.png"
          alt="Logo"
          style={{ maxHeight: "40px" }}
          className="mobile-logo"
        />
        <button
          type="button"
          className="navbar-toggle close-btn"
          onClick={closeMenu}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "45px",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "10px",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path
              d="M2 2L16 16"
              stroke="#333333"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M2 16L16 2"
              stroke="#333333"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <ul className="nav navbar-nav navbar-center">
          <li>
            <Link to="/#">Home</Link>
          </li>
          <li>
            <Link to="/services#">Services</Link>
          </li>
          <li>
            <Link to="/blog#">Blog</Link>
          </li>
          <li className="mobile-only">
            <Link to="/contact-us#" className="contact-highlight">
              Let's Talk
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainMenu;
