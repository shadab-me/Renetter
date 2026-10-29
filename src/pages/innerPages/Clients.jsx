import React from "react";
import { Link } from "react-router-dom";
import Layout, { Arrow } from "../../layout/Layout";
import { STATS, INDUSTRIES, CLIENT_GROUPS, CLIENT_LOGOS, PRINCIPLES, PROCESS, TECH } from "../../data/site";

const initials = (name) => name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

const Clients = () => {
  const groups = CLIENT_GROUPS.filter((g) => g.names.length > 0);

  return (
    <Layout
      path="/clients"
      title="Clients and industries we work with | Renetter"
      description="Startups, education platforms, creators and growing businesses that work with Renetter for websites, AI automation and marketing."
    >
      <section className="rn-page-hero">
        <div className="rn-container">
          <span className="rn-eyebrow">Clients</span>
          <h1 className="rn-h1">Startups, creators and <em>growing businesses.</em></h1>
          <p className="rn-lead">
            Founders, product teams and creators who want one senior team to build, automate and market.
          </p>
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
            <span className="rn-eyebrow">Who we work with</span>
            <h2 className="rn-h2">Clients from every kind of <em>business.</em></h2>
            <p>
              {groups.length > 0
                ? "Companies we have built with, and teams we have worked alongside, plus the kinds of businesses we build for."
                : "These are the kinds of teams we build for. Named clients are listed here once they have approved it."}
            </p>
          </div>
          {groups.length > 0 && (
            <div className="rn-clients" style={{ marginBottom: 56 }}>
              {groups.map((g) => (
                <div key={g.industry} className="rn-clients__group">
                  <h3>{g.industry}</h3>
                  <div className="rn-logowall">
                    {g.names.map((n) => (
                      CLIENT_LOGOS[n] ? (
                        <div key={n} className={`rn-logowall__item rn-logowall__item--logo is-${CLIENT_LOGOS[n].tone}`}>
                          <img src={CLIENT_LOGOS[n].src} alt={n} loading="lazy" />
                        </div>
                      ) : (
                        <div key={n} className="rn-logowall__item">
                          <span className="rn-logowall__mark" aria-hidden="true">{initials(n)}</span>
                          <span>{n}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="rn-tiles">
            {INDUSTRIES.map((i) => (
              <div key={i.title} className="rn-tile">
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rn-section rn-section--alt">
        <div className="rn-container">
          <div className="rn-head">
            <span className="rn-eyebrow">Working with us</span>
            <h2 className="rn-h2">What every client <em>gets.</em></h2>
          </div>
          <div className="rn-cards">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rn-card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <div className="rn-steps" style={{ marginTop: 16 }}>
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

      <section className="rn-section">
        <div className="rn-container">
          <div className="rn-head rn-head--center">
            <span className="rn-eyebrow">Technology</span>
            <h2 className="rn-h2">Tools we build <em>with.</em></h2>
          </div>
          <div className="rn-chips rn-chips--lg rn-chips--center" aria-label="Technologies we work with">
            {TECH.map((t) => <span key={t} className="rn-chip">{t}</span>)}
          </div>
        </div>
      </section>

      <section className="rn-section rn-section--dark rn-cta">
        <div className="rn-container">
          <div className="rn-cta__box">
            <h2 className="rn-h2">Become our next <em>success story.</em></h2>
            <p>Tell us about your project. Our founder replies personally.</p>
            <div className="rn-actions" style={{ marginTop: 0 }}>
              <Link to="/contact-us" className="rn-btn rn-btn--light">Contact us <Arrow /></Link>
              <Link to="/case-studies" className="rn-btn rn-btn--ghost">Case studies</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
