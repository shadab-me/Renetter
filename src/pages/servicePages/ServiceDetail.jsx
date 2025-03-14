import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import HeaderV6 from "../../components/header/HeaderV6";
import FooterV1 from "../../components/footer/FooterV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ProjectInMind from "../../components/contact/ProjectInMind";
import ProcessV1 from "../../components/process/ProcessV1";
import { HashLink as Link } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import servicesData from "../../jsonData/ServiceDetailData.json";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // Find the service with the matching ID
    const foundService = servicesData.find((s) => s.id === serviceId);
    setService(foundService);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [serviceId]);

  // If service not found, redirect to services page
  if (service === null) {
    return <div className="loading">Loading...</div>;
  }

  if (service === undefined) {
    return <Navigate to="/services" />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Renetter Digital Services</title>
        <meta
          name="description"
          content={service.metaDescription || service.shortDescription}
        />
        <meta name="keywords" content={service.metaKeywords || service.title} />
      </Helmet>
      <HeaderV6 />

      {/* Dark Hero Banner */}
      <div className="service-hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="service-hero-content">
                <h1 className="service-title">{service.title}</h1>
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

      <div className="service-detail-area default-padding bg-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="service-detail-header text-center">
                <div className="icon-box-wrapper">
                  <div className="icon-box">
                    <i className={`fas fa-${service.icon || "code"}`}></i>
                  </div>
                </div>
                <h2>
                  <span className="highlight-text">
                    {service.yearsOfExperience}
                  </span>{" "}
                  {service.headingText}
                </h2>
                <div className="service-description mt-4">
                  <p>{service.description}</p>
                </div>
                <div className="mt-5">
                  <Link
                    to="/contact-us#"
                    className="btn btn-md btn-gradient animation contact-highlight"
                  >
                    Contact us <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {service.features && service.features.length > 0 && (
            <div className="row mt-80">
              <div className="col-lg-12">
                <div className="service-features">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="site-heading text-center">
                        <h5 className="sub-title">What We Offer</h5>
                        <h2 className="title">Key Features</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {service.features.map((feature, index) => (
                      <div className="col-lg-6 col-md-6 mt-4" key={index}>
                        <div className="feature-item">
                          <div className="feature-icon">
                            <i
                              className={`fas fa-${
                                feature.icon || getIconForTitle(feature.title)
                              }`}
                            ></i>
                          </div>
                          <div className="feature-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="service-process-area bg-white default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">How We Work</h5>
                <h2 className="title">Our Development Process</h2>
                <p className="mt-4">
                  We follow a proven methodology to deliver high-quality{" "}
                  {service.title} solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProcessV1 processClass="bg-gray" />
      <ProjectInMind />
      <FooterV1 />
    </>
  );
};

// Helper function to get appropriate icon based on feature title
const getIconForTitle = (title) => {
  const titleLower = title.toLowerCase();

  if (titleLower.includes("api")) return "plug";
  if (titleLower.includes("database")) return "database";
  if (titleLower.includes("performance")) return "tachometer-alt";
  if (titleLower.includes("cloud")) return "cloud";
  if (titleLower.includes("migration")) return "exchange-alt";
  if (titleLower.includes("component")) return "puzzle-piece";
  if (titleLower.includes("security")) return "shield-alt";
  if (titleLower.includes("document")) return "file-alt";
  if (titleLower.includes("offline")) return "wifi-slash";
  if (titleLower.includes("native")) return "mobile-alt";
  if (titleLower.includes("cross")) return "mobile";
  if (titleLower.includes("react")) return "react";
  if (titleLower.includes("upgrade")) return "arrow-up";
  if (titleLower.includes("transform")) return "sync";

  return "check-circle"; // Default icon
};

export default ServiceDetail;
