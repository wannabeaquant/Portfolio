"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(trailX, { damping: 32, stiffness: 280, mass: 0.4 });
  const springY = useSpring(trailY, { damping: 32, stiffness: 280, mass: 0.4 });

  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const onIn = () => {
      isHovering.current = true;
      if (ringRef.current) {
        ringRef.current.style.width = "40px";
        ringRef.current.style.height = "40px";
        ringRef.current.style.opacity = "1";
      }
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const onOut = () => {
      isHovering.current = false;
      if (ringRef.current) {
        ringRef.current.style.width = "22px";
        ringRef.current.style.height = "22px";
        ringRef.current.style.opacity = "0.5";
      }
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);

    const bind = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onIn);
        el.addEventListener("mouseleave", onOut);
      });
    };

    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      obs.disconnect();
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-paper rounded-full pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%", transition: "opacity 0.15s" }}
      />
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-paper"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: "22px",
          height: "22px",
          opacity: 0.5,
          transition: "width 0.25s ease, height 0.25s ease, opacity 0.25s ease",
        }}
      />
    </>
  );
}
