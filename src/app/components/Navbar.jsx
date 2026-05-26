"use client";
import { useState, useEffect } from "react";
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const links = ["Home", "Services", "Portfolio", "Contact"];
 
  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-brand">
        <span className="brand-icon">✦</span> PixelCraft
      </div>
 
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Let&apos;s Talk
        </a>
      </div>
 
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? "bar bar-open" : "bar"} />
        <span className={menuOpen ? "bar bar-hide" : "bar"} />
        <span className={menuOpen ? "bar bar-open bar-reverse" : "bar"} />
      </button>
 </nav>
  );
}