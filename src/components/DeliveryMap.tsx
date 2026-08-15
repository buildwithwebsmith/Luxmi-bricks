import React from "react";
import { Truck, MapPin, CheckCircle, ArrowRight, Navigation } from "lucide-react";
import { useLanguage } from "../lib/language";

export default function DeliveryMap() {
  const { content, isHindi } = useLanguage();

  const handleContactRedirect = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="delivery" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-6 space-y-6">
            <span className={`text-brick-primary text-xs font-semibold mb-2 block ${isHindi ? "" : "tracking-widest uppercase"}`}>
              {content.delivery.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 leading-tight">
              {content.delivery.title}
            </h2>
            <div className="w-16 h-1 bg-brick-primary rounded-full"></div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {content.delivery.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
              {content.delivery.stats.map((stat) => (
                <div key={stat.label} className="bg-stone-50 p-4 rounded-xl border border-stone-150">
                  <span className="text-3xl sm:text-4.5xl font-mono font-extrabold text-brick-dark block">{stat.value}</span>
                  <span className={`text-stone-500 text-[10px] font-bold mt-1 block ${isHindi ? "" : "font-mono uppercase tracking-wider"}`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={handleContactRedirect}
                className={`inline-flex items-center gap-1.5 text-xs font-bold text-brick-primary hover:text-brick-light transition-colors group ${
                  isHindi ? "" : "uppercase tracking-widest"
                }`}
                id="coverage-contact-link"
              >
                {content.delivery.cta}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-stone-50 border border-stone-200 p-6 sm:p-8 rounded-2xl relative shadow-sm">
            <div className="absolute -top-3.5 -right-3.5 bg-brick-primary text-white p-2.5 rounded-xl shadow-lg border border-orange-400">
              <Truck className="w-5 h-5 text-white" />
            </div>

            <h3 className="text-lg font-display font-bold text-stone-900 mb-6 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-brick-primary animate-pulse" />
              {content.delivery.gridTitle}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3" id="district-badges-grid">
              {content.delivery.cities.map((city) => (
                <div
                  key={city}
                  className="bg-white hover:bg-stone-100/50 border border-stone-200 hover:border-brick-light/40 py-3.5 px-4 rounded-xl flex items-center gap-3 transition-colors duration-200 shadow-sm group cursor-default"
                >
                  <MapPin className="w-4 h-4 text-stone-400 group-hover:text-brick-primary shrink-0 transition-colors" />
                  <span className="text-sm font-semibold text-stone-800 tracking-wide">{city}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200/80 text-[11px] text-stone-500 leading-relaxed flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p>
                <strong>{content.delivery.footerLead}</strong> {content.delivery.footerText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
