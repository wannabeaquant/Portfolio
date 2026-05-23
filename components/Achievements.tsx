"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const trophies = [
  {
    rank: "1st",
    event: "Codex 2.0",
    detail: "1st place in problem track",
    scale: "1500+ registrations",
    type: "Hackathon",
    weight: "primary",
  },
  {
    rank: "2nd",
    event: "Nexify'25",
    detail: "2nd nationally",
    scale: "300+ teams",
    type: "Hackathon",
    weight: "secondary",
  },
  {
    rank: "Top 10",
    event: "Algoverse'25",
    detail: "Top 10 national finish",
    scale: "1500+ teams",
    type: "Hackathon",
    weight: "secondary",
  },
];

const honors = [
  {
    title: "INSPIRE MANAK Awardee",
    body: "Recognized by the Department of Science & Technology, Government of India for innovation and scientific aptitude. One of the most prestigious student science honors in India.",
    icon: "⬡",
    accent: true,
  },
  {
    title: "Co-Inventor, Indian Patent Filed",
    body: "Filed a patent with the Indian Patent Office. Co-inventor on a technology with formal IP protection.",
    icon: "◈",
    accent: true,
  },
  {
    title: "Finalist — 5+ National Hackathons",
    body: "Consistent top finishes across national-level competitions including EY Techathon, HackRX 6.0, Hackhazards, and others.",
    icon: "◆",
    accent: false,
  },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={ref} className="py-32 px-8 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-num">04 —</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Achievements</h2>
        </motion.div>

        {/* Trophy podium */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {trophies.map((t, i) => (
            <motion.div
              key={t.event}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
              className={`relative border p-8 overflow-hidden group hover:scale-[1.02] transition-transform duration-300 ${
                t.weight === "primary"
                  ? "border-accent bg-accent/10"
                  : "border-border bg-ash/50 hover:border-accent/40"
              }`}
              data-hover
            >
              {/* Background rank number */}
              <div
                className={`absolute right-4 top-4 font-bold font-mono opacity-10 text-7xl ${
                  t.weight === "primary" ? "text-accent" : "text-white"
                }`}
              >
                {t.rank.replace(/[^0-9]/g, "") || "∞"}
              </div>

              <div
                className={`text-5xl font-bold font-mono mb-3 ${
                  t.weight === "primary" ? "text-accent text-glow" : "text-bright"
                }`}
              >
                {t.rank}
              </div>

              <div className="text-white font-bold text-lg mb-1">{t.event}</div>
              <div className="text-ghost text-sm font-mono mb-2">{t.detail}</div>
              <div className="flex items-center gap-2">
                <div
                  className={`text-xs px-2 py-0.5 font-mono ${
                    t.weight === "primary"
                      ? "bg-accent/20 text-accent border border-accent/40"
                      : "bg-muted text-dim"
                  }`}
                >
                  {t.type}
                </div>
                <span className="text-dim text-xs font-mono">{t.scale}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honor cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {honors.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
              className={`border p-6 hover:border-accent/60 transition-all duration-300 ${
                h.accent ? "border-accent/30 bg-accent/5" : "border-border bg-ash/50"
              }`}
              data-hover
            >
              <div
                className={`text-3xl mb-4 ${h.accent ? "text-accent" : "text-dim"}`}
              >
                {h.icon}
              </div>
              <div
                className={`font-bold text-base mb-2 tracking-tight ${
                  h.accent ? "text-white" : "text-bright"
                }`}
              >
                {h.title}
              </div>
              <p className="text-ghost text-xs font-mono leading-relaxed">{h.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
