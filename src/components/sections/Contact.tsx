"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { COMPANY, SERVICES } from "@/lib/content";
import { PhoneIcon, CheckIcon } from "@/components/icons";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  interest: SERVICES[0].title,
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Please enter your last name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email.";
  if (!values.message.trim()) errors.message = "Tell us a little about your project.";
  return errors;
}

const fieldBase =
  "w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-[16px] text-forest-900 " +
  "placeholder:text-muted/60 focus:border-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf";

/** Contact / booking — typed, accessible, client-validated form (no backend yet). */
export default function Contact() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // PLACEHOLDER — wire to the client's preferred endpoint (form service / API route).
      setSubmitted(true);
    }
  };

  return (
    <Section id="contact" tone="white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Intro */}
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 font-display text-[clamp(40px,6vw,68px)] leading-[1.0] text-forest-900">
            Book a Free Estimate Now
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">
            Tell us about your property and what you&apos;re looking for. We&apos;ll
            get back to you to set up your free estimate.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-3 font-display text-[28px] text-forest-900 hover:text-leaf"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-leaf">
                <PhoneIcon className="h-6 w-6" />
              </span>
              Or Call Us: {COMPANY.phoneDisplay}
            </a>
            <a
              href={COMPANY.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-body text-[14px] font-semibold uppercase tracking-[0.12em] text-leaf link-wipe"
            >
              Prefer to book online?
            </a>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={120}>
          {submitted ? (
            <div className="flex h-full flex-col items-start justify-center rounded-card border border-leaf/30 bg-mist p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white">
                <CheckIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-[32px] leading-[1.05] text-forest-900">
                Thanks, {values.firstName || "neighbor"}!
              </h3>
              <p className="mt-2 max-w-sm text-[16px] leading-relaxed text-muted">
                We&apos;ve received your request and will be in touch shortly to set
                up your free estimate. Need us sooner? Call {COMPANY.phoneDisplay}.
              </p>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-card border border-forest-900/10 bg-white p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={update("firstName")}
                  error={errors.firstName}
                  autoComplete="given-name"
                />
                <Field
                  id="lastName"
                  label="Last Name"
                  value={values.lastName}
                  onChange={update("lastName")}
                  error={errors.lastName}
                  autoComplete="family-name"
                />
              </div>

              <div className="mt-5">
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={update("email")}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="interest" className="mb-1.5 block font-body text-[14px] font-medium text-forest-900">
                  What you&apos;re interested in
                </label>
                <select
                  id="interest"
                  value={values.interest}
                  onChange={update("interest")}
                  className={fieldBase}
                >
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Multiple / Not sure">Multiple / Not sure</option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block font-body text-[14px] font-medium text-forest-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Tell us about your lawn or project…"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${fieldBase} resize-y`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-[13px] text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center rounded-pill bg-leaf px-6 py-4 font-display text-[20px] tracking-[0.02em] text-white transition-colors duration-150 hover:bg-leaf2 focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2"
              >
                Book a Free Estimate
              </button>

              <p className="mt-4 text-center text-[12px] text-muted">
                {/* PLACEHOLDER — connect to a real form handler before launch. */}
                Demo form — submissions aren&apos;t sent anywhere yet.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

/* Reusable labeled text input with inline error. */
interface FieldProps {
  id: keyof FormValues;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}

function Field({ id, label, value, onChange, error, type = "text", autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-body text-[14px] font-medium text-forest-900">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldBase}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
