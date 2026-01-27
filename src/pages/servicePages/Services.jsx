import React from "react";
import ServicesV1 from "../../components/services/ServicesV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import ProcessV1 from "../../components/process/ProcessV1";
import FooterRedesign from "../../components/footer/FooterRedesign";
import FooterV1 from "../../components/footer/FooterV1"; // Keeping as per instruction to not remove, though unused
import ProjectInMind from "../../components/contact/ProjectInMind";
import ProjectV2 from "../../components/project/ProjectV2";
import WorkWithExperts from "../../components/WorkWithExperts";
import { Helmet } from "react-helmet";
import HeaderV6 from "../../components/header/HeaderV6";

const Services = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="renetter-redesign">
      <Helmet>
        <title>Renetter - AI-Powered Digital Services</title>
        <meta
          name="description"
          content="Explore our comprehensive AI-powered services including machine learning solutions, web development, mobile app development, and digital strategy consulting."
        />
      </Helmet>
      <HeaderV6 />

      {/* Hero Section - Minimalist Dark */}
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
              Our Capabilities
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '700px', margin: '0 auto' }}>
              We combine deep technical expertise with design thinking to build software that drives business growth.
            </p>
          </div>
        </div>
      </section>

      <ServicesV1 />
      
      {/* Process Section - White Background */}
      <div style={{ background: '#ffffff', padding: '80px 0' }}>
         <div className="container">
           <div className="row">
             <div className="col-lg-8 offset-lg-2">
               <div className="site-heading text-center">
                 <h5 className="sub-title" style={{ color: '#3b82f6', letterSpacing: '2px' }}>HOW WE WORK</h5>
                 <h2 className="title" style={{ color: '#000', fontSize: '2.5rem', marginTop: '10px' }}>
                   Development Process
                 </h2>
               </div>
             </div>
           </div>
         </div>
         <ProcessV1 processClass="" />
      </div>

      <WorkWithExperts />
      
      {/* CTA Section */}
      <div style={{ background: '#0a0a0a', padding: '100px 0' }}>
         <ProjectInMind />
      </div>
      
      <FooterRedesign />
    </div>
  );
};

export default Services;
