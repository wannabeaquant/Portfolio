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
    name: "AXIOM",
    tagline: "Developer-native agent kit system",
    description: "Local-first SDK for installable AI agent kits. Own the files, customize prompts and schemas, run with your own model key. Flagship: release-readiness with dashboard, CLI, and replay.",
    stack: ["TypeScript", "Turborepo", "Claude API", "Next.js"],
    year: "2025",
  },
  {
    name: "DEGENAI",
    tagline: "Autonomous trading agent on Base",
    description: "LLM-driven on-chain trading agent with persistent memory, conviction scoring, and explainable decision-making. Dry-run testing to minimize API spend.",
    stack: ["TypeScript", "LLMs", "Base Chain", "On-chain Execution"],
    link: "https://github.com/wannabeaquant/DegenAI",
    year: "2026",
  },
  {
    name: "CIVITAS",
    tagline: "OSINT monitoring & risk analysis platform",
    description: "Operator-facing FastAPI platform for multi-source OSINT ingestion, incident triage, verification, alerting, and predictive risk analysis.",
    stack: ["FastAPI", "Python", "SQLite", "REST APIs"],
    link: "https://github.com/wannabeaquant/CIVITAS",
    year: "2026",
  },
  {
    name: "FINSIGHT",
    tagline: "AI financial analysis platform",
    description: "LLM-powered platform for financial report analysis using structured prompting, retrieval, and context grounding to generate interpretable company insights.",
    stack: ["Python", "LLMs", "RAG", "FastAPI"],
    link: "https://github.com/wannabeaquant/FinSight_backend",
    year: "2025",
    badge: "2ND / 300+ TEAMS",
  },
  {
    name: "ATLAS-V2",
    tagline: "Deterministic paper trading scaffold",
    description: "Production paper trading engine with deterministic execution, strategy backtesting, and live alpha strategy infrastructure.",
    stack: ["Python", "Quant", "Trading"],
    link: "https://github.com/wannabeaquant/ATLAS-v2",
    year: "2025",
  },
  {
    name: "GHOSTLAN",
    tagline: "Digital twin for eSports anti-cheat testing",
    description: "Simulation platform for offline eSports anti-cheat testing powered by Duality AI. Pre-tournament validation with AI agents exhibiting normal and cheat-prone behaviors.",
    stack: ["Python", "Duality AI", "FastAPI", "WebSockets"],
    link: "https://github.com/wannabeaquant/GhostLAN",
    year: "2025",
  },
  {
    name: "MEDUSA",
    tagline: "AI makeup guidance from a selfie",
    description: "Reads face geometry and skin tone from user selfies, generates personalized step-by-step makeup tutorials with visual overlays painted onto the user's own photo.",
    stack: ["Claude API", "Computer Vision", "FastAPI", "React"],
    year: "2025",
  },
  {
    name: "POLYMARKET-BOT",
    tagline: "Live alpha strategies on prediction markets",
    description: "Autonomous prediction market trading bot with live alpha strategy execution on Polymarket. Built on ATLAS-v2 scaffold.",
    stack: ["Python", "Polymarket API", "Trading"],
    link: "https://github.com/wannabeaquant/Polymarket-Bot",
    year: "2025",
  },
  {
    name: "DHARA",
    tagline: "Smart crowd management — Kumbh Mela",
    description: "FastAPI-based intelligent crowd management and navigation for large-scale religious gatherings. Real-time coordination for 75M+ pilgrims.",
    stack: ["FastAPI", "Python", "TypeScript", "GIS"],
    link: "https://github.com/wannabeaquant/DHARA",
    year: "2025",
  },
  {
    name: "APERTURE",
    tagline: "B2B lead pipeline intelligence",
    description: "Automated B2B lead sourcing and enrichment pipeline. Scrapes, scores, and enriches leads with intelligent filtering for high-intent prospects.",
    stack: ["Python", "Playwright", "LLMs"],
    link: "https://github.com/wannabeaquant/Aperture",
    year: "2026",
  },
  {
    name: "NOESIS",
    tagline: "NLP-powered knowledge platform",
    description: "Knowledge extraction and synthesis platform with semantic search, document understanding, and intelligent summarization.",
    stack: ["JavaScript", "Python", "NLP", "Transformers"],
    link: "https://github.com/wannabeaquant/NOESIS_",
    year: "2025",
  },
  {
    name: "BLISS",
    tagline: "Gamified crypto trading app",
    description: "Mobile-first gamified crypto trading platform combining on-chain mechanics with game theory.",
    stack: ["React Native", "TypeScript", "Web3", "Solidity"],
    year: "2026",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.04, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border-b border-rule transition-colors duration-150 ${hovered ? "bg-ink-soft" : ""}`}
      data-hover
    >
      <div className="grid grid-cols-12 gap-4 py-5 px-0 items-start">
        {/* Index */}
        <div className="col-span-1 hidden md:block">
          <span className="label">{String(index + 1).padStart(2, "0")}</span>
        </div>

        {/* Name + tagline */}
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="font-display font-bold text-paper text-lg tracking-tight">
              {project.name}
            </span>
            {project.badge && (
              <span className="vt text-paper border border-rule px-2 py-0.5 text-[0.55rem]">
                &ldquo;{project.badge}&rdquo;
              </span>
            )}
          </div>
          <div className="label">{project.tagline}</div>
        </div>

        {/* Description */}
        <div className="col-span-12 md:col-span-4">
          <p className="text-paper-muted text-sm font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Stack + link */}
        <div className="col-span-12 md:col-span-2 flex flex-col items-start gap-2">
          <div className="flex flex-wrap gap-1">
            {project.stack.slice(0, 3).map((s) => (
              <span key={s} className="label border border-rule px-2 py-0.5 text-[0.55rem]">
                {s}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-paper transition-colors duration-150 underline underline-offset-2"
            >
              GITHUB →
            </a>
          )}
        </div>

        {/* Year */}
        <div className="col-span-1 hidden md:flex justify-end">
          <span className="label">{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="border-t border-rule px-8 lg:px-16 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="label mb-3">&ldquo;PROJECTS&rdquo;</div>
            <h2 className="section-title text-paper">BUILT<br />THINGS</h2>
          </motion.div>
          <div className="index-num hidden lg:block">03</div>
        </div>

        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-12 gap-4 border-b border-rule pb-3 mb-0 hidden md:grid"
        >
          <div className="col-span-1" />
          <div className="col-span-4 label">PROJECT</div>
          <div className="col-span-4 label">DESCRIPTION</div>
          <div className="col-span-2 label">STACK</div>
          <div className="col-span-1 label text-right">YEAR</div>
        </motion.div>

        {projects.map((p, i) => (
          <ProjectRow key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
