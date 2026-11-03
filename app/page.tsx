import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, Compass, Globe2, Layers3, ScanSearch } from "lucide-react";
import { CTA, Eyebrow, SectionHeading } from "@/components/ui";
import { productTiers } from "@/lib/site";

const pillars = [
  { n: "01", title: "Macro", text: "Growth, inflation, policy and liquidity across market regimes." },
  { n: "02", title: "Equities", text: "Fundamentals, valuation frameworks and catalyst analysis." },
  { n: "03", title: "Rates", text: "Duration, credit conditions and drivers of repricing." },
  { n: "04", title: "FX & commodities", text: "Capital flows, supply-demand dynamics and real-economy signals." },
  { n: "05", title: "Cross-asset", text: "The transmission of economic forces between markets." },
];

const disciplines = [
  { icon: ChartNoAxesCombined, no: "01", title: "Quantitative modelling", text: "Systematic analysis of market data, drivers and probabilistic relationships." },
  { icon: ScanSearch, no: "02", title: "Fundamental research", text: "Structured examination of businesses, valuation and economic sensitivities." },
  { icon: Globe2, no: "03", title: "Macroeconomic context", text: "Cross-asset interpretation of the economic and policy environment." },
  { icon: Compass, no: "04", title: "Research discipline", text: "Explicit assumptions, transparent limitations and ongoing reassessment." },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-left">
            <Eyebrow light>MACROECONOMICS · MARKETS · INVESTMENT RESEARCH</Eyebrow>
            <h1>Research for the <em>decisions</em> that matter.</h1>
            <p>Allen & Cooper turns complex economic and financial data into clear, disciplined insight for readers, professionals and institutions.</p>
            <div className="hero-actions">
              <Link href="/offerings" className="btn btn-ivory">Explore our offerings <ArrowUpRight size={16} /></Link>
              <Link href="/methodology" className="subtle-link light-link">How we work <ArrowRight size={16} /></Link>
            </div>
            <div className="hero-metrics" aria-label="Firm positioning">
              <div className="hero-metric"><strong>01</strong><span>Independent outlook</span></div>
              <div className="hero-metric"><strong>02</strong><span>Evidence-led process</span></div>
              <div className="hero-metric"><strong>03</strong><span>Built to scale</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract analytical framework">
            <div className="data-chart">
              <div className="chart-head"><span>ALLEN & COOPER / FRAMEWORK</span><span>GLOBAL · CROSS-ASSET</span></div>
              <svg viewBox="0 0 470 300" role="img" aria-label="Decorative analytical lines" preserveAspectRatio="none">
                <defs><linearGradient id="fade" x1="0" x2="1"><stop offset="0" stopColor="#bba17c" stopOpacity="0.08" /><stop offset="1" stopColor="#e4c77d" stopOpacity="0.95" /></linearGradient></defs>
                {[55, 110, 165, 220, 275].map((y) => <line key={y} x1="0" y1={y} x2="470" y2={y} stroke="#34485c" strokeWidth="1" />)}
                {[70, 140, 210, 280, 350, 420].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="300" stroke="#34485c" strokeWidth="1" />)}
                <polyline points="0,228 35,201 65,210 95,177 130,190 155,142 180,154 205,111 239,128 267,88 289,115 321,70 349,80 375,46 400,67 431,35 470,17" fill="none" stroke="url(#fade)" strokeWidth="2.3" />
                <polyline points="0,250 30,240 70,243 112,217 149,226 181,205 214,220 240,185 275,193 315,172 353,180 391,148 420,158 470,133" fill="none" stroke="#66849b" strokeWidth="1.5" strokeOpacity=".8" />
              </svg>
              <div className="chart-foot"><span>FUNDAMENTALS × MACRO × QUANT</span><span>RESEARCH / 01</span></div>
              <div className="chart-callout">From signal to strategic context.</div>
            </div>
          </div>
        </div>
        <div className="container hero-bottom"><span>RESEARCH DOMAINS</span><div>Macro <i /> Equities <i /> Rates <i /> FX <i /> Commodities</div></div>
      </section>

      <section className="signal-strip"><div className="container signal-strip-inner"><strong>One firm. A <em>scalable research architecture.</em></strong><span>Retail research → institutional research → future strategy</span></div></section>

      <section className="section intro-section">
        <div className="container intro-grid">
          <div><Eyebrow>THE FIRM</Eyebrow><h2>Clarity through <em>independent analysis.</em></h2></div>
          <div><p className="large-copy">Markets are complex. Research should make them more intelligible.</p><p>Allen & Cooper is building a research-led market-intelligence business. We connect observable data, fundamental assessment and macroeconomic context without confusing evidence with conviction.</p><Link href="/about" className="text-link">More about the firm <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHeading eyebrow="THE PRODUCT LADDER" title="Start with insight. Build toward strategy." description="The firm is designed to serve different levels of sophistication over time, with each tier adding depth, customisation and responsibility." />
          <div className="product-grid">
            {productTiers.map((tier) => (
              <Link href="/offerings" className={tier.statusTone === "future" ? "product-card product-card--future" : "product-card"} key={tier.number}>
                <div className="product-topline"><span className="product-number">{tier.number} / TIER</span><span className="product-label">{tier.label}</span></div>
                <span className={tier.statusTone === "future" ? "status-pill future" : "status-pill"}>{tier.status}</span>
                <h3>{tier.title}</h3><p className="product-description">{tier.description}</p>
                <div className="product-meta">Designed for<strong>{tier.audience}</strong></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section research-section">
        <div className="container"><SectionHeading eyebrow="OUR COVERAGE" title="A connected view of global markets." description="We examine the forces shaping financial assets, from individual company fundamentals to the macroeconomic conditions that move across borders." />
          <div className="pillars">{pillars.map((pillar) => <Link href="/research" className="pillar" key={pillar.n}><span className="pillar-number">{pillar.n} / RESEARCH</span><h3>{pillar.title}</h3><p>{pillar.text}</p><ArrowUpRight className="pillar-arrow" size={20} /></Link>)}</div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container approach-grid">
          <div><Eyebrow>RESEARCH PHILOSOPHY</Eyebrow><h2>Insight built from evidence, not assumption.</h2><p>Our process is designed to give each conclusion a clear evidential foundation, make uncertainty visible and keep the work open to revision.</p><Link href="/methodology" className="btn btn-navy">Our methodology <ArrowUpRight size={16} /></Link></div>
          <div className="approach-items">{disciplines.map(({ icon: Icon, no, title, text }) => <div key={no}><Icon /><span>{no}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </div>
      </section>

      <section className="section feature-band"><div className="container feature-grid"><div><Layers3 size={27} /><h3>Independent by design.</h3><p>Structured perspectives developed through analysis rather than market consensus.</p></div><div><ChartNoAxesCombined size={27} /><h3>Cross-asset in scope.</h3><p>Understanding the transmission of macro and fundamental forces between markets.</p></div><div><ScanSearch size={27} /><h3>Methodical in process.</h3><p>Separating observations, assumptions, scenarios and implications.</p></div></div></section>
      <CTA />
    </>
  );
}


