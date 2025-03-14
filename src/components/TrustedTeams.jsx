import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/trusted-teams.css";

const TrustedTeams = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const companyLogos = [
    {
      name: "Leverage Edu",
      category: "Education",
      website: "https://leverageedu.com/",
      logoColor: "#3367D6", // Blue
    },
    {
      name: "Alt Campus",
      category: "Education",
      website: "https://altcampus.io/",
      logoColor: "#FF5733", // Orange
    },
    {
      name: "LPU",
      category: "Education",
      website: "https://www.lpu.in/",
      logoColor: "#4CAF50", // Green
    },
    {
      name: "Scaler",
      category: "Education",
      website: "https://www.scaler.com/",
      logoColor: "#9C27B0", // Purple
    },
    {
      name: "Byjus",
      category: "Education",
      website: "https://byjus.com/",
      logoColor: "#2196F3", // Light Blue
    },
    {
      name: "Vedantu",
      category: "Education",
      website: "https://www.vedantu.com/",
      logoColor: "#E91E63", // Pink
    },
    {
      name: "Paytm",
      category: "Finance",
      website: "https://paytm.com/",
      logoColor: "#00BCD4", // Cyan
    },
    {
      name: "PhonePe",
      category: "Finance",
      website: "https://www.phonepe.com/",
      logoColor: "#673AB7", // Deep Purple
    },
  ];

  // Function to generate SVG logo based on company name and color
  const generateLogo = (name, color) => {
    // Extract initials from company name
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    // Generate a random pattern ID to ensure uniqueness
    const patternId = `pattern-${Math.random().toString(36).substring(2, 10)}`;

    return (
      <svg
        width="120"
        height="60"
        viewBox="0 0 160 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        {/* Define a pattern for the background */}
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="rotate(45)"
          >
            <rect width="20" height="20" fill={color} fillOpacity="0.05" />
            <circle cx="10" cy="10" r="2" fill={color} fillOpacity="0.1" />
          </pattern>
        </defs>

        {/* Background with pattern */}
        <rect width="160" height="100" rx="10" fill={`url(#${patternId})`} />

        {/* Logo outline */}
        <rect x="30" y="15" width="100" height="70" rx="8" fill="white" />

        {/* Colored rectangle behind text */}
        <rect
          x="35"
          y="20"
          width="90"
          height="60"
          rx="5"
          fill={color}
          fillOpacity="0.1"
        />

        {/* Circle with Initials */}
        <circle cx="80" cy="45" r="25" fill={color} />
        <text
          x="80"
          y="45"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="white"
          letterSpacing="1"
        >
          {initials}
        </text>

        {/* Company Name */}
        <text
          x="80"
          y="85"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill={color}
        >
          {name}
        </text>

        {/* Decorative elements */}
        <circle cx="35" cy="20" r="2" fill={color} />
        <circle cx="125" cy="20" r="2" fill={color} />
        <circle cx="35" cy="80" r="2" fill={color} />
        <circle cx="125" cy="80" r="2" fill={color} />
      </svg>
    );
  };

  return (
    <div
      className="trusted-teams-area"
      style={{ backgroundColor: "#ffffff", padding: "60px 0" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading text-center mb-5">
              <h2
                className="title"
                style={{
                  fontSize: "calc(1.475rem + 2.7vw)",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#086AD8",
                }}
              >
                Trusted by{" "}
                <span style={{ color: "#232323" }}>amazing teams</span>
              </h2>
              <div
                className="divider"
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(to right, #086AD8, #4F46E5)",
                  margin: "0 auto",
                  borderRadius: "2px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="trusted-teams-wrapper">
              <Slider {...settings} className="trusted-teams-carousel">
                {companyLogos.map((company, index) => (
                  <div key={index} className="single-partner">
                    <div className="partner-inner">
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "block",
                          transition: "all 0.3s ease",
                          transform: "translateY(0)",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-5px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                        }}
                      >
                        {generateLogo(company.name, company.logoColor)}
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedTeams;
