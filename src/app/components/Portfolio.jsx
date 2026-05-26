"use client";
 
const projects = [
  {
    title: "Lumina App",
    category: "UI/UX Design",
    bg: "linear-gradient(135deg, #4a0080 0%, #9c27b0 100%)",
    shape: "◈",
  },
  {
    title: "NovaMart",
    category: "Web Development",
    bg: "linear-gradient(135deg, #6a0dad 0%, #ce93d8 100%)",
    shape: "⬡",
  },
  {
    title: "Aether Brand",
    category: "Brand Identity",
    bg: "linear-gradient(135deg, #2d0050 0%, #7b1fa2 100%)",
    shape: "✦",
  },
  {
    title: "Pulse Dashboard",
    category: "Web Development",
    bg: "linear-gradient(135deg, #7b1fa2 0%, #e040fb 100%)",
    shape: "◎",
  },
  {
    title: "Vertex Studio",
    category: "Branding",
    bg: "linear-gradient(135deg, #1a0030 0%, #ab47bc 100%)",
    shape: "△",
  },
  {
    title: "Solaris Campaign",
    category: "Digital Marketing",
    bg: "linear-gradient(135deg, #5e0090 0%, #ce93d8 100%)",
    shape: "◇",
  },
];
 
export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header">
        <span className="section-tag">— Our Work</span>
        <h2 className="section-title">
          Projects we&apos;re <br />
          <span className="accent">proud of</span>
        </h2>
        <p className="section-sub">
          A curated selection of work that showcases our craft and impact.
        </p>
      </div>
 
      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div
            className="project-card"
            key={p.title}
            style={{ "--bg": p.bg, "--delay": `${i * 0.08}s` }}
          >
            <div className="project-thumb">
              <div className="thumb-shape">{p.shape}</div>
              <div className="thumb-grid">
                {Array.from({ length: 9 }).map((_, j) => (
                  <div key={j} className="grid-dot" />
                ))}
              </div>
            </div>
            <div className="project-overlay">
              <span className="project-category">{p.category}</span>
              <h3 className="project-title">{p.title}</h3>
              <button className="project-btn">View Project →</button>
            </div>
          </div>
        ))}
      </div>
 
      <div className="portfolio-cta">
        <a href="#contact" className="btn-outline">
          Start your project →
        </a>
      </div>
 
</section>
  );
}
 