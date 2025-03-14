import React from "react";
import { Link } from "react-router-dom";
import { mainHeadingLightStyle } from "../../styles/CommonStyles";

const ProjectV2 = () => {
  // Company projects with color and other attributes
  const projects = [
    {
      id: 1,
      title: "Leverage Edu",
      categories: ["Education Tech", "Student Portal"],
      externalUrl: "https://leverageedu.com/",
      logoColor: "#3367D6", // Blue
    },
    {
      id: 2,
      title: "Alt Campus",
      categories: ["Learning Platform", "Education"],
      externalUrl: "https://altcampus.io/",
      logoColor: "#FF5733", // Orange
    },
    {
      id: 3,
      title: "LPU",
      categories: ["Education", "University"],
      externalUrl: "https://www.lpu.in/",
      logoColor: "#4CAF50", // Green
    },
    {
      id: 4,
      title: "Byjus",
      categories: ["EdTech", "Learning App"],
      externalUrl: "https://byjus.com/",
      logoColor: "#2196F3", // Light Blue
    },
    {
      id: 5,
      title: "Paytm",
      categories: ["Fintech", "Payments"],
      externalUrl: "https://paytm.com/",
      logoColor: "#00BCD4", // Cyan
    },
    {
      id: 6,
      title: "PhonePe",
      categories: ["Fintech", "Digital Payments"],
      externalUrl: "https://www.phonepe.com/",
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
        width="100%"
        height="180"
        viewBox="0 0 160 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "100%", height: "100%" }}
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
      <div
        className="project-style-two-area default-padding"
        style={{ backgroundColor: "#0F1A2A" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-light text-center">
                <h5 className="sub-title">CLIENT SUCCESS STORIES</h5>
                <h2 className="title" style={mainHeadingLightStyle}>
                  Explore Our Latest <br /> Case Studies
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div className="col-lg-4 col-md-6 mb-30" key={project.id}>
                <div className="project-card h-100 shadow-sm">
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div
                      className="project-thumb d-flex align-items-center justify-content-center"
                      style={{
                        overflow: "hidden",
                        borderRadius: "16px 16px 0 0",
                        height: "180px",
                        backgroundColor: "#ffffff",
                        padding: "0",
                      }}
                    >
                      {generateLogo(project.title, project.logoColor)}
                    </div>
                  </a>
                  <div
                    className="project-info p-4 bg-white"
                    style={{ borderRadius: "0 0 16px 16px" }}
                  >
                    <h4 className="mb-1">
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        {project.title}
                      </a>
                    </h4>
                    <p className="mb-0">{project.categories.join(", ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectV2;
