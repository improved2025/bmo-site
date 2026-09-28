import Link from "next/link";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata = {
  title: "Our Work — BMO LLC",
  description:
    "Whole home renovations, additions, kitchens, and bathrooms built by BMO LLC for homes across Maryland, DC, and Virginia.",
};

export default function Portfolio() {
  return (
    <main id="top">
      <section className="ahero">
        <div className="wrap">
          <p className="eyebrow reveal">BMO LLC</p>
          <h1 className="ahero__title">
            <span className="hl"><b style={{ animationDelay: "80ms" }}>OUR</b></span>
            <span className="hl"><b className="accent" style={{ animationDelay: "220ms" }}>WORK</b></span>
          </h1>
          <p className="ahero__lede reveal" style={{ "--d": "360ms" }}>
            A look at the caliber and range of renovation work BMO brings to homes across Maryland, DC, and Virginia.
          </p>
        </div>
        <div className="ahero__rule" />
      </section>

      <section className="section pwork">
        <div className="wrap">
          <PortfolioGallery />
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
            <a className="btn btn--ghost btn--lg" href="tel:+12405229075">(240) 522-9075</a>
          </div>
        </div>
      </section>
    </main>
  );
}
