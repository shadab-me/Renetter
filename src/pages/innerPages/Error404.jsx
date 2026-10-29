import React from "react";
import { Link } from "react-router-dom";
import Layout, { Arrow } from "../../layout/Layout";

const Error404 = () => (
  <Layout path="/404" title="Page not found | Renetter" noindex stickyCta={false}>
    <section className="rn-hero">
      <div className="rn-container">
        <span className="rn-eyebrow">404</span>
        <h1 className="rn-h1">This page does not exist.</h1>
        <p className="rn-lead">The link may be old or mistyped. Head back to the homepage or see what we do.</p>
        <div className="rn-actions">
          <Link to="/" className="rn-btn">Back home <Arrow /></Link>
          <Link to="/services" className="rn-btn rn-btn--ghost">Services</Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Error404;
