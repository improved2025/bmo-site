import Link from "next/link";

const PRINCIPLES = [
  { n: "01", t: "One roof", b: "Design, build, and finish handled by the same team. No finger-pointing between trades." },
  { n: "02", t: "Straight talk", b: "Real numbers and honest timelines before the first swing, not surprises halfway through." },
  { n: "03", t: "Value eye", b: "23 years reading property means we build what a future appraiser and buyer will reward." },
];
const STATS = [
  { count: 20, suffix: "+", label: "Projects completed" },
  { count: 23, suffix: "", label: "Years reading property" },
  { count: 3, suffix: "", label: "States served" },
  { count: 2, suffix: "", label: "Owners, hands on" },
];

export const metadata = {
  title: "About — BMO LLC | Family-Owned General Contractors",
  description:
    "BMO LLC is a family-owned general contracting firm serving Maryland, DC, and Virginia. Owner run, with a 23-year real estate background behind every build.",
};

export default function About() {
  return (
    <main id="top">
      <section className="ahero">
        <div className="wrap">
          <p className="eyebrow reveal">About BMO LLC / General Contractors</p>
          <h1 className="ahero__title">
            <span className="hl"><b style={{ animationDelay: "80ms" }}>WE BUILD</b></span>
            <span className="hl"><b style={{ animationDelay: "200ms" }}>LIKE IT&apos;S</b></span>
            <span className="hl"><b className="accent" style={{ animationDelay: "320ms" }}>OURS.</b></span>
          </h1>
          <p className="ahero__lede reveal" style={{ "--d": "480ms" }}>
            A family-run general contracting firm building whole home renovations,
            additions, kitchens, bathrooms, and basements across Maryland, DC, and
            Virginia.
          </p>
          <div className="ahero__meta reveal" style={{ "--d": "560ms" }}>
            <span>MD / DC / VA</span><span className="dot" /><span>Licensed &amp; Insured</span><span className="dot" /><span>Family Owned</span>
          </div>
        </div>
        <div className="ahero__rule" />
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div className="reveal"><p className="kicker">01 / Who We Are</p></div>
          <div className="reveal">
            <h2 className="statement">We build spaces that function better, feel better, and hold their value.</h2>
            <p className="body">The work is simple to say and hard to do well. BMO handles the full scope under one roof, from the first walkthrough to the final punch list, so the standard never gets lost in the handoff between crews.</p>
          </div>
        </div>
      </section>

      <section className="band reveal">
        <div className="band__img" data-parallax role="img" aria-label="Renovated open living space (placeholder image)" style={{ backgroundImage: "url('/images/greatroom.jpg')" }} />
        <span className="tag">Placeholder / not actual project</span>
        <div className="band__overlay">
          <p className="band__text">Homes built for how families<br />actually live.</p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap grid-2">
          <div className="reveal"><p className="kicker">02 / Ownership</p><h2 className="h2">Family owned.<br />Owner run.</h2></div>
          <div className="reveal stack">
            <p className="body">When you hire BMO, you deal with the people whose name is on the company, not a project manager three layers down. Decisions get made by the folks who answer for the result.</p>
            <p className="body">The owners bring a real estate background reaching back 23 years. That means they read your project the way a buyer, a seller, and an appraiser read it, all at once. Most contractors build exactly what&apos;s on the plan. We tell you when the plan is leaving value on the table.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid-2">
            <div className="reveal"><p className="kicker">03 / How We Work</p><h2 className="h2">Function first.</h2></div>
            <div className="reveal"><p className="body">We don&apos;t just execute a drawing. We look at how you actually live in a space, then suggest changes that make it work harder. Better flow. Smarter storage. A layout that pays you back later, even if selling isn&apos;t on your mind today. That practical eye is the difference between a room that looks finished and a home that lives right.</p></div>
          </div>
          <div className="principles">
            {PRINCIPLES.map((p, i) => (
              <article className="principle reveal" key={p.t} style={{ "--d": i * 80 + "ms" }}>
                <span className="principle__num">{p.n}</span>
                <h3 className="principle__title">{p.t}</h3>
                <p className="principle__body">{p.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <p className="kicker kicker--l reveal">04 / The Record</p>
          <div className="stat-row">
            {STATS.map((s, i) => (
              <div className="stat reveal" key={s.label} style={{ "--d": i * 90 + "ms" }}>
                <span className="stat__num" data-count={s.count} data-suffix={s.suffix}>{s.count}{s.suffix}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="stats__note reveal">Every job runs to code and to a standard we&apos;d accept in our own homes.</p>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta__inner reveal">
          <h2 className="cta__title">Let&apos;s build.</h2>
          <p className="cta__body">Tell us what you&apos;re picturing. We&apos;ll tell you straight what it takes, what it costs, and how to make it better.</p>
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
