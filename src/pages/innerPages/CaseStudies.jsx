import React from "react";
import { Link } from "react-router-dom";
import Layout, { Arrow } from "../../layout/Layout";
import CaseStudyCard from "../../components/CaseStudyCard";
import { CASE_STUDIES, SAMPLE_STUDIES, ENGAGEMENTS } from "../../data/site";

const CaseStudies = () => {
  const hasReal = CASE_STUDIES.length > 0;

  return (
    <Layout
      path="/case-studies"
      title="Case studies: websites, AI automation and SEO | Renetter"
      description="What the client needed and what we built. Real Renetter projects across web applications, AI automation and growth marketing, with no invented results."
    >
      <section className="rn-page-hero">
        <div className="rn-container">
          <span className="rn-eyebrow">Case studies</span>
          {hasReal ? (
            <h1 className="rn-h1">Real work with <em>real clients.</em></h1>
          ) : (
            <h1 className="rn-h1">How we approach <em>real projects.</em></h1>
          )}
          <p className="rn-lead">
            {hasReal
              ? "What the client needed and what we built. We add results only when we can stand behind the numbers."
              : "The kinds of projects we build for startups, creators and growing businesses, and what goes into each one."}
          </p>
        </div>
      </section>

      {hasReal && (
        <section className="rn-section">
          <div className="rn-container">
            {CASE_STUDIES.map((c, i) => <CaseStudyCard key={c.title} study={c} index={i} />)}
          </div>
        </section>
      )}

      <section className="rn-section rn-section--alt">
        <div className="rn-container">
          <div className="rn-head">
            <span className="rn-eyebrow">Sample write-ups</span>
            <h2 className="rn-h2">How a case study <em>reads.</em></h2>
            <p>
              Three fictional briefs in the format we use for real projects: situation, what we built, stack and
              services. They name no client and claim no results.
            </p>
          </div>
          <div>
            {SAMPLE_STUDIES.map((c, i) => <CaseStudyCard key={c.title} study={{ ...c, sample: true }} index={i} />)}
          </div>
        </div>
      </section>

      <section className="rn-section">
        <div className="rn-container">
          <div className="rn-head">
            <span className="rn-eyebrow">Engagement</span>
            <h2 className="rn-h2">How we work <em>with clients.</em></h2>
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

      <section className="rn-section rn-section--dark rn-cta">
        <div className="rn-container">
          <div className="rn-cta__box">
            <h2 className="rn-h2">Become our next <em>case study.</em></h2>
            <p>Tell us about your project. Our founder replies personally.</p>
            <Link to="/contact-us" className="rn-btn rn-btn--light">Contact us <Arrow /></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
