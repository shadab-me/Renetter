import React from "react";
import { Link } from "react-router-dom";
import { mainHeadingGradientStyle } from "../styles/CommonStyles";

const ProjectInMind = () => {
  return (
    <div
      className="project-in-mind-area text-center"
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 style={mainHeadingGradientStyle}>Got a project in mind?</h2>
            <div>
              <Link
                to="/contact-us"
                className="btn"
                style={{
                  backgroundColor: "#4F46E5",
                  color: "#ffffff",
                  padding: "15px 40px",
                  borderRadius: "30px",
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#3730a3";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#4F46E5";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInMind;
