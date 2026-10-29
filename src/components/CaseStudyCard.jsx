import React from "react";
import { CLIENT_LOGOS } from "../data/site";

// BigBinary-style case study block: numbered label, title, client / stack /
// services facts, then what the situation was and what was built.
const CaseStudyCard = ({ study, index }) => (
  <article className="rn-study">
    <p className="rn-study__label">
      {String(index + 1).padStart(2, "0")} · {study.industry} · {study.topic}{study.sample ? " · Sample" : ""}
    </p>
    <h3 className="rn-study__title">{study.title}</h3>
    <dl className="rn-study__facts">
      <div><dt>Client</dt><dd>{study.client}</dd></div>
      {study.stack && <div><dt>Stack</dt><dd>{study.stack}</dd></div>}
      {study.services?.length > 0 && <div><dt>Services</dt><dd>{study.services.join(", ")}</dd></div>}
    </dl>
    {study.image ? (
      <img className="rn-viz" src={study.image} alt={study.imageAlt || ""} loading="lazy" />
    ) : CLIENT_LOGOS[study.logo] ? (
      <div className={`rn-study__logo is-${CLIENT_LOGOS[study.logo].tone}`}>
        <img src={CLIENT_LOGOS[study.logo].src} alt={study.logo} />
      </div>
    ) : null}
    <div className="rn-study__cols">
      <div><h4>The situation</h4><p>{study.situation}</p></div>
      <div><h4>What we built</h4><p>{study.built}</p></div>
    </div>
    {study.needs?.length > 0 && (
      <div className="rn-study__needs">
        <h4>What the client needed</h4>
        <ul>{study.needs.map((n) => <li key={n}>{n}</li>)}</ul>
      </div>
    )}
    {study.quote && (
      <blockquote className="rn-study__quote">
        <p>“{study.quote.text}”</p>
        <footer>{study.quote.name}{study.quote.role ? `, ${study.quote.role}` : ""}</footer>
      </blockquote>
    )}
  </article>
);

export default CaseStudyCard;
