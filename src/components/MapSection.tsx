import React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, Home } from "lucide-react";
import { motion } from "motion/react";
import { COMPANY_INFO, getLocalizedCompanyInfo } from "../lib/constants";
import { useLanguage } from "../lib/language";

export default function MapSection() {
  const { language, content, isHindi } = useLanguage();
  const company = getLocalizedCompanyInfo(language);

  return (
    <section id="map-section" className="py-24 bg-stone-50 overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-16 max-w-3xl">
          <span className={`text-brick-light text-xs font-semibold mb-2 ${isHindi ? "" : "tracking-widest uppercase"}`}>
            {content.map.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 leading-tight">
            {content.map.title}
          </h2>
          <div className="w-16 h-1 bg-brick-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" id="factory-map-columns">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 min-h-[350px] lg:min-h-full"
          >
            <iframe
              src={COMPANY_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={content.map.title}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between bg-white rounded-xl border border-stone-200 p-8 sm:p-10 shadow-md"
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900 pb-4 border-b border-stone-100">
                {content.map.officeTitle}
              </h3>

              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-orange-50 text-brick-primary h-fit shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-stone-500 text-xs ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                    {content.map.locationLabel}
                  </h4>
                  <p className="text-stone-800 text-sm font-semibold mt-1 leading-relaxed">
                    {company.address}
                  </p>
                  <p className="text-brick-primary text-xs mt-1.5 font-medium flex items-center gap-1">
                    <Home className="w-3.5 h-3.5" /> {content.map.landmarkLabel}: {company.landmark}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-orange-50 text-brick-primary h-fit shrink-0">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className={`text-stone-500 text-xs ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                    {content.map.callLabel}
                  </h4>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-brick-primary hover:text-brick-light text-base sm:text-lg font-bold mt-1 inline-block hover:underline"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-orange-50 text-brick-primary h-fit shrink-0">
                  <Mail className="w-5 h-5 font-bold" />
                </div>
                <div>
                  <h4 className={`text-stone-500 text-xs ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                    {content.map.emailLabel}
                  </h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-stone-700 hover:text-brick-primary text-sm font-medium mt-1 inline-block truncate hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 font-sans">
                <div className="p-2.5 rounded-lg bg-orange-50 text-brick-primary h-fit shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-stone-500 text-xs ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                    {content.map.hoursLabel}
                  </h4>
                  <p className="text-stone-700 text-sm font-medium mt-1">
                    {company.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 px-5 rounded shadow-sm hover:shadow-md transition-all duration-200 ${
                  isHindi ? "" : "tracking-widest uppercase"
                }`}
              >
                <MessageSquare className="w-4 h-4 fill-white text-white" />
                {content.map.whatsappCta}
              </a>
              <a
                href={COMPANY_INFO.directionLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-1.5 bg-stone-50 hover:bg-stone-100 text-stone-800 font-bold text-xs py-3.5 px-5 rounded border border-stone-200 transition-all duration-200 ${
                  isHindi ? "" : "tracking-widest uppercase"
                }`}
                id="get-gps-directions-btn"
              >
                {content.map.directionsCta}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
