import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const BannerV4 = () => {
  return (
    <>
      <div
        className="banner-area overflow-hidden text-light"
        style={{
          background: "rgb(15, 26, 42)",
          padding: "120px 0",
          position: "relative",
        }}
      >
        <div className="banner-style-four">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="content">
                  <h5
                    className="text-light mb-3"
                    style={{
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                      color: "#ffffff",
                    }}
                  >
                    AI-POWERED DIGITAL TRANSFORMATION
                  </h5>
                  <h1
                    className="display-1 fw-bold mb-4"
                    style={{
                      lineHeight: "1.1",
                      color: "#ffffff",
                      fontSize: "4.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Renetter is a{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(90deg, #9061f9 0%, #E257B5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Digital Solutions
                    </span>{" "}
                    Agency
                  </h1>

                  <div className="mb-4">
                    <Link
                      className="btn animation"
                      to="/contact-us#"
                      style={{
                        padding: "12px 30px",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "50px",
                        background: "#1976d2",
                        color: "#ffffff",
                        border: "none",
                        textAlign: "center",
                        minWidth: "160px",
                        display: "inline-block",
                      }}
                    >
                      Contact Us
                    </Link>
                  </div>

                  <p
                    className="lead mb-5"
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                      color: "#ffffff",
                    }}
                  >
                    For over 5 years, we have been transforming businesses with
                    innovative digital solutions. We have a track record of
                    building high-quality software with proven results.
                  </p>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.7",
                      color: "#ffffff",
                    }}
                  >
                    We leverage cutting-edge AI technologies to solve complex
                    business challenges and drive growth. Our team of experts
                    delivers custom software solutions that help you stay ahead
                    in the digital landscape.
                  </p>
                  <div className="button">
                    <Link
                      className="btn animation"
                      to="/contact-us#"
                      style={{
                        padding: "12px 30px",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "50px",
                        background: "#1976d2",
                        color: "#ffffff",
                        border: "none",
                        textAlign: "center",
                        minWidth: "160px",
                        display: "inline-block",
                      }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="banner-shape-right"
                  style={{ position: "relative" }}
                >
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "50%",
                      position: "absolute",
                      right: "0",
                      top: "-80px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "300px",
                      height: "300px",
                      background: "rgba(144, 97, 249, 0.12)",
                      borderRadius: "50%",
                      position: "absolute",
                      right: "70px",
                      top: "20px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV4;
