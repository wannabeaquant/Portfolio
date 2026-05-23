"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TAGLINE_WORDS = [
  "multi-agent AI",
  "RAG pipelines",
  "trading bots",
  "LLM systems",
  "agentic infra",
];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,255,0,${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200,255,0,${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
    />
  );
}

function TypingTagline() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TAGLINE_WORDS[idx];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % TAGLINE_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="text-accent">
      {displayed}
      <span className="animate-pulse">_</span>
    </span>
  );
}

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.8 + i * 0.06,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function Hero() {
  const firstName = "ATHARVA";
  const lastName = "SINGH";

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 lg:px-24 overflow-hidden">
      <ParticleField />

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

      {/* Top-left coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute top-24 left-8 text-dim text-xs font-mono"
      >
        <div>28.6139° N</div>
        <div>77.2090° E</div>
        <div className="text-accent mt-1">NEW DELHI, IN</div>
      </motion.div>

      {/* Status indicator */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0 }}
        className="absolute top-24 right-8 flex items-center gap-2 text-xs font-mono"
      >
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        <span className="text-ghost">AVAILABLE FOR OPPORTUNITIES</span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl">
        {/* System label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="section-num">SYS://WANNABEAQUANT</span>
          <span className="text-dim text-xs">v2.0.26</span>
        </motion.div>

        {/* Name — staggered letter reveal */}
        <div className="overflow-hidden mb-2" style={{ perspective: "800px" }}>
          <div className="flex gap-[0.02em] md:gap-[0.04em]">
            {firstName.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-[13vw] md:text-[11vw] lg:text-[9vw] font-bold leading-none tracking-tighter text-white"
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden mb-6" style={{ perspective: "800px" }}>
          <div className="flex gap-[0.02em] md:gap-[0.04em]">
            {lastName.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={firstName.length + i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-[13vw] md:text-[11vw] lg:text-[9vw] font-bold leading-none tracking-tighter"
                style={{
                  display: "inline-block",
                  WebkitTextStroke: "1px #c8ff00",
                  color: "transparent",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4"
        >
          <span className="text-bright text-lg md:text-xl font-mono tracking-wide">
            Founding Engineer / AI Builder
          </span>
          <span className="hidden sm:block w-px h-5 bg-border" />
          <span className="text-ghost text-sm font-mono">
            building <TypingTagline />
          </span>
        </motion.div>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          className="text-dim text-sm font-mono max-w-xl leading-relaxed mb-12"
        >
          Sophomore @ VIPS · INSPIRE MANAK Awardee · Co-Inventor, Indian Patent Filed ·{" "}
          <span className="text-accent">Founding Eng @ Himitsu Lab</span>
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-accent text-void text-sm font-bold tracking-widest uppercase overflow-hidden hover:bg-white transition-colors duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-ghost text-sm font-mono tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-200"
          >
            Contact
          </a>
          <a
            href="https://github.com/wannabeaquant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim text-xs font-mono hover:text-accent transition-colors duration-200 underline underline-offset-4"
          >
            github.com/wannabeaquant →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-8 flex flex-col items-start gap-2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent animate-pulse" />
        <span className="text-dim text-xs font-mono tracking-widest rotate-0">SCROLL</span>
      </motion.div>

      {/* Ambient grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  );
}
