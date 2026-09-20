import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    title: "Whole Home Renovations",
    img: "/images/service-whole-home.jpg",
    desc: "A whole home renovation touches every room under one plan and one crew, so finishes, structure, and mechanicals move forward together instead of one trade waiting on another. We handle the sequencing — from demolition through structural and systems work to final finishes — so nothing stalls waiting on a decision that should have been made earlier.",
    bullets: [
      "Design and scope planning before demolition begins",
      "Structural, electrical, plumbing, and HVAC coordination",
      "Full interior finishes: flooring, trim, paint, and lighting",
      "Permitting and inspections handled for you",
      "One point of contact from first walkthrough to final walk-through",
    ],
  },
  {
    num: "02",
    title: "Home Additions",
    img: "/images/service-additions.jpg",
    desc: "An addition should read as part of the original house, not an obvious add-on — rooflines, siding, and trim get tied into the existing structure rather than butted up against it. We treat the foundation and framing with the same care as the finishes, because an addition is only as good as what's underneath it.",
    bullets: [
      "Site evaluation and structural planning",
      "Permitting and code compliance",
      "Foundation, framing, and roofline integration",
      "Exterior finishes matched to the existing home",
      "Full interior build-out of the new space",
    ],
  },
  {
    num: "03",
    title: "Kitchens",
    img: "/images/service-kitchen.jpg",
    desc: "The kitchen carries more daily use than any other room in the house, so we build it to work first and look good doing it — layout, storage, and traffic flow get the same attention as cabinetry and countertops. Whether it's a full gut or a targeted update, the goal is a room that holds up to real cooking, not just photos.",
    bullets: [
      "Layout planning for storage, workflow, and traffic",
      "Cabinetry, countertops, and hardware",
      "Plumbing and electrical relocation as needed",
      "Backsplash, lighting, and flooring",
      "Appliance coordination and installation",
    ],
  },
  {
    num: "04",
    title: "Bathrooms",
    img: "/images/service-bathroom.jpg",
    desc: "Bathroom work is unforgiving of shortcuts — waterproofing, ventilation, and fixture placement have to be right the first time. We build bathrooms, from a primary suite to a powder room, that hold up under daily use and pass inspection without a second visit.",
    bullets: [
      "Demolition and waterproofing done to code",
      "Tile, vanity, and fixture installation",
      "Plumbing and electrical relocation as needed",
      "Ventilation and lighting upgrades",
      "Shower, tub, and glass installation",
    ],
  },
  {
    num: "05",
    title: "Basements",
    img: "/images/service-basement.jpg",
    desc: "An unfinished basement is square footage you're already paying for and not using. We turn it into real living space — a family room, a home office, an extra bedroom — while making sure moisture control and egress are handled properly instead of papered over.",
    bullets: [
      "Moisture control and waterproofing assessment",
      "Framing, insulation, and drywall",
      "Electrical, lighting, and HVAC extension",
      "Egress window installation where required",
      "Flooring and finish carpentry",
    ],
  },
];

export const metadata = {
  title: "Services — BMO LLC | Renovations, Additions, Kitchens, Baths & Basements",
  description:
    "BMO LLC builds whole home renovations, additions, kitchens, bathrooms, and basements across Maryland, DC, and Virginia, all under one accountable crew.",
};

export default function Services() {
  return (
    <main id="top">
      <section className="ahero">
        <div className="wrap">
          <p className="eyebrow reveal">BMO LLC / Services</p>
          <h1 className="ahero__title">
            <span className="hl"><b style={{ animationDelay: "80ms" }}>WHAT WE</b></span>
            <span className="hl"><b className="accent" style={{ animationDelay: "220ms" }}>BUILD.</b></span>
          </h1>
          <p className="ahero__lede reveal" style={{ "--d": "360ms" }}>
            Whole home renovations, additions, kitchens, bathrooms, and
            basements — planned and built under one roof, by one accountable
            crew.
          </p>
        </div>
        <div className="ahero__rule" />
      </section>

      <section className="band reveal">
        <div
          className="band__img"
          data-parallax
          role="img"
          aria-label="BMO project work (placeholder image)"
          style={{ backgroundImage: "url('/images/services-hero.jpg')" }}
        />
        <span className="tag">Placeholder / not actual project</span>
        <div className="band__overlay" />
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <div className="head reveal">
            <p className="kicker">01 / The Work</p>
            <h2 className="h2">Five services.<br />One standard.</h2>
          </div>

          {SERVICES.map((s, i) => (
            <article
              className={`svcblock reveal${i % 2 === 1 ? " svcblock--rev" : ""}`}
              key={s.title}
            >
              <div className="svcblock__media">
                <img src={s.img} alt={`${s.title} project (placeholder image)`} />
                <span className="tag">Placeholder / not actual project</span>
              </div>
              <div className="svcblock__content">
                <span className="svcblock__num">{s.num}</span>
                <h3 className="svcblock__title">{s.title}</h3>
                <p className="svcblock__body">{s.desc}</p>
                <ul className="svcblock__list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <p className="svc__note reveal">Interior and exterior painting available as an add-on to any build.</p>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta__inner reveal">
          <h2 className="cta__title">Let&apos;s build.</h2>
          <p className="cta__body">
            Tell us what you&apos;re picturing. We&apos;ll tell you straight what it takes,
            what it costs, and how to make it better.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--lg" href="/contact">Request a Consultation</Link>
            <a className="btn btn--ghost btn--lg" href="tel:+13015550000">(301) 555-0000</a>
          </div>
          <p className="cta__note">Phone is a placeholder. Swap in the real line.</p>
        </div>
      </section>
    </main>
  );
}
