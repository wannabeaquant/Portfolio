"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(trailX, { damping: 28, stiffness: 300, mass: 0.5 });
  const springY = useSpring(trailY, { damping: 28, stiffness: 300, mass: 0.5 });

  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleHoverIn = () => {
      isHovering.current = true;
      if (dotRef.current) dotRef.current.style.transform = "scale(0)";
      if (ringRef.current) {
        ringRef.current.style.width = "50px";
        ringRef.current.style.height = "50px";
        ringRef.current.style.borderColor = "#c8ff00";
        ringRef.current.style.backgroundColor = "rgba(200,255,0,0.08)";
      }
    };

    const handleHoverOut = () => {
      isHovering.current = false;
      if (dotRef.current) dotRef.current.style.transform = "scale(1)";
      if (ringRef.current) {
        ringRef.current.style.width = "28px";
        ringRef.current.style.height = "28px";
        ringRef.current.style.borderColor = "rgba(200,255,0,0.6)";
        ringRef.current.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll(
      "a, button, [data-hover]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll("a, button, [data-hover]");
      newInteractives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
        el.addEventListener("mouseenter", handleHoverIn);
        el.addEventListener("mouseleave", handleHoverOut);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Main dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          transition: "transform 0.1s ease",
        }}
      />
      {/* Ring trail */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: "28px",
          height: "28px",
          borderColor: "rgba(200,255,0,0.6)",
          transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
        }}
      />
    </>
  );
}
