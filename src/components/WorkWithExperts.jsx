import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { mainHeadingDarkStyle } from "../styles/CommonStyles";

const WorkWithExperts = () => {
  return (
    <div className="work-with-experts-area" style={{ padding: '120px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5,
        zIndex: 0
      }}></div>

      <div className="renetter-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            
            <div 
              className="icon-box" 
              style={{ 
                marginBottom: "40px",
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                color: '#3b82f6',
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.1)'
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h2 style={{ 
              fontSize: '3.5rem', 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: '800', 
              marginBottom: '24px',
              color: '#111827',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>
              Work with the <span style={{ color: '#3b82f6' }}>Experts</span>
            </h2>
            
            <p style={{ 
              fontSize: "1.25rem", 
              lineHeight: "1.8", 
              color: "#4b5563",
              marginBottom: '50px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Renetter actively contributes to open-source projects and ReactJS through code, blogs, community events, and presentations. We continuously learn, adopt the latest tech trends, and create cutting-edge applications for our clients.
            </p>
            
            <Link 
              to="/#" 
              className="btn-premium btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', padding: '18px 40px' }}
            >
              View Open Source Contributions <i className="fas fa-arrow-right"></i>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithExperts;
