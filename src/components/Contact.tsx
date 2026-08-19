import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Loader2,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_INFO, getLocalizedCompanyInfo } from "../lib/constants";
import { useLanguage } from "../lib/language";
import BrandLogo from "./BrandLogo";
import { submitLeadForm, type SubmissionMode } from "../lib/formSubmission";

function fillTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce((message, [key, value]) => (
    message.replaceAll(`{${key}}`, value)
  ), template);
}

function getDefaultCity(language: "en" | "hi") {
  return language === "hi" ? "प्रयागराज" : "Prayagraj";
}

export default function Contact() {
  const { language, content, isHindi } = useLanguage();
  const company = getLocalizedCompanyInfo(language);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: getDefaultCity(language),
    productInterest: content.products.items[0].id,
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedInterest, setSubmittedInterest] = useState(content.products.items[0].name);
  const [submissionMode, setSubmissionMode] = useState<SubmissionMode>("submitted");

  useEffect(() => {
    const defaultCity = getDefaultCity(language);
    const otherCity = getDefaultCity(language === "hi" ? "en" : "hi");

    setFormData((prev) => ({
      ...prev,
      city: !prev.city || prev.city === otherCity ? defaultCity : prev.city
    }));
  }, [language]);

  useEffect(() => {
    const handleProductSelect = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      if (customEvent.detail && content.products.items.some((prod) => prod.id === customEvent.detail)) {
        setFormData((prev) => ({
          ...prev,
          productInterest: customEvent.detail
        }));
      }
    };

    window.addEventListener("selectProductEnquiry", handleProductSelect);
    return () => {
      window.removeEventListener("selectProductEnquiry", handleProductSelect);
    };
  }, [content.products.items]);

  useEffect(() => {
    if (!content.products.items.some((prod) => prod.id === formData.productInterest)) {
      setFormData((prev) => ({
        ...prev,
        productInterest: content.products.items[0].id
      }));
    }
  }, [content.products.items, formData.productInterest]);

  const selectedProduct = content.products.items.find((prod) => prod.id === formData.productInterest) ?? content.products.items[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const botcheckValue = (new FormData(e.currentTarget).get("botcheck") ?? "").toString();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const result = await submitLeadForm({
        formType: content.contact.formTitle,
        subject: `New Lead - Luxmi Bricks - Direct Enquiry - ${selectedProduct.name} - ${formData.fullName.trim()}`,
        replyTo: formData.email,
        botcheck: botcheckValue,
        fields: [
          { key: "Customer Name", label: content.contact.fields.name, value: formData.fullName },
          { key: "Phone Number", label: content.contact.fields.phone, value: formData.phone },
          { key: "Email Address", label: content.contact.fields.email, value: formData.email },
          { key: "Delivery City / District", label: content.contact.fields.city, value: formData.city },
          { key: "Brick Product", label: content.contact.fields.product, value: selectedProduct.name },
          { key: "Requirement Details", label: content.contact.fields.message, value: formData.message }
        ]
      });

      setSubmissionMode(result);
      setSubmittedInterest(selectedProduct.name);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        city: getDefaultCity(language),
        productInterest: selectedProduct.id,
        message: ""
      });
    } catch {
      setErrorMessage(fillTemplate(
        language === "hi"
          ? "{email} पर आपकी पूछताछ तैयार नहीं हो सकी। कृपया फिर से प्रयास करें।"
          : "We could not prepare your enquiry for {email}. Please try again.",
        { email: COMPANY_INFO.email }
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-100 relative overflow-hidden border-t border-stone-200">
      <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-brick-dark/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <span className={`text-brick-light text-xs font-semibold mb-2 ${isHindi ? "" : "tracking-widest uppercase"}`}>
            {content.contact.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 leading-tight">
            {content.contact.title}
          </h2>
          <div className="w-16 h-1 bg-brick-primary mt-4 mb-4 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base">
            {content.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-core-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                    {content.contact.formTitle}
                  </h3>
                  <p className="text-sm text-stone-500 mt-2">
                    {content.contact.routedNote}
                  </p>
                </div>
                <BrandLogo
                  variant="primary"
                  className="h-16 sm:h-20 w-auto self-start"
                />
              </div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="enquiry-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    id="brick-enquiry-form"
                  >
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      style={{ display: "none" }}
                    />

                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={`block text-stone-600 text-xs font-semibold mb-2 ${isHindi ? "" : "uppercase tracking-wider"}`}>
                          {content.contact.fields.name} *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-250 text-stone-800 text-sm focus:border-brick-primary focus:ring-1 focus:ring-brick-primary focus:outline-none transition-colors"
                          placeholder={content.contact.placeholders.name}
                          id="input-fullname"
                        />
                      </div>
                      <div>
                        <label className={`block text-stone-600 text-xs font-semibold mb-2 ${isHindi ? "" : "uppercase tracking-wider"}`}>
                          {content.contact.fields.phone} *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-250 text-stone-800 text-sm focus:border-brick-primary focus:ring-1 focus:ring-brick-primary focus:outline-none transition-colors"
                          placeholder={content.contact.placeholders.phone}
                          id="input-phone"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={`block text-stone-600 text-xs font-semibold mb-2 ${isHindi ? "" : "uppercase tracking-wider"}`}>
                          {content.contact.fields.email} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-250 text-stone-800 text-sm focus:border-brick-primary focus:ring-1 focus:ring-brick-primary focus:outline-none transition-colors"
                          placeholder={content.contact.placeholders.email}
                          id="input-email"
                        />
                      </div>
                      <div>
                        <label className={`block text-stone-600 text-xs font-semibold mb-2 ${isHindi ? "" : "uppercase tracking-wider"}`}>
                          {content.contact.fields.city} *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-250 text-stone-800 text-sm focus:border-brick-primary focus:ring-1 focus:ring-brick-primary focus:outline-none transition-colors"
                          placeholder={content.contact.placeholders.city}
                          id="input-city"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-stone-600 text-xs font-semibold mb-2 ${isHindi ? "" : "uppercase tracking-wider"}`}>
                        {content.contact.fields.product}
                      </label>
                      <select
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white rounded-lg border border-stone-250 text-stone-800 text-sm focus:border-brick-primary focus:ring-1 focus:ring-brick-primary focus:outline-none transition-colors cursor-pointer"
                        id="input-productInterest"
                      >
                        {content.products.items.map((prod) => (
                          <option key={prod.id} value={prod.id}>
                            {prod.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-stone-600 text-xs font-semibold mb-2 ${isHindi ? "" : "uppercase tracking-wider"}`}>
                        {content.contact.fields.message} *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-250 text-stone-800 text-sm focus:border-brick-primary focus:ring-1 focus:ring-brick-primary focus:outline-none transition-colors placeholder:text-stone-400"
                        placeholder={content.contact.placeholders.message}
                        id="input-message"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full group py-4 px-6 rounded-lg bg-brick-primary hover:bg-brick-light disabled:bg-stone-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brick-primary ${
                        isHindi ? "" : "uppercase tracking-widest"
                      }`}
                      id="submit-enquiry-btn"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {content.contact.loadingText}
                        </>
                      ) : (
                        <>
                          {content.contact.submitCta}
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="p-8 sm:p-12 text-center bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col items-center justify-center"
                    id="contact-success-panel"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-stone-900 mb-3">
                      {content.contact.successTitle}
                    </h4>
                    <p className="text-stone-600 text-sm max-w-md leading-relaxed mb-8">
                      {submissionMode === "submitted"
                        ? fillTemplate(content.contact.successSubmitted, {
                            product: submittedInterest,
                            email: COMPANY_INFO.email
                          })
                        : fillTemplate(content.contact.successFallback, {
                            product: submittedInterest,
                            email: COMPANY_INFO.email
                          })}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setErrorMessage("");
                      }}
                      className={`flex items-center gap-2 bg-stone-900 hover:bg-stone-850 text-white font-semibold text-xs py-3 px-6 rounded-lg transition-colors focus:outline-none ${
                        isHindi ? "" : "uppercase tracking-wider"
                      }`}
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      {content.contact.resetCta}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="bg-stone-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl space-y-8 flex-grow">
              <h3 className="text-xl sm:text-2xl font-display font-medium border-b border-stone-800 pb-4">
                {content.contact.sideTitle}
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-stone-800 border border-stone-750 text-brick-light flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-stone-500 text-[10px] ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                      {content.contact.yardLabel}
                    </span>
                    <p className="text-stone-300 text-sm mt-1 leading-relaxed">
                      {company.address}
                    </p>
                    <span className="text-brick-light text-[11px] font-medium block mt-1.5 font-display">
                      {company.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-stone-800 border border-stone-750 text-brick-light flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-stone-500 text-[10px] ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                      {content.contact.hotlineLabel}
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="block text-white text-base sm:text-lg font-bold mt-1 hover:text-brick-light transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-stone-800 border border-stone-750 text-brick-light flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-stone-500 text-[10px] ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                      {content.contact.emailDeskLabel}
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="block text-stone-300 text-sm mt-1 hover:text-white hover:underline transition-colors truncate"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-800">
                <h4 className={`text-stone-400 text-xs mb-4 ${isHindi ? "font-medium" : "font-mono uppercase tracking-widest"}`}>
                  {content.contact.channelsLabel}
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-stone-800 hover:bg-brick-primary text-stone-300 hover:text-white rounded-lg border border-stone-750 hover:border-brick-primary transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-stone-800 hover:bg-brick-primary text-stone-300 hover:text-white rounded-lg border border-stone-750 hover:border-brick-primary transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-stone-800 hover:bg-brick-primary text-stone-300 hover:text-white rounded-lg border border-stone-750 hover:border-brick-primary transition-all duration-200"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-stone-800 hover:bg-brick-primary text-stone-300 hover:text-white rounded-lg border border-stone-750 hover:border-brick-primary transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
