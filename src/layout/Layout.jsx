import React, { useEffect, useId, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SITE, SERVICES, SHOW_BLOG } from "../data/site";
import "../assets/css/design_system.css";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/clients", label: "Clients" },
  ...(SHOW_BLOG ? [{ to: "/blog", label: "Blog" }] : []),
];

export const Arrow = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// Same mark as /favicon.svg so the brand reads the same everywhere.
export const LogoMark = () => {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="6" y1="2" x2="58" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id})`} />
      <path d="M22 47V17h12.5a9.5 9.5 0 0 1 0 19H22M34 36l11 11" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="47" cy="17" r="3.4" fill="#67E8F9" />
    </svg>
  );
};

export const Logo = () => (
  <Link to="/" className="rn-logo" aria-label="Renetter home">
    <LogoMark />
    <span>Renetter</span>
  </Link>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`rn-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="rn-container rn-header__row">
        <Logo />
        <div className="rn-header__end">
          <Link to="/contact-us" className="rn-btn rn-btn--sm rn-header__contact">Contact us</Link>
          <button
            type="button"
            className="rn-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="rn-nav"
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
        <nav id="rn-nav" className={`rn-nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : undefined)}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact-us" className="rn-btn rn-btn--sm">
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="rn-footer">
    <div className="rn-container">
      <div className="rn-footer__grid">
        <div className="rn-footer__brand">
          <Logo />
          <p>Websites, AI automation and growth marketing for ambitious businesses in the US, UK and Gulf.</p>
          <div className="rn-footer__cta">
            <Link to="/contact-us" className="rn-btn rn-btn--sm">Talk to us <Arrow size={16} /></Link>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.id}><Link to={`/services/${s.id}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/case-studies">Case studies</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            {SHOW_BLOG && <li><Link to="/blog">Blog</Link></li>}
            <li><Link to="/free-audit">Free audit</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Talk to us</h4>
          <ul>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp {SITE.phoneDisplay}</a></li>
            <li><a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="rn-footer__bottom">
        <span>&copy; {new Date().getFullYear()} Renetter. All rights reserved.</span>
        <span>{SITE.location}</span>
      </div>
    </div>
  </footer>
);

// Fades sections in once as they scroll into view.
const useReveal = (key) => {
  useEffect(() => {
    const els = document.querySelectorAll(".rn-reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          // Also reveal blocks the reader has already scrolled past (anchor jumps, fast scrolls).
          if (e.isIntersecting || e.boundingClientRect.bottom < 0) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
};

// The mobile CTA bar only appears once the hero (which has its own buttons) is out of view.
const useScrolledPast = (offset) => {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return past;
};

const CRUMB_NAMES = {
  services: "Services",
  "case-studies": "Case studies",
  clients: "Clients",
  about: "About",
  blog: "Insights",
  "contact-us": "Contact",
  "free-audit": "Free audit",
};

// BreadcrumbList structured data derived from the URL path.
const breadcrumbs = (path, title) => {
  const parts = path.split("/").filter(Boolean);
  if (!parts.length) return null;
  const items = [{ name: "Home", url: SITE.url }];
  parts.forEach((seg, i) => {
    const url = `${SITE.url}/${parts.slice(0, i + 1).join("/")}`;
    const last = i === parts.length - 1;
    items.push({ name: CRUMB_NAMES[seg] || (last ? title.split("|")[0].trim() : seg), url });
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
};

const Layout = ({ title, description, path = "", children, stickyCta = true, noindex = false, jsonLd = null }) => {
  const { pathname, hash } = useLocation();
  const crumbs = noindex ? null : breadcrumbs(path, title);
  useReveal(pathname);
  const showSticky = useScrolledPast(520);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="rn">
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={`${SITE.url}${path}`} />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:url" content={`${SITE.url}${path}`} />
        <meta property="og:image" content={`${SITE.url}/img/og/renetter-og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE.url}/img/og/renetter-og.png`} />
        <meta property="og:type" content={path.startsWith("/blog/") ? "article" : "website"} />
        <meta name="twitter:title" content={title} />
        {description && <meta name="twitter:description" content={description} />}
        {noindex && <meta name="robots" content="noindex, nofollow" />}
        {crumbs && <script type="application/ld+json">{JSON.stringify(crumbs)}</script>}
        {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      </Helmet>
      <a href="#main" className="rn-skip">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      {stickyCta && (
        <div className={`rn-sticky-cta${showSticky ? " is-visible" : ""}`}>
          <Link to="/contact-us" className="rn-btn">Talk to us <Arrow /></Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
