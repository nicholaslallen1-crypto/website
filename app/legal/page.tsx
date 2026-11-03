import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Legal & Disclosures", description: "Legal information, research disclosures and privacy information for Allen & Cooper." };

export default function Legal() {
  return (
    <>
      <PageHero eyebrow="LEGAL & DISCLOSURES" title="Important information." description="This page sets out the principles that apply to the website. Formal legal, regulatory and data-processing notices should be completed and approved before any public launch or regulated service." />
      <section className="section"><div className="container legal-layout"><aside className="legal-menu"><a href="#company">Company information</a><a href="#research">Research disclosures</a><a href="#privacy">Privacy</a><a href="#cookies">Cookies</a><a href="#terms">Website terms</a></aside><div className="legal-copy">
        <div className="legal-warning"><strong>Review status</strong> — this page is an operating framework and is not a substitute for legal advice. The firm should confirm its final legal identity, company details, regulatory position, privacy wording and website terms before publication.</div>
        <section id="company"><h2>Company information</h2><p>Legal entity: Allen & Cooper Ltd.</p><p>Company number: {site.companyNumber}</p><p>Registered office: {site.registeredOffice}</p><p>Current public positioning: research and market-intelligence services. Future investment strategy or capital-management services would be subject to separate legal, compliance and regulatory review.</p></section>
        <section id="research"><h2>Research disclosures</h2><p>This site provides general information about an intended independent research and market-intelligence business. Website materials are not a personal investment recommendation, offer, solicitation or instruction to transact.</p><p>The precise scope of research activity, any financial-promotion implications and any conflicts policy must be reviewed against the firm&apos;s actual activities before publication.</p></section>
        <section id="privacy"><h2>Privacy information</h2><p>If you send an enquiry, the website collects the name, email address, organisation if supplied, enquiry category and message you provide in order to respond. Submission content is processed by the configured email-delivery provider.</p><p>The final notice should confirm the data controller, lawful basis, retention period, processors, any international transfers, individual rights and the appropriate supervisory-authority route.</p></section>
        <section id="cookies"><h2>Cookies and analytics</h2><p>The initial website is designed not to set marketing or analytics cookies. Hosting infrastructure may use strictly necessary technical controls.</p><p>If analytics or other non-essential tracking is introduced, this notice should be updated and consent implemented where required.</p></section>
        <section id="terms"><h2>Website terms</h2><p>Content is supplied for general informational purposes. No representation about completeness, accuracy or suitability for individual investment decisions is made.</p><p>Final terms should cover intellectual property, acceptable use, liability, jurisdiction and the firm&apos;s approved contact details.</p></section>
      </div></div></section>
    </>
  );
}


