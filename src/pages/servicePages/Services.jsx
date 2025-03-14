import React from "react";
import ServicesV1 from "../../components/services/ServicesV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import ProcessV1 from "../../components/process/ProcessV1";
import FooterV1 from "../../components/footer/FooterV1";
import ProjectInMind from "../../components/contact/ProjectInMind";
import ProjectV2 from "../../components/project/ProjectV2";
import WorkWithExperts from "../../components/WorkWithExperts";
import { Helmet } from "react-helmet";
import HeaderV6 from "../../components/header/HeaderV6";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Renetter - AI-Powered Digital Services</title>
        <meta
          name="description"
          content="Explore our comprehensive AI-powered services including machine learning solutions, web development, mobile app development, and digital strategy consulting."
        />
        <meta
          name="keywords"
          content="AI solutions, machine learning, web development, mobile app development, digital strategy"
        />
      </Helmet>
      <HeaderV6 />

      {/* Dark Hero Banner */}
      <div className="service-hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="service-hero-content">
                <h1 className="service-title">AI-Powered Digital Services</h1>
                <p>
                  We have the right combination of skills and experience to
                  deliver high-quality software that actually works with proven
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesV1 />
      <WorkWithExperts />
      <ProjectV2 />
      <div className="default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">Our Development Process</h5>
                <h2 className="title">
                  How We Build <br /> AI-Enhanced Digital Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <p className="text-center mb-5">
                  At Renetter, we integrate AI capabilities throughout our
                  development process. Our methodology ensures transparency,
                  continuous learning, and intelligent optimization to deliver
                  solutions that evolve and improve over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProcessV1 processClass="default-padding bg-gray" />
      <TestimonialV1 />
      <ProjectInMind />
      <FooterV1 />
    </>
  );
};

export default Services;
