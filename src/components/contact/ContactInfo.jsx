import React from "react";
import SocialShare2 from "../others/SocialShare2";

const ContactInfo = () => {
  return (
    <div className="contact-info-premium" style={{ height: '100%' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
          Contact Information
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Get in touch with our team for expert software development services.
          We're ready to help transform your ideas into reality.
        </p>
      </div>

      <div className="info-items">
        {/* Phone */}
        <div style={{ display: 'flex', marginBottom: '30px', alignItems: 'flex-start' }}>
          <div style={{ 
            minWidth: '50px', 
            height: '50px', 
            borderRadius: '12px', 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: '#3b82f6', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '1.2rem',
            marginRight: '20px'
          }}>
            <i className="fas fa-phone-alt"></i>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '5px' }}>Phone</h4>
            <a href="tel:+919411078560" style={{ color: '#6b7280', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.3s' }}
               onMouseEnter={e => e.target.style.color = '#3b82f6'}
               onMouseLeave={e => e.target.style.color = '#6b7280'}
            >
              +91 9411078560
            </a>
          </div>
        </div>

        {/* Location */}
        <div style={{ display: 'flex', marginBottom: '30px', alignItems: 'flex-start' }}>
          <div style={{ 
            minWidth: '50px', 
            height: '50px', 
            borderRadius: '12px', 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: '#3b82f6', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '1.2rem',
            marginRight: '20px'
          }}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '5px' }}>Location</h4>
            <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>
              Sector 62, Noida<br />
              Uttar Pradesh, India
            </p>
          </div>
        </div>

        {/* Email */}
        <div style={{ display: 'flex', marginBottom: '30px', alignItems: 'flex-start' }}>
          <div style={{ 
            minWidth: '50px', 
            height: '50px', 
            borderRadius: '12px', 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: '#3b82f6', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '1.2rem',
            marginRight: '20px'
          }}>
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '5px' }}>Email</h4>
            <a href="mailto:info@renetter.com" style={{ color: '#6b7280', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.3s' }}
               onMouseEnter={e => e.target.style.color = '#3b82f6'}
               onMouseLeave={e => e.target.style.color = '#6b7280'}
            >
              info@renetter.com
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div style={{ display: 'flex', marginBottom: '30px', alignItems: 'flex-start' }}>
          <div style={{ 
            minWidth: '50px', 
            height: '50px', 
            borderRadius: '12px', 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: '#3b82f6', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '1.2rem',
            marginRight: '20px'
          }}>
            <i className="fas fa-clock"></i>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '5px' }}>Working Hours</h4>
            <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>

        {/* Social Share */}
        <div style={{ marginTop: '40px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '15px' }}>Follow Us</h4>
          <ul className="social-link" style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', gap: '10px' }}>
            <SocialShare2 />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
