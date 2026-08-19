import React, { useEffect, useMemo, useState } from "react";
import { X, Send, MessageCircleCode, CheckCircle, AlertCircle, Mail, Loader2 } from "lucide-react";
import { COMPANY_INFO } from "../lib/constants";
import { useLanguage } from "../lib/language";
import { submitLeadForm, type SubmissionMode } from "../lib/formSubmission";

function fillTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce((message, [key, value]) => (
    message.replaceAll(`{${key}}`, value)
  ), template);
}

export default function QuickEnquiryPopup() {
  const { language, content, isHindi } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productId, setProductId] = useState(content.products.items[0].id);
  const [quantityIndex, setQuantityIndex] = useState(2);
  const [validationError, setValidationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<SubmissionMode>("submitted");

  useEffect(() => {
    const dismissedAt = localStorage.getItem("luxmi_whatsapp_popup_dismissed");
    if (dismissedAt) {
      const parsedTime = parseInt(dismissedAt, 10);
      const oneDayMs = 24 * 60 * 60 * 1000;
      if (Date.now() - parsedTime < oneDayMs) {
        return;
      }
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 8000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 5) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!content.products.items.some((prod) => prod.id === productId)) {
      setProductId(content.products.items[0].id);
    }
  }, [content.products.items, productId]);

  const selectedProduct = content.products.items.find((prod) => prod.id === productId) ?? content.products.items[0];
  const quantityOptions = content.quickEnquiry.quantityOptions;
  const selectedQuantity = quantityOptions[quantityIndex] ?? quantityOptions[0];

  const whatsappMessage = useMemo(() => (
    language === "hi"
      ? `नमस्ते, मुझे ${selectedProduct.name} के लिए ${selectedQuantity} का कोटेशन चाहिए। नाम: ${name || "ग्राहक"}, फोन: ${phone || "अभी साझा नहीं किया"}`
      : `Hello, I need a quote for ${selectedQuantity} of ${selectedProduct.name}. Name: ${name || "Customer"}, phone: ${phone || "Not shared yet"}.`
  ), [language, name, phone, selectedProduct.name, selectedQuantity]);

  const whatsappQuoteLink = `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("luxmi_whatsapp_popup_dismissed", Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const botcheckValue = (new FormData(e.currentTarget as HTMLFormElement).get("botcheck") ?? "").toString();

    if (!name.trim()) {
      setValidationError(content.quickEnquiry.nameError);
      return;
    }

    if (!/^\d{10}$/.test(phone.trim())) {
      setValidationError(content.quickEnquiry.phoneError);
      return;
    }

    setValidationError("");
    setIsLoading(true);

    try {
      const result = await submitLeadForm({
        formType: content.quickEnquiry.title,
        subject: `New Lead - Luxmi Bricks - Quick Quote - ${selectedProduct.name} - ${name.trim() || "Customer"}`,
        replyTo: email,
        botcheck: botcheckValue,
        fields: [
          { key: "Customer Name", label: content.quickEnquiry.fields.name, value: name },
          { key: "WhatsApp Number", label: content.quickEnquiry.fields.phone, value: phone },
          { key: "Email Address", label: content.quickEnquiry.fields.email, value: email },
          { key: "Brick Product", label: content.quickEnquiry.fields.product, value: selectedProduct.name },
          { key: "Requested Quantity", label: content.quickEnquiry.fields.quantity, value: selectedQuantity }
        ]
      });

      setSubmissionMode(result);
      setIsSuccess(true);
    } catch {
      setValidationError(fillTemplate(
        language === "hi"
          ? "{email} के लिए कोटेशन अनुरोध तैयार नहीं हो सका। कृपया फिर से प्रयास करें।"
          : "We could not prepare the quote request for {email}. Please try again.",
        { email: COMPANY_INFO.email }
      ));
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-[90] animate-fade-in"
      id="whatsapp-enquiry-modal-backdrop"
    >
      <div
        className="bg-stone-900 border-2 border-brick-primary/30 text-white rounded-2xl w-full max-w-md overflow-hidden relative shadow-2xl transform transition-transform duration-300 scale-100"
        id="whatsapp-enquiry-modal"
      >
        <div className="bg-gradient-to-r from-brick-dark to-stone-900 p-5 pr-12 relative border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
              <MessageCircleCode className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white">
                {content.quickEnquiry.title}
              </h3>
              <p className="text-stone-300 text-xs mt-0.5">
                {content.quickEnquiry.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
            aria-label={content.quickEnquiry.closeCta}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              style={{ display: "none" }}
            />

            {validationError && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-lg text-xs text-red-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            <div>
              <label className={`block text-stone-400 text-xs mb-1.5 ${isHindi ? "font-medium" : "font-mono tracking-wider uppercase"}`}>
                {content.quickEnquiry.fields.name}
              </label>
              <input
                type="text"
                required
                placeholder={content.quickEnquiry.placeholders.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 px-3.5 py-2.5 rounded-lg text-sm text-white focus:border-brick-light focus:outline-none focus:ring-1 focus:ring-brick-light/20"
              />
            </div>

            <div>
              <label className={`block text-stone-400 text-xs mb-1.5 ${isHindi ? "font-medium" : "font-mono tracking-wider uppercase"}`}>
                {content.quickEnquiry.fields.phone}
              </label>
              <div className="relative">
                <span className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500 text-sm leading-none ${isHindi ? "" : "font-mono"}`}>
                  +91
                </span>
                <input
                  type="tel"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder={content.quickEnquiry.placeholders.phone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  className="w-full bg-stone-950 border border-stone-800 pl-12 pr-3.5 py-2.5 rounded-lg text-sm text-white focus:border-brick-light focus:outline-none focus:ring-1 focus:ring-brick-light/20"
                />
              </div>
            </div>

            <div>
              <label className={`block text-stone-400 text-xs mb-1.5 ${isHindi ? "font-medium" : "font-mono tracking-wider uppercase"}`}>
                {content.quickEnquiry.fields.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                <input
                  type="email"
                  placeholder={content.quickEnquiry.placeholders.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 pl-11 pr-3.5 py-2.5 rounded-lg text-sm text-white focus:border-brick-light focus:outline-none focus:ring-1 focus:ring-brick-light/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={`block text-stone-400 text-xs mb-1.5 ${isHindi ? "font-medium" : "font-mono tracking-wider uppercase"}`}>
                  {content.quickEnquiry.fields.product}
                </label>
                <select
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 px-3 py-2.5 rounded-lg text-xs text-white focus:border-brick-light focus:outline-none"
                >
                  {content.products.items.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-stone-400 text-xs mb-1.5 ${isHindi ? "font-medium" : "font-mono tracking-wider uppercase"}`}>
                  {content.quickEnquiry.fields.quantity}
                </label>
                <select
                  value={String(quantityIndex)}
                  onChange={(e) => setQuantityIndex(Number(e.target.value))}
                  className="w-full bg-stone-950 border border-stone-800 px-3 py-2.5 rounded-lg text-xs text-white focus:border-brick-light focus:outline-none"
                >
                  {quantityOptions.map((option, index) => (
                    <option key={option} value={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="p-3 bg-stone-950/50 border border-stone-850 rounded-lg text-[10px] text-stone-500 flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <p>
                {content.quickEnquiry.note}
              </p>
            </div>

            <a
              href={whatsappQuoteLink}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className={`flex items-center justify-center gap-2 w-full border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-600/10 font-bold text-xs py-3 px-5 rounded-lg transition-colors ${
                isHindi ? "" : "tracking-widest uppercase"
              }`}
            >
              {content.quickEnquiry.whatsappCta}
            </a>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800/60 text-white font-bold text-xs py-3 px-5 rounded-lg transition-colors group mt-2 shadow-lg hover:shadow-emerald-900/10 ${
                isHindi ? "" : "tracking-widest uppercase"
              }`}
              id="modal-whatsapp-send"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  {content.quickEnquiry.loadingText}
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  {content.quickEnquiry.submitCta}
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="p-6 space-y-5">
            <div className="p-6 bg-emerald-950/30 border border-emerald-500/20 rounded-xl text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-white">
                {content.quickEnquiry.successTitle}
              </h4>
              <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                {submissionMode === "submitted"
                  ? fillTemplate(content.quickEnquiry.successSubmitted, {
                      product: selectedProduct.name,
                      email: COMPANY_INFO.email
                    })
                  : fillTemplate(content.quickEnquiry.successFallback, {
                      product: selectedProduct.name,
                      email: COMPANY_INFO.email
                    })}
              </p>
            </div>

            <a
              href={whatsappQuoteLink}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className={`flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-5 rounded-lg transition-colors ${
                isHindi ? "" : "tracking-widest uppercase"
              }`}
            >
              {content.quickEnquiry.whatsappCta}
            </a>
            <button
              type="button"
              onClick={handleClose}
              className={`w-full border border-stone-700 hover:border-stone-500 text-stone-200 hover:text-white font-bold text-xs py-3 px-5 rounded-lg transition-colors ${
                isHindi ? "" : "tracking-widest uppercase"
              }`}
            >
              {content.quickEnquiry.closeCta}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
