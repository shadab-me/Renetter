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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Function to render the new professional logo
  const renderLogo = (size = 1) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img 
          src="/assets/img/renetter-logo.svg" 
          alt="Renetter Logo" 
          style={{ width: `${40 * size}px`, height: `${40 * size}px` }} 
        />
        <span style={{ 
          fontSize: `${24 * size}px`, 
          fontWeight: '800', 
          letterSpacing: '1px', 
          color: '#fff',
          fontFamily: "'Inter', 'Montserrat', sans-serif"
        }}>
          RENETTER
        </span>
      </div>
    );
  };

  return (
    <>
      <header
      className={`header-v6 ${isSticky ? "sticky" : ""}`}
      style={{
        background: isSticky ? "rgba(5, 5, 5, 0.9)" : "transparent",
        backdropFilter: isSticky ? "blur(20px)" : "none",
        boxShadow: isSticky ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        borderBottom: isSticky ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1200,
      }}
    >
      {/* SEO tagline for semantic relevance */}
      <div style={{position: 'absolute', left: '-9999px', height: 0, width: 0, overflow: 'hidden'}}>
        <h1>RENETTER AGENCY - Web Development, Digital Marketing, SEO, Mobile Apps & AI Solutions in Moradabad, Uttar Pradesh</h1>
      </div>
      <div className="container">
        <div
          className="header-v6-flex"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 0",
            flexWrap: 'nowrap',
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
            aria-label="Main Navigation"
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
              display: 'none', // default hidden, override via media query
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              color: "#ffffff",
              zIndex: 1200,
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
              backgroundColor: "#050505",
              backdropFilter: "blur(20px)",
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
              onClick={() => setMobileMenuOpen(false)}
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
              onClick={() => setMobileMenuOpen(false)}
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
              onClick={() => setMobileMenuOpen(false)}
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
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
      <style>
      {`
      @media (max-width: 900px) {
  .desktop-menu {
    display: none !important;
  }
  .mobile-menu-button {
    display: block !important;
    position: relative;
    z-index: 1200;
  }
}
@media (max-width: 600px) {
  .header-v6-flex {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    flex-wrap: nowrap;
    width: 100%;
  }
}
      `}
      </style>
    </>
  );
};

export default HeaderV6;
