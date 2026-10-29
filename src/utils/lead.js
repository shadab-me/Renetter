import { SITE } from "../data/site";

// Set VITE_FORM_ENDPOINT (Formspree, Web3Forms, or your own API) to receive
// leads by email/CRM. Without it, the enquiry opens WhatsApp as a fallback.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export async function submitLead(data) {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Lead submission failed");
    return;
  }

  const lines = [
    "New enquiry from renetter.com",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company && `Company: ${data.company}`,
    data.service && `Service: ${data.service}`,
    data.budget && `Budget: ${data.budget}`,
    data.website && `Website: ${data.website}`,
    data.message && `Message: ${data.message}`,
    data.source && `Source: ${data.source}`,
  ].filter(Boolean);
  window.open(
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`,
    "_blank",
    "noopener"
  );
}

// Fires conversion events if GA4 / Meta Pixel / LinkedIn Insight are installed.
export function trackLead(label) {
  try {
    if (window.gtag) window.gtag("event", "generate_lead", { event_label: label });
    if (window.fbq) window.fbq("track", "Lead");
    if (window.lintrk) window.lintrk("track", { conversion_id: window.__LI_CONVERSION_ID__ });
  } catch (e) {
    /* tracking must never break the form */
  }
}
