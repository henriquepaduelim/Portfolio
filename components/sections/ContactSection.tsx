"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/components/providers/language-provider";

type FormState = {
  name: string;
  email: string;
  subject: string;
  company: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactSection() {
  const t = useTranslation();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    company: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = t.form.errors.name;
    if (!form.email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) nextErrors.email = t.form.errors.email;
    if (form.message.trim().length < 5) nextErrors.message = t.form.errors.message;
    if (form.subject.trim().length > 200) nextErrors.subject = t.form.errors.subject;
    if (form.company.trim().length > 160) nextErrors.company = t.form.errors.company;
    if (form.phone.trim().length > 80) nextErrors.phone = t.form.errors.phone;
    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", company: "", phone: "", message: "" });
    } catch (error) {
      console.error("Contact submission failed", error);
      setStatus("error");
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
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              label={t.contact.form.nameLabel}
              value={form.name}
              placeholder={t.contact.placeholders.name}
              error={errors.name}
              onChange={handleChange("name")}
            />
            <FormField
              label={t.contact.form.emailLabel}
              type="email"
              value={form.email}
              placeholder={t.contact.placeholders.email}
              error={errors.email}
              onChange={handleChange("email")}
            />
            <FormField
              label={t.contact.form.subjectLabel}
              value={form.subject}
              placeholder={t.contact.placeholders.subject}
              error={errors.subject}
              onChange={handleChange("subject")}
            />
            <FormField
              label={t.contact.form.companyLabel}
              value={form.company}
              placeholder={t.contact.placeholders.company}
              error={errors.company}
              onChange={handleChange("company")}
            />
            <FormField
              label={t.contact.form.phoneLabel}
              value={form.phone}
              placeholder={t.contact.placeholders.phone}
              error={errors.phone}
              onChange={handleChange("phone")}
            />
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
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" className="w-full sm:w-auto" disabled={status === "submitting"}>
              {status === "submitting" ? t.contact.form.sendingLabel : t.contact.form.submitLabel}
            </Button>
            {status === "success" && <p className="text-sm font-semibold text-primary">{t.contact.submitted}</p>}
            {status === "error" && <p className="text-sm font-semibold text-accent">{t.contact.failed}</p>}
          </div>
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

type FormFieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
};

function FormField({ label, value, placeholder, error, type = "text", onChange }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-foreground/80">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        placeholder={placeholder}
      />
      {error && <span className="text-xs text-primary">{error}</span>}
    </div>
  );
}
