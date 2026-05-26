"use client";
 
const services = [
  {
    icon: "✦",
    title: "UI/UX Design",
    desc: "We design intuitive, beautiful interfaces that delight users and drive conversions. From wireframes to pixel-perfect prototypes.",
    tags: ["Figma", "Prototyping", "User Research"],
    color: "#c060ff",
  },
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Blazing-fast, scalable web applications built with modern frameworks. Performance, accessibility, and clean code—always.",
    tags: ["Next.js", "React", "Node.js"],
    color: "#9c27b0",
  },
  {
    icon: "◈",
    title: "Brand Identity",
    desc: "Distinctive visual identities that tell your story. Logos, color systems, typography, and brand guidelines built to last.",
    tags: ["Strategy", "Logo", "Guidelines"],
    color: "#7b1fa2",
  },
  {
    icon: "◎",
    title: "Digital Marketing",
    desc: "Data-driven campaigns that reach the right audience. SEO, social media, and paid ads that convert and grow.",
    tags: ["SEO", "Social", "Analytics"],
    color: "#ab47bc",
  },
];
 
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-bg-shape" />
 
      <div className="section-header">
        <span className="section-tag">— What We Do</span>
        <h2 className="section-title">
          Services that <br />
          <span className="accent">move the needle</span>
        </h2>
        <p className="section-sub">
          End-to-end creative and technical expertise, delivered with craft.
        </p>
      </div>
 
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={s.title} style={{ "--delay": `${i * 0.1}s`, "--accent": s.color }}>
            <div className="card-icon">{s.icon}</div>
            <h3 className="card-title">{s.title}</h3>
            <p className="card-desc">{s.desc}</p>
            <div className="card-tags">
              {s.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="card-hover-line" />
          </div>
        ))}
      </div>
 </section>
  );
}