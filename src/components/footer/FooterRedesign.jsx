import React from 'react';
import { Link } from 'react-router-dom';

const FooterRedesign = () => {
  return (
    <footer style={{ background: '#ffffff', padding: '80px 0', borderTop: '1px solid #e5e7eb', color: '#000000' }}>
      <div className="renetter-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          
          {/* Left Column: Brand & Contact */}
          <div style={{ flex: '1 1 300px', marginBottom: '40px', paddingRight: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/assets/img/renetter-logo.svg" alt="Renetter Logo" style={{ width: '32px', height: '32px' }} />
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#000000' }}>RENETTER</h2>
            </div>
            <a href="mailto:info@renetter.com" style={{ display: 'block', fontSize: '16px', color: '#4b5563', marginBottom: '24px', textDecoration: 'none' }}>
              info@renetter.com
            </a>
            <div style={{ display: 'flex', gap: '16px' }}>
              {/* Social Icons Placeholder */}
              {['twitter', 'linkedin', 'youtube', 'github'].map(icon => (
                <div key={icon} style={{ width: '40px', height: '40px', background: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  {/* Icon placeholder */}
                  <span style={{ fontSize: '12px' }}>{icon[0].toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Columns: Links */}
          <div style={{ flex: '2 1 500px', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
            
            {/* Column 1: Services */}
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '1px' }}>Services</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Web Development', 'Mobile App Development', 'AI Solutions', 'Digital Marketing', 'SEO Optimization'].map(item => (
                  <li key={item}>
                    <Link to="/services" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '16px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '1px' }}>Company</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['About Us', 'Case Studies', 'Careers', 'Contact'].map(item => (
                  <li key={item}>
                    <Link to="/contact-us" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '16px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products/Resources */}
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '1px' }}>Resources</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Blog', 'Community', 'Help Center'].map(item => (
                  <li key={item}>
                    <Link to="/blog" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '16px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        
        <div style={{ marginTop: '80px', borderTop: '1px solid #f3f4f6', paddingTop: '30px', color: '#9ca3af', fontSize: '14px' }}>
          &copy; {new Date().getFullYear()} Renetter Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterRedesign;
