import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Shield, Landmark } from "lucide-react";
import { useLanguage } from "../lib/language";
import { SITE_MEDIA } from "../lib/media";

function StatCounter({ target, suffix, label, duration = 1500 }: { target: number; suffix: string; label: string; duration?: number; }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / target), 15);

    const timer = setInterval(() => {
      start += Math.ceil(target / (totalMiliseconds / incrementTime));
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div ref={elementRef} className="bg-white p-4.5 rounded-xl border border-stone-150 shadow-sm flex flex-col items-center justify-center text-center">
      <span className="text-2.5xl sm:text-3.5xl font-mono font-extrabold text-brick-primary">
        {count}
        {suffix}
      </span>
      <span className="text-stone-500 text-[10px] sm:text-xs font-bold mt-1">{label}</span>
    </div>
  );
}

export default function About() {
  const { content, isHindi } = useLanguage();

  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-16 max-w-3xl">
          <span className={`text-brick-light text-xs font-semibold mb-2 ${isHindi ? "" : "tracking-widest uppercase"}`}>
            {content.about.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 leading-tight">
            {content.about.title}
          </h2>
          <div className="w-16 h-1 bg-brick-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col"
          >
            <p className="text-lg text-stone-700 leading-relaxed font-sans mb-6">
              {content.about.body[0]}
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-sm sm:text-base">
              {content.about.body[1]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-orange-100 text-brick-primary mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{content.about.highlights[0].title}</h4>
                  <p className="text-xs text-stone-500">{content.about.highlights[0].description}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-orange-100 text-brick-primary mt-0.5">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{content.about.highlights[1].title}</h4>
                  <p className="text-xs text-stone-500">{content.about.highlights[1].description}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {content.about.stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -top-4 -left-4 w-72 h-72 rounded-2xl bg-orange-100/60 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 rounded-2xl bg-brick-primary/5 -z-10" />

            <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white bg-stone-100 aspect-[4/5] object-cover">
              <img
                src={SITE_MEDIA.aboutImage}
                alt={content.about.title}
                className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-stone-100 flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-brick-dark text-white flex items-center justify-center font-bold">
                  BR
                </div>
                <div>
                  <h5 className={`text-[10px] text-stone-500 leading-none ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                    {content.about.qualitySealLabel}
                  </h5>
                  <p className="text-xs sm:text-sm font-semibold text-stone-900 mt-1">
                    {content.about.qualitySealValue}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
