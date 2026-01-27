import React from "react";
import ServiceV1Data from "../../jsonData/ServiceV1Data.json";
import { HashLink as Link } from "react-router-hash-link";
import { mainHeadingDarkStyle } from "../../styles/CommonStyles";

const ServicesV1 = () => {
  // Define custom services with inline SVG icons
  const services = [
    {
      id: "ruby-on-rails",
      title: "Ruby on Rails",
      iconName: "ruby",
      content: "Over 12 years of mastery in building robust, scalable web applications using the Rails framework.",
    },
    {
      id: "react-development",
      title: "React.js",
      iconName: "react",
      content: "Building dynamic, high-performance user interfaces with ReactJS for a seamless user experience.",
    },
    {
      id: "react-native",
      title: "React Native",
      iconName: "native",
      content: "Developing cross-platform mobile apps with a single codebase, ensuring speed and consistency.",
    },
    {
      id: "api-development",
      title: "API Integration",
      iconName: "api",
      content: "Creating secure, documented RESTful and GraphQL APIs to power your digital ecosystem.",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      iconName: "cloud",
      content: "Leveraging AWS and Azure for scalable, serverless, and cost-effective infrastructure.",
    },
    {
      id: "technology-consulting",
      title: "Tech Consulting",
      iconName: "consulting",
      content: "Strategic guidance to navigate digital transformation and adopt the right technologies.",
    },
  ];

  const renderServiceIcon = (name) => {
    switch (name) {
      case "ruby":
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3.5L21.5 8.5L12 20.5L2.5 8.5L7.5 3.5H16.5Z" stroke="#CC342D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 3.5L12 20.5L16.5 3.5" stroke="#CC342D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.5 8.5H21.5" stroke="#CC342D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "react":
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
          </svg>
        );
      case "native":
         return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="2" width="10" height="20" rx="2" stroke="#61DAFB" strokeWidth="2"/>
            <circle cx="12" cy="18" r="1" fill="#61DAFB"/>
            <path d="M12 12L12 13" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case "api":
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="20" height="12" rx="2" stroke="#10B981" strokeWidth="2"/>
            <path d="M6 12H10" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
            <path d="M14 12H18" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
            <path d="M13 12L15 10M15 14L13 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case "cloud":
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.244 17.819 10.022C17.385 6.427 14.364 4 11 4C7.134 4 4 7.134 4 11C2.343 11 1 12.343 1 14C1 16.761 3.239 19 6 19H17.5Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "consulting":
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M9 21H15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M12 3V5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M12 21V22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '80px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {services.map((service, index) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`} 
              style={{ textDecoration: 'none' }}
              className="service-card-link"
            >
              <div 
                className="premium-card" 
                style={{ 
                  background: '#f9fafb',
                  height: '100%',
                  borderColor: '#e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '40px',
                  boxShadow: 'none' 
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
                  e.currentTarget.style.background = '#ffffff';
                  // Animate icon if possible via class or JS, simple scale for now
                  const icon = e.currentTarget.querySelector('svg');
                  if(icon) icon.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = '#f9fafb';
                  const icon = e.currentTarget.querySelector('svg');
                  if(icon) icon.style.transform = 'scale(1)';
                }}
              >
                <div style={{ marginBottom: '24px', transition: 'transform 0.3s ease' }}>
                  {renderServiceIcon(service.iconName)}
                </div>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: '700', 
                  marginBottom: '16px', 
                  color: '#111827' 
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  color: '#4b5563', 
                  lineHeight: '1.6', 
                  fontSize: '1rem',
                  marginBottom: '24px'
                }}>
                  {service.content}
                </p>
                <div style={{ 
                  marginTop: 'auto', 
                  color: '#3b82f6', 
                  fontWeight: '600', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px' 
                }}>
                  Learn More <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesV1;
