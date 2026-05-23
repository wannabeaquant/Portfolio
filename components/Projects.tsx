"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  link?: string;
  year: string;
  badge?: string;
};

const projects: Project[] = [
  {
    name: "axiom",
    tagline: "Developer-native agent kit system",
    description:
      "Local-first SDK for installable AI agent kits. Add a curated kit into your repo, own the files, customize prompts and schemas, run with your own model key. Flagship kit: release-readiness with dashboard, CLI, and replay.",
    stack: ["TypeScript", "pnpm", "Turborepo", "Claude API", "Next.js"],
    link: "https://github.com/wannabeaquant",
    year: "2025",
  },
  {
    name: "DegenAI",
    tagline: "Autonomous trading agent on Base",
    description:
      "LLM-driven on-chain trading agent with persistent memory, selective paid tool calls, conviction scoring, and explainable decision-making. Dry-run testing flows to minimize API spend.",
    stack: ["TypeScript", "LLMs", "Base Chain", "On-chain Execution", "Memory"],
    link: "https://github.com/wannabeaquant/DegenAI",
    year: "2026",
  },
  {
    name: "CIVITAS",
    tagline: "OSINT monitoring & risk analysis platform",
    description:
      "Operator-facing FastAPI platform for multi-source OSINT ingestion, incident triage, verification, alerting, and predictive risk analysis. Signal normalization, watchlists, and downloadable reports.",
    stack: ["FastAPI", "Python", "SQLite", "REST APIs", "OSINT"],
    link: "https://github.com/wannabeaquant/CIVITAS",
    year: "2026",
  },
  {
    name: "FinSight",
    tagline: "AI financial analysis platform — 2nd nationally",
    description:
      "LLM-powered platform for financial report analysis using structured prompting, retrieval, and context grounding. Generates interpretable company insights. Placed 2nd at Nexify'25 among 300+ teams.",
    stack: ["Python", "LLMs", "RAG", "FastAPI", "Embeddings"],
    link: "https://github.com/wannabeaquant/FinSight_backend",
    year: "2025",
    badge: "2nd / 300+ teams",
  },
  {
    name: "ATLAS-v2",
    tagline: "Deterministic paper trading scaffold",
    description:
      "Production-ready paper trading engine with deterministic execution, strategy backtesting, and live alpha strategy infrastructure. Foundation for Polymarket-Bot.",
    stack: ["Python", "Quant", "Trading", "Backtesting"],
    link: "https://github.com/wannabeaquant/ATLAS-v2",
    year: "2025",
  },
  {
    name: "GhostLAN",
    tagline: "Digital twin for eSports anti-cheat testing",
    description:
      "Comprehensive simulation platform for offline eSports anti-cheat testing powered by Duality AI. AI agents exhibit normal and cheat-prone behaviors, enabling pre-tournament validation.",
    stack: ["Python", "Duality AI", "FastAPI", "WebSockets", "Analytics"],
    link: "https://github.com/wannabeaquant/GhostLAN",
    year: "2025",
  },
  {
    name: "MEDUSA",
    tagline: "AI makeup guidance from a selfie",
    description:
      "Reads face geometry and skin tone from user selfies, then generates personalized step-by-step makeup tutorials with visual overlays painted onto the user's own photo.",
    stack: ["Claude API", "Computer Vision", "FastAPI", "React"],
    year: "2025",
  },
  {
    name: "Polymarket-Bot",
    tagline: "Live alpha strategies on prediction markets",
    description:
      "Autonomous prediction market trading bot with live alpha strategy execution on Polymarket. Built on top of ATLAS-v2 scaffold.",
    stack: ["Python", "Polymarket API", "Trading", "LLMs"],
    link: "https://github.com/wannabeaquant/Polymarket-Bot",
    year: "2025",
  },
  {
    name: "DHARA / SimhasthaFlow",
    tagline: "Smart crowd management for Kumbh Mela",
    description:
      "FastAPI-based intelligent crowd management and navigation system for large-scale religious gatherings. Real-time coordination, emergency response, and resource optimization for 75M+ pilgrims.",
    stack: ["FastAPI", "Python", "TypeScript", "Real-time", "GIS"],
    link: "https://github.com/wannabeaquant/DHARA",
    year: "2025",
  },
  {
    name: "Aperture",
    tagline: "B2B lead pipeline intelligence",
    description:
      "Automated B2B lead sourcing and enrichment pipeline. Scrapes, scores, and enriches leads with intelligent filtering for high-intent prospects.",
    stack: ["Python", "Playwright", "APIs", "LLMs", "Data Pipeline"],
    link: "https://github.com/wannabeaquant/Aperture",
    year: "2026",
  },
  {
    name: "NOESIS",
    tagline: "NLP-powered knowledge platform",
    description:
      "Knowledge extraction and synthesis platform built with NLP primitives. Semantic search, document understanding, and intelligent summarization.",
    stack: ["JavaScript", "Python", "NLP", "Transformers"],
    link: "https://github.com/wannabeaquant/NOESIS_",
    year: "2025",
  },
  {
    name: "Bliss",
    tagline: "Gamified crypto trading app",
    description:
      "Mobile-first gamified crypto trading platform. Combines on-chain mechanics with game theory to make trading competitive and educational.",
    stack: ["React Native", "TypeScript", "Web3", "Solidity"],
    year: "2026",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative border p-6 transition-all duration-300 group ${
        hovered ? "border-accent bg-accent/5" : "border-border bg-ash/50"
      }`}
      data-hover
    >
      {/* Index */}
      <div className="absolute top-4 right-4 text-xs font-mono text-dim">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Badge */}
      {project.badge && (
        <div className="inline-flex items-center gap-1 mb-3 px-2 py-0.5 bg-accent/20 border border-accent/40 text-accent text-xs font-mono">
          ◈ {project.badge}
        </div>
      )}

      <div className="mb-1">
        <span className="text-white font-bold text-lg tracking-tight">{project.name}</span>
        <span className="text-dim text-xs font-mono ml-3">{project.year}</span>
      </div>
      <div className="text-accent text-xs font-mono mb-3 tracking-wide">{project.tagline}</div>
      <p className="text-ghost text-sm font-mono leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-0.5 border border-border text-dim font-mono group-hover:border-accent/30 group-hover:text-ghost transition-colors"
          >
            {s}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-dim hover:text-accent transition-colors underline underline-offset-4"
        >
          View on GitHub →
        </a>
      )}

      {/* Corner accent */}
      <motion.div
        animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
        className="absolute bottom-0 left-0 h-px bg-accent w-full origin-left"
        style={{ transition: "transform 0.3s ease" }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-8 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-num">02 —</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-dim text-sm font-mono mb-16 max-w-xl"
        >
          {projects.length} projects across hackathons, production, and R&D. All real — no toy demos.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
