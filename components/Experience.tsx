"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "HIMITSU LAB LIMITED",
    role: "Founding Engineer / AI Intern",
    period: "Jun 2025 — Present",
    location: "Remote / Yokohama, Japan",
    tag: "FOUNDING MEMBER",
    bullets: [
      "Founding engineering member for SOMA Engine — production multi-agent AI across backend, frontend, and infrastructure.",
      "Architected LLM workflows with persistent memory, tool use, retrieval, and workflow orchestration.",
      "Built RAG pipelines using embeddings and Milvus; improved factual grounding in live use cases.",
      "Built eval + testing loops for cognitive pipelines: retrieval quality, tool selection, regression detection.",
      "Reduced serving latency by 40% and end-to-end task time by 50%+ via async, batching, caching.",
    ],
    stack: ["Multi-agent AI", "RAG", "Milvus", "FastAPI", "Async"],
    primary: true,
  },
  {
    company: "180 DEGREES CONSULTING, VIPS",
    role: "Core Member — R&D Tech Team",
    period: "2025 — Present",
    location: "New Delhi, India",
    tag: "TECH TEAM",
    bullets: [
      "Built the full website for VIPS's 180 Degrees Consulting chapter.",
      "Bridging consulting strategy with engineering execution in the R&D department.",
    ],
    stack: ["React", "Next.js", "Web Development"],
    primary: false,
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="border-t border-rule px-8 lg:px-16 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="label mb-3">&ldquo;EXPERIENCE&rdquo;</div>
            <h2 className="section-title text-paper">WHERE<br />I&apos;VE WORKED</h2>
          </motion.div>
          <div className="index-num hidden lg:block">04</div>
        </div>

        {/* Entries */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-rule py-10 grid lg:grid-cols-3 gap-10"
            >
              {/* Left: meta */}
              <div>
                <div className="label mb-2">{exp.period}</div>
                <div className="font-display font-bold text-paper text-xl mb-1 leading-tight">
                  {exp.company}
                </div>
                <div className="text-paper-muted text-sm mb-3">{exp.location}</div>
                <div className="vt border border-rule inline-block px-2 py-1 text-paper-muted text-[0.55rem]">
                  &ldquo;{exp.tag}&rdquo;
                </div>
              </div>

              {/* Center: role + bullets */}
              <div className="lg:col-span-2">
                <div className="font-display font-semibold text-paper text-2xl mb-5">
                  {exp.role}
                </div>
                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 text-paper-muted text-sm font-light leading-relaxed">
                      <span className="text-paper-muted shrink-0 mt-0.5 font-mono text-xs">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span key={s} className="label border border-rule px-2 py-1 text-[0.55rem]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="border-t border-rule pt-10 mt-0 grid lg:grid-cols-3 gap-10"
        >
          <div>
            <div className="label mb-2">Aug 2024 — Aug 2028</div>
            <div className="font-display font-bold text-paper text-xl leading-tight">
              VIVEKANANDA INSTITUTE OF PROFESSIONAL STUDIES
            </div>
            <div className="text-paper-muted text-sm mt-1">New Delhi, India</div>
          </div>
          <div className="lg:col-span-2 flex items-start justify-between">
            <div>
              <div className="font-display font-semibold text-paper text-2xl mb-2">
                B.Tech — Artificial Intelligence & Machine Learning
              </div>
              <div className="label">UNDERGRADUATE · CLASS OF 2028</div>
            </div>
            <div className="text-right">
              <div className="font-display font-extrabold text-paper text-6xl leading-none tracking-tight">8.69</div>
              <div className="label mt-1">CGPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
