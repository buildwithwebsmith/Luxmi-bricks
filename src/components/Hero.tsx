import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../lib/language";

export default function Hero() {
  const { content, isHindi } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-950 via-brick-dark to-stone-900 border-b border-stone-850"
    >
      <div className="absolute inset-0 brick-texture-overlay opacity-30 pointer-events-none" />
      <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brick-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brick-light/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col justify-center items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-brick-light text-xs font-semibold mb-6"
        >
          <Sparkles className="w-3 h-3 text-brick-light animate-pulse" />
          <span className={isHindi ? "" : "tracking-wider uppercase"}>{content.hero.pill}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white mb-6 leading-tight max-w-4xl"
        >
          {content.hero.titleLead}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brick-light via-orange-400 to-amber-300 font-bold italic">
            {content.hero.titleAccent}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mb-10 leading-relaxed font-sans"
        >
          {content.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("products")}
            className={`group flex items-center justify-center gap-2 bg-brick-primary hover:bg-brick-light text-white font-bold text-xs py-4 px-8 rounded shadow-lg hover:shadow-orange-950/20 active:scale-[0.98] transition-all duration-200 ${
              isHindi ? "" : "tracking-widest uppercase"
            }`}
            id="hero-explore-btn"
          >
            {content.hero.primaryCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("calculator")}
            className={`flex items-center justify-center bg-transparent hover:bg-white/5 text-stone-200 hover:text-white font-bold text-xs py-4 px-8 rounded border border-stone-600 hover:border-stone-400 active:scale-[0.98] transition-all duration-200 ${
              isHindi ? "" : "tracking-widest uppercase"
            }`}
            id="hero-calculator-btn"
          >
            {content.hero.secondaryCta}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex [@media(max-height:750px)]:hidden flex-col items-center gap-1.5 cursor-pointer text-stone-400 hover:text-white transition-colors"
          onClick={() => scrollToSection("about")}
        >
          <span className={`text-xs opacity-75 ${isHindi ? "" : "font-mono tracking-widest uppercase"}`}>
            {content.hero.scrollHint}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-brick-light" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
