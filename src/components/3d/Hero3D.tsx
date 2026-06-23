"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    }
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <motion.div
        className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.2, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute -left-20 top-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <motion.div
        className="absolute left-1/3 top-1/3 h-1 w-1 rounded-full bg-gold animate-glow"
        style={{ x: mousePosition.x * -10, y: mousePosition.y * -10 }}
      />
      <motion.div
        className="absolute right-1/4 top-2/3 h-0.5 w-0.5 rounded-full bg-gold animate-glow"
        style={{ x: mousePosition.x * 15, y: mousePosition.y * 15 }}
      />
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gold/40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
