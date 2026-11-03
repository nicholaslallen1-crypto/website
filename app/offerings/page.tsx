import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Clock3 } from "lucide-react";
import { CTA, PageHero, SectionHeading } from "@/components/ui";
import { productTiers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offerings",
  description: "Allen & Cooper's product architecture across retail research, institutional research and future strategy.",
};

const currentServices = [
  { title: "Retail research", description: "Readable, data-backed commentary that makes macroeconomics and markets accessible without losing analytical substance.", points: ["Monthly research and market commentary", "Clear explanations of economic and market developments", "Charts, summaries and educational context"] },
  { title: "Institutional research", description: "Bespoke market intelligence for professional teams that need deeper coverage, more context and a research process shaped around their questions.", points: ["Macroeconomic and market regime analysis", "Custom indicators, datasets and chart packs", "Private reporting, briefings and dashboards"] },
];

const futureServices = [
  { title: "Investment theses", description: "Potential future strategy research, including trade ideas and scenario-based theses, subject to legal and regulatory review.", points: ["Selected-asset and macro theses", "Scenario, risk and invalidation frameworks", "Monitoring and update workflows"] },
  { title: "Portfolio strategy", description: "A future capability for clients seeking multi-asset construction, risk management and portfolio-level awareness.", points: ["Model portfolios and allocation frameworks", "Position sizing, diversification and drawdown analysis", "Rebalancing and portfolio monitoring"] },
  { title: "Capital management", description: "A long-term ambition, not a current public offering. Any fund or capital-management vehicle would require full legal, compliance and regulatory preparation.", points: ["Fund structure, custody and administration", "Formal investor documentation", "Independent oversight and reporting"] },
];

export default function Offerings() {
  return (
    <>
      <PageHero eyebrow="OFFERINGS & PRODUCT ARCHITECTURE" title="A platform designed to compound." description="Allen & Cooper starts with research and market intelligence, then creates a clear pathway toward deeper professional strategy work. Each tier is staged deliberately." />
      <section className="section">
        <div className="container">
          <div className="product-intro"><SectionHeading eyebrow="THE LADDER" title="Three levels of sophistication." /><p>The product range is structured around client need, analytical depth and regulatory responsibility. Current services are presented plainly; future tiers are signposted without being advertised as available.</p></div>
          <div className="product-grid product-grid--page">
            {productTiers.map((tier) => <article className={tier.statusTone === "future" ? "product-card product-card--future" : "product-card"} key={tier.number}><div className="product-topline"><span className="product-number">{tier.number} / TIER</span><span className="product-label">{tier.label}</span></div><span className={tier.statusTone === "future" ? "status-pill future" : "status-pill"}>{tier.status}</span><h3>{tier.title}</h3><p className="product-description">{tier.description}</p><div className="product-meta">Primary audience<strong>{tier.audience}</strong></div></article>)}
          </div>
          <div className="tier-note" style={{ marginTop: 22 }}><strong>Regulatory clarity</strong><span>Research and market-intelligence materials are not personal investment advice. Investment theses, portfolio strategy and capital management may constitute regulated activity depending on the content, client, jurisdiction and delivery model, and are not currently advertised as available.</span></div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHeading eyebrow="AVAILABLE NOW" title="Research with a clear job to do." description="The current focus is on high-quality research products and bespoke market-intelligence work. Commercial terms are scoped around the brief rather than presented as a one-size-fits-all menu." />
          <div className="scope-grid">
            {currentServices.map((service) => <article className="scope-card" key={service.title}><div className="scope-card-top"><span className="status-pill">Current focus</span><ArrowUpRight size={20} /></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul><Link className="text-link" href="/contact">Discuss this service <ArrowUpRight size={16} /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="FUTURE CAPABILITIES" title="A roadmap, not a promise." description="The strategy roadmap gives the business room to grow without blurring what is live today. Each future tier would be introduced only after the appropriate review and infrastructure are in place." />
          <div className="scope-grid scope-grid--future">
            {futureServices.map((service) => <article className="scope-card scope-card--future" key={service.title}><div className="scope-card-top"><span className="status-pill future"><Clock3 size={13} /> Roadmap</span><span className="scope-index">Future tier</span></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="section tinted"><div className="container"><SectionHeading eyebrow="DEVELOPMENT PATH" title="Build credibility before complexity."/><div className="roadmap"><div className="roadmap-step"><span>STAGE 01</span><h3>Build the audience</h3><p>Launch accessible research, publishing discipline and a trusted point of view.</p></div><div className="roadmap-step"><span>STAGE 02</span><h3>Monetise expertise</h3><p>Develop recurring professional research and institutional reporting standards.</p></div><div className="roadmap-step"><span>STAGE 03</span><h3>Review strategy products</h3><p>Consider theses and portfolio work only after legal and regulatory review.</p></div><div className="roadmap-step"><span>STAGE 04</span><h3>Earn the right to scale</h3><p>Explore capital management when research, systems, regulation and track record support it.</p></div></div></div></section>
      <CTA title="Tell us what you need to understand." description="Start with the question, the market and the decision it supports. We will route the enquiry to the right part of the research architecture." />
    </>
  );
}


