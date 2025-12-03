"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/components/providers/language-provider";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const t = useTranslation();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<FormState> = {};

    if (!form.name.trim()) nextErrors.name = t.form.errors.name;
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = t.form.errors.email;
    if (form.message.trim().length < 5) nextErrors.message = t.form.errors.message;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <Section id="contact" title={t.contact.title} eyebrow={t.nav.contact} description={t.contact.subtitle}>
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-foreground/80">{t.contact.form.nameLabel}</label>
            <input
              value={form.name}
              onChange={(e) => handleChange("name")(e.target.value)}
              className="w-full rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder={t.contact.placeholders.name}
            />
            {errors.name && <span className="text-xs text-primary">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-foreground/80">{t.contact.form.emailLabel}</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email")(e.target.value)}
              className="w-full rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder={t.contact.placeholders.email}
            />
            {errors.email && <span className="text-xs text-primary">{errors.email}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-foreground/80">{t.contact.form.messageLabel}</label>
            <textarea
              value={form.message}
              onChange={(e) => handleChange("message")(e.target.value)}
              className="min-h-[140px] w-full rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder={t.contact.placeholders.message}
            />
            {errors.message && <span className="text-xs text-primary">{errors.message}</span>}
          </div>
          <Button type="submit" className="w-full md:w-auto">
            {submitted ? t.contact.submitted : t.contact.form.submitLabel}
          </Button>
        </form>
        <div className="space-y-4 rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.nav.contact}</p>
            <h3 className="text-xl font-semibold text-foreground">{t.hero.title}</h3>
            <p className="text-sm text-foreground/70">
              {t.hero.subtitle} {t.about.subtitle}
            </p>
          </div>
          <div className="space-y-2 text-sm text-foreground/80">
            <p>
              {t.contact.details.emailLabel}:{" "}
              <a href={`mailto:${t.contact.details.emailValue}`} className="font-semibold text-primary">
                {t.contact.details.emailValue}
              </a>
            </p>
            <p>
              {t.contact.details.linkedinLabel}:{" "}
              <a
                href={`https://${t.contact.details.linkedinValue.replace(/^https?:\/\//, "")}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary"
              >
                {t.contact.details.linkedinValue}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
