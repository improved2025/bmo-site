"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  // mobile menu: close on navigation and on Escape
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
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
        <a className="nav__call" href="tel:+12405229075" aria-label="Call BMO LLC at (240) 522-9075">
          Call <span className="nav__callNum">(240) 522-9075</span>
        </a>
        <Link className="btn btn--sm nav__cta" href="/contact">
          Get a Consultation
        </Link>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      <nav id="mobile-menu" className="nav__panel" aria-label="Mobile">
        {LINKS.map((l) => (
          <Link key={l.href} className="nav__panelLink" href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link className="btn btn--lg nav__panelCta" href="/contact" onClick={() => setOpen(false)}>
          Get a Consultation
        </Link>
        <a className="nav__panelCall" href="tel:+12405229075">Call (240) 522-9075</a>
      </nav>
    </header>
  );
}
