import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Layout, { Arrow } from "../../layout/Layout";
import Icon from "../../components/Icons";
import { SITE, SERVICES, PROCESS, FAQ } from "../../data/site";
import { SERVICE_DETAILS } from "../../data/serviceDetails";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = SERVICES.find((s) => s.id === serviceId);
  const detail = SERVICE_DETAILS[serviceId];

  if (!service || !detail) return <Navigate to="/services" replace />;

  const others = SERVICES.filter((s) => s.id !== service.id);

  return (
    <Layout
      path={`/services/${service.id}`}
      title={`${service.title} for growing businesses | Renetter`}
      description={`${service.short} ${detail.intro}`.slice(0, 160)}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.short,
        url: `${SITE.url}/services/${service.id}`,
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        areaServed: ["US", "GB", "AE", "SA"],
      }}
    >
      <section className="rn-page-hero">
        <div className="rn-container">
          <span className="rn-eyebrow">{service.title}</span>
          <h1 className="rn-h1">{detail.headline}</h1>
          <p className="rn-lead">{detail.intro}</p>
          <div className="rn-actions">
            <Link to="/contact-us" className="rn-btn">Talk to us <Arrow /></Link>
            <Link to="/services" className="rn-btn rn-btn--ghost">All services</Link>
          </div>
        </div>
      </section>

      <section className="rn-section">
        <div className="rn-container">
          <div className="rn-head">
            <h2 className="rn-h2">What is <em>included.</em></h2>
            <p>Scoped to your goals, so you only pay for what you need.</p>
          </div>
          <div className="rn-feature-grid rn-feature-grid--2">
            {detail.offers.map((o) => (
              <div key={o.title} className="rn-feature">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
          <ul className="rn-tags" aria-label="Tools we use">
            {detail.stack.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>

      <section className="rn-section rn-section--alt">
        <div className="rn-container">
          <div className="rn-head">
            <h2 className="rn-h2">How we <em>work.</em></h2>
            <p>The same four steps on every project.</p>
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

      <section className="rn-section">
        <div className="rn-container">
          <div className="rn-feature-grid">
            {detail.outcomes.map((o) => (
              <div key={o.title} className="rn-feature">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rn-section rn-section--alt">
        <div className="rn-container">
          <div className="rn-split">
            <div>
              <h2 className="rn-h2">Common <em>questions.</em></h2>
            </div>
            <div className="rn-faq">
              {FAQ.slice(0, 3).map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rn-section">
        <div className="rn-container">
          <div className="rn-head">
            <h2 className="rn-h2">Also from <em>Renetter.</em></h2>
          </div>
          <div className="rn-cards rn-cards--2">
            {others.map((s) => (
              <Link key={s.id} to={`/services/${s.id}`} className="rn-card">
                <span className="rn-card__icon"><Icon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="rn-card__more">Explore <Arrow size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rn-section rn-section--dark rn-cta">
        <div className="rn-container">
          <div className="rn-cta__box">
            <h2 className="rn-h2">Let us look at your {service.title.toLowerCase()}.</h2>
            <p>Tell us what you are working on and we will reply within one business day with honest next steps.</p>
            <Link to="/contact-us" className="rn-btn rn-btn--light">Contact us <Arrow /></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
