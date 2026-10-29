// Single source of truth for contact details, services, and proof.
// Edit here and every page, schema block and form picks it up.

export const SITE = {
  name: "Renetter",
  url: "https://renetter.com",
  email: "info@renetter.com",
  phoneDisplay: "+91 94110 78560",
  whatsapp: "919411078560",
  location: "Moradabad, Uttar Pradesh, India",
  hours: "Mon–Sat, 9:00–23:00 IST",
  social: {
    linkedin: "https://www.linkedin.com/company/renetter",
    instagram: "https://www.instagram.com/renetter_agency",
    twitter: "https://twitter.com/renetter",
  },
};

// The Insights section holds original, general-advice articles with no
// statistics or invented client stories. Keep it that way when adding more.
export const SHOW_BLOG = true;

export const SERVICES = [
  {
    id: "web-development",
    title: "Websites & web apps",
    short: "Fast, conversion-focused sites and web products built in React and Next.js.",
    icon: "web",
  },
  {
    id: "ai-automation",
    title: "AI automation",
    short: "Chatbots, lead qualification and back-office workflows that run without you.",
    icon: "ai",
  },
  {
    id: "seo-growth",
    title: "SEO & growth marketing",
    short: "Search, paid ads and analytics set up to bring in enquiries you can measure.",
    icon: "growth",
  },
];

export const PROCESS = [
  { step: "01", title: "Discover", text: "A 30-minute call on your goals, customers and what is not working today." },
  { step: "02", title: "Scope", text: "A written plan with fixed deliverables, timeline and price. No surprises." },
  { step: "03", title: "Build", text: "Weekly demos so you see real progress, not status reports." },
  { step: "04", title: "Grow", text: "Launch, measure, and improve the numbers that matter to your business." },
];

export const PRINCIPLES = [
  { title: "Fixed-scope quotes", text: "You know the price and the deliverables before we start." },
  { title: "Weekly demos", text: "A working build to review every week." },
  { title: "You own everything", text: "Code, accounts and content are yours from day one." },
];

// Ways to work together. No prices are listed until they are confirmed.
export const ENGAGEMENTS = [
  {
    title: "Fixed-scope project",
    text: "A website, web app or automation with a written scope, timeline and price. Best when you know the outcome you want.",
    tag: "Most common",
  },
  {
    title: "Monthly growth retainer",
    text: "Ongoing SEO, paid ads, landing page tests and reporting, with a monthly call on leads and next steps.",
    tag: "For steady growth",
  },
  {
    title: "Dedicated engineer",
    text: "A senior engineer joins your team for a set period to ship features, fix performance or build an AI prototype.",
    tag: "For product teams",
  },
];

export const FAQ = [
  {
    q: "How much does a project cost?",
    a: "Every project is scoped and quoted in writing after a short discovery call. Landing pages and small sites sit at the low end; custom web apps and AI systems depend on scope. Share your budget range on the contact form and we will tell you honestly what fits.",
  },
  {
    q: "How long does a website take?",
    a: "A focused marketing site usually ships in two to four weeks. Larger web apps and AI automation projects are planned in phases so something useful goes live early.",
  },
  {
    q: "Can you work with teams in the US, UK or Gulf?",
    a: "Yes. We work remotely from India and keep overlap hours with your time zone for calls and weekly demos.",
  },
  {
    q: "Do you handle hosting, SEO and ads after launch?",
    a: "Yes. We can host, maintain and improve your site, set up search and paid campaigns, and report on leads each month.",
  },
  {
    q: "Can I talk to you on WhatsApp?",
    a: "Yes. Message us on WhatsApp any time during our working hours and we will reply the same day.",
  },
];

// Numbers here must stay true. Do not add client counts, years or results
// until you can back them up.
export const STATS = [
  { value: "3", label: "Core services under one roof" },
  { value: "US · UK · Gulf", label: "Markets we serve" },
  { value: "1 day", label: "Typical first reply" },
];

export const INDUSTRIES = [
  { kind: "edu", title: "Education technology", text: "Student-facing platforms, funnels and support automation." },
  { kind: "saas", title: "Software and SaaS", text: "Marketing sites, web apps and AI features for product teams." },
  { kind: "creator", title: "Creators and media", text: "Sites, funnels and automation for YouTubers and content businesses." },
  { kind: "local", title: "Local and service businesses", text: "Fast sites and search foundations for clinics, property and trades." },
];

