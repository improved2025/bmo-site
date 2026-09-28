import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__grid">
        <div className="foot__col">
          <div className="foot__brandRow">
            <img
              className="foot__logo"
              src="/images/logo-mark-light.png"
              alt="BMO LLC, General Contractors"
            />
            <div className="foot__brand">
              BMO LLC<span>General Contractors</span>
            </div>
          </div>
          <p className="foot__blurb">
            Family-owned general contracting across Maryland, DC, and Virginia.
            Whole home renovations, additions, kitchens, bathrooms, and basements.
          </p>
        </div>
        <div className="foot__col">
          <h5>Services</h5>
          <Link href="/services">Whole Home</Link>
          <Link href="/services">Additions</Link>
          <Link href="/services">Kitchens</Link>
          <Link href="/services">Bathrooms</Link>
          <Link href="/services">Basements</Link>
        </div>
        <div className="foot__col">
          <h5>Company</h5>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Work</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="foot__col">
          <h5>Contact</h5>
          <a href="tel:+12405229075">(240) 522-9075</a>
          <a href="mailto:BMOGenCon@gmail.com">BMOGenCon@gmail.com</a>
        </div>
      </div>
      <div className="wrap foot__bar">
        <span>© {new Date().getFullYear()} BMO LLC. All rights reserved.</span>
        <span>MD / DC / VA · Family Owned · Licensed &amp; Insured · License #160232</span>
      </div>
    </footer>
  );
}
