"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { contactServices } from "@/data/technologies";
import { Button } from "@/components/ui/Button";
import {
  submitContactForm,
  type ContactFormPayload,
} from "@/lib/submit-contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload: ContactFormPayload = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const result = await submitContactForm(payload);

    if (result.ok) {
      setStatus("success");
      form.reset();
      return;
    }

    setErrorMessage(result.message);
    setStatus("error");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-kai-green/30 bg-kai-green/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-kai-navy">Message sent</h3>
        <p className="mt-3 text-sm text-kai-muted">
          Thank you for contacting KAI IT Consultant LTD. We will reply to your
          email as soon as possible.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-kai-border bg-white p-6 shadow-[0_12px_40px_rgba(7,26,61,0.06)] sm:p-8"
    >
      {/* Honeypot — Web3Forms bot check */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      {status === "error" && errorMessage ? (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {errorMessage}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required disabled={status === "submitting"} />
        <Field
          label="Company"
          name="company"
          required
          disabled={status === "submitting"}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          disabled={status === "submitting"}
        />
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          disabled={status === "submitting"}
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-kai-text"
          >
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            disabled={status === "submitting"}
            defaultValue=""
            className="w-full rounded-xl border border-kai-border bg-kai-bg px-4 py-3 text-sm outline-none transition focus:border-kai-blue focus:ring-2 focus:ring-kai-blue/20 disabled:opacity-60"
          >
            <option value="" disabled>
              Select a service
            </option>
            {contactServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-kai-text"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled={status === "submitting"}
            rows={5}
            className="w-full resize-y rounded-xl border border-kai-border bg-kai-bg px-4 py-3 text-sm outline-none transition focus:border-kai-blue focus:ring-2 focus:ring-kai-blue/20 disabled:opacity-60"
            placeholder="Tell us about your technology challenge..."
          />
        </div>
      </div>
      <Button
        type="submit"
        className="mt-6 w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  disabled = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-kai-text"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        className="w-full rounded-xl border border-kai-border bg-kai-bg px-4 py-3 text-sm outline-none transition focus:border-kai-blue focus:ring-2 focus:ring-kai-blue/20 disabled:opacity-60"
      />
    </div>
  );
}
