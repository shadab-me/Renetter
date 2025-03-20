import React from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { mainHeadingDarkStyle } from "../../styles/CommonStyles";
import { getImagePath } from "../../utils/assetPaths";

const BannerV1 = () => {
  const handleEmail = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks for your interest! We'll be in touch shortly.");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div
        className="banner-style-three-area overflow-hidden"
        style={{
          backgroundImage: `url(${getImagePath("shape/banner-5.jpg")})`,
        }}
      >
        <div className="banner-style-three pt-120 pb-120 pt-xs-60">
          <div className="container">
            <div className="content">
              <div className="row align-center">
                <div className="col-xl-8 col-lg-8 pr-50 pr-md-15 pr-xs-15 mt--80 mt-md-0 mt-xs-0">
                  <motion.div
                    className="information"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={itemVariants}>
                      <h2 style={mainHeadingDarkStyle}>
                        Renetter
                        <br />
                        <strong>
                          AI Solutions <br></br>
                        </strong>{" "}
                        Engineered for Growth
                      </h2>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <p>
                        At Renetter, we are a team of passionate developers
                        dedicated to building high-performance web and mobile
                        applications. We craft digital solutions that not only
                        meet expectations but set new benchmarks for success.
                      </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <form onSubmit={handleEmail}>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="form-control"
                          name="email"
                          required
                        />
                        <button type="submit">
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </form>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <ul className="feature-fun-fact mt-30">
                        <li>
                          <div className="fun-fact">
                            <div className="counter">
                              <span className="timer">95</span>%
                            </div>
                            <span className="medium">Client Satisfaction</span>
                          </div>
                        </li>
                        <li>
                          <div className="fun-fact">
                            <div className="counter">
                              <span className="timer">100</span>%
                            </div>
                            <span className="medium">Project Delivery</span>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  </motion.div>
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

export default BannerV1;
