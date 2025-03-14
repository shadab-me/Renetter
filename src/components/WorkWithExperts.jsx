import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { mainHeadingDarkStyle } from "../styles/CommonStyles";

const WorkWithExperts = () => {
  return (
    <>
      <div
        className="work-with-experts-area"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="work-with-experts-content">
                <div className="icon-box" style={{ marginBottom: "30px" }}>
                  <i
                    className="flaticon-software-development"
                    style={{
                      fontSize: "60px",
                      color: "#086AD8",
                      display: "inline-block",
                      width: "100px",
                      height: "100px",
                      lineHeight: "100px",
                      textAlign: "center",
                      borderRadius: "50%",
                      background: "rgba(8,106,216,0.1)",
                    }}
                  ></i>
                </div>
                <h2 style={mainHeadingDarkStyle}>Work with the Experts</h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#666666",
                  }}
                >
                  Renetter actively contributes to open-source projects and
                  ReactJS through code, blogs, community events, and
                  presentations. We continuously learn, adopt the latest tech
                  trends, and create cutting-edge applications for our clients.
                </p>
                <Link to="/#" className="btn btn-md btn-theme effect mt-30">
                  VIEW OPEN SOURCE CONTRIBUTIONS
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-with-experts-image text-center">
                <img
                  src="/img/icon/3.png"
                  alt="Work with Experts Icon"
                  className="img-fluid"
                  style={{
                    maxWidth: "400px",
                    margin: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithExperts;
