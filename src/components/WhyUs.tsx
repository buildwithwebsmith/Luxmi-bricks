import { ShieldCheck, Truck, Award, Leaf, Calendar, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../lib/language";

export default function WhyUs() {
  const { content, isHindi } = useLanguage();

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-brick-light" />;
      case "Truck":
        return <Truck className="w-8 h-8 text-brick-light" />;
      case "Award":
        return <Award className="w-8 h-8 text-brick-light" />;
      case "Leaf":
        return <Leaf className="w-8 h-8 text-brick-light" />;
      case "Calendar":
        return <Calendar className="w-8 h-8 text-brick-light" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-brick-light" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-brick-light" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-stone-900 border-b border-stone-950 text-white relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 top-[20%] brick-texture-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-brick-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-brick-dark/25 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <span className={`text-brick-light text-xs font-semibold mb-2 ${isHindi ? "" : "tracking-widest uppercase"}`}>
            {content.whyUs.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
            {content.whyUs.title}
          </h2>
          <div className="w-16 h-1 bg-brick-primary mt-4 mb-4 rounded-full"></div>
          <p className="text-stone-400 text-sm sm:text-base">
            {content.whyUs.description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content.whyUs.features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.06 }}
              className="p-8 rounded-xl bg-stone-850/60 border border-stone-800 hover:border-brick-primary/30 hover:bg-stone-850 transition-all duration-300 flex flex-col items-start gap-5 shadow-lg group"
            >
              <div className="p-3.5 rounded-lg bg-stone-900 border border-stone-750 group-hover:scale-110 group-hover:bg-brick-primary/10 group-hover:border-brick-primary/30 transition-all duration-300">
                {getFeatureIcon(feature.iconName)}
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brick-light transition-colors">
                  {feature.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
