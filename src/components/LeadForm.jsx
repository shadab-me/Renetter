import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitLead } from "../utils/lead";
import { SITE } from "../data/site";

const SERVICE_OPTIONS = [
  "Website or web app",
  "AI automation",
  "SEO & growth marketing",
  "Not sure yet",
];
const BUDGET_OPTIONS = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $10,000", "$10,000+"];

const LeadForm = ({ source = "contact", submitLabel = "Send enquiry", showWebsite = false }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const next = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Please enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) {
      e.currentTarget.querySelector("[aria-invalid='true']")?.focus();
      return;
    }
    setBusy(true);
    setFailed(false);
    try {
      await submitLead({ ...data, source });
      navigate("/thank-you", { state: { source } });
    } catch (err) {
      setFailed(true);
      setBusy(false);
    }
  };

  const field = (id, label, props = {}, optional = false) => (
    <div className="rn-field">
      <label htmlFor={`${source}-${id}`}>
        {label} {optional && <span className="rn-opt">(optional)</span>}
      </label>
      <input
        id={`${source}-${id}`}
        name={id}
        aria-invalid={errors[id] ? "true" : undefined}
        aria-describedby={errors[id] ? `${source}-${id}-err` : undefined}
        {...props}
      />
      {errors[id] && <p className="rn-error" id={`${source}-${id}-err`} role="alert">{errors[id]}</p>}
    </div>
  );

  return (
    <form className="rn-form" onSubmit={onSubmit} noValidate>
      <div className="rn-form__row">
        {field("name", "Your name", { type: "text", autoComplete: "name", required: true })}
        {field("email", "Work email", { type: "email", autoComplete: "email", required: true })}
      </div>
      <div className="rn-form__row">
        {field("company", "Company", { type: "text", autoComplete: "organization" }, true)}
        {showWebsite
          ? field("website", "Your website", { type: "url", placeholder: "https://", autoComplete: "url" }, true)
          : (
            <div className="rn-field">
              <label htmlFor={`${source}-service`}>What do you need?</label>
              <select id={`${source}-service`} name="service" defaultValue="">
                <option value="" disabled>Select one</option>
                {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          )}
      </div>
      <div className="rn-field">
        <label htmlFor={`${source}-budget`}>Budget <span className="rn-opt">(optional)</span></label>
        <select id={`${source}-budget`} name="budget" defaultValue="">
          <option value="">Prefer to discuss</option>
          {BUDGET_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="rn-field">
        <label htmlFor={`${source}-message`}>
          {showWebsite ? "What should we look at?" : "Tell us about your project"} <span className="rn-opt">(optional)</span>
        </label>
        <textarea id={`${source}-message`} name="message" />
      </div>
      <div>
        <button type="submit" className="rn-btn" disabled={busy}>
          {busy ? "Sending…" : submitLabel}
        </button>
        <p className={failed ? "rn-error" : "rn-note"} style={{ marginTop: 14 }} aria-live="polite">
          {failed
            ? <>Something went wrong. Please try again or email <a className="rn-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</>
            : "We reply within one business day. No spam, ever."}
        </p>
      </div>
    </form>
  );
};

export default LeadForm;
