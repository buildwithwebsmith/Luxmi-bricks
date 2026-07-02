import React, { useEffect, useState } from "react";
import { X, Send, MessageCircleCode, CheckCircle, AlertCircle, Mail, Loader2 } from "lucide-react";
import { COMPANY_INFO, PRODUCTS } from "../lib/constants";
import { submitLeadForm, type SubmissionMode } from "../lib/formSubmission";

export default function QuickEnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [brickType, setBrickType] = useState(PRODUCTS[0].name);
  const [quantity, setQuantity] = useState("5000");
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

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("luxmi_whatsapp_popup_dismissed", Date.now().toString());
  };

  const whatsappQuoteLink = `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(
    `Hi, I need a quote for ${brickType} - ${quantity} bricks. Name: ${name || "Customer"}, Phone: ${phone || "Not shared yet"}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setValidationError("Please input your Name");
      return;
    }

    if (!phone.trim() || phone.length < 10) {
      setValidationError("Please input a valid 10-digit Phone identifier");
      return;
    }

    setValidationError("");
    setIsLoading(true);

    try {
      const result = await submitLeadForm({
        formType: "Quick Quote Popup",
        subject: `Quick quote request - ${brickType}`,
        fields: {
          "Customer Name": name,
          "WhatsApp Number": phone,
          "Email Address": email,
          "Brick Type": brickType,
          "Quantity Range": quantity
        }
      });

      setSubmissionMode(result);
      setIsSuccess(true);
    } catch {
      setValidationError(`We could not prepare the quote request for ${COMPANY_INFO.email}. Please try again.`);
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
              <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
                Get a Quick Quote
              </h3>
              <p className="text-stone-300 text-xs mt-0.5">
                Sent to our email desk. For urgent discussion, start a WhatsApp chat too.
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {validationError && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-lg text-xs text-red-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            <div>
              <label className="block text-stone-400 text-xs font-mono tracking-wider uppercase mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Shailesh Tripathi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 px-3.5 py-2.5 rounded-lg text-sm text-white focus:border-brick-light focus:outline-none focus:ring-1 focus:ring-brick-light/20"
              />
            </div>

            <div>
              <label className="block text-stone-400 text-xs font-mono tracking-wider uppercase mb-1.5">
                WhatsApp Mobile Number
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500 text-sm font-mono leading-none">+91</span>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="7607633777"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  className="w-full bg-stone-950 border border-stone-800 pl-12 pr-3.5 py-2.5 rounded-lg text-sm text-white focus:border-brick-light focus:outline-none focus:ring-1 focus:ring-brick-light/20 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-400 text-xs font-mono tracking-wider uppercase mb-1.5">
                Email Address (Optional)
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                <input
                  type="email"
                  placeholder="yourname@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 pl-11 pr-3.5 py-2.5 rounded-lg text-sm text-white focus:border-brick-light focus:outline-none focus:ring-1 focus:ring-brick-light/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-400 text-xs font-mono tracking-wider uppercase mb-1.5">
                  Brick Class
                </label>
                <select
                  value={brickType}
                  onChange={(e) => setBrickType(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 px-3 py-2.5 rounded-lg text-xs text-white focus:border-brick-light focus:outline-none"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-stone-400 text-xs font-mono tracking-wider uppercase mb-1.5">
                  Quantity Pcs
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 px-3 py-2.5 rounded-lg text-xs text-white focus:border-brick-light focus:outline-none font-mono"
                >
                  <option value="Less than 1000">&lt; 1,000</option>
                  <option value="1000 - 5000">1,000 - 5,000</option>
                  <option value="5000 - 10000">5,000 - 10,000</option>
                  <option value="10000 - 25000">10,000 - 25,000</option>
                  <option value="25000+">25,000+ (Bulk)</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-stone-950/50 border border-stone-850 rounded-lg text-[10px] text-stone-500 flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <p>
                This quick quote goes to {COMPANY_INFO.email}. If you want an instant conversation, you can also start a WhatsApp chat on {COMPANY_INFO.whatsapp}.
              </p>
            </div>

            <a
              href={whatsappQuoteLink}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 w-full border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-600/10 font-bold text-xs uppercase tracking-widest py-3 px-5 rounded-lg transition-colors"
            >
              Start Chat on WhatsApp
            </a>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800/60 text-white font-bold text-xs uppercase tracking-widest py-3 px-5 rounded-lg transition-colors group mt-2 shadow-lg hover:shadow-emerald-900/10"
              id="modal-whatsapp-send"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Sending Quote Request...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send Quote Request
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
                Quote Request Ready
              </h4>
              <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                {submissionMode === "submitted"
                  ? `Your quick quote request for ${brickType} has been sent to ${COMPANY_INFO.email}.`
                  : `We could not auto-send it, so your mail app was opened with the request addressed to ${COMPANY_INFO.email}.`}
              </p>
            </div>

            <a
              href={whatsappQuoteLink}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest py-3 px-5 rounded-lg transition-colors"
            >
              Start WhatsApp Chat
            </a>
            <button
              onClick={handleClose}
              className="w-full border border-stone-700 hover:border-stone-500 text-stone-200 hover:text-white font-bold text-xs uppercase tracking-widest py-3 px-5 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
