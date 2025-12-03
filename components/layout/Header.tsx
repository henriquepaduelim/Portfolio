"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "@/components/providers/language-provider";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const t = useTranslation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-lg text-white shadow-glow">
            HM
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-foreground/60">{t.nav.brandTag}</span>
            <span className="text-base font-semibold text-foreground">{t.hero.name}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary/15 text-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/10"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button href="/contact" variant="secondary" className="text-sm">
            {t.hero.secondaryCta}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border/70 px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:border-primary/60 hover:text-primary md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? t.nav.close : t.nav.menu}
        >
          {isOpen ? t.nav.close : t.nav.menu}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-border/60 bg-background/95 md:hidden"
          >
            <div className="container flex flex-col gap-4 py-4">
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "rounded-xl px-3 py-2 text-base font-medium transition-colors",
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button href="/contact" className="w-full">
                {t.contact.form.submitLabel}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
