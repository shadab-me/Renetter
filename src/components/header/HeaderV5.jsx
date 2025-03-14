import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import MainMenu from "./MainMenu";

const HeaderV5 = ({ logoColor = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Add event listener for the custom toggle event
    const handleToggleMenuEvent = () => {
      toggleMenu();
    };
    document.addEventListener("toggle-mobile-menu", handleToggleMenuEvent);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("toggle-mobile-menu", handleToggleMenuEvent);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header-fixed ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/#">
                <img
                  src={logoColor ? "/img/logo/logo.png" : "/img/logo/logo.png"}
                  alt="Logo"
                  style={{ maxHeight: "40px" }}
                />
              </Link>
              <div
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 9999,
                  display: "block",
                  width: "50px",
                  height: "45px",
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                    <button 
                      type="button" 
                      style="
                        display: flex; 
                        position: absolute; 
                        right: 0; 
                        background-color: #333333; 
                        border: 2px solid #ffffff; 
                        padding: 10px; 
                        width: 50px; 
                        height: 45px; 
                        border-radius: 4px; 
                        align-items: center; 
                        justify-content: center; 
                        z-index: 9999;
                        cursor: pointer;"
                      onclick="(function(){
                        var event = new Event('toggle-mobile-menu');
                        document.dispatchEvent(event);
                      })();"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: block;">
                        <path d="M3 6H21" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M3 12H21" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M3 18H21" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"></path>
                      </svg>
                    </button>
                  `,
                }}
              />

              <MainMenu isOpen={isMenuOpen} closeMenu={closeMenu} />

              <div className="nav-button">
                <Link
                  to="/contact-us#"
                  className="btn btn-md btn-gradient animation"
                >
                  Let's Talk
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderV5;
