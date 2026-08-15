import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_INFO } from "../lib/constants";
import { useLanguage } from "../lib/language";

export default function FloatingWhatsApp() {
  const { content, isHindi } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="floating-whatsapp-container"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-16 mr-2 bg-stone-900 border border-stone-850 text-white text-xs font-semibold py-2 px-3 rounded shadow-lg whitespace-nowrap pointer-events-none ${
              isHindi ? "" : "tracking-wider"
            }`}
          >
            {content.floatingWhatsApp.tooltip}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-40 scale-110" />

      <a
        href={COMPANY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-xl hover:shadow-emerald-500/20 text-white transform hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label={content.floatingWhatsApp.aria}
        id="whatsapp-floating-btn"
      >
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </a>
    </div>
  );
}
