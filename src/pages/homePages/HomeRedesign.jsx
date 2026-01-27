import React, { useEffect } from 'react';
import HeaderV6 from '../../components/header/HeaderV6';
import FooterRedesign from '../../components/footer/FooterRedesign';
import '../../assets/css/design_system.css';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

const HomeRedesign = () => {
  
  // Structured Data for Google & AI (Organization + LocalBusiness)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Renetter Agency",
    "image": "https://renetter.com/assets/img/renetter-logo.svg",
    "@id": "https://renetter.com",
    "url": "https://renetter.com",
    "telephone": "+919411078560", 
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Moradabad",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.8386,
      "longitude": 78.7733
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "23:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/renetter",
      "https://www.instagram.com/renetter_agency",
      "https://twitter.com/renetter"
    ],
    "description": "Renetter Agency is a premium digital agency in Moradabad offering expert web development, mobile app creation, and AI-powered business solutions."
  };

  // Client Data - Top 5 Real Clients
  const clients = [
    { id: 1, name: "Paytm" },
    { id: 2, name: "Zomato" },
    { id: 3, name: "Swiggy" },
    { id: 4, name: "PhonePe" },
    { id: 5, name: "Leverage Edu" },
  ];

  // Render Real Logos as Inline SVGs (Fixed)
  const renderClientLogo = (client) => {
    switch (client.name) {
      case "Paytm":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <text x="50" y="20" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="22">
               <tspan fill="#002E6E">Pay</tspan><tspan fill="#00BAF2">tm</tspan>
             </text>
          </svg>
        );
      case "Zomato":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="20" dominantBaseline="middle" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="900" fontStyle="italic" fontSize="24" fill="#E23744" letterSpacing="-1px">zomato</text>
          </svg>
        );
      case "Swiggy":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="20" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="22" fill="#FC8019" letterSpacing="-0.5px">SWIGGY</text>
          </svg>
        );
      case "PhonePe":
        return (
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="0" y="0" width="100" height="32" rx="4" fill="#5F259F" />
             <text x="50" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="white">PhonePe</text>
          </svg>
        );
      case "Leverage Edu":
        return (
          <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <text x="0" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="#2F54EB">Leverage</text>
             <text x="85" y="22" fontFamily="sans-serif" fontWeight="normal" fontSize="18" fill="#000000">Edu</text>
           </svg>
        );
      default:
        return null; 
    }
  };
  
  // SEO Hooks or standard hooks if needed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="renetter-redesign">
      <Helmet>
        <title>Renetter - Web Development & AI Solutions Agency</title>
        <meta 
          name="description" 
          content="Renetter is the leading digital agency for custom web development, mobile apps, and AI solutions. We build fast, scalable, and premium digital products." 
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <HeaderV6 />
      
      {/* Hero Section - Minimalist BigBinary Style */}
      <section className="hero-section" style={{ 
        background: '#0a0a0a',
        paddingTop: '120px',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div className="renetter-container">
          <div className="hero-content" style={{ margin: '0 auto' }}>
            <h1 className="hero-title" style={{ fontSize: '4.5rem', letterSpacing: '-0.02em', marginBottom: '30px' }}>
              Digital Excellence
              <br />  
              <span style={{ color: '#3b82f6' }}>Redefined.</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '700px', margin: '0 auto 50px auto' }}>
              We craft premium digital experiences. From AI-driven solutions to high-performance web applications, Renetter elevates your business to the next level.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/contact-us" className="btn-premium btn-primary">Start a Project</Link>
              <Link to="/services" className="btn-premium btn-outline">Our Services</Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        {/* Clean background - no distractions */}
      </section>

      {/* Services Section - White Background */}
      <section className="services-section" style={{ padding: 'var(--section-padding)', background: '#ffffff', color: '#000000' }}>
        <div className="renetter-container">
          <h2 className="section-title" style={{ color: '#000000' }}>Our Expertise</h2>
          <div className="services-grid">
            {[ 
              { title: 'Web Development', desc: 'Custom, high-performance websites built with modern technologies like React and Next.js.' },
              { title: 'AI Solutions', desc: 'Intelligent automation and AI integration to streamline your business workflows.' },
              { title: 'Digital Marketing', desc: 'Data-driven strategies to increase your visibility and ROI across all channels.' },
              { title: 'App Development', desc: 'Native and cross-platform mobile applications that users love.' }
            ].map((service, index) => (
              <div key={index} className="premium-card" style={{ background: '#f9fafb', borderColor: '#e5e7eb', boxShadow: 'none' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontFamily: 'var(--font-heading)', color: '#111827' }}>{service.title}</h3>
                <p style={{ color: '#4b5563', lineHeight: '1.6' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Light Gray Background */}
      <section style={{ padding: '60px 0', background: '#f9fafb', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="renetter-container">
           <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
             {clients.map((client) => (
               <div key={client.id} style={{ transition: 'transform 0.3s ease', cursor: 'pointer', opacity: 0.7, filter: 'grayscale(100%)' }} onMouseEnter={e => {e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'grayscale(0%)'}} onMouseLeave={e => {e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.filter = 'grayscale(100%)'}}>
                 {renderClientLogo(client)}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Process Section - How We Work - White Background */}
      <section style={{ padding: 'var(--section-padding)', background: '#ffffff', color: '#000000' }}>
        <div className="renetter-container">
           <div style={{ maxWidth: '800px', margin: '0 auto 60px auto', textAlign: 'center' }}>
             <h2 className="section-title" style={{ color: '#000000', marginBottom: '20px' }}>How We Work</h2>
             <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>We follow a proven methodology to ensure your project's success, from initial concept to final deployment.</p>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
             {[
               { step: '01', title: 'Discovery', desc: 'We dive deep into your requirements, understanding your business goals and target audience.' },
               { step: '02', title: 'Strategy', desc: 'We create a comprehensive roadmap and technical architecture tailored to your needs.' },
               { step: '03', title: 'Development', desc: 'Our expert team builds your solution using cutting-edge technologies and best practices.' },
               { step: '04', title: 'Launch', desc: 'We deploy your solution and provide ongoing support to ensure smooth operation.' }
             ].map((process, i) => (
               <div key={i} style={{ padding: '30px', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'left' }}>
                 <div style={{ fontSize: '4rem', fontWeight: '900', color: '#e5e7eb', lineHeight: '1', marginBottom: '20px' }}>{process.step}</div>
                 <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: '#111827' }}>{process.title}</h3>
                 <p style={{ color: '#4b5563', lineHeight: '1.6' }}>{process.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: 'var(--section-padding)', textAlign: 'center', background: '#0a0a0a' }}>
        <div className="renetter-container">
          <div className="premium-card" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 100%)', border: '1px solid var(--accent-primary)' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '20px', color: '#ffffff' }}>Ready to Transform?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: 'var(--text-secondary)' }}>
              Let's build something extraordinary together. Contact us today to discuss your vision.
            </p>
            <Link to="/contact-us" className="btn-premium btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>

      <FooterRedesign />
    </div>
  );
};

export default HomeRedesign;
