import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import CountUp from "react-countup/";

const BannerV2 = () => {
  return (
    <>
      <div
        className="banner-style-two-area text-light bg-cover overflow-hidden"
        style={{ backgroundImage: "url(/img/banner/1.jpg)" }}
      >
        <div className="banner-shape-right-bottom">
          <img src="/img/shape/4.png" alt="Image Not Found" />
        </div>
        <div className="banner-style-two">
          <div className="container">
            <div className="content">
              <div className="row align-center">
                <div className="col-xl-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h2>
                      Digital <strong>Experience</strong>
                    </h2>
                  </motion.div>
                </div>
                <div className="col-xl-4">
                  <div className="banner-right-info">
                    <div className="banner-list">
                      <div className="fun-fact">
                        <div className="content">
                          <div className="counter">
                            <div className="timer">
                              <CountUp end={276} duration={3} enableScrollSpy />
                            </div>
                            <div className="operator">K</div>
                          </div>
                          <span className="medium">Completed Projects</span>
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        <p>
                          Plan upon yet way get cold spot its week. Almost do am
                          or limits hearts. Resolve parties but why she shewing.
                          She sang know now achiving point.
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                      >
                        <div className="button mt-30">
                          <Link className="btn-animation" to="/services#">
                            <i className="fa-solid fa-arrow-right"></i>{" "}
                            <span>Our Services</span>
                          </Link>
                        </div>
                      </motion.div>
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

export default BannerV2;
