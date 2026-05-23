"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROLES = ["FOUNDING ENGINEER", "AI BUILDER", "AGENT ARCHITECT", "QUANT SYSTEMS"];

function TickerRole() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="overflow-hidden h-5">
      <motion.div
        key={idx}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="vt text-paper-muted"
      >
        {ROLES[idx]}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 px-8 lg:px-16 pt-32 overflow-hidden">

      {/* Giant ghost index */}
      <div className="absolute top-16 right-8 lg:right-16 select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="index-num"
        >
          01
        </motion.div>
      </div>

      {/* Status pill — top left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute top-20 left-8 lg:left-16 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-paper animate-pulse" />
        <span className="vt text-paper-muted">AVAILABLE</span>
      </motion.div>

      {/* Main name */}
      <div className="relative z-10">
        <div className="overflow-hidden mb-[-0.1em]">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold leading-none tracking-[-0.04em] text-paper"
            style={{ fontSize: "clamp(5rem, 18vw, 18rem)" }}
          >
            ATHARVA
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold leading-none tracking-[-0.04em]"
            style={{
              fontSize: "clamp(5rem, 18vw, 18rem)",
              WebkitTextStroke: "1px #efefef",
              color: "transparent",
            }}
          >
            SINGH
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-rule pt-6"
        >
          {/* Left meta */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-6">
              <div>
                <div className="label mb-1">ROLE</div>
                <TickerRole />
              </div>
              <div className="w-px h-8 bg-rule" />
              <div>
                <div className="label mb-1">BASED IN</div>
                <div className="vt text-paper-muted">NEW DELHI, IN</div>
              </div>
              <div className="w-px h-8 bg-rule" />
              <div>
                <div className="label mb-1">c/o</div>
                <div className="vt text-paper-muted">HIMITSU LAB</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {["INSPIRE MANAK AWARDEE", "CO-INVENTOR, INDIAN PATENT", "CODEX 2.0 — 1ST / 1500+"].map((t) => (
                <span key={t} className="vt text-paper-muted border border-rule px-2 py-1">
                  &ldquo;{t}&rdquo;
                </span>
              ))}
            </div>
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#projects"
              className="vt font-bold text-ink bg-paper px-7 py-3 invert-hover"
            >
              VIEW WORK
            </a>
            <a
              href="#contact"
              className="vt text-paper border border-rule px-7 py-3 invert-hover"
            >
              CONTACT
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
