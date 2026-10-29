import React from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const PATHS = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2.5" />
      <path d="M3 9h18M8 21h8M12 18v3" />
    </>
  ),
  ai: (
    <>
      <rect x="5" y="7" width="14" height="11" rx="3" />
      <path d="M12 7V4M9 12v1.5M15 12v1.5M9.5 16h5M3 12h2M19 12h2" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="M8 15l3.5-4 3 2.5L20 7" />
      <path d="M16 7h4v4" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 5.2a3 3 0 010 5.6M18.5 14.8c1.5.7 2.5 2.2 2.5 4.2" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 19c.3-2 1-3.2 2.2-4.2M14 4c3.8-.2 6 .2 6 .2s.4 2.2.2 6c-1.4 3-4.4 5.2-7.4 6l-4-4C9.8 8.4 12 5.4 14 4z" />
      <circle cx="15" cy="9" r="1.4" />
      <path d="M8.5 15.5L5 19l-1-1 3.5-3.5" />
    </>
  ),
  shield: <path d="M12 3l7 3v5.5c0 4.4-2.9 8-7 9.5-4.1-1.5-7-5.1-7-9.5V6l7-3zM9 12l2.2 2.2L15.5 10" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  chat: <path d="M4 5h16v11H9l-5 4V5z" />,
};

const Icon = ({ name, size = 24 }) => (
  <svg {...base} width={size} height={size}>
    {PATHS[name] || null}
  </svg>
);

export default Icon;
