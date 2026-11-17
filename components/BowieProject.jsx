// Featured case study: whole home renovation in Bowie, MD.
// Real BMO job photos.

const B = "/images/bowie";

const STAGES = [
  {
    n: "01",
    t: "Where it started",
    b: "Carpeted stairs, worn oak floors, and a dark wood kitchen.",
    imgs: [
      { src: `${B}/stair-before.webp`, alt: "Foyer and curved staircase with carpet runner before renovation, Bowie MD" },
      { src: `${B}/kitchen-before.webp`, alt: "Kitchen with dark cabinets and granite counters before renovation, Bowie MD" },
    ],
  },
  {
    n: "02",
    t: "Down to the subfloor",
    b: "Old flooring pulled up and closet walls opened.",
    imgs: [
      { src: `${B}/demo-floors.webp`, alt: "BMO crew removing hardwood flooring during demolition" },
      { src: `${B}/demo-walls.webp`, alt: "BMO crew opening closet walls during demolition" },
    ],
  },
  {
    n: "03",
    t: "Protect, then refinish",
    b: "Railings and finished surfaces sealed off before the staircase was stripped and restained.",
    imgs: [
      { src: `${B}/stair-protected.webp`, alt: "Curved staircase wrapped in plastic sheeting to protect it during work" },
      { src: `${B}/stair-staining.webp`, alt: "Oak stair treads being stained during refinishing" },
    ],
  },
  {
    n: "04",
    t: "The finish",
    b: "Dark stained treads, black iron balusters, polished large format tile, and custom fluted millwork.",
    imgs: [
      { src: `${B}/stair-after.webp`, alt: "Finished curved staircase with dark treads and black iron balusters over polished tile, Bowie MD" },
      { src: `${B}/fluted-column.webp`, alt: "BMO carpenter installing fluted trim on a column" },
    ],
  },
];

export default function BowieProject() {
  return (
    <section className="section bowie" id="bowie">
      <div className="wrap">
        <div className="head reveal">
          <p className="kicker">Featured Project</p>
          <h2 className="h2">Bowie, MD.<br />Whole home.</h2>
          <p className="bowie__lede">
            A whole home renovation, from demolition to the final coat of stain.
            Every photo here is from the job site.
          </p>
        </div>

        <div className="ba reveal">
          <figure className="ba__panel">
            <div className="ba__img"><img src={`${B}/stair-before.webp`} alt="Staircase before renovation" /></div>
            <figcaption className="ba__tag">Before</figcaption>
          </figure>
          <figure className="ba__panel">
            <div className="ba__img"><img src={`${B}/stair-after.webp`} alt="Staircase after renovation" /></div>
            <figcaption className="ba__tag ba__tag--after">After</figcaption>
          </figure>
        </div>

        <ol className="stages">
          {STAGES.map((s, i) => (
            <li className="stage reveal" key={s.n} style={{ "--d": `${i * 60}ms` }}>
              <div className="stage__text">
                <span className="stage__n">{s.n}</span>
                <h3 className="stage__t">{s.t}</h3>
                <p className="stage__b">{s.b}</p>
              </div>
              <div className="stage__imgs">
                {s.imgs.map((im) => (
                  <div className="stage__img" key={im.src}>
                    <img src={im.src} alt={im.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <div className="bowie__kitchen">
          <div className="head reveal">
            <p className="kicker">The Kitchen</p>
            <h3 className="stage__t">Same room.<br />A new kitchen.</h3>
            <p className="stage__b">
              White shaker cabinetry to the ceiling, veined quartz counters with a full height
              backsplash, black and brass appliances, and the same polished tile that runs through the main level.
            </p>
          </div>
          <div className="ba ba--wide reveal">
            <figure className="ba__panel">
              <div className="ba__img"><img src={`${B}/kitchen-before.webp`} alt="Kitchen with dark cabinets, granite counters and oak floors before renovation, Bowie MD" loading="lazy" /></div>
              <figcaption className="ba__tag">Before</figcaption>
            </figure>
            <figure className="ba__panel">
              <div className="ba__img"><img src={`${B}/kitchen-after.webp`} alt="Finished kitchen with white shaker cabinets, veined quartz island and polished tile floors, Bowie MD" loading="lazy" /></div>
              <figcaption className="ba__tag ba__tag--after">After</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
