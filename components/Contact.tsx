"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  { label: "EMAIL", value: "atharvasingh0405@gmail.com", href: "mailto:atharvasingh0405@gmail.com" },
  { label: "GITHUB", value: "github.com/wannabeaquant", href: "https://github.com/wannabeaquant" },
  { label: "LINKEDIN", value: "linkedin.com/in/atharva-singh-", href: "https://www.linkedin.com/in/atharva-singh-/" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("atharvasingh0405@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="border-t border-rule px-8 lg:px-16 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="label mb-3">&ldquo;CONTACT&rdquo;</div>
            <h2 className="section-title text-paper">LET&apos;S<br />TALK</h2>
          </motion.div>
          <div className="index-num hidden lg:block">07</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-paper text-2xl font-light leading-relaxed mb-8 max-w-sm"
            >
              Open to internships, founding-engineer roles, research, and interesting problems.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
              onClick={copy}
              className="vt font-bold text-ink bg-paper px-10 py-4 invert-hover mb-3 block"
            >
              {copied ? "COPIED ✓" : "COPY EMAIL"}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="label"
            >
              atharvasingh0405@gmail.com
            </motion.div>
          </div>

          {/* Right: link list */}
          <div className="space-y-0">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center justify-between border-t border-rule py-5 group hover:opacity-60 transition-opacity duration-150"
                data-hover
              >
                <div>
                  <div className="label mb-1">{l.label}</div>
                  <div className="font-display font-semibold text-paper text-lg">{l.value}</div>
                </div>
                <span className="text-paper-muted font-mono text-sm group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            ))}
            <div className="border-t border-rule" />
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-24 pt-8 border-t border-rule flex flex-wrap items-center justify-between gap-4"
        >
          <div className="label">© 2026 ATHARVA SINGH</div>
          <div className="label">GURGAON, INDIA · WANNABEAQUANT</div>
          <div className="label">BUILT WITH NEXT.JS · FRAMER MOTION</div>
        </motion.div>
      </div>
    </section>
  );
}
