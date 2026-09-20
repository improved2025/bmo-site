"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Link className="brand" href="/" aria-label="BMO LLC home">
          <img
            className="brand__logo"
            src="/images/logo-mark-dark.png"
            alt="BMO LLC, General Contractors"
          />
          <span className="brand__word">
            BMO LLC<span className="brand__sub">General Contractors</span>
          </span>
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <Link className="btn btn--sm nav__cta" href="/contact">
          Get a Consultation
        </Link>
      </div>
    </header>
  );
}
