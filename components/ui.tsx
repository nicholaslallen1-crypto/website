import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span className="eyebrow-line" />{children}</div>;
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="page-hero-rule" aria-hidden="true" /><div className="container page-hero-inner"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p></div></section>;
}

export function CTA({ title = "Build a clearer view of the market.", description = "Tell us what you are researching, who the work is for and where more structured evidence could help." }: { title?: string; description?: string }) {
  return <section className="cta"><div className="container cta-inner"><div><Eyebrow light>CONNECT WITH THE FIRM</Eyebrow><h2>{title}</h2><p>{description}</p></div><Link href="/contact" className="btn btn-light">Contact Allen & Cooper <span>↗</span></Link></div></section>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

