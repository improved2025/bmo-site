export const metadata = {
  title: "Contact — BMO LLC | Request a Consultation",
  description:
    "Request a consultation with BMO LLC, a family-owned general contracting firm serving Maryland, DC, and Virginia. Reach us by phone or email, or send project details directly.",
};

export default function Contact() {
  return (
    <main id="top">
      <section className="ahero">
        <div className="wrap">
          <p className="eyebrow reveal">Contact BMO LLC / General Contractors</p>
          <h1 className="ahero__title">
            <span className="hl"><b style={{ animationDelay: "80ms" }}>LET&apos;S START</b></span>
            <span className="hl"><b className="accent" style={{ animationDelay: "220ms" }}>YOUR PROJECT.</b></span>
          </h1>
          <p className="ahero__lede reveal" style={{ "--d": "360ms" }}>
            Tell us what you&apos;re picturing — whole home renovation, addition,
            kitchen, bath, or basement — and we&apos;ll get back to you with straight
            numbers and an honest timeline.
          </p>
          <div className="ahero__meta reveal" style={{ "--d": "440ms" }}>
            <span>MD / DC / VA</span><span className="dot" /><span>Licensed &amp; Insured</span><span className="dot" /><span>Family Owned</span>
          </div>
        </div>
        <div className="ahero__rule" />
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div className="reveal">
            <p className="kicker">01 / Reach Us</p>
            <h2 className="h2">Get in<br />touch.</h2>
            <div className="cinfo">
              <div className="cinfo__row">
                <span className="cinfo__label">Phone</span>
                <a className="cinfo__value" href="tel:+13015550000">(301) 555-0000</a>
              </div>
              <div className="cinfo__row">
                <span className="cinfo__label">Email</span>
                <a className="cinfo__value" href="mailto:hello@bmollc.com">hello@bmollc.com</a>
              </div>
              <p className="cinfo__note">Phone and email are placeholders. Swap in the real lines before launch.</p>
              <div className="cinfo__row">
                <span className="cinfo__label">Service Area</span>
                <div className="cinfo__area">
                  <span>Maryland</span><span className="dot" /><span>DC</span><span className="dot" /><span>Virginia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ "--d": "90ms" }}>
            <form className="form" aria-label="Consultation request form">
              <div className="form__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
              </div>
              <div className="form__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@email.com" required />
              </div>
              <div className="form__field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(301) 555-0000" />
              </div>
              <div className="form__field">
                <label htmlFor="projectType">Project Type</label>
                <select id="projectType" name="projectType" defaultValue="">
                  <option value="" disabled>Select a project type</option>
                  <option>Whole Home Renovation</option>
                  <option>Home Addition</option>
                  <option>Kitchen</option>
                  <option>Bathroom</option>
                  <option>Basement</option>
                  <option>Painting</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form__field form__field--full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about the space, the scope, and your timeline."
                  required
                />
              </div>
              <div className="form__field--full">
                <button type="submit" className="btn btn--lg">Request a Consultation</button>
                <p className="form__note">
                  This form isn&apos;t connected to a backend yet — submissions won&apos;t send
                  anywhere until it&apos;s wired to an email service or API route before launch.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
