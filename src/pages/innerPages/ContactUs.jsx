import React from "react";
import FooterRedesign from "../../components/footer/FooterRedesign";
import ContactV1Reverse from "../../components/contact/ContactV1Reverse";
import ProjectInMind from "../../components/contact/ProjectInMind";
import { Helmet } from "react-helmet";
import HeaderV6 from "../../components/header/HeaderV6";

const ContactUs = () => {
  return (
    <div className="renetter-redesign">
      <Helmet>
        <title>Contact Renetter - Launch Your AI-Powered Project</title>
        <meta
          name="description"
          content="Get in touch with Renetter to discuss your AI, web development, or mobile app project. We're ready to transform your digital presence with innovative solutions."
        />
        <meta
          name="keywords"
          content="contact, AI solutions, get in touch, digital project, consultation"
        />
      </Helmet>
      <HeaderV6 />

      {/* Hero Section - Minimalist Dark (Matching Clients/Services) */}
      <section className="hero-section" style={{ 
        background: '#0a0a0a',
        paddingTop: '120px',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div className="renetter-container">
          <div className="hero-content" style={{ margin: '0 auto' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Let's Build Something Extraordinary
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '700px', margin: '0 auto' }}>
              Have a project in mind? We're here to help you transform your ideas into exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>


      <ContactV1Reverse />
      
      {/* CTA Section - Dark Background (Matching Services) */}
      <div style={{ background: '#0a0a0a', padding: '100px 0' }}>
         <ProjectInMind />
      </div>
      <FooterRedesign />
    </div>
  );
};

export default ContactUs;
