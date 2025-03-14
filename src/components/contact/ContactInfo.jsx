import React from "react";
import SocialShare2 from "../others/SocialShare2";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info">
        <div className="mb-40">
          <h2 className="text-dark-gray">Contact Information</h2>
          <p>
            Get in touch with our team for expert software development services.{" "}
            <br /> We're ready to help transform your ideas into reality.
          </p>
        </div>
        <ul className="contact-address">
          <li className="wow fadeInUp">
            <div className="content">
              <h4 className="title text-primary">Phone</h4>
              <a href="tel:+919411078560">+91 9411078560</a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="300ms">
            <div className="info">
              <h4 className="title text-primary">Location</h4>
              <p>
                Sector 62, Noida
                <br />
                Uttar Pradesh, India
              </p>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="500ms">
            <div className="info">
              <h4 className="title text-primary">Email</h4>
              <a href="mailto:info@renetter.com">info@renetter.com</a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="700ms">
            <div className="info">
              <h4 className="title text-primary">Working Hours</h4>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="900ms">
            <div className="info">
              <h4 className="title text-primary">Follow Us</h4>
              <ul className="social-link">
                <SocialShare2 />
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
