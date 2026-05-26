"use client";
import { useEffect, useRef } from "react";
 
export default function Hero() {
  const canvasRef = useRef(null);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
 
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));
 
    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,200,255,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);
 
  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-glow glow-1" />
      <div className="hero-glow glow-2" />
 
      <div className="hero-content">
        <div className="hero-badge">✦ Award-Winning Creative Studio</div>
        <h1 className="hero-title">
          We craft <br />
          <span className="hero-title-accent">digital magic</span>
          <br />
          for bold brands.
        </h1>
        <p className="hero-subtitle">
          Transforming ideas into stunning digital experiences. Strategy,
          design, and technology—unified.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">
            View Our Work
            <span className="btn-arrow">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let&apos;s Talk
          </a>
        </div>
 
        
      </div>
 
      
 </section>
  );
}
    