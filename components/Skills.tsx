"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  {
    label: "\"LANGUAGES\"",
    skills: ["Python", "TypeScript", "JavaScript", "C", "C++", "SQL"],
  },
  {
    label: "\"AI / ML\"",
    skills: ["LLM Applications", "Agentic AI", "RAG", "Embeddings", "Prompt Engineering", "Eval Pipelines", "PyTorch", "Transformers"],
  },
  {
    label: "\"BACKEND / FRONTEND\"",
    skills: ["FastAPI", "React", "Next.js", "REST APIs", "WebSockets", "Tailwind CSS"],
  },
  {
    label: "\"SYSTEMS / TOOLS\"",
    skills: ["Milvus", "Vector Databases", "Docker", "Git", "Playwright", "OpenAI API", "Regression Testing", "Caching", "Batching"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="border-t border-rule px-8 lg:px-16 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="label mb-3">&ldquo;SKILLS&rdquo;</div>
            <h2 className="section-title text-paper">WHAT<br />I USE</h2>
          </motion.div>
          <div className="index-num hidden lg:block">06</div>
        </div>

        {/* Skill grid */}
        <div className="space-y-0">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: gi * 0.1 + 0.2 }}
              className="border-t border-rule py-8 grid md:grid-cols-4 gap-8 items-start"
            >
              <div className="label">{g.label}</div>
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {g.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.03 + 0.3 }}
                    className="font-display font-semibold text-paper text-lg hover:opacity-40 transition-opacity duration-150 cursor-default"
                    data-hover
                  >
                    {s}
                    {si < g.skills.length - 1 && <span className="text-rule mx-2 font-light">/</span>}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Exploring row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="border-t border-rule py-8 grid md:grid-cols-4 gap-8 items-start"
          >
            <div className="label">&ldquo;EXPLORING&rdquo;</div>
            <div className="md:col-span-3 flex flex-wrap gap-2">
              {["On-chain AI agents", "Conviction scoring", "Prediction markets", "Multi-modal RAG"].map((s, si, arr) => (
                <span key={s} className="font-display font-semibold text-paper-muted text-lg cursor-default">
                  {s}
                  {si < arr.length - 1 && <span className="text-rule mx-2 font-light">/</span>}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
