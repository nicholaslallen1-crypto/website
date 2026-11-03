export const site = {
  name: "Allen & Cooper",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://allenandcooper.com",
  tagline: "Research for the decisions that matter.",
  description:
    "Allen & Cooper is an independent macroeconomic, market-intelligence and investment research firm built for a changing investment landscape.",
  companyNumber: "Available on request",
  registeredOffice: "Available on request",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Enquiries available via the contact form",
  regulatoryStatus:
    "The firm is currently presenting research and market-intelligence services. Any regulated strategy or capital-management offering is subject to separate legal and regulatory review.",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Offerings", href: "/offerings" },
  { label: "Research", href: "/research" },
  { label: "Methodology", href: "/methodology" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const productTiers = [
  {
    number: "01",
    label: "Research & intelligence",
    title: "Make the market more intelligible.",
    description:
      "Accessible macroeconomic and market research for curious readers, retail investors, universities and investment communities.",
    audience: "Retail research",
    status: "Current focus",
    statusTone: "current",
  },
  {
    number: "02",
    label: "Professional research",
    title: "Turn evidence into an institutional edge.",
    description:
      "Bespoke research, dashboards and market intelligence for professional investors, research teams, family offices and institutions.",
    audience: "Institutional research",
    status: "Current focus",
    statusTone: "current",
  },
  {
    number: "03",
    label: "Strategy & capital",
    title: "A roadmap for higher-conviction work.",
    description:
      "Investment theses, portfolio strategy and eventual capital management are planned as later-stage capabilities, subject to legal and regulatory review.",
    audience: "Future regulated tiers",
    status: "Roadmap",
    statusTone: "future",
  },
];

