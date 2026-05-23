"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 lg:px-16 h-14 transition-all duration-200 ${
        scrolled ? "border-b border-rule bg-ink/90 backdrop-blur-sm" : ""
      }`}
    >
      <a href="#" className="font-display font-800 text-paper text-sm tracking-widest uppercase hover:opacity-60 transition-opacity">
        AS
      </a>

      <div className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="vt text-paper-muted hover:text-paper transition-colors duration-150 relative group"
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="https://github.com/wannabeaquant"
        target="_blank"
        rel="noopener noreferrer"
        className="vt text-ink bg-paper px-5 py-2 invert-hover font-bold"
      >
        GITHUB
      </a>
    </motion.nav>
  );
}
