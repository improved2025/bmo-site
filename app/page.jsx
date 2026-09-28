import Link from "next/link";
import Marquee from "@/components/Marquee";
import ReviewsSlider from "@/components/ReviewsSlider";

const TRUST = [
  { count: 20, suffix: "+", label: "Projects completed" },
  { count: 23, suffix: "", label: "Years reading property" },
  { text: "MD·DC·VA", label: "Service area" },
  { text: "L&I", label: "Licensed & insured" },
];
const SERVICES = [
  { n: "01", t: "Whole Home Renovations", b: "Top-to-bottom transformations, planned and built under one roof.", href: "/portfolio?category=whole-home" },
  { n: "02", t: "Home Additions", b: "More square footage that looks like it was always there.", href: "/portfolio?category=additions" },
  { n: "03", t: "Kitchens", b: "The room that sells the house, built to work as hard as it looks.", href: "/portfolio?category=kitchens" },
  { n: "04", t: "Bathrooms", b: "Primary suites to powder rooms, finished to a high standard.", href: "/portfolio?category=bathrooms" },
  { n: "05", t: "Basements", b: "Unused space turned into real, livable square footage.", href: "/portfolio" },
];
const REVIEWS = [
  {
    name: "Sidney Keffler",
    project: "Kitchen Remodeling",
    text: "Working with Billy and the BMO team was a great experience. Our kitchen needed a complete transformation, and they helped us turn our ideas into a beautiful, functional space. Billy was approachable, patient, and always willing to explain the process. The attention to detail, from the cabinetry to the finishing touches, made all the difference. We especially appreciated how carefully the team treated our home throughout the renovation. We couldn't be happier with how everything came together.",
  },
  {
    name: "Bruce & Mai McCoy",
    project: "Bathroom Remodeling",
    text: "We had been putting off our bathroom renovation for years because we weren't sure where to begin. Billy made the entire experience much easier than we expected. He listened to what we wanted, helped us think through the design, and kept us informed throughout the project. The finished bathroom is beautiful. The tile work, shower, vanity, and lighting all came together perfectly. What impressed us most was the care and professionalism of everyone involved.",
  },
  {
    name: "Obi & Ifeoma Mba",
    project: "Basement Remodeling",
    text: "Our basement was an underused space that had so much potential. BMO helped us transform it into a comfortable area where our family can relax and entertain guests. Billy was involved throughout the process and made sure our concerns were addressed. The team paid attention to everything, including lighting, flooring, storage, and the overall flow of the space. The difference is incredible. It now feels like a natural extension of our home rather than just a finished basement.",
  },
  {
    name: "Kelly B",
    project: "Home Addition",
    text: "Adding more space to our home was a major decision, and choosing the right contractor mattered to us. Billy took the time to understand what we wanted and walked us through the different stages of the project. Communication was consistent, and we always felt comfortable asking questions. The new addition blends beautifully with the original house, both inside and outside. We appreciate the workmanship and care that went into creating a space our family can enjoy for years.",
  },
  {
    name: "Ray O'Neal",
    project: "Whole Home Renovation",
    text: "Renovating an entire home can feel overwhelming, but our experience with BMO was reassuring from beginning to end. Billy was honest in his communication, attentive to the details, and genuinely interested in understanding our vision. The team worked through the different areas of the house with care, keeping the overall design consistent. Our kitchen, bathrooms, living areas, and finishes now feel connected in a way they never did before. We love our transformed home and appreciate the work that went into it.",
  },
];
const WHY = [
  { t: "One roof", b: "Design, build, and finish by the same team. No finger-pointing between trades." },
  { t: "Straight talk", b: "Real numbers and honest timelines before the first swing." },
];
const STEPS = [
  { n: "01", t: "Consult", b: "We walk the space, listen, and learn how you actually live in it." },
  { n: "02", t: "Plan & Price", b: "A clear scope and an honest number before anything begins." },
  { n: "03", t: "Build", b: "One accountable team, on schedule, to code, to standard." },
  { n: "04", t: "Walk-through", b: "We don't finish until it's finished right. Punch list closed." },
];

