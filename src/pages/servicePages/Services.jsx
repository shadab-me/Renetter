import React from "react";
import { Link } from "react-router-dom";
import Layout, { Arrow } from "../../layout/Layout";
import Icon from "../../components/Icons";
import { SERVICES, ENGAGEMENTS, PROCESS } from "../../data/site";

const Services = () => (
  <Layout
    path="/services"
    title="Services | Websites, AI automation and SEO | Renetter"
    description="Websites and web apps, AI automation, and SEO and growth marketing from Renetter. Fixed-scope projects with weekly demos."
  >
    <section className="rn-page-hero">
      <div className="rn-container">
        <span className="rn-eyebrow">Services</span>
        <h1 className="rn-h1">What we can <em>build for you.</em></h1>
        <p className="rn-lead">Three focused services. Use one on its own, or combine them into a single growth plan.</p>
      </div>
    </section>

    <section className="rn-section">
      <div className="rn-container">
        <div className="rn-cards">
          {SERVICES.map((s) => (
            <Link key={s.id} to={`/services/${s.id}`} className="rn-card">
                <span className="rn-card__icon"><Icon name={s.icon} /></span>
              <h2 style={{ fontSize: "1.35rem", letterSpacing: "-0.025em", fontWeight: 600 }}>{s.title}</h2>
              <p>{s.short}</p>
              <span className="rn-card__more">Explore <Arrow size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="rn-section rn-section--alt">
      <div className="rn-container">
        <div className="rn-head">
          <span className="rn-eyebrow">Ways to work together</span>
          <h2 className="rn-h2">Engagement <em>models.</em></h2>
        </div>
        <div className="rn-cards">
          {ENGAGEMENTS.map((e) => (
            <div key={e.title} className="rn-card">
              <small>{e.tag}</small>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="rn-section">
      <div className="rn-container">
        <div className="rn-head">
          <span className="rn-eyebrow">Process</span>
          <h2 className="rn-h2">The same four steps, <em>every time.</em></h2>
        </div>
        <div className="rn-steps">
          {PROCESS.map((s) => (
            <div key={s.step} className="rn-step">
              <span className="rn-step__num">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="rn-section rn-section--dark rn-cta">
      <div className="rn-container">
        <div className="rn-cta__box">
          <h2 className="rn-h2">Not sure where to <em>start?</em></h2>
          <p>Tell us about your project. Our founder will reply with honest next steps.</p>
          <Link to="/contact-us" className="rn-btn rn-btn--light">Contact us <Arrow /></Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
