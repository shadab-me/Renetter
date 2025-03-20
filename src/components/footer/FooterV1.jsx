import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import SocialShare from "../others/SocialShare";
import { toast } from "react-toastify";

const FooterV1 = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks for subscribing to our newsletter!");
  };

  // Function to generate a professional SVG logo
  const renderLogo = (size = 1.2) => {
    // Generate a random pattern ID to ensure uniqueness
    const patternId = `footer-pattern-${Math.random()
      .toString(36)
      .substring(2, 10)}`;

    const gradientId = `footer-gradient-${Math.random()
      .toString(36)
      .substring(2, 10)}`;

    const glowId = `footer-glow-${Math.random().toString(36).substring(2, 10)}`;

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
          <filter
            id="footerShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
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
            filter="url(#footerShadow)"
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
          filter="url(#footerShadow)"
        >
          RENETTER
        </text>
      </svg>
    );
  };

  return (
    <>
      <footer
        className="bg-dark text-light"
        style={{ backgroundImage: "url(/img/shape/5.png)" }}
      >
        <div className="container">
          <div className="f-items default-padding-bottom pt-70 pt-xs-0">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="footer-animated-shape">
                  <img src="/img/shape/6.png" alt="Shape" />
                </div>
                <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                  <div className="text-logo mb-4">{renderLogo()}</div>
                  <p>
                    Fusing creativity with cutting-edge AI, web, and mobile
                    solutions to transform your digital presence.
                  </p>
                  <div className="footer-social mt-30">
                    <ul>
                      <SocialShare />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="f-item link">
                  <h4 className="widget-title">SERVICES</h4>
                  <ul>
                    <li>
                      <Link to="/services#">AI Solutions</Link>
                    </li>
                    <li>
                      <Link to="/services#">Web Development</Link>
                    </li>
                    <li>
                      <Link to="/services#">Mobile App Development</Link>
                    </li>
                    <li>
                      <Link to="/services#">Digital Strategy</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item link">
                  <h4 className="widget-title">COMPANY</h4>
                  <ul>
                    <li>
                      <Link to="/blog#">Blog</Link>
                    </li>
                    <li>
                      <Link to="/#">Case Studies</Link>
                    </li>
                    <li>
                      <Link to="/#">Careers</Link>
                    </li>
                    <li>
                      <Link to="/#">About Us</Link>
                    </li>
                    <li>
                      <Link to="/#">How We Work</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item link">
                  <h5>Contact Us</h5>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@renetter.com">info@renetter.com</a>
                  </p>
                  <p>
                    Phone: <a href="tel:+919411078560">+91 9411078560</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom bg-dark text-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright &copy; {new Date().getFullYear()} Renetter Agency.
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
