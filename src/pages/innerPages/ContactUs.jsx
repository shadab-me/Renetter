import React from "react";
import FooterV1 from "../../components/footer/FooterV1";
import ContactV1Reverse from "../../components/contact/ContactV1Reverse";
import ProjectInMind from "../../components/contact/ProjectInMind";
import { Helmet } from "react-helmet";
import HeaderV6 from "../../components/header/HeaderV6";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Renetter - Launch Your AI-Powered Project</title>
        <meta
          name="description"
          content="Get in touch with Renetter to discuss your AI, web development, or mobile app project. We're ready to transform your digital presence with innovative solutions."
        />
        <meta
          name="keywords"
          content="contact, AI solutions, get in touch, digital project, consultation"
        />
      </Helmet>
      <HeaderV6 />

      {/* Dark Hero Banner */}
      <div className="service-hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="service-hero-content">
                <h1 className="service-title">Launch Your Dream Project</h1>
                <p>
                  Get in touch with our team to discuss your project
                  requirements. We're ready to help you transform your ideas
                  into exceptional digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactV1Reverse />
      <ProjectInMind />
      <FooterV1 />
    </>
  );
};

export default ContactUs;
