"use client";
import { useEffect, useState } from "react";

const FILTERS = ["All", "Whole Home", "Additions", "Kitchens", "Bathrooms"];
const CATEGORY_PARAMS = {
  "whole-home": "Whole Home",
  additions: "Additions",
  kitchens: "Kitchens",
  bathrooms: "Bathrooms",
};

const PROJECTS = [
  { src: "/images/whole-work.jpg", cat: "Whole Home", alt: "Whole home renovation by BMO LLC" },
  { src: "/images/whole-work-2.jpg", cat: "Whole Home", alt: "Whole home renovation by BMO LLC" },
  { src: "/images/whole-work-3.jpg", cat: "Whole Home", alt: "Whole home renovation by BMO LLC" },
  { src: "/images/whole-work-4.jpg", cat: "Whole Home", alt: "Whole home renovation by BMO LLC" },
  { src: "/images/addition-work.jpg", cat: "Additions", alt: "Home addition by BMO LLC" },
  { src: "/images/addition-work-2.jpg", cat: "Additions", alt: "Home addition by BMO LLC" },
  { src: "/images/addition-work-3.jpg", cat: "Additions", alt: "Home addition by BMO LLC" },
  { src: "/images/kitchen-work.jpg", cat: "Kitchens", alt: "Kitchen renovation by BMO LLC" },
  { src: "/images/kitchen-work-2.jpg", cat: "Kitchens", alt: "Kitchen renovation by BMO LLC" },
  { src: "/images/kitchen-work-3.jpg", cat: "Kitchens", alt: "Kitchen renovation by BMO LLC" },
  { src: "/images/bathroom-work.jpg", cat: "Bathrooms", alt: "Bathroom remodel by BMO LLC" },
  { src: "/images/bathroom-work-2.jpg", cat: "Bathrooms", alt: "Bathroom remodel by BMO LLC" },
  { src: "/images/bathroom-work-3.jpg", cat: "Bathrooms", alt: "Bathroom remodel by BMO LLC" },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState("All");

  // read ?category= after mount so the static page still ships the full grid
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("category");
    if (param && CATEGORY_PARAMS[param]) setActive(CATEGORY_PARAMS[param]);
  }, []);
  const shown = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <>
      <div className="pfilter reveal" role="group" aria-label="Filter projects by category">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`pfilter__btn${active === f ? " is-active" : ""}`}
            aria-pressed={active === f}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* keyed on the filter so tiles remount and replay their fade-in */}
      <div className="pgrid" key={active}>
        {shown.map((p, i) => (
          <figure className="ptile" key={p.src} style={{ "--i": i }}>
            <div className="ptile__img">
              <img src={p.src} alt={p.alt} loading={i < 6 ? "eager" : "lazy"} />
            </div>
            <figcaption className="ptile__cat">{p.cat}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
