import React from "react";
import ContactForm from "../form/ContactForm";
import ContactInfo from "./ContactInfo";

const ContactV1Reverse = () => {
  return (
    <>
      <div
        className="contact-area overflow-hidden default-padding"
        style={{ backgroundImage: "url(/img/shape/map.png)" }}
      >
        <div className="shape-right-bottom">
          <img src="/img/shape/18.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-6">
              <ContactForm />
            </div>
            <div className="col-tact-stye-one col-lg-5 offset-lg-1 mt--80 mt-md-50 mt-xs-50">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-area">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12 p-0">
              <div className="map-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.108240830687!2d77.35015676109216!3d28.62749479760489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456d92317d%3A0x5634a29c15c6678e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719312654651!5m2!1sen!2sin"
                  style={{ border: "0", width: "100%", height: "500px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location - Noida, Sector 62"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV1Reverse;
