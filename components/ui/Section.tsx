"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, eyebrow, description, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx("py-16 md:py-24", className)}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-5xl flex-col gap-8"
        >
          <div className="max-w-2xl space-y-2">
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
            {description && <p className="text-base text-foreground/70">{description}</p>}
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
