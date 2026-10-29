import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout, { Arrow } from "../../layout/Layout";
import Icon from "../../components/Icons";
import CaseStudyCard from "../../components/CaseStudyCard";
import { SITE, SERVICES, PROCESS, PRINCIPLES, FAQ, STATS, ENGAGEMENTS, CLIENT_GROUPS, CLIENT_LOGOS, CASE_STUDIES, INDUSTRIES, TECH } from "../../data/site";

const HomeRedesign = () => {
  const clientNames = CLIENT_GROUPS.flatMap((g) => g.names);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phoneDisplay,
        address: { "@type": "PostalAddress", addressLocality: "Moradabad", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
        areaServed: ["US", "GB", "AE", "SA", "IN"],
        sameAs: Object.values(SITE.social),
        makesOffer: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.short } })),
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#org`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/favicon.svg`,
        sameAs: Object.values(SITE.social),
      },
      {
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        publisher: { "@id": `${SITE.url}/#org` },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <Layout
      path="/"
      title="Renetter | Websites, AI automation and SEO for growing businesses"
      description="Renetter builds fast websites, AI automation and search-led marketing that bring in customers. Fixed-scope projects, weekly demos, remote teams for US, UK and Gulf clients."
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="rn-hero">
        <div className="rn-container">
          <span className="rn-pill"><i /> Taking on new projects</span>
          <h1 className="rn-h1">
            Websites and AI systems that <em>win you customers.</em>
          </h1>
          <p className="rn-lead">
            Renetter is a small, senior team that designs, builds and markets digital products for ambitious businesses
            in the US, UK and Gulf.
          </p>
          <div className="rn-actions">
            <Link to="/contact-us" className="rn-btn">Talk to us <Arrow /></Link>
            <Link to="/services" className="rn-btn rn-btn--ghost">See our services</Link>
          </div>
          <div className="rn-principles">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {clientNames.length > 0 && (
        <section className="rn-trust">
          <div className="rn-container">
            <p className="rn-trust__label">Worked with</p>
            <div className="rn-trust__row">
              {clientNames.slice(0, 10).map((n) => (
                CLIENT_LOGOS[n]
                  ? <span key={n} className={`rn-trust__logo is-${CLIENT_LOGOS[n].tone}`}><img src={CLIENT_LOGOS[n].src} alt={n} /></span>
                  : <span key={n}>{n}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="rn-section" id="services">
        <div className="rn-container">
          <div className="rn-head rn-reveal">
            <span className="rn-eyebrow">What we do</span>
            <h2 className="rn-h2">Three things we do <em>well.</em></h2>
            <p>Focused on the work that moves revenue: a site that converts, automation that saves hours, and traffic that arrives ready to buy.</p>
          </div>
          <div className="rn-cards rn-reveal">
            {SERVICES.map((s) => (
              <Link key={s.id} to={`/services/${s.id}`} className="rn-card">
                <span className="rn-card__icon"><Icon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="rn-card__more">Learn more <Arrow size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rn-section rn-section--alt">
        <div className="rn-container">
          <div className="rn-stats rn-reveal">
            {STATS.map((s) => (
              <div key={s.label} className="rn-stat">
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rn-section" id="industries">
        <div className="rn-container">
          <div className="rn-head rn-reveal">
            <span className="rn-eyebrow">Who we work with</span>
            <h2 className="rn-h2">Built for teams in every <em>industry.</em></h2>
          </div>
          <div className="rn-tiles rn-reveal">
            {INDUSTRIES.map((i) => (
              <Link key={i.title} to="/clients" className="rn-tile">
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </Link>
            ))}
          </div>
          <div className="rn-chips rn-chips--lg rn-chips--center" style={{ marginTop: 40 }} aria-label="Technologies we work with">
            {TECH.map((t) => <span key={t} className="rn-chip">{t}</span>)}
          </div>
        </div>
      </section>

      <section className="rn-section rn-section--alt" id="process">
        <div className="rn-container">
          <div className="rn-head rn-reveal">
            <span className="rn-eyebrow">How we work</span>
            <h2 className="rn-h2">A clear process, <em>start to finish.</em></h2>
            <p>A simple, predictable process so you always know what happens next.</p>
          </div>
          <div className="rn-steps rn-reveal">
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

      {CASE_STUDIES.length > 0 && (
        <section className="rn-section" id="work">
          <div className="rn-container">
            <div className="rn-head rn-reveal">
              <span className="rn-eyebrow">Case studies</span>
              <h2 className="rn-h2">Real work with <em>real clients.</em></h2>
            </div>
            <div className="rn-reveal">
              {CASE_STUDIES.slice(0, 2).map((c, i) => <CaseStudyCard key={c.title} study={c} index={i} />)}
            </div>
            <div className="rn-actions">
              <Link to="/case-studies" className="rn-btn rn-btn--ghost">All case studies <Arrow /></Link>
            </div>
          </div>
        </section>
      )}

      <section className={`rn-section${CASE_STUDIES.length > 0 ? " rn-section--alt" : ""}`} id="engage">
        <div className="rn-container">
          <div className="rn-head rn-reveal">
            <span className="rn-eyebrow">Ways to work together</span>
            <h2 className="rn-h2">Pick the model that <em>fits.</em></h2>
          </div>
          <div className="rn-cards rn-reveal">
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

      <section className={`rn-section${CASE_STUDIES.length > 0 ? "" : " rn-section--alt"}`} id="faq">
        <div className="rn-container">
          <div className="rn-split">
            <div className="rn-reveal">
              <span className="rn-eyebrow">FAQ</span>
              <h2 className="rn-h2">Questions, <em>answered.</em></h2>
              <p style={{ marginTop: 16 }}>
                Something else on your mind? <Link to="/contact-us" className="rn-link">Ask us directly</Link>
              </p>
            </div>
            <div className="rn-faq rn-reveal">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rn-section rn-section--dark rn-cta">
        <div className="rn-container">
          <div className="rn-cta__box">
            <h2 className="rn-h2">Tell us what you are <em>trying to build.</em></h2>
            <p>Our founder reads every message and replies personally, not a salesperson. A few lines about your project are enough.</p>
            <Link to="/contact-us" className="rn-btn rn-btn--light">Contact us <Arrow /></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomeRedesign;
