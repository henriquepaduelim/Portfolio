"use client";

import Link from "next/link";
import { useTranslation } from "@/components/providers/language-provider";

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1 text-sm text-foreground/70">
          <span className="font-semibold text-foreground">Henrique Machado</span>
          <span>{t.footer.note}</span>
          <span className="text-foreground/50">{t.footer.rights}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-foreground/70">
          <Link href="https://github.com" className="hover:text-primary" target="_blank" rel="noreferrer">
            {t.social.github}
          </Link>
          <Link href="https://www.linkedin.com" className="hover:text-primary" target="_blank" rel="noreferrer">
            {t.social.linkedin}
          </Link>
          <Link href="/contact" className="hover:text-primary">
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