export default function Home() {
  return (
    <main id="top">
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <img src="/images/hero-kitchen.jpg" alt="Renovated kitchen" />
        </div>
        <div className="hero__scrim" />
        <div className="hero__inner">
          <p className="eyebrow reveal">General Contractors / MD · DC · VA</p>
          <h1 className="hero__title">
            <span className="hl"><b style={{ animationDelay: "80ms" }}>BUILT LIKE</b></span>
            <span className="hl"><b style={{ animationDelay: "220ms" }}>WE OWN IT.</b></span>
          </h1>
          <p className="hero__lede reveal" style={{ "--d": "420ms" }}>
            Whole home renovations, additions, kitchens, bathrooms, and basements
            across Maryland, DC, and Virginia. Family owned, and built to a
            standard we&apos;d accept in our own homes.
          </p>
          <div className="hero__cta reveal" style={{ "--d": "520ms" }}>
            <Link className="btn btn--lg" href="/contact">Request a Consultation</Link>
            <Link className="btn btn--ghost btn--lg" href="/portfolio">See Our Work</Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* TRUST */}
      <section className="trust">
        <div className="wrap trust__row">
          {TRUST.map((t) => (
            <div className="trust__item" key={t.label}>
              {t.count !== undefined ? (
                <span className="trust__num" data-count={t.count} data-suffix={t.suffix}>
                  {t.count}{t.suffix}
                </span>
              ) : (
                <span className="trust__num">{t.text}</span>
              )}
              <span className="trust__label">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="head reveal">
            <p className="kicker">01 / What We Build</p>
            <h2 className="h2">Five lanes.<br />One standard.</h2>
          </div>
          <div className="svc">
            {SERVICES.map((s, i) => (
              <Link className="svc__card reveal" href={s.href} key={s.t} style={{ "--d": i * 70 + "ms" }}>
                <span className="svc__num">{s.n}</span>
                <h3 className="svc__title">{s.t}</h3>
                <p className="svc__body">{s.b}</p>
              </Link>
            ))}
          </div>
          <p className="svc__note reveal">Interior and exterior painting available as an add-on to any build.</p>
        </div>
      </section>

      {/* WORK */}
      <section className="section section--soft" id="work">
        <div className="wrap">
          <div className="head reveal">
            <p className="kicker">02 / Selected Work</p>
            <h2 className="h2">Recent projects.</h2>
          </div>
          <div className="work">
            <figure className="proj reveal">
              <div className="proj__img">
                <img src="/images/project-bath.jpg" alt="Primary bath remodel" />
              </div>
              <figcaption><span className="proj__cat">Primary Bath</span><span className="proj__name">Full Remodel</span></figcaption>
            </figure>
            <figure className="proj reveal" style={{ "--d": "90ms" }}>
              <div className="proj__img">
                <img src="/images/greatroom.jpg" alt="Great room renovation" />
              </div>
              <figcaption><span className="proj__cat">Great Room</span><span className="proj__name">Whole Home Renovation</span></figcaption>
            </figure>
            <Link className="proj proj--cta reveal" href="/portfolio" style={{ "--d": "180ms" }}>
              <span className="proj__ctaTop">More on the way</span>
              <span className="proj__ctaBig">See all projects</span>
              <span className="proj__ctaArrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section" id="why">
        <div className="wrap grid-2">
          <div className="reveal">
            <p className="kicker">03 / Why BMO</p>
            <h2 className="h2">We read the<br />house, not just<br />the drawing.</h2>
          </div>
          <div className="reveal stack">
            <p className="body">
              The owners bring a real estate background reaching back 23 years.
              They see your project the way a buyer, a seller, and an appraiser
              see it, all at once. Most contractors build exactly what&apos;s on the
              plan. We tell you when the plan is leaving value on the table.
            </p>
            <div className="why">
              {WHY.map((w) => (
                <div className="why__item" key={w.t}>
                  <h4 className="why__title">{w.t}</h4>
                  <p className="why__body">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--soft" id="process">
        <div className="wrap">
          <div className="head reveal">
            <p className="kicker">04 / How It Goes</p>
            <h2 className="h2">Four steps,<br />no surprises.</h2>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step reveal" key={s.t} style={{ "--d": i * 80 + "ms" }}>
                <span className="step__num">{s.n}</span>
                <h3 className="step__title">{s.t}</h3>
                <p className="step__body">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" id="reviews">
        <div className="wrap">
          <div className="head reveal">
            <p className="kicker">05 / What Clients Say</p>
            <h2 className="h2">In their words.</h2>
          </div>
          <ReviewsSlider reviews={REVIEWS} />
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="wrap cta__inner reveal">
          <h2 className="cta__title">Let&apos;s build.</h2>
          <p className="cta__body">
            Tell us what you&apos;re picturing. We&apos;ll tell you straight what it takes,
            what it costs, and how to make it better.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--lg" href="/contact">Request a Consultation</Link>
            <a className="btn btn--ghost btn--lg" href="tel:+12405229075">(240) 522-9075</a>
          </div>
        </div>
      </section>
    </main>
  );
}
