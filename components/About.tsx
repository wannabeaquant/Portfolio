"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "8.69", label: "CGPA", sub: "B.TECH AI/ML · VIPS" },
  { value: "−40%", label: "LATENCY", sub: "SERVING TIME @ HIMITSU" },
  { value: "1500+", label: "TEAMS", sub: "CODEX 2.0 — 1ST PLACE" },
  { value: "5+", label: "FINALS", sub: "NATIONAL HACKATHONS" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="border-t border-rule px-8 lg:px-16 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-start justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label mb-3">&ldquo;ABOUT&rdquo;</div>
            <h2 className="section-title text-paper">WHO<br />I AM</h2>
          </motion.div>
          <div className="index-num hidden lg:block">02</div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: bio */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-paper text-xl lg:text-2xl font-light leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sophomore studying AI & ML at VIPS, Gurgaon. Founding engineering member at Himitsu Lab — building SOMA Engine.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-paper-muted text-base font-light leading-relaxed mb-10"
            >
              Production multi-agent systems with LLM workflows, RAG pipelines, persistent memory, and tool orchestration. I build systems that reason and act reliably — not just demo.
            </motion.p>

            {/* Identity block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
              className="border border-rule"
            >
              {[
                ["HANDLE", "wannabeaquant"],
                ["FOCUS", "Agentic AI · LLMs · Quant Systems"],
                ["EMPLOYER", "Himitsu Lab Limited — Yokohama, Japan"],
                ["STATUS", "Open to opportunities"],
              ].map(([key, val], i) => (
                <div
                  key={key}
                  className={`flex items-start gap-6 px-5 py-3 ${i < 3 ? "border-b border-rule" : ""}`}
                >
                  <span className="label w-20 shrink-0 pt-0.5">{key}</span>
                  <span className="text-paper-dim text-sm font-mono">{val}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-px bg-rule">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="bg-ink p-7 flex flex-col justify-between group hover:bg-ink-soft transition-colors duration-200"
                data-hover
              >
                <div className="font-display font-extrabold text-5xl text-paper leading-none tracking-tight mb-4">
                  {s.value}
                </div>
                <div>
                  <div className="vt text-paper mb-1">{s.label}</div>
                  <div className="label">{s.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* INSPIRE span */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55 }}
              className="col-span-2 bg-ink border-t border-rule p-7"
              data-hover
            >
              <div className="label mb-2">&ldquo;GOVERNMENT RECOGNITION&rdquo;</div>
              <div className="font-display font-bold text-paper text-xl mb-1">
                INSPIRE MANAK AWARDEE
              </div>
              <div className="text-paper-muted text-sm font-light">
                Dept of Science & Technology, Government of India · Co-Inventor, Indian Patent Filed
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
