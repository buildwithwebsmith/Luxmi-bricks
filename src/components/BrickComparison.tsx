import React from "react";
import { Check, AlertCircle, Sparkles, Sliders } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../lib/language";

export default function BrickComparison() {
  const { content, isHindi } = useLanguage();

  return (
    <section id="comparison" className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <span className={`text-brick-light text-xs font-semibold mb-2 ${isHindi ? "" : "tracking-widest uppercase"}`}>
            {content.comparison.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 leading-tight">
            {content.comparison.title}
          </h2>
          <div className="w-16 h-1 bg-brick-primary mt-4 mb-4 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base">
            {content.comparison.description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden max-w-5xl mx-auto"
          id="brick-comparison-panel"
        >
          <div className={`lg:hidden bg-stone-100 px-4 py-2 text-[10px] text-center font-semibold text-stone-500 border-b border-stone-200 flex items-center justify-center gap-1.5 animate-pulse ${
            isHindi ? "" : "font-mono tracking-wider uppercase"
          }`}>
            <Sliders className="w-3.5 h-3.5" /> {content.comparison.mobileHint}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className={`bg-stone-900 text-white text-xs border-b border-stone-800 ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                  <th className="py-5 px-6 font-semibold w-1/4">{content.comparison.headers.feature}</th>
                  <th className="py-5 px-6 font-semibold w-1/4 relative">{content.comparison.headers.redClay}</th>
                  <th className="py-5 px-6 font-semibold w-1/4 bg-brick-dark/20 text-brick-light relative">
                    <div className={`absolute top-2 right-4 bg-emerald-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm ${
                      isHindi ? "" : "tracking-widest uppercase"
                    }`}>
                      <Sparkles className="w-2 h-2 fill-white" /> {content.comparison.headers.flyAshBadge}
                    </div>
                    {content.comparison.headers.flyAsh}
                  </th>
                  <th className="py-5 px-6 font-semibold w-1/4">{content.comparison.headers.exposedFace}</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-stone-150 text-sm text-stone-700">
                {content.comparison.rows.map((row, index) => (
                  <tr key={row.feature} className="hover:bg-stone-50/55 transition-colors">
                    <td className={`py-4.5 px-6 font-semibold text-stone-900 text-xs ${isHindi ? "" : "font-mono uppercase"}`}>
                      {row.feature}
                    </td>
                    <td className={`py-4.5 px-6 ${index === 1 ? "text-amber-700" : ""}`}>
                      {row.redClay}
                    </td>
                    <td className={`py-4.5 px-6 bg-orange-50/20 border-x border-orange-100 ${
                      index === 0
                        ? "font-medium text-stone-900"
                        : index === 1 || index === 2
                          ? "text-emerald-700 font-medium"
                          : index === 5
                            ? "font-semibold text-xs text-stone-800"
                            : "font-medium text-stone-900"
                    }`}>
                      {index === 0 ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded text-xs">
                          <Check className="w-3.5 h-3.5" /> {row.flyAsh}
                        </span>
                      ) : (
                        row.flyAsh
                      )}
                    </td>
                    <td className={`py-4.5 px-6 ${index === 1 ? "text-emerald-700" : index === 3 ? "font-semibold text-brick-dark" : index === 5 ? "text-xs" : ""}`}>
                      {row.exposedFace}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-stone-100 border-t border-stone-200 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs text-stone-500 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-brick-primary shrink-0" />
              {content.comparison.footerNote}
            </span>
            <a
              href="#calculator"
              className={`text-xs font-bold text-brick-primary hover:text-brick-light flex items-center gap-1 hover:underline ${
                isHindi ? "" : "uppercase tracking-wider"
              }`}
            >
              {content.comparison.footerCta} →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
