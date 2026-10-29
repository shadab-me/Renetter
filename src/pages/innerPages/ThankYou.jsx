import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout, { Arrow } from "../../layout/Layout";
import { trackLead } from "../../utils/lead";
import { SITE } from "../../data/site";

const ThankYou = () => {
  const { state } = useLocation();

  // Conversion event for GA4, Meta Pixel and LinkedIn. Ad platforms count this page view.
  useEffect(() => {
    trackLead(state?.source || "direct");
  }, [state]);

  return (
    <Layout path="/thank-you" title="Thank you | Renetter" noindex stickyCta={false}>
      <section className="rn-hero">
        <div className="rn-container">
          <span className="rn-eyebrow">Received</span>
          <h1 className="rn-h1">Thank you. We will be in touch.</h1>
          <p className="rn-lead">
            We reply within one business day ({SITE.hours}). If it is urgent, message us on WhatsApp.
          </p>
          <div className="rn-actions">
            <a className="rn-btn" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp us <Arrow />
            </a>
            <Link to="/services" className="rn-btn rn-btn--ghost">Browse services</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
