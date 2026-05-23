"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    icon: "◧",
    color: "accent",
    skills: ["Python", "TypeScript", "JavaScript", "C", "C++", "SQL"],
  },
  {
    category: "AI / ML",
    icon: "⬡",
    color: "cyan",
    skills: [
      "LLM Applications",
      "Agentic AI",
      "RAG",
      "Embeddings",
      "Prompt Engineering",
      "Eval Pipelines",
      "PyTorch",
      "Transformers",
    ],
  },
  {
    category: "Backend / Frontend",
    icon: "◈",
    color: "accent",
    skills: ["FastAPI", "React", "Next.js", "REST APIs", "WebSockets", "Tailwind CSS"],
  },
  {
    category: "Systems / Tools",
    icon: "⬦",
    color: "dim",
    skills: [
      "Milvus",
      "Vector Databases",
      "Docker",
      "Git",
      "Playwright",
      "OpenAI API",
      "Regression Testing",
      "Caching",
      "Batching",
      "Postman",
    ],
  },
];

const colorMap: Record<string, string> = {
  accent: "text-accent border-accent/40 bg-accent/10",
  cyan: "text-cyan border-cyan/40 bg-cyan/10",
  dim: "text-ghost border-border bg-muted/50",
};

const hoverColorMap: Record<string, string> = {
  accent: "#c8ff00",
  cyan: "#00d4ff",
  dim: "#999999",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} className="py-32 px-8 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-num">05 —</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1 + 0.2 }}
              onMouseEnter={() => setHoveredGroup(group.category)}
              onMouseLeave={() => setHoveredGroup(null)}
              className="border border-border p-6 hover:border-accent/30 transition-colors duration-300"
              data-hover
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-2xl"
                  style={{
                    color:
                      hoveredGroup === group.category
                        ? hoverColorMap[group.color]
                        : "#2a2a2a",
                    transition: "color 0.3s ease",
                  }}
                >
                  {group.icon}
                </span>
                <h3 className="text-bright font-bold tracking-wide text-sm uppercase font-mono">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.04 + 0.3 }}
                    className={`text-xs px-3 py-1.5 border font-mono transition-all duration-200 cursor-default ${
                      hoveredGroup === group.category
                        ? colorMap[group.color]
                        : "text-dim border-border"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently exploring */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 border border-border/50 p-6 bg-ash/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-mono text-dim tracking-widest uppercase">Currently Exploring</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["On-chain AI agents", "Conviction scoring", "Prediction markets", "Agent evaluation", "Multi-modal RAG"].map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 border border-accent/20 text-accent/60 font-mono">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
