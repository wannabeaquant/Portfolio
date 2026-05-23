"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "achievements", href: "#achievements" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-5 transition-all duration-300 ${
        scrolled ? "border-b border-border/50 bg-void/80 backdrop-blur-md" : ""
      }`}
    >
      <a
        href="#"
        className="text-accent font-mono text-sm tracking-widest font-bold hover:text-glow transition-all"
      >
        AS
      </a>
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-ghost text-xs tracking-widest uppercase hover:text-accent transition-colors duration-200 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full" />
          </a>
        ))}
        <a
          href="https://github.com/wannabeaquant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest text-void bg-accent px-4 py-2 font-bold hover:bg-white transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </motion.nav>
  );
}
