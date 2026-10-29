import React from "react";
import { Link } from "react-router-dom";
import Layout, { Arrow } from "../../layout/Layout";
import LeadForm from "../../components/LeadForm";
import Icon from "../../components/Icons";
import { SITE } from "../../data/site";

const NEXT = [
  { step: "01", title: "We read it properly", text: "Our founder reviews what you send, then replies with questions or a suggested next step." },
  { step: "02", title: "A short call, if it helps", text: "Sometimes a 30-minute call is the fastest way to understand your goals and what is not working." },
  { step: "03", title: "A clear proposal", text: "If we are a fit you get a written scope with deliverables, timeline and price. If not, we say so." },
];

const PROBLEMS = [
  "Your site looks fine but visitors are not turning into enquiries.",
  "You need a new website or web app and want one team to design and build it.",
  "A manual process, such as lead follow-up or support, is eating your team's week.",
  "You are spending on ads or SEO and cannot tell what is working.",
];

const ContactUs = () => (
  <Layout
    path="/contact-us"
    title="Contact Renetter | Start a website, AI or SEO project"
    description="Tell us about your project. Our founder reads every message and replies personally within one business day. US, UK and Gulf clients welcome."
    stickyCta={false}
  >
    <section className="rn-page-hero">
      <div className="rn-container">
        <span className="rn-eyebrow">Contact</span>
        <h1 className="rn-h1">Tell us what you are <em>working on.</em></h1>
        <p className="rn-lead">
          Building something new? Traffic but no enquiries? A process you want automated? You do not need a polished
          brief. A few lines are enough to get started.
        </p>
      </div>
    </section>

    <section className="rn-section">
      <div className="rn-container">
        <div className="rn-lp-grid">
          <div className="rn-panel">
            <h2 style={{ fontSize: "1.5rem", marginBottom: 8 }}>Our founder will reply, not a salesperson.</h2>
            <p style={{ marginBottom: 22 }}>We reply within one business day.</p>
            <LeadForm source="contact" />
          </div>
          <ul className="rn-contact-list">
            <li><small>Email</small><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>
              <small>WhatsApp</small>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">{SITE.phoneDisplay}</a>
            </li>
            <li><small>Based in</small><span>{SITE.location}</span></li>
            <li><small>Hours</small><span>{SITE.hours}</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section className="rn-section rn-section--alt">
      <div className="rn-container">
        <div className="rn-head">
          <span className="rn-eyebrow">What happens next</span>
          <h2 className="rn-h2">No long sales process. <em>Just a conversation.</em></h2>
        </div>
        <div className="rn-steps">
          {NEXT.map((s) => (
            <div key={s.step} className="rn-step">
              <span className="rn-step__num">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="rn-section">
      <div className="rn-container">
        <div className="rn-head">
          <span className="rn-eyebrow">Good reasons to write</span>
          <h2 className="rn-h2">The kinds of problems <em>we work on.</em></h2>
        </div>
        <div className="rn-cards rn-cards--2">
          {PROBLEMS.map((p) => (
            <div key={p} className="rn-card">
              <span className="rn-card__icon"><Icon name="check" /></span>
              <p style={{ color: "var(--rn-ink)" }}>{p}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28, textAlign: "center" }}>
          Not sure where to start? That is fine. See{" "}
          <Link className="rn-link" to="/services">what we do <Arrow size={16} /></Link>
          {" "}or{" "}
          <Link className="rn-link" to="/free-audit">request a free website audit <Arrow size={16} /></Link>.
        </p>
      </div>
    </section>
  </Layout>
);

export default ContactUs;
