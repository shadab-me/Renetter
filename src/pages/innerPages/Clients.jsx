import React from "react";
import FooterV1 from "../../components/footer/FooterV1";
import { Helmet } from "react-helmet";
import HeaderV6 from "../../components/header/HeaderV6";
import ClientsList from "../../components/clients/ClientsList";
import ProjectInMind from "../../components/contact/ProjectInMind";

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>Our Clients - Renetter Digital Agency</title>
        <meta
          name="description"
          content="Discover the companies and organizations that trust Renetter for their digital transformation needs. Our clients include leading brands across multiple industries."
        />
        <meta
          name="keywords"
          content="clients, partners, customer testimonials, business relationships"
        />
      </Helmet>
      <HeaderV6 />

      {/* Dark Hero Banner */}
      <div className="service-hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="service-hero-content">
                <h1 className="service-title">Our Clients</h1>
                <p>
                  We're proud to work with leading companies across diverse
                  industries. Our clients trust us to deliver innovative digital
                  solutions that drive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClientsList />
      <ProjectInMind />
      <FooterV1 />
    </>
  );
};

export default Clients;
