import React from "react";
import { Link } from "react-router-dom";

const ProjectInMind = () => {
  return (
    <div className="container">
      <div 
        className="premium-cta-card" 
        style={{ 
          background: 'linear-gradient(135deg, #111827 0%, #000000 100%)', 
          borderRadius: '24px', 
          padding: '80px 40px', 
          textAlign: 'center', 
          border: '1px solid #1f2937', 
          position: 'relative', 
          overflow: 'hidden' 
        }}
      >
        {/* Decorative Gradient Blob */}
        <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translate(-50%, 0)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }}></div>
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ 
            fontSize: '3.5rem', 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: '800', 
            color: '#fff', 
            marginBottom: '20px', 
            letterSpacing: '-1px' 
          }}>
            Got a project in mind?
          </h2>
          <p style={{ 
            color: '#9ca3af', 
            fontSize: '1.25rem', 
            maxWidth: '600px', 
            margin: '0 auto 40px auto' 
          }}>
            Let's collaborate and bring your ideas to life with our expert team using the latest AI and web technologies.
          </p>
          <Link
            to="/contact-us"
            className="btn btn-primary"
            style={{ 
              padding: '16px 48px', 
              fontSize: '1.1rem', 
              fontWeight: '600', 
              borderRadius: '50px', 
              background: '#fff', 
              color: '#000', 
              border: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {e.target.style.transform = 'scale(1.05)'; e.target.style.background = '#f3f4f6'}}
            onMouseLeave={e => {e.target.style.transform = 'scale(1)'; e.target.style.background = '#fff'}}
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectInMind;
