"use client";

import clsx from "clsx";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import MouseTextEffect from "@/components/ui/MouseTextEffect";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<MotionProps, "whileHover" | "whileTap" | "transition" | "whileFocus" | "onTap">;

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-accent text-white shadow-glow hover:shadow-glow/70 dark:shadow-glow/70 border-0",
  secondary:
    "border border-border bg-card text-foreground hover:border-primary/60 hover:text-primary transition-colors",
  ghost: "text-foreground/80 hover:text-foreground bg-transparent border border-transparent"
};

export default function Button({ children, href, variant = "primary", className, ...props }: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-250 overflow-hidden",
    variants[variant],
    className
  );

  const content =
    variant === "secondary" ? (
      <MouseTextEffect className="w-full justify-center gap-2">{children}</MouseTextEffect>
    ) : (
      children
    );

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  // Framer's MotionProps conflicts with native drag handlers; cast to relax type expectations.
  const motionProps = props as MotionProps & ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
