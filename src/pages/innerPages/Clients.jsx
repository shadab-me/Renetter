import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FooterRedesign from "../../components/footer/FooterRedesign";
import { Helmet } from "react-helmet";
import HeaderV6 from "../../components/header/HeaderV6";
import ClientsList from "../../components/clients/ClientsList";

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="renetter-redesign">
      <Helmet>
        <title>Our Clients - Renetter Digital Agency</title>
        <meta
          name="description"
          content="Discover the companies and organizations that trust Renetter for their digital transformation needs."
        />
      </Helmet>
      <HeaderV6 />

      {/* Hero Section - Minimalist Dark */}
      <section className="hero-section" style={{ 
        background: '#0a0a0a',
        paddingTop: '120px',
        minHeight: '60vh', // Shorter than home hero
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div className="renetter-container">
          <div className="hero-content" style={{ margin: '0 auto' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Our Trusted Partners
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '700px', margin: '0 auto' }}>
              We're proud to support industry leaders in their digital journey.
            </p>
          </div>
        </div>
      </section>

      <ClientsList />

      {/* CTA Section (Shared with Home) */}
      <section style={{ padding: 'var(--section-padding)', textAlign: 'center', background: '#0a0a0a' }}>
        <div className="renetter-container">
          <div className="premium-card" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 100%)', border: '1px solid var(--accent-primary)' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '20px', color: '#ffffff' }}>Ready to Join Them?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: 'var(--text-secondary)' }}>
              Let's build something extraordinary together.
            </p>
            <Link to="/contact-us" className="btn-premium btn-primary">Start a Project</Link>
          </div>
        </div>
      </section>

      <FooterRedesign />
    </div>
  );
};

export default Clients;
