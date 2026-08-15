import { COMPANY_INFO } from "./constants";

export type SubmissionMode = "submitted" | "fallback-opened";

interface LeadSubmissionPayload {
  formType: string;
  subject: string;
  fields: Record<string, string>;
  replyTo?: string;
}

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${COMPANY_INFO.email}`;

const isHindiDocument = () =>
  typeof document !== "undefined" && document.documentElement.lang.startsWith("hi");

const formatTimestamp = () =>
  new Intl.DateTimeFormat(isHindiDocument() ? "hi-IN" : "en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata"
  }).format(new Date());

const toMultilineBody = (formType: string, fields: Record<string, string>) => {
  const labels = isHindiDocument()
    ? {
        formType: "फॉर्म प्रकार",
        submittedAt: "भेजे जाने का समय",
        sourcePage: "सोर्स पेज"
      }
    : {
        formType: "Form Type",
        submittedAt: "Submitted At",
        sourcePage: "Source Page"
      };

  const lines = Object.entries(fields)
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value}`);

  return [
    `${labels.formType}: ${formType}`,
    ...lines,
    `${labels.submittedAt}: ${formatTimestamp()}`,
    `${labels.sourcePage}: ${window.location.href}`
  ].join("\n");
};

const openMailFallback = ({ subject, formType, fields }: LeadSubmissionPayload) => {
  const params = new URLSearchParams({
    subject,
    body: toMultilineBody(formType, fields)
  });

  window.location.href = `mailto:${COMPANY_INFO.email}?${params.toString()}`;
};

export async function submitLeadForm(payload: LeadSubmissionPayload): Promise<SubmissionMode> {
  const cleanedFields = Object.fromEntries(
    Object.entries(payload.fields).filter(([, value]) => value.trim())
  );

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        _subject: payload.subject,
        _template: "table",
        _captcha: "false",
        _replyto: payload.replyTo?.trim() || undefined,
        formType: payload.formType,
        submittedAt: formatTimestamp(),
        sourcePage: window.location.href,
        ...cleanedFields
      })
    });

    if (!response.ok) {
      throw new Error(`Submission failed with status ${response.status}`);
    }

    const result = await response.json().catch(() => null);
    if (result && "success" in result && result.success !== true && result.success !== "true") {
      throw new Error("Submission endpoint returned an unsuccessful response.");
    }

    return "submitted";
  } catch {
    openMailFallback(payload);
    return "fallback-opened";
  }
}
