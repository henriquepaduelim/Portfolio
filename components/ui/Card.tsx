"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  const classes = clsx(
    "card-surface relative overflow-hidden rounded-2xl border border-border/70 p-6 transition-colors duration-300",
    "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/0 before:to-accent/0 before:opacity-0 before:transition-opacity",
    "hover:border-primary/50 hover:before:opacity-30",
    className
  );

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200, damping: 18 }} className={classes}>
      <div className="relative z-10 flex h-full flex-col gap-4">{children}</div>
    </motion.div>
  );
}
