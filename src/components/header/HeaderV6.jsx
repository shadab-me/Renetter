import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderV6 = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to generate a professional SVG logo
  const renderLogo = (size = 1) => {
    // Generate a random pattern ID to ensure uniqueness
    const patternId = `header-pattern-${Math.random()
      .toString(36)
      .substring(2, 10)}`;

    const gradientId = `header-gradient-${Math.random()
      .toString(36)
      .substring(2, 10)}`;

    const glowId = `header-glow-${Math.random().toString(36).substring(2, 10)}`;

    return (
      <svg
        width={160 * size}
        height={40 * size}
        viewBox="0 0 160 40"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        {/* Define patterns and effects */}
        <defs>
          {/* Main gradient for circle */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0062FF" />
            <stop offset="100%" stopColor="#6C47FF" />
          </linearGradient>

          {/* Background pattern */}
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
            patternTransform="rotate(45)"
          >
            <rect width="10" height="10" fill="#0062FF" fillOpacity="0.03" />
            <circle cx="5" cy="5" r="1" fill="#6C47FF" fillOpacity="0.1" />
          </pattern>

          {/* Glow filter */}
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#0062FF" floodOpacity="0.3" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shadow filter */}
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Subtle background */}
        <rect
          x="0"
          y="0"
          width="160"
          height="40"
          rx="8"
          fill={`url(#${patternId})`}
          fillOpacity="0.2"
        />

        {/* Logo Mark with enhanced "R" */}
        <g>
          {/* Outer glow ring */}
          <circle
            cx="20"
            cy="20"
            r="17"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="0.5"
            strokeOpacity="0.6"
            filter={`url(#${glowId})`}
          />

          {/* Main circle */}
          <circle
            cx="20"
            cy="20"
            r="15"
            fill={`url(#${gradientId})`}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            filter="url(#shadow)"
          />

          {/* "R" letter with better visibility */}
          <text
            x="20"
            y="20"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="24"
            fontFamily="'Montserrat', 'Poppins', sans-serif"
            fontWeight="900"
            fill="white"
            letterSpacing="0"
            style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.3)" }}
          >
            R
          </text>
        </g>

        {/* Company Name with modern styling - ensuring full "RENETTER" is visible */}
        <text
          x="45"
          y="22"
          dominantBaseline="middle"
          textAnchor="start"
          fontSize="18"
          fontFamily="'Montserrat', 'Poppins', sans-serif"
          fontWeight="700"
          fill="white"
          letterSpacing="1"
          filter="url(#shadow)"
        >
          RENETTER
        </text>
      </svg>
    );
  };

  return (
    <header
      className={`header-area ${isSticky ? "sticky" : ""}`}
      style={{
        position: isSticky ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#0F1A2A",
        boxShadow: isSticky ? "0 2px 10px rgba(0,0,0,0.2)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 0",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            {renderLogo()}
          </Link>

          {/* Desktop Menu */}
          <nav
            className="desktop-menu"
            style={{
              display: isMobileMenuOpen ? "none" : "flex",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Link
              to="/clients"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#086AD8";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#ffffff";
              }}
            >
              Clients
            </Link>
            <Link
              to="/services"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#086AD8";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#ffffff";
              }}
            >
              Services
            </Link>
            <Link
              to="/blog"
              style={{
                color: "#086AD8",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "color 0.3s ease",
              }}
            >
              Blog
            </Link>
            <Link
              to="/contact-us"
              className="contact-btn"
              style={{
                backgroundColor: "#086AD8",
                color: "#ffffff",
                padding: "10px 25px",
                borderRadius: "25px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0756b3";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#086AD8";
              }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              color: "#ffffff",
            }}
          >
            {isMobileMenuOpen ? (
              <span style={{ fontSize: "24px" }}>×</span>
            ) : (
              <span style={{ fontSize: "24px" }}>☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#0F1A2A",
              padding: "40px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Link
              to="/clients"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "24px",
                fontWeight: "500",
                padding: "10px 0",
              }}
            >
              Clients
            </Link>
            <Link
              to="/services"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "24px",
                fontWeight: "500",
                padding: "10px 0",
              }}
            >
              Services
            </Link>
            <Link
              to="/blog"
              style={{
                color: "#086AD8",
                textDecoration: "none",
                fontSize: "24px",
                fontWeight: "500",
                padding: "10px 0",
              }}
            >
              Blog
            </Link>
            <div style={{ marginTop: "20px" }}>
              <Link
                to="/contact-us"
                style={{
                  backgroundColor: "#086AD8",
                  color: "#ffffff",
                  padding: "15px 30px",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                  display: "inline-block",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderV6;
