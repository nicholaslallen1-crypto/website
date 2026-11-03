"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link className={path === item.href ? "active" : ""} key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-contact" href="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
        <button
          type="button"
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "mobile-open" : ""}`} aria-label="Mobile navigation">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