// REAL, approved client work only. The Case studies and Clients pages, the
// "Trusted by" strip and the structured data all read from these two lists and
// stay hidden while they are empty.
//
// CLIENT_GROUPS: names grouped by industry, as on the Clients page.
//   { industry: "Creators and media", names: ["Client A", "Client B"] }
// Real logos copied from each company's own site (public/clients). `tone` is the
// tile the logo needs: "light" = dark artwork, "dark" = white artwork.
export const CLIENT_LOGOS = {
  BigBinary: { src: "/clients/bigbinary.svg", tone: "light" },
  "Leverage Edu": { src: "/clients/leverageedu.svg", tone: "light" },
  "Q3 Technologies": { src: "/clients/q3tech.png", tone: "dark" },
  AltCampus: { src: "/clients/altcampus.svg", tone: "light" },
  Girikon: { src: "/clients/girikon.png", tone: "light" },
};

export const CLIENT_GROUPS = [
  { industry: "Teams we have worked with", names: ["AltCampus", "Leverage Edu", "BigBinary", "Q3 Technologies", "Girikon"] },
];

// CASE_STUDIES: one entry per project.
//   { industry: "Creators", topic: "Website", title: "What we built for X",
//     client: "X, a short description", stack: "React, Next.js",
//     services: ["Website", "SEO"], situation: "...", built: "...",
//     quote: { text: "...", name: "...", role: "..." },   // quote is optional
//     logo: "Name",                                       // optional: a CLIENT_LOGOS key, shown instead of the illustration
//     image: "/images/x.png", imageAlt: "..." }           // optional real screenshot (put it in public/images)
export const CASE_STUDIES = [
  // DRAFT: the needs below are inferred from the platform's business model, not
  // client-confirmed. Prune anything the founder did not actually build.
  {
    industry: "Enterprise and marketplaces",
    topic: "Platform engineering",
    title: "A platform that puts enterprise projects in front of senior engineers",
    client: "AltCampus, a freelance-style platform where large enterprises, including banks, send projects to senior engineers",
    services: ["Product engineering", "Web application"],
    logo: "AltCampus",
    situation:
      "Large enterprises, including banks, wanted experienced engineers for project work without a long hiring cycle. AltCampus runs the platform where those projects are posted and picked up by senior engineers with more than 15 years of experience. A marketplace like this lives or dies on trust: both sides need to know the other is serious.",
    needs: [
      "A clear way for an enterprise to describe a project and send it to the right engineers",
      "A smaller, vetted pool of senior engineers instead of an open marketplace",
      "Handling of confidential project information, which matters most to banks",
      "A simple workflow from a posted project to accepted work",
      "Two audiences with different needs: enterprise buyers and senior engineers",
    ],
    built:
      "Our founder worked on the platform's engineering, building the product that enterprise clients and senior engineers use day to day.",
  },
];

// SAMPLE_STUDIES: fictional, unnamed briefs written in the case-study format so
// visitors can see how a project is scoped and delivered. They are always
// labelled "Sample" on the site, name no client and state no results.
export const SAMPLE_STUDIES = [
  {
    industry: "Local services",
    topic: "Website and local SEO",
    title: "A clinic site rebuilt around booking requests",
    client: "A regional clinic group (fictional)",
    stack: "Next.js, headless CMS, Google Business Profile",
    services: ["Website", "SEO"],
    situation:
      "A slow, dated site where the phone number was the only way to book, with service pages that did not match what people search for.",
    built:
      "A fast mobile-first site with one page per treatment, an online booking request form, structured data and a Google Business Profile clean-up, measured against a baseline taken before launch.",
  },
  {
    industry: "Operations-heavy SMB",
    topic: "AI automation",
    title: "Enquiries answered in minutes instead of hours",
    client: "A multi-branch services company (fictional)",
    stack: "n8n or Make, OpenAI API, CRM, WhatsApp Business",
    services: ["AI automation"],
    situation:
      "Quote requests arrived by form, email and WhatsApp, and were answered by hand whenever someone had time.",
    built:
      "One workflow that reads each enquiry, drafts a reply for review, logs it in the CRM and offers calendar slots, with a human approval step and a weekly summary.",
  },
  {
    industry: "Creators and media",
    topic: "Website and funnel",
    title: "A channel website that turns viewers into subscribers",
    client: "A YouTube educator (fictional)",
    stack: "React, Stripe, email platform, GA4",
    services: ["Website", "Automation", "Analytics"],
    situation:
      "Traffic came from videos but the link in the description led to a generic page with no clear next step.",
    built:
      "A focused home page, a lead magnet with an email sequence, a simple paid product page and tracking that shows which videos bring subscribers.",
  },
];

// Technologies we build with. Text only, no third-party logos, so nothing here
// implies a partnership.
export const TECH = [
  "React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL", "Tailwind CSS",
  "Shopify", "WordPress", "Stripe", "OpenAI API", "Make", "n8n",
  "Google Analytics 4", "Search Console", "Looker Studio",
];
