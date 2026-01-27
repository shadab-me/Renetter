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
      <div className="contact-form-style-premium" style={{ background: '#fff' }}>
        <h4 style={{ 
          fontSize: '0.9rem', 
          textTransform: 'uppercase', 
          letterSpacing: '2px', 
          color: '#3b82f6', 
          fontWeight: '700', 
          marginBottom: '10px' 
        }}>Contact Us</h4>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          marginBottom: '20px', 
          color: '#111827',
          lineHeight: '1.2'
        }}>Let's Start a Conversation</h2>
        <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.6' }}>
          Fill out the form below to discuss how our innovative solutions can
          transform your business. We'll get back to you via WhatsApp or Email.
        </p>
        
        <form className="contact-form" onSubmit={handleForm}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>First Name</label>
                <input
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f9fafb',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    color: '#1f2937'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  id="name"
                  name="name"
                  placeholder="Enter your first name"
                  type="text"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>Last Name</label>
                <input
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f9fafb',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    color: '#1f2937'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  type="text"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>Email Address</label>
                <input
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f9fafb',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    color: '#1f2937'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  type="email"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>Phone Number</label>
                <input
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f9fafb',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    color: '#1f2937'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  id="phone"
                  name="phone"
                  placeholder="+91..."
                  type="number"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>Company Name</label>
                <input
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f9fafb',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    color: '#1f2937'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  id="company"
                  name="company"
                  placeholder="Your Company Name"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>Service Intereseted In</label>
                <div style={{ position: 'relative' }}>
                  <select
                    style={{
                      width: '100%',
                      padding: '14px 20px',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      background: '#f9fafb',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      color: '#1f2937',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    id="service"
                    name="service"
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="digital-strategy">Digital Strategy & Consulting</option>
                  </select>
                  <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#6b7280' }}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group" style={{ marginBottom: '30px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>Project Details</label>
                <textarea
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f9fafb',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    color: '#1f2937',
                    minHeight: '120px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
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
                id="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.1)'
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.15)';
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.1)';
                }}
              >
                <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i> Send via WhatsApp
              </button>
            </div>
          </div>
          <div className="col-lg-12 alert-notification" style={{ marginTop: '20px' }}>
            <div id="message" className="alert-msg"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
