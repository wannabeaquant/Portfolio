"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "atharvasingh0405@gmail.com",
    href: "mailto:atharvasingh0405@gmail.com",
    icon: "✉",
  },
  {
    label: "GitHub",
    value: "github.com/wannabeaquant",
    href: "https://github.com/wannabeaquant",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/atharva-singh",
    href: "https://linkedin.com/in/atharva-singh",
    icon: "⊞",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("atharvasingh0405@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-8 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-num">06 —</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Contact</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-bright font-mono text-2xl font-bold leading-tight mb-4"
            >
              Let's build something
              <br />
              <span className="text-accent">that matters.</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
              className="text-ghost font-mono text-sm leading-relaxed mb-10 max-w-sm"
            >
              Open to internships, founding-engineer roles, research collaborations,
              and interesting problems. If you're working on something that deserves
              to exist — reach out.
            </motion.p>

            {/* CTA email button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              onClick={copyEmail}
              className="group relative flex items-center gap-3 px-8 py-4 bg-accent text-void font-bold font-mono text-sm tracking-widest uppercase hover:bg-white transition-colors duration-200 mb-4"
            >
              {copied ? "✓ Copied!" : "Copy Email"}
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-dim text-xs font-mono"
            >
              atharvasingh0405@gmail.com
            </motion.p>
          </div>

          {/* Right: links */}
          <div className="space-y-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center justify-between border border-border p-5 hover:border-accent group transition-all duration-200"
                data-hover
              >
                <div className="flex items-center gap-4">
                  <span className="text-dim text-xl group-hover:text-accent transition-colors">{link.icon}</span>
                  <div>
                    <div className="text-xs font-mono text-dim tracking-widest uppercase mb-0.5">{link.label}</div>
                    <div className="text-ghost text-sm font-mono group-hover:text-bright transition-colors">{link.value}</div>
                  </div>
                </div>
                <span className="text-dim group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto mt-32 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4"
      >
        <div className="text-dim text-xs font-mono">
          © 2026 Atharva Singh — Built with Next.js, Framer Motion, Tailwind
        </div>
        <div className="text-dim text-xs font-mono">
          New Delhi, India · wannabeaquant
        </div>
      </motion.div>
    </section>
  );
}
