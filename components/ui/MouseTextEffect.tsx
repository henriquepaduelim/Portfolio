"use client";

import clsx from "clsx";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type MouseTextEffectProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MouseTextEffect({ children, className }: MouseTextEffectProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const rotateX = useTransform(springY, [-15, 15], [8, -8]);
  const rotateY = useTransform(springX, [-15, 15], [-8, 8]);
  const scale = useTransform([springX, springY], ([cx, cy]: number[]) => {
    const dx = typeof cx === "number" ? cx : 0;
    const dy = typeof cy === "number" ? cy : 0;
    return 1 + Math.min(0.08, Math.hypot(dx, dy) / 100);
  });

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const relY = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    x.set(relX);
    y.set(relY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, scale, perspective: 400 }}
      className={clsx("inline-flex items-center justify-center transition-transform will-change-transform", className)}
    >
      {children}
    </motion.span>
  );
}
