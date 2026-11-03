import type { Metadata } from "next";
import { CTA, Eyebrow, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "About the Firm", description: "Learn about Allen & Cooper's research philosophy and the thinking behind the firm." };

export default function About() {
  return (
    <>
      <PageHero eyebrow="ABOUT ALLEN & COOPER" title="Independent in outlook. Rigorous in approach." description="A research business built to examine financial markets through systematic analysis, fundamental evidence and informed judgement." />
      <section className="section"><div className="container two-col"><SectionHeading eyebrow="OUR PURPOSE" title="Research that connects the detail to the bigger picture."/><div className="prose"><p>Allen & Cooper is an independent macroeconomic, market-intelligence and investment research firm. The business is designed to begin with accessible research and grow toward more bespoke professional work as the platform develops.</p><p>We consider both the intrinsic drivers of individual assets and the broader macroeconomic environment in which they trade. Quantitative systems support the process; critical analysis remains essential to the interpretation of their outputs.</p><p>Our objective is to produce research that is organised, testable and explicit about uncertainty.</p></div></div></section>
      <section className="section tinted"><div className="container"><SectionHeading eyebrow="THE OPERATING MODEL" title="A firm that compounds its edge."/><div className="founder-grid"><article className="founder-card"><span className="founder-monogram">01</span><h3>Research first</h3><div className="role">THE FOUNDATION</div><p>Build trust through consistent publishing, clear reasoning and a repeatable research process before adding complexity.</p></article><article className="founder-card"><span className="founder-monogram">02</span><h3>Client-aware</h3><div className="role">THE APPLICATION</div><p>Shape professional work around the decision, market and depth of analysis rather than forcing every client into the same format.</p></article></div></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="OUR PRINCIPLES" title="What guides the work."/><div className="principles"><div><span>01</span><h3>Analytical independence</h3><p>Challenge prevailing assumptions and evaluate competing explanations.</p></div><div><span>02</span><h3>Transparency of reasoning</h3><p>Separate data, modelling choices, interpretation and decision-relevant implications.</p></div><div><span>03</span><h3>Intellectual discipline</h3><p>Revisit conclusions as facts, conditions and probabilities change.</p></div></div></div></section>
      <section className="section tinted"><div className="container two-col"><div><Eyebrow>WHY NOW</Eyebrow><h2>Better context for a noisier market.</h2></div><div className="prose"><p>Investors have more information than ever, but information is not the same as understanding. Allen & Cooper exists to create a clearer line between what the data says, what the market expects and what could change the assessment.</p></div></div></section>
      <CTA />
    </>
  );
}


