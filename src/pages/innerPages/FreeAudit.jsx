import React from "react";
import Layout from "../../layout/Layout";
import LeadForm from "../../components/LeadForm";

const CHECKS = [
  { title: "Speed and mobile experience", text: "Where your site loses visitors on phones." },
  { title: "Messaging and calls to action", text: "Whether a new visitor knows what you do and what to click." },
  { title: "Search basics", text: "Technical and on-page issues holding back your rankings." },
  { title: "One automation to try first", text: "A repetitive task AI could take off your team." },
];

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const FreeAudit = () => (
  <Layout
    path="/free-audit"
    title="Free website audit: 3 changes to get more enquiries | Renetter"
    description="Send us your website. We will review it and send three specific changes to bring in more enquiries. Free, no obligation."
    stickyCta={false}
  >
    <section className="rn-hero">
      <div className="rn-container">
        <div className="rn-lp-grid">
          <div>
            <span className="rn-pill"><i /> Free, no obligation</span>
            <h1 className="rn-h1" style={{ fontSize: "clamp(2.4rem, 5.4vw, 4rem)", marginTop: 22 }}>
              Get three changes that would bring in <em>more enquiries.</em>
            </h1>
            <p className="rn-lead" style={{ margin: "24px 0 36px" }}>
              Share your website and we will review it by hand. You get a short written report, free and with no obligation.
            </p>
            <ul className="rn-checks">
              {CHECKS.map((c) => (
                <li key={c.title}>
                  <Check />
                  <div>
                    <strong>{c.title}</strong>
                    <span>{c.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rn-panel">
            <h2 style={{ fontSize: "1.5rem", marginBottom: 20 }}>Request your audit</h2>
            <LeadForm source="free-audit" submitLabel="Send my audit request" showWebsite />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default FreeAudit;
