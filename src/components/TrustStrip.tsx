import React from "react";
import { ShieldCheck, Snowflake, Truck, Award, Star, Users, MapPin } from "lucide-react";
import { useLanguage } from "../lib/language";

export default function TrustStrip() {
  const { content, isHindi } = useLanguage();

  const trustBadges = [
    { text: content.trustStrip.badges[0], icon: <ShieldCheck className="w-4 h-4 text-brick-light" /> },
    { text: content.trustStrip.badges[1], icon: <MapPin className="w-4 h-4 text-brick-light" /> },
    { text: content.trustStrip.badges[2], icon: <Truck className="w-4 h-4 text-brick-light text-brick-primary" /> },
    { text: content.trustStrip.badges[3], icon: <Award className="w-4 h-4 text-brick-light" /> },
    { text: content.trustStrip.badges[4], icon: <Users className="w-4 h-4 text-brick-light" /> },
    { text: content.trustStrip.badges[5], icon: <Snowflake className="w-4 h-4 text-brick-light" /> },
    { text: content.trustStrip.badges[6], icon: <Star className="w-4 h-4 fill-brick-light text-brick-light" /> }
  ];

  const doubleBadges = [...trustBadges, ...trustBadges, ...trustBadges];

  return (
    <div
      className="bg-stone-900 border-y border-stone-850 py-4 overflow-hidden relative w-full select-none"
      id="trust-badges-strip"
    >
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-stone-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-stone-900 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max items-center animate-infinite-marquee">
        <div className="flex shrink-0 items-center gap-12 text-sm text-stone-200">
          {doubleBadges.map((badge, idx) => (
            <div key={idx} className={`flex items-center gap-3 text-xs font-semibold ${isHindi ? "font-medium" : "font-mono tracking-wider uppercase"}`}>
              {badge.icon}
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infiniteMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .animate-infinite-marquee {
          animation: infiniteMarquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
