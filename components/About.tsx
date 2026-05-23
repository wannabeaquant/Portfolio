"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "8.69", label: "CGPA", sub: "B.Tech AI/ML" },
  { value: "40%", label: "Latency Cut", sub: "@ Himitsu Lab" },
  { value: "1500+", label: "Teams Beat", sub: "Codex 2.0, 1st" },
  { value: "5+", label: "Finals", sub: "National Hackathons" },
];

const lines = [
  "Sophomore studying AI & ML at VIPS, New Delhi.",
  "Founding engineering member at Himitsu Lab (Yokohama, Japan) — building SOMA Engine:",
  "production multi-agent systems with LLM workflows, RAG, persistent memory, tool orchestration.",
  "I build systems that think, reason, and act — not just demo.",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 px-8 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-num">01 —</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">About</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: text */}
          <div>
            <div className="space-y-0 mb-12">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                  className={`font-mono leading-relaxed ${
                    i === 0
                      ? "text-bright text-lg mb-3"
                      : i === 1
                      ? "text-ghost text-sm mt-4"
                      : "text-ghost text-sm"
                  }`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Terminal-style bio block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="border border-border bg-ash p-6 font-mono text-xs"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-dim ml-2">~ whoami</span>
              </div>
              <div className="space-y-1 text-ghost">
                <div><span className="text-accent">name</span>    → Atharva Singh</div>
                <div><span className="text-accent">handle</span>  → wannabeaquant</div>
                <div><span className="text-accent">role</span>    → Founding Engineer / AI Builder</div>
                <div><span className="text-accent">location</span>→ New Delhi, India 🇮🇳</div>
                <div><span className="text-accent">focus</span>   → Agentic AI, LLMs, Quant Systems</div>
                <div><span className="text-accent">status</span>  → <span className="text-accent">open to opportunities</span></div>
              </div>
            </motion.div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.15 * i + 0.4, duration: 0.4 }}
                className="border border-border p-6 hover:border-accent transition-colors duration-300 group"
                data-hover
              >
                <div className="text-4xl font-bold text-accent group-hover:text-glow transition-all mb-2 font-mono">
                  {s.value}
                </div>
                <div className="text-bright text-sm font-bold tracking-wide mb-1">{s.label}</div>
                <div className="text-dim text-xs font-mono">{s.sub}</div>
              </motion.div>
            ))}

            {/* Patent / INSPIRE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="col-span-2 border border-accent/30 bg-accent/5 p-6 hover:bg-accent/10 transition-all duration-300 group"
              data-hover
            >
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl">◈</div>
                <div>
                  <div className="text-accent text-sm font-bold tracking-widest mb-1 uppercase">
                    INSPIRE MANAK Awardee
                  </div>
                  <div className="text-ghost text-xs font-mono">
                    Recognized by Dept of Science & Technology, Government of India. Co-Inventor on an Indian Patent filed.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
