export type ContactFormPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function getContactFormAccessKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  return key || undefined;
}

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const accessKey = getContactFormAccessKey();
  if (!accessKey) {
    return {
      ok: false,
      message:
        "Contact form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment (see README).",
    };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      phone: payload.phone || undefined,
      subject: `KAI website — ${payload.service}`,
      message: [
        `Company: ${payload.company}`,
        `Service: ${payload.service}`,
        payload.phone ? `Phone: ${payload.phone}` : null,
        "",
        payload.message,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    return {
      ok: false,
      message:
        data.message ??
        "We could not send your message. Please email us directly or try again later.",
    };
  }

  return { ok: true };
}
