import React from "react";
import { Link } from "react-router-dom";

const ProjectInMind = () => {
  return (
    <>
      <div
        className="project-in-mind-area bg-dark-gray text-light text-center default-padding"
        style={{
          backgroundImage: "url(/img/shape/banner-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content">
                <h2 className="title">
                  <span className="text-theme">Got a project</span> in mind?
                </h2>
                <Link
                  to="/contact-us"
                  className="btn btn-md btn-light effect mt-4"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInMind;
