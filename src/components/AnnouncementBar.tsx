import React, { useState, useEffect, useRef } from "react";
import { X, Sparkles, Phone } from "lucide-react";
import { COMPANY_INFO } from "../lib/constants";
import { useLanguage } from "../lib/language";

export default function AnnouncementBar() {
  const { content, isHindi } = useLanguage();
  const [isOpen, setIsOpen] = useState(true);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDismissed = localStorage.getItem("luxmi_banner_dismissed");
    if (isDismissed === "true") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.documentElement.style.setProperty("--announcement-bar-height", "0px");
      return;
    }

    const updateHeight = () => {
      if (elementRef.current) {
        document.documentElement.style.setProperty("--announcement-bar-height", `${elementRef.current.offsetHeight}px`);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [isOpen]);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem("luxmi_banner_dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div
      ref={elementRef}
      className="bg-brick-dark text-white py-2 px-4 text-center text-xs md:text-sm font-medium relative flex items-center justify-center gap-2 z-[60] border-b border-white/10"
      id="seasonal-announcement-bar"
    >
      <div className="flex items-center justify-center gap-2 flex-wrap pr-8">
        <span className={`inline-flex items-center gap-1 bg-white/15 px-2 py-0.5 rounded text-[10px] font-bold text-cream ${
          isHindi ? "" : "tracking-wider uppercase"
        }`}>
          <Sparkles className="w-3 h-3 text-brick-light animate-pulse" /> {content.announcement.badge}
        </span>
        <span className="tracking-wide">{content.announcement.message}</span>
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className={`inline-flex items-center gap-1 text-white bg-brick-primary hover:bg-brick-light px-2.5 py-1 rounded text-xs transition-colors duration-200 mt-1 sm:mt-0 font-semibold shadow-sm ${
            isHindi ? "" : "tracking-wider uppercase"
          }`}
        >
          <Phone className="w-3 h-3" />
          {content.announcement.cta}
        </a>
      </div>

      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors duration-150"
        aria-label={content.announcement.dismissAria}
        id="dismiss-announcement-btn"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
