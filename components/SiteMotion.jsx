"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasIO = "IntersectionObserver" in window;

    // reveal on scroll
    const revEls = Array.from(document.querySelectorAll(".reveal"));
    let io;
    if (hasIO) {
      io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );
      revEls.forEach((el) => io.observe(el));
    } else {
      revEls.forEach((el) => el.classList.add("in"));
    }

    // count-up numbers
    const counts = Array.from(document.querySelectorAll("[data-count]"));
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      if (reduce) {
        el.textContent = target + suffix;
        return;
      }
      let start = null;
      const dur = 1500;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const val = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(step);
    };
    let cio;
    if (hasIO) {
      cio = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              run(e.target);
              cio.unobserve(e.target);
            }
          }),
        { threshold: 0.6 }
      );
      counts.forEach((el) => cio.observe(el));
    } else {
      counts.forEach(run);
    }

    // scroll progress + parallax
    const prog = document.getElementById("scroll-progress");
    const paras = Array.from(document.querySelectorAll("[data-parallax]"));
    let ticking = false;
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (prog) prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      if (!reduce) {
        paras.forEach((el) => {
          const r = el.parentElement.getBoundingClientRect();
          el.style.transform = "translateY(" + r.top * -0.12 + "px)";
        });
      }
      ticking = false;
    };
    const req = () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    };
    window.addEventListener("scroll", req, { passive: true });
    onScroll();

    return () => {
      if (io) io.disconnect();
      if (cio) cio.disconnect();
      window.removeEventListener("scroll", req);
    };
  }, [pathname]);

  return <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />;
}
