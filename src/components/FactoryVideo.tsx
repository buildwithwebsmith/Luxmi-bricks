import React, { useState } from "react";
import { Film, Play } from "lucide-react";
import { useLanguage } from "../lib/language";
import { SITE_MEDIA } from "../lib/media";

export default function FactoryVideo() {
  const { content, isHindi } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const iframeVideoMarkup = `<!DOCTYPE html>
<html lang="${isHindi ? "hi" : "en"}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        background: #0c0a09;
        overflow: hidden;
      }
      video {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        background: #0c0a09;
      }
    </style>
  </head>
  <body>
    <video controls autoplay playsinline preload="metadata">
      <source src="${SITE_MEDIA.factoryVideoSrc}" type="video/mp4" />
    </video>
  </body>
</html>`;

  return (
    <section className="py-24 bg-stone-950 text-white relative border-b border-stone-900" id="factory-video">
      <div className="absolute inset-0 bg-gradient-radial from-brick-dark/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-900 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
          <span className={`text-brick-light text-xs font-semibold mb-2 ${isHindi ? "" : "tracking-widest uppercase"}`}>
            {content.factoryVideo.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
            {content.factoryVideo.title}
          </h2>
          <div className="w-16 h-1 bg-brick-primary mt-4 mb-4 rounded-full"></div>
          <p className="text-stone-400 text-sm sm:text-base">
            {content.factoryVideo.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-800 bg-stone-900 aspect-video">
          {isPlaying ? (
            <iframe
              title={content.factoryVideo.title}
              srcDoc={iframeVideoMarkup}
              className="absolute inset-0 w-full h-full border-0 bg-stone-950"
              allow="autoplay; fullscreen; picture-in-picture"
            />
          ) : (
            <div className="absolute inset-0">
              <img
                src={SITE_MEDIA.factoryVideoPoster}
                alt={content.factoryVideo.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />

              <div className={`absolute top-4 left-4 bg-stone-900/90 border border-stone-800 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-semibold text-stone-200 ${
                isHindi ? "" : "font-mono uppercase"
              }`}>
                <Film className="w-3.5 h-3.5 text-brick-light" />
                <span>{content.factoryVideo.badge}</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center px-4">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-brick-primary hover:bg-brick-light text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-orange-600/30"
                  aria-label={content.factoryVideo.playHint}
                >
                  <Play className="w-8 h-8 fill-white ml-1 text-white" />
                </button>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-transparent">
                <div className="px-5 pt-16 pb-5">
                  <span className="text-sm font-display font-medium text-cream block">
                    {content.factoryVideo.playHint}
                  </span>
                  <span className={`text-[10px] text-stone-400 mt-1 block ${isHindi ? "" : "font-mono"}`}>
                    {content.factoryVideo.length}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
