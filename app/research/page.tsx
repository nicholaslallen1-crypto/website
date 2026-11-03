import type { Metadata } from "next";
import { CTA, PageHero, SectionHeading } from "@/components/ui";

const coverage = [
  { no: "01", title: "Macroeconomics", tag: "GROWTH · INFLATION · POLICY", desc: "A framework for interpreting economic regimes, policy transmission and the liquidity conditions shaping markets.", focus: ["Growth and inflation regimes", "Monetary and fiscal policy", "Liquidity and financial conditions", "Scenario and risk assessment"] },
  { no: "02", title: "Equity research", tag: "COMPANIES & VALUATION", desc: "Fundamental and quantitative analysis of listed businesses, earnings drivers, market expectations and valuation sensitivities.", focus: ["Company operating drivers", "Financial statement analysis", "Valuation and scenario modelling", "Catalysts and market expectations"] },
  { no: "03", title: "Rates & credit", tag: "FIXED INCOME", desc: "Research into interest-rate dynamics, credit conditions and the macroeconomic forces that influence debt markets.", focus: ["Monetary policy transmission", "Sovereign yield dynamics", "Credit spreads and conditions", "Inflation and duration sensitivity"] },
  { no: "04", title: "Foreign exchange", tag: "CURRENCIES", desc: "Cross-country analysis of currency markets, policy divergence and the interaction between macroeconomics and capital flows.", focus: ["Relative monetary policy", "Economic differentials", "Market positioning and valuation", "Cross-asset sensitivities"] },
  { no: "05", title: "Commodities", tag: "REAL ASSETS", desc: "A framework for understanding cyclical, structural and geopolitical drivers of commodity markets.", focus: ["Supply and demand balances", "Inventory dynamics", "Industrial activity and growth", "Currency and policy influences"] },
];

export const metadata: Metadata = { title: "Research Capabilities", description: "Allen & Cooper's research coverage across macroeconomics, equities, rates, FX and commodities." };

export default function Research() {
  return (
    <>
      <PageHero eyebrow="RESEARCH CAPABILITIES" title="A connected perspective across global markets." description="Distinct asset classes. Interdependent drivers. Our research framework considers both specific fundamentals and the wider economic forces shaping outcomes." />
      <section className="section"><div className="container"><div className="scope-banner"><div><strong>Current focus: research & market intelligence.</strong><p>Research outputs are scoped to the brief and may include public commentary, bespoke analysis, datasets, dashboards and private reporting.</p></div><span>Available now</span></div><SectionHeading eyebrow="AREAS OF COVERAGE" title="Five pillars of research."/><div className="coverage-list">{coverage.map((item) => <article className="coverage-item" key={item.no}><div className="coverage-left"><span className="small-num">{item.no} / {item.tag}</span><h3>{item.title}</h3><p>{item.desc}</p></div><div className="coverage-right"><span className="micro-label">ANALYTICAL FOCUS</span>{item.focus.map((focus) => <div key={focus}>{focus}<span aria-hidden="true">↗</span></div>)}</div></article>)}</div></div></section>
      <section className="section tinted"><div className="container two-col"><SectionHeading eyebrow="HOW RESEARCH IS USED" title="Designed to inform better questions."/><div className="prose"><p>Allen & Cooper can support an investment team, research function or professional reader with structured thematic analysis, market-driver assessments, company-specific frameworks and scenario-based perspectives.</p><p>Specific access terms, deliverables and commercial arrangements are agreed around the scope of the work. Any strategy or portfolio service is a separate future tier and is not presented as currently available on this page.</p></div></div></section>
      <CTA title="Discuss a research brief" description="Share the market, the decision and the depth of analysis you are looking for." />
    </>
  );
}


