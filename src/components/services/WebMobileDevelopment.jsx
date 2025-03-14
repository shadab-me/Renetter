import React from "react";

const WebMobileDevelopment = () => {
  // Data for the development service cards
  const developmentServices = [
    {
      id: 1,
      icon: "/img/icon/1.png", // You can replace with the actual icon path
      title: "End-to-end Ruby on Rails application development",
      description:
        "In our 12 years of experience, most projects fall in this category. To begin with clearly defined objectives, we then create simple wireframes to align the team on the project's direction, focusing on clarity over polish.",
    },
    {
      id: 2,
      icon: "/img/icon/2.png", // You can replace with the actual icon path
      title: "Upgrading Ruby on Rails Application",
      description:
        "Ruby on Rails moves fast and some projects struggle to keep up with the latest versions. BigBinary's expertise is here to assist, ensuring smooth transitions and preventing your projects from falling behind.",
    },
    {
      id: 3,
      icon: "/img/icon/3.png", // You can replace with the actual icon path
      title: "Code audit and optimization",
      description:
        "Our team of experienced developers conducts thorough code audits to identify performance bottlenecks, security vulnerabilities, and areas for improvement in your existing applications.",
    },
    {
      id: 4,
      icon: "/img/icon/4.png", // You can replace with the actual icon path
      title: "Mobile App Development",
      description:
        "We build cross-platform mobile applications using React Native and Flutter, delivering native-like experiences across iOS and Android platforms with a single codebase.",
    },
  ];

  return (
    <div className="py-120 bg-white">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-10">
            <h2
              className="display-4 fw-bold mb-4"
              style={{ fontSize: "3.5rem" }}
            >
              Best-in-class
              <br />
              web & mobile development
            </h2>
            <p
              className="mb-0"
              style={{ fontSize: "1.25rem", lineHeight: "1.8" }}
            >
              We have the right combination of skills and experience to deliver
              <br />
              high-quality software that actually works.
            </p>
          </div>
        </div>

        <div className="row">
          {developmentServices.map((service, index) => (
            <div className="col-lg-6 mb-60" key={service.id}>
              <div>
                {/* Icon container */}
                <div className="mb-4">
                  <div
                    className="service-icon-wrapper"
                    style={{
                      width: "100px",
                      height: "100px",
                      background:
                        "linear-gradient(135deg, #f0f3ff 0%, #e0e6ff 100%)",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{ fontSize: "1.5rem", fontWeight: "600" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-0"
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: "1.7",
                    color: "#555",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebMobileDevelopment;
