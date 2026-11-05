import type { Metadata } from "next";
import Image from "next/image";
import { CTA, Eyebrow, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "About the Firm", description: "Learn about Allen & Cooper's research philosophy and the thinking behind the firm." };

export default function About() {
  return (
    <>
      <PageHero eyebrow="ABOUT ALLEN & COOPER" title="Independent in outlook. Rigorous in approach." description="A research business built to examine financial markets through systematic analysis, fundamental evidence and informed judgement." />
      <section className="section"><div className="container two-col"><SectionHeading eyebrow="OUR PURPOSE" title="Research that connects the detail to the bigger picture."/><div className="prose"><p>Allen & Cooper is an independent macroeconomic, market-intelligence and investment research firm. The business is designed to begin with accessible research and grow toward more bespoke professional work as the platform develops.</p><p>We consider both the intrinsic drivers of individual assets and the broader macroeconomic environment in which they trade. Quantitative systems support the process; critical analysis remains essential to the interpretation of their outputs.</p><p>Our objective is to produce research that is organised, testable and explicit about uncertainty.</p></div></div></section>
      <section className="section tinted"><div className="container"><SectionHeading eyebrow="THE OPERATING MODEL" title="A firm that compounds its edge."/><div className="founder-grid"><article className="founder-card"><span className="founder-monogram">01</span><h3>Research first</h3><div className="role">THE FOUNDATION</div><p>Build trust through consistent publishing, clear reasoning and a repeatable research process before adding complexity.</p></article><article className="founder-card"><span className="founder-monogram">02</span><h3>Client-aware</h3><div className="role">THE APPLICATION</div><p>Shape professional work around the decision, market and depth of analysis rather than forcing every client into the same format.</p></article></div></div></section>
      <section className="section leadership-section"><div className="container"><SectionHeading eyebrow="LEADERSHIP" title="The people behind the research." description="Allen & Cooper is led by its co-founders, bringing complementary perspectives to macroeconomic research, cross-asset analysis and systematic investment research."/><div className="leadership-grid">
        <article className="leader-card">
          <div className="leader-portrait"><Image src="/founders/nicholas-allen-2026.jpg" alt="Portrait of Nicholas Allen, Co-Founder and Director of Allen & Cooper" fill sizes="(max-width: 800px) 100vw, 50vw" priority /></div>
          <div className="leader-details">
            <Eyebrow>CO-FOUNDER</Eyebrow><h3>Nicholas Allen</h3><div className="role">Co-Founder &amp; Director</div>
            <p>Nicholas Allen is Co-Founder &amp; Director of Allen &amp; Cooper. His interests span global macroeconomics, multi-asset financial markets and the intersection of fundamental and quantitative investment research. He has a particular interest in foreign exchange markets, alongside fundamental equity analysis, financial technology and artificial intelligence. He is especially interested in how computational methods, automation and systematic approaches can enhance investment research, risk management and decision-making.</p>
            <div className="leader-focus"><span>AREAS OF INTEREST</span><ul><li>Macroeconomics and global markets</li><li>Foreign exchange</li><li>Quantitative investment research</li><li>Financial technology and AI</li><li>Equities and investment risk</li></ul></div>
          </div>
        </article>
        <article className="leader-card">
          <div className="leader-portrait"><Image src="/founders/theo-cooper-2026.jpg" alt="Portrait of Theo Cooper, Co-Founder of Allen & Cooper" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="leader-details">
            <Eyebrow>CO-FOUNDER</Eyebrow><h3>Theo Cooper</h3><div className="role">Co-Founder &amp; Director</div>
            <p>Theo Cooper is Co-Founder &amp; Director of Allen &amp; Cooper. His interests centre on fundamental macroeconomics, cross-country economic analysis and the relationship between economic conditions and relative financial market performance. He has a strong interest in the mathematical foundations of investment research, particularly advanced quantitative modelling, fundamental equity analysis and valuation methodologies.</p>
            <div className="leader-focus"><span>AREAS OF INTEREST</span><ul><li>Fundamental macroeconomics</li><li>Comparative economic analysis</li><li>Global equity indices</li><li>Quantitative finance</li><li>Equity valuation</li></ul></div>
          </div>
        </article>
      </div></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="OUR PRINCIPLES" title="What guides the work."/><div className="principles"><div><span>01</span><h3>Analytical independence</h3><p>Challenge prevailing assumptions and evaluate competing explanations.</p></div><div><span>02</span><h3>Transparency of reasoning</h3><p>Separate data, modelling choices, interpretation and decision-relevant implications.</p></div><div><span>03</span><h3>Intellectual discipline</h3><p>Revisit conclusions as facts, conditions and probabilities change.</p></div></div></div></section>
      <section className="section tinted"><div className="container two-col"><div><Eyebrow>WHY NOW</Eyebrow><h2>Better context for a noisier market.</h2></div><div className="prose"><p>Investors have more information than ever, but information is not the same as understanding. Allen & Cooper exists to create a clearer line between what the data says, what the market expects and what could change the assessment.</p></div></div></section>
      <CTA />
    </>
  );
}




