"use client";
import { useEffect, useRef, useState } from "react";

export default function ReviewsSlider({ reviews }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const go = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".rcard");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: dir * ((card ? card.offsetWidth : el.clientWidth) + gap),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className="rslider reveal">
      <div className="rslider__nav">
        <button type="button" className="rslider__btn" onClick={() => go(-1)} disabled={atStart} aria-label="Previous review">
          &larr;
        </button>
        <button type="button" className="rslider__btn" onClick={() => go(1)} disabled={atEnd} aria-label="Next review">
          &rarr;
        </button>
      </div>
      <div
        className="rslider__track"
        ref={trackRef}
        onScroll={update}
        tabIndex={0}
        role="region"
        aria-label="Client reviews"
      >
        {reviews.map((r) => (
          <figure className="rcard" key={r.name}>
            <div className="rcard__stars" role="img" aria-label="5 out of 5 stars">
              <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
            <blockquote className="rcard__text">
              <p>{r.text}</p>
            </blockquote>
            <figcaption className="rcard__by">
              <span className="rcard__name">{r.name}</span>
              <span className="rcard__proj">{r.project}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
