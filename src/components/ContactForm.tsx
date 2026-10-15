"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { contactServices } from "@/data/technologies";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Placeholder handler — ready to connect to email/API/database later.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-kai-green/30 bg-kai-green/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-kai-navy">Message received</h3>
        <p className="mt-3 text-sm text-kai-muted">
          Thanks for reaching out. This form is currently using a local
          placeholder handler and can be connected to your preferred email or
          API backend next.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setSubmitted(false)}
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" />
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
            defaultValue=""
            className="w-full rounded-xl border border-kai-border bg-kai-bg px-4 py-3 text-sm outline-none transition focus:border-kai-blue focus:ring-2 focus:ring-kai-blue/20"
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
            rows={5}
            className="w-full resize-y rounded-xl border border-kai-border bg-kai-bg px-4 py-3 text-sm outline-none transition focus:border-kai-blue focus:ring-2 focus:ring-kai-blue/20"
            placeholder="Tell us about your technology challenge..."
          />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="w-full rounded-xl border border-kai-border bg-kai-bg px-4 py-3 text-sm outline-none transition focus:border-kai-blue focus:ring-2 focus:ring-kai-blue/20"
      />
    </div>
  );
}
