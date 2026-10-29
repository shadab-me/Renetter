import React from "react";
import { Link } from "react-router-dom";
import Layout, { Arrow } from "../../layout/Layout";
import Icon from "../../components/Icons";
import { PRINCIPLES, PROCESS, STATS } from "../../data/site";

const About = () => (
  <Layout
    path="/about"
    title="About Renetter | Senior web, AI and SEO team"
    description="Renetter is a small senior team building websites, AI automation and growth marketing for businesses in the US, UK and Gulf."
  >
    <section className="rn-page-hero">
      <div className="rn-container">
        <span className="rn-eyebrow">About</span>
        <h1 className="rn-h1">A small senior team, <em>accountable for results.</em></h1>
        <p className="rn-lead">
          We built Renetter because most businesses get either a pretty site that does not sell, or a technical build
          nobody can market. We do both, and we stand behind the outcome.
        </p>
      </div>
    </section>

    <section className="rn-section">
      <div className="rn-container">
        <div className="rn-split">
          <div>
            <span className="rn-eyebrow">Our team</span>
            <h2 className="rn-h2">Engineers who <em>own the outcome.</em></h2>
          </div>
          <div className="rn-prose">
            <p>
              Renetter is a team of engineers, designers and marketers working together on one brief. The people who
              scope your project are the people who build it, so nothing gets lost in a handoff.
            </p>
            <p>
              Our work spans web apps, retrieval-based AI assistants, funnel redesigns and delivery pipelines. We apply
              the same discipline to every client, from a first-time founder to an established product team.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="rn-section rn-section--alt">
      <div className="rn-container">
        <div className="rn-stats">
          {STATS.map((s) => (
            <div key={s.label} className="rn-stat">
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="rn-section">
      <div className="rn-container">
        <div className="rn-head">
          <span className="rn-eyebrow">What we stand for</span>
          <h2 className="rn-h2">Principles we <em>work by.</em></h2>
        </div>
        <div className="rn-cards">
          {PRINCIPLES.map((p, i) => (
            <div key={p.title} className="rn-card">
              <span className="rn-card__icon"><Icon name={["shield", "rocket", "check"][i % 3]} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="rn-section rn-section--alt">
      <div className="rn-container">
        <div className="rn-head">
          <span className="rn-eyebrow">Process</span>
          <h2 className="rn-h2">How every project <em>runs.</em></h2>
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
          <h2 className="rn-h2">Let us talk about <em>your</em> project.</h2>
          <p>A 30-minute call is enough to know whether we are a fit.</p>
          <div className="rn-actions" style={{ marginTop: 0 }}>
            <Link to="/contact-us" className="rn-btn rn-btn--light">Contact us <Arrow /></Link>
            <Link to="/services" className="rn-btn rn-btn--ghost">Our services</Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
