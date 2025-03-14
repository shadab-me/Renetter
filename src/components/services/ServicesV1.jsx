import React from "react";
import ServiceV1Data from "../../jsonData/ServiceV1Data.json";
import { HashLink as Link } from "react-router-hash-link";
import { mainHeadingDarkStyle } from "../../styles/CommonStyles";

const ServicesV1 = () => {
  // Define custom services to add to the existing ones
  const services = [
    {
      id: "ruby-on-rails",
      icon1: "1.png",
      title: "Ruby on Rails Development",
      content:
        "Over 12 years of using Ruby on Rails to build all kinds of web applications has given us a unique perspective on how to build the software the right way the Ruby on Rails way.",
    },
    {
      id: "react-development",
      icon1: "2.png",
      title: "React.js Development",
      content:
        "ReactJS is a tour de force. We love it so much that we built our framework called neetoUI and neetoMolecules. ReactJS helps us keep the UI consistent, reusable and maintainable.",
    },
    {
      id: "react-native",
      icon1: "3.png",
      title: "React Native Development",
      content:
        "React Native allows us to have a single codebase for both Android and iOS applications. It means our team can deliver features faster while reusing most of the components for both platforms.",
    },
    {
      id: "api-development",
      icon1: "4.png",
      title: "API Development",
      content:
        "We provide comprehensive API development services, creating robust and secure RESTful APIs that enable seamless integration between different systems and applications.",
    },
    {
      id: "cloud-solutions",
      icon1: "5.png",
      title: "Cloud Solutions",
      content:
        "Our cloud solutions leverage AWS, Azure, and Google Cloud to build scalable, reliable infrastructure. We implement serverless architecture and automate deployments for maximum efficiency.",
    },
    {
      id: "technology-consulting",
      icon1: "6.png",
      title: "Technology Consulting",
      content:
        "We offer strategic consulting services to help businesses navigate digital transformation, improve their software development processes, and adopt modern technologies effectively.",
    },
  ];

  return (
    <div
      className="pt-140 pb-140 mt-5 pb-90 services-style-one-area bg-cover"
      style={{ backgroundImage: "url(/img/shape/banner-2.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h2 className="title" style={mainHeadingDarkStyle}>
                Services we offer
              </h2>
              <p className="mt-4">
                Our expertise and skills ensure the delivery of effective,
                top-quality software solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30" key={service.id}>
              <div className="services-style-one">
                <img src={`/img/icon/${service.icon1}`} alt="Icon" />
                <Link to={`/services/${service.id}#`} className="btn-arrow">
                  <i className="fas fa-long-arrow-right"></i>
                </Link>
                <p>{service.content}</p>
                <h4>
                  <Link to={`/services/${service.id}#`}>{service.title}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesV1;
