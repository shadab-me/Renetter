import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const BlogV3 = () => {
  const handleEmail = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks for your interest! We'll be in touch shortly.");
  };

  return (
    <>
      <div
        className="banner-style-three-area overflow-hidden"
        style={{ backgroundImage: "url(/img/shape/banner-5.jpg)" }}
      >
        <div className="banner-style-three pt-150 pt-md-120 pt-xs-60">
          <div className="container">
            <div className="content">
              <div className="row align-center">
                <div className="col-xl-8 col-lg-8 pr-50 pr-md-15 pr-xs-15 mt--80 mt-md-0 mt-xs-0">
                  <div className="information">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <h2>
                        Renetter
                        <br />
                        <strong>
                          AI Solutions <br></br>
                        </strong>{" "}
                        Engineered for Growth
                      </h2>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    >
                      <p>
                        At Renetter, we are a team of passionate developers
                        dedicated to building high-performance web and mobile
                        applications. We craft digital solutions that not only
                        meet expectations but set new benchmarks for success.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 }}
                    >
                      <div className="button">
                        <Link
                          className="btn btn-md btn-theme"
                          to="/contact-us#"
                        >
                          Let's Talk
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                  <div className="thumb">
                    <div className="progress-card">
                      <div className="icon">
                        <i className="flaticon-startup-5"></i>
                      </div>
                      <div className="info">
                        <p>AI Performance</p>
                        <h4>+185%</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogV3;
