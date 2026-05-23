"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Himitsu Lab Limited",
    role: "Founding Engineer / AI Intern",
    period: "Jun 2025 — Present",
    location: "Remote / Yokohama, Japan",
    bullets: [
      "Founding engineering member for the SOMA Engine — production multi-agent AI systems across backend, frontend, and infrastructure.",
      "Architected LLM workflows with persistent memory, tool use, retrieval, and workflow orchestration for reliable end-to-end task execution.",
      "Built RAG pipelines using embeddings and Milvus, improving factual grounding and response consistency.",
      "Built evaluation and testing loops for cognitive/reasoning pipelines covering retrieval quality, tool selection, regression detection.",
      "Reduced serving latency by 40% and end-to-end task time by 50%+ through async execution, batching, caching, and inference-path optimization.",
    ],
    highlight: true,
    stack: ["Multi-agent AI", "RAG", "Milvus", "LLM", "FastAPI", "Async"],
  },
  {
    company: "180 Degrees Consulting, VIPS",
    role: "Core Member — R&D Department (Tech Team)",
    period: "2025 — Present",
    location: "New Delhi, India",
    bullets: [
      "Built the full website for VIPS's 180 Degrees Consulting chapter as part of the R&D tech team.",
      "Working at the intersection of consulting and technology — bridging strategy with engineering execution.",
    ],
    highlight: false,
    stack: ["Web Development", "React", "Next.js"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 px-8 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-num">03 —</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute left-[140px] top-0 bottom-0 w-px bg-border origin-top hidden md:block"
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="relative md:pl-[180px]"
              >
                {/* Date column (desktop) */}
                <div className="hidden md:block absolute left-0 top-0 w-[120px] text-right">
                  <div className="text-xs font-mono text-dim leading-relaxed">{exp.period}</div>
                </div>

                {/* Node */}
                <div
                  className={`hidden md:block absolute left-[136px] top-1.5 w-2 h-2 rounded-full border ${
                    exp.highlight ? "bg-accent border-accent" : "bg-void border-dim"
                  }`}
                />

                {/* Content */}
                <div
                  className={`border p-8 transition-all duration-300 ${
                    exp.highlight
                      ? "border-accent/40 bg-accent/5"
                      : "border-border bg-ash/50"
                  }`}
                >
                  {/* Mobile date */}
                  <div className="md:hidden text-xs font-mono text-dim mb-3">{exp.period}</div>

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-1">
                    <div>
                      <h3
                        className={`text-xl font-bold tracking-tight ${
                          exp.highlight ? "text-white" : "text-bright"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span
                          className={`text-sm font-mono ${
                            exp.highlight ? "text-accent" : "text-ghost"
                          }`}
                        >
                          {exp.company}
                        </span>
                        <span className="text-dim text-xs">·</span>
                        <span className="text-dim text-xs font-mono">{exp.location}</span>
                      </div>
                    </div>
                    {exp.highlight && (
                      <div className="px-2 py-1 border border-accent/40 text-accent text-xs font-mono tracking-widest">
                        FOUNDING MEMBER
                      </div>
                    )}
                  </div>

                  {/* Bullets */}
                  <ul className="mt-5 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-ghost text-sm font-mono leading-relaxed">
                        <span className="text-accent mt-0.5 shrink-0">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.stack.map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 bg-muted text-dim font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 border border-border p-8 bg-ash/50"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="section-num mb-2">EDUCATION</div>
              <h3 className="text-white font-bold text-xl">
                B.Tech in Artificial Intelligence & Machine Learning
              </h3>
              <div className="text-ghost font-mono text-sm mt-1">
                Vivekananda Institute of Professional Studies · New Delhi, India
              </div>
              <div className="text-dim font-mono text-xs mt-1">Aug 2024 — Aug 2028</div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-accent font-mono">8.69</div>
              <div className="text-dim text-xs font-mono mt-1">CGPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
