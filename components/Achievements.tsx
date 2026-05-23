"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const wins = [
  { rank: "1ST", event: "CODEX 2.0", detail: "1st in problem track", scale: "1500+ registrations" },
  { rank: "2ND", event: "NEXIFY'25", detail: "2nd nationally", scale: "300+ teams" },
  { rank: "TOP 10", event: "ALGOVERSE'25", detail: "Top 10 national finish", scale: "1500+ teams" },
];

const honors = [
  {
    label: "\"GOVERNMENT RECOGNITION\"",
    title: "INSPIRE MANAK AWARDEE",
    body: "Recognized by the Department of Science & Technology, Government of India for innovation and scientific aptitude. One of the most prestigious student science honors in India.",
  },
  {
    label: "\"INTELLECTUAL PROPERTY\"",
    title: "CO-INVENTOR, INDIAN PATENT FILED",
    body: "Filed a patent with the Indian Patent Office. Co-inventor on a technology with formal IP protection under the Government of India.",
  },
  {
    label: "\"CONSISTENCY\"",
    title: "FINALIST — 5+ NATIONAL HACKATHONS",
    body: "Consistent top finishes across EY Techathon, HackRX 6.0, Hackhazards, IGDTUW, and others. Not a one-hit wonder.",
  },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" ref={ref} className="border-t border-rule px-8 lg:px-16 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="label mb-3">&ldquo;ACHIEVEMENTS&rdquo;</div>
            <h2 className="section-title text-paper">WHAT<br />I&apos;VE WON</h2>
          </motion.div>
          <div className="index-num hidden lg:block">05</div>
        </div>

        {/* Hackathon wins — big row */}
        <div className="grid md:grid-cols-3 gap-px bg-rule mb-px">
          {wins.map((w, i) => (
            <motion.div
              key={w.event}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-ink p-8 hover:bg-ink-soft transition-colors group"
              data-hover
            >
              <div className="font-display font-extrabold text-paper leading-none tracking-tight mb-4"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
                {w.rank}
              </div>
              <div className="font-display font-bold text-paper text-xl mb-1">{w.event}</div>
              <div className="text-paper-muted text-sm mb-3">{w.detail}</div>
              <div className="label">{w.scale}</div>
            </motion.div>
          ))}
        </div>

        {/* Honors */}
        <div className="grid md:grid-cols-3 gap-px bg-rule">
          {honors.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.35, duration: 0.45 }}
              className="bg-ink p-8 hover:bg-ink-soft transition-colors"
              data-hover
            >
              <div className="label mb-4">{h.label}</div>
              <div className="font-display font-bold text-paper text-base mb-3 leading-tight">
                {h.title}
              </div>
              <p className="text-paper-muted text-sm font-light leading-relaxed">{h.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
