import Link from "next/link";
import { Logo } from "./logo";
import { nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Logo light />
            <p>Independent research and market intelligence for readers, professionals and institutions.</p>
          </div>
          <div className="footer-links">
            <span>EXPLORE</span>
            {nav.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <div className="footer-links">
            <span>INFORMATION</span>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Enquire</Link>
            <Link href="/legal">Legal & disclosures</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Allen & Cooper. All rights reserved.</span>
          <span>Research first. Regulation aware. Built to scale.</span>
        </div>
      </div>
    </footer>
  );
}

