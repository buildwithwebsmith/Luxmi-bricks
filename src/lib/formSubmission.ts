import { COMPANY_INFO } from "./constants";

export type SubmissionMode = "submitted" | "fallback-opened";

export interface LeadSubmissionField {
  key: string;
  label: string;
  value: string;
}

interface LeadSubmissionPayload {
  formType: string;
  subject: string;
  fields: LeadSubmissionField[];
  replyTo?: string;
  botcheck?: string;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_FROM_NAME = "Luxmi Bricks Website";
// Web3Forms access keys are intended for client-side form submissions.
// Keep a committed fallback so static production deployments still work
// when hosting env vars are missing or not wired into the build.
const DEFAULT_WEB3FORMS_PRIMARY_ACCESS_KEY = "455ae0f5-84ac-4e52-b2d8-9f058fc24ee0";
const WEB3FORMS_PRIMARY_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_PRIMARY_ACCESS_KEY?.trim() || DEFAULT_WEB3FORMS_PRIMARY_ACCESS_KEY;
const WEB3FORMS_SECONDARY_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_SECONDARY_ACCESS_KEY?.trim() ?? "";
const WEB3FORMS_SECONDARY_EMAIL = "shubhammahapure55@gmail.com";

type Web3FormsTarget = {
  email: string;
  accessKey: string;
  ccemail?: string;
};

class Web3FormsConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Web3FormsConfigurationError";
  }
}

const isHindiDocument = () =>
  typeof document !== "undefined" && document.documentElement.lang.startsWith("hi");

const formatTimestamp = () =>
  new Intl.DateTimeFormat(isHindiDocument() ? "hi-IN" : "en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata"
  }).format(new Date());

const getSystemFields = (formType: string): LeadSubmissionField[] => {
  const labels = isHindiDocument()
    ? {
        formType: "फॉर्म प्रकार",
        formLanguage: "फॉर्म भाषा",
        submittedAt: "भेजे जाने का समय",
        sourcePage: "सोर्स पेज"
      }
    : {
        formType: "Form Type",
        formLanguage: "Form Language",
        submittedAt: "Submitted At",
        sourcePage: "Source Page"
      };

  return [
    {
      key: "Form Type",
      label: labels.formType,
      value: formType
    },
    {
      key: "Form Language",
      label: labels.formLanguage,
      value: isHindiDocument() ? "Hindi" : "English"
    },
    {
      key: "Submitted At",
      label: labels.submittedAt,
      value: formatTimestamp()
    },
    {
      key: "Source Page",
      label: labels.sourcePage,
      value: window.location.href
    }
  ];
};

const toMultilineBody = (formType: string, fields: LeadSubmissionField[]) => {
  const lines = [...getSystemFields(formType), ...fields]
    .filter(({ value }) => value.trim())
    .map(({ label, value }) => `${label}: ${value}`);

  return lines.join("\n");
};

const getSubmissionTargets = (): Web3FormsTarget[] => {
  if (!WEB3FORMS_PRIMARY_ACCESS_KEY) {
    throw new Web3FormsConfigurationError(
      "Missing Web3Forms access key configuration. Add VITE_WEB3FORMS_PRIMARY_ACCESS_KEY to .env.local for local development."
    );
  }

  if (WEB3FORMS_SECONDARY_ACCESS_KEY) {
    return [
      { email: COMPANY_INFO.email, accessKey: WEB3FORMS_PRIMARY_ACCESS_KEY },
      { email: WEB3FORMS_SECONDARY_EMAIL, accessKey: WEB3FORMS_SECONDARY_ACCESS_KEY }
    ];
  }

  // Free Web3Forms plans do not support ccemail, so a single configured key must
  // submit directly to the primary inbox without adding the secondary recipient.
  return [{ email: COMPANY_INFO.email, accessKey: WEB3FORMS_PRIMARY_ACCESS_KEY }];
};

const openMailFallback = (
  { subject, formType, fields }: LeadSubmissionPayload,
  recipients: readonly string[] = [COMPANY_INFO.email, WEB3FORMS_SECONDARY_EMAIL]
) => {
  const [toRecipient, ...ccRecipients] = recipients;
  const params = new URLSearchParams();

  params.set("subject", subject);
  params.set("body", toMultilineBody(formType, fields));

  if (ccRecipients.length > 0) {
    params.set("cc", ccRecipients.join(","));
  }

  window.location.href = `mailto:${toRecipient ?? COMPANY_INFO.email}?${params.toString()}`;
};

const submitToWeb3Forms = async (
  target: Web3FormsTarget,
  payload: LeadSubmissionPayload,
  cleanedFields: LeadSubmissionField[]
) => {
  const formData = new FormData();
  const fieldsToSubmit = [...getSystemFields(payload.formType), ...cleanedFields];

  formData.append("access_key", target.accessKey);
  formData.append("subject", payload.subject);
  formData.append("from_name", WEB3FORMS_FROM_NAME);
  formData.append("botcheck", payload.botcheck ?? "");

  if (target.ccemail) {
    formData.append("ccemail", target.ccemail);
  }

  if (payload.replyTo?.trim()) {
    formData.append("replyto", payload.replyTo.trim());
  }

  fieldsToSubmit.forEach(({ key, value }) => {
    formData.append(key, value);
  });

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: formData
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      result?.body?.message ??
      result?.message ??
      `Submission failed with status ${response.status}`
    );
  }

  if (!result || result.success !== true) {
    throw new Error(result?.body?.message ?? result?.message ?? "Web3Forms returned an unsuccessful response.");
  }
};

export async function submitLeadForm(payload: LeadSubmissionPayload): Promise<SubmissionMode> {
  const cleanedFields = payload.fields.filter(
    ({ value }) => value.trim()
  );
  const targets = getSubmissionTargets();

  const submissionResults = await Promise.allSettled(
    targets.map((target) => submitToWeb3Forms(target, payload, cleanedFields))
  );

  const failedRecipients = submissionResults.flatMap((result, index) => (
    result.status === "rejected"
      ? [targets[index].email, targets[index].ccemail].filter(Boolean) as string[]
      : []
  ));

  if (failedRecipients.length > 0) {
    openMailFallback(payload, failedRecipients);
    return "fallback-opened";
  }

  return "submitted";
}
