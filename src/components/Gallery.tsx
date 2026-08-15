import React, { useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../lib/language";
import { COMPANY_INFO } from "../lib/constants";

export default function Gallery() {
  const { content, isHindi } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filteredItems = content.gallery.items.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);

  useEffect(() => {
    if (!content.gallery.filters.some((tab) => tab.value === activeCategory)) {
      setActiveCategory(content.gallery.filters[0]?.value ?? "all");
    }
  }, [activeCategory, content.gallery.filters]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory, content.gallery.items]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, filteredItems]);

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
          <span className={`text-brick-light text-xs font-semibold mb-2 ${isHindi ? "" : "tracking-widest uppercase"}`}>
            {content.gallery.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 leading-tight">
            {content.gallery.title}
          </h2>
          <div className="w-16 h-1 bg-brick-primary mt-4 mb-4 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base">
            {content.gallery.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-filter-tabs">
          {content.gallery.filters.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveCategory(tab.value)}
                className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-stone-900 text-white shadow-md border border-stone-900"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-stone-400"
                }`}
              >
                {tab.value !== "all" && isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brick-primary mr-2 animate-ping" />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-items-grid"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => {
              const isImageLoaded = loadedImages[item.id];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  key={item.id}
                  onClick={() => {
                    const globalIdx = filteredItems.findIndex((fi) => fi.id === item.id);
                    if (globalIdx !== -1) setActiveIdx(globalIdx);
                  }}
                  className="relative overflow-hidden rounded-xl border border-stone-200 group bg-stone-100 aspect-4/3 cursor-pointer select-none shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  {!isImageLoaded && (
                    <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full border-2 border-stone-300 border-t-brick-primary animate-spin" />
                        <span className={`text-[10px] text-stone-400 font-bold ${isHindi ? "" : "font-mono uppercase tracking-wider"}`}>
                          {content.gallery.loadingLabel}
                        </span>
                      </div>
                    </div>
                  )}

                  <img
                    src={item.url}
                    alt={item.title}
                    onLoad={() => setLoadedImages((prev) => ({ ...prev, [item.id]: true }))}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 select-none pointer-events-none ${
                      isImageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-1.5 rounded-full text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    <span className={`text-brick-light text-[10px] mb-1 block ${isHindi ? "" : "font-mono uppercase tracking-widest"}`}>
                      {content.gallery.categoryLabels[item.category]} • {COMPANY_INFO.brandName}
                    </span>
                    <h4 className="text-white text-sm sm:text-base font-display font-bold leading-snug">
                      {item.title}
                    </h4>
                    {item.hindiTitle && item.hindiTitle !== item.title && (
                      <p className="text-stone-300 text-xs font-display font-medium mt-1">
                        {item.hindiTitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length > visibleCount && (
          <div className="mt-12 text-center" id="gallery-load-more-container">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className={`px-6 py-3 bg-white hover:bg-stone-100 border border-stone-300 hover:border-stone-400 text-stone-700 font-bold text-xs rounded-lg transition-transform hover:scale-[1.01] ${
                isHindi ? "" : "uppercase tracking-widest"
              }`}
              id="gallery-load-more-btn"
            >
              {content.gallery.loadMoreCta}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between text-white border-b border-stone-800/80 pb-4 max-w-7xl mx-auto w-full">
              <div className="flex flex-col">
                <span className={`text-brick-light text-xs ${isHindi ? "" : "font-mono uppercase tracking-wider"}`}>
                  {content.gallery.categoryLabels[filteredItems[activeIdx].category]}
                </span>
                <h3 className="text-base md:text-xl font-display font-medium mt-0.5 max-w-[70vw] truncate">
                  {filteredItems[activeIdx].title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveIdx(null)}
                className="p-2 sm:p-2.5 rounded-full bg-stone-900 border border-stone-850 hover:bg-stone-800 text-stone-300 hover:text-white transition-all shadow-md focus:outline-none"
                aria-label={isHindi ? "गैलरी बंद करें" : "Close gallery"}
                id="lightbox-close-btn"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative flex-grow flex items-center justify-center max-w-7xl mx-auto w-full my-6">
              <button
                type="button"
                onClick={() => setActiveIdx((prev) => (prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1))}
                className="absolute left-0 md:left-4 z-10 p-2 sm:p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-stone-800/60 text-stone-300 hover:text-white transition-all shadow-lg focus:outline-none"
                aria-label={isHindi ? "पिछली तस्वीर" : "Previous image"}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <motion.img
                key={filteredItems[activeIdx].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={filteredItems[activeIdx].url}
                alt={filteredItems[activeIdx].title}
                className="max-h-[60vh] md:max-h-[72vh] max-w-full rounded-lg object-contain shadow-2xl border border-stone-800 select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />

              <button
                type="button"
                onClick={() => setActiveIdx((prev) => (prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1))}
                className="absolute right-0 md:right-4 z-10 p-2 sm:p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-stone-800/60 text-stone-300 hover:text-white transition-all shadow-lg focus:outline-none"
                aria-label={isHindi ? "अगली तस्वीर" : "Next image"}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className={`text-center text-stone-500 text-[10px] sm:text-xs pb-2 max-w-7xl mx-auto w-full border-t border-stone-800/25 pt-4 ${
              isHindi ? "" : "font-mono"
            }`}>
              {isHindi
                ? `चित्र ${activeIdx + 1} / ${filteredItems.length} • ${content.gallery.lightboxHint}`
                : `Image ${activeIdx + 1} of ${filteredItems.length} • ${content.gallery.lightboxHint}`}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
