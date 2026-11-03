import type { Metadata } from "next";
import { PageHero, Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Allen & Cooper for research, market-intelligence and business enquiries." };

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="CONTACT THE FIRM" title="Start with the question." description="Tell us what you are researching, who the work is for and what a useful output would look like. We will route the enquiry to the right part of the firm." />
      <section className="section"><div className="container contact-layout"><div className="contact-side"><Eyebrow>ENQUIRIES</Eyebrow><h2>Thoughtful conversations start here.</h2><p>Allen & Cooper welcomes research discussions, professional enquiries, potential partnerships and questions about the firm&apos;s development path.</p><div className="contact-note"><span>BUSINESS CONTACT</span><p>{site.email}</p><span>REGISTERED OFFICE</span><p>{site.registeredOffice}</p></div><p className="contact-caution">Please do not submit confidential trading information, personal financial data or instructions to transact. This form is not a channel for client orders or investment advice.</p></div><div className="contact-panel"><h3>Send an enquiry</h3><p>Fields marked * are required.</p><ContactForm /></div></div></section>
    </>
  );
}


