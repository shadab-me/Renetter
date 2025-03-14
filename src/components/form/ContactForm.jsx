import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForm = (event) => {
    event.preventDefault();

    // Create WhatsApp message with form data
    const whatsappMessage = `New Contact Form Submission:
Name: ${formData.name} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interest: ${formData.service}
Message: ${formData.message}`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919411078560?text=${encodedMessage}`, "_blank");

    // Show success message
    toast.success(
      "Thanks for your message! We've received your information and will contact you shortly."
    );

    // Reset form
    event.target.reset();
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-form-style-one">
        <h4 className="sub-title text-secondary">Contact Us</h4>
        <h2 className="title">Digital Solutions for Your Business</h2>
        <p className="mb-4">
          Fill out the form below to discuss how our innovative solutions can
          transform your business. Our team is ready to bring your vision to
          life.
        </p>
        <form className="contact-form contact-form" onSubmit={handleForm}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="First Name*"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                />
                <span className="alert-error"></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name*"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email Address*"
                  type="email"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                />
                <span className="alert-error"></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control no-arrows"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  type="number"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className="form-control"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  type="text"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <select
                  className="form-control"
                  id="service"
                  name="service"
                  onChange={handleChange}
                >
                  <option value="">Select Service of Interest</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="digital-strategy">
                    Digital Strategy & Consulting
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Tell us about your project vision and goals*"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button
                type="submit"
                name="submit"
                id="submit"
                className="btn-md bg-primary text-light"
              >
                <i className="fa fa-paper-plane"></i> Let's Talk
              </button>
            </div>
          </div>
          <div className="col-lg-12 alert-notification">
            <div id="message" className="alert-msg"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
