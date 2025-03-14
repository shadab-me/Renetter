import React from "react";

const SingleTestimonialV1 = ({ testimonial }) => {
  const { text, name, designation, company, logoColor } = testimonial;

  // Function to generate SVG logo based on company name and color
  const generateLogo = (name, color) => {
    if (!name || !color) return null;

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
        width="80"
        height="50"
        viewBox="0 0 160 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "100%", height: "auto", marginRight: "15px" }}
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
    <>
      <div className="swiper-slide">
        <div className="testimonial-style-two">
          <div className="item">
            <div className="content">
              <p>{text}</p>
            </div>
            <div className="provider">
              <div className="provider-logo">
                {company && logoColor && generateLogo(company, logoColor)}
              </div>
              <div className="info">
                <h4>{name}</h4>
                <span>{designation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTestimonialV1;
