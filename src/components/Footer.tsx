import React from "react";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Navigation, MessageSquareCode, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "../lib/constants";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
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
    <footer className="bg-stone-950 border-t border-stone-900 text-stone-400 font-sans" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8">
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="space-y-3">
              <BrandLogo
                variant="horizontalDark"
                className="h-12 sm:h-14 w-auto"
              />
              <span className="text-brick-light text-[10px] font-semibold tracking-wider block">
                {COMPANY_INFO.hindiName} Â· ESTD. {COMPANY_INFO.established}
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Luxmi Brick Field is eastern UP&apos;s trusted manufacturing center, baking Class-I Red Clay and eco-friendly Fly Ash structural blocks under national BIS standards.
            </p>

            <div className="p-3 bg-stone-900/60 border border-stone-850 rounded-xl">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-500">Motto</span>
              <p className="text-xs font-semibold text-brick-light mt-1 font-display">
                "{COMPANY_INFO.hindiTagline}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-stone-900 border border-stone-850 hover:border-brick-light text-stone-400 hover:text-white transition-all hover:bg-brick-primary"
                aria-label="Facebook Page Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-stone-900 border border-stone-850 hover:border-brick-light text-stone-400 hover:text-white transition-all hover:bg-brick-primary"
                aria-label="Instagram Page Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-stone-900 border border-stone-850 hover:border-brick-light text-stone-400 hover:text-white transition-all hover:bg-brick-primary"
                aria-label="YouTube Channel Link"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-stone-900 border border-stone-850 hover:border-brick-light text-stone-400 hover:text-white transition-all hover:bg-brick-primary"
                aria-label="LinkedIn Corporate Profile Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-white text-xs font-mono tracking-widest uppercase border-l-2 border-brick-primary pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-stone-450 hover:text-white text-xs sm:text-sm transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-white text-xs font-mono tracking-widest uppercase border-l-2 border-brick-primary pl-2.5">
              Interactive Map
            </h4>

            <div className="relative rounded-xl border border-stone-800 bg-stone-900 p-1 group overflow-hidden max-w-xs">
              <iframe
                src={`${COMPANY_INFO.mapEmbedUrl}`}
                width="100%"
                height="110"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg opacity-85 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent pointer-events-none transition-all" />
            </div>

            <a
              href={`${COMPANY_INFO.directionLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full max-w-xs text-xs font-bold uppercase tracking-wider bg-stone-900 hover:bg-brick-primary text-white py-2.5 px-4 rounded-lg border border-stone-800 hover:border-brick-primary transition-all duration-200 shadow-sm"
              id="get-directions-action"
            >
              <Navigation className="w-3.5 h-3.5" />
              Get GPS Directions
              <ArrowUpRight className="w-3 h-3 text-stone-400" />
            </a>
          </div>

          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-white text-xs font-mono tracking-widest uppercase border-l-2 border-brick-primary pl-2.5">
              Bhatta Office
            </h4>

            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-brick-light flex-shrink-0" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.address}
                  <span className="block mt-1 font-semibold text-stone-500 text-[10px] uppercase font-mono">
                    ðŸ“ Near Jhusi Station
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brick-light flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brick-light flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white hover:underline truncate">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-850 flex items-start gap-3 max-w-xs">
                <MessageSquareCode className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[10px] font-mono text-stone-300 uppercase tracking-widest font-bold">WhatsApp Support</h5>
                  <p className="text-[11px] text-stone-500 mt-0.5 leading-tight">
                    Start a direct chat with our dispatch desk on {COMPANY_INFO.whatsapp}.
                  </p>
                  <a
                    href={`${COMPANY_INFO.whatsappLink}`}
                    target="_blank"
                    className="inline-block text-[10px] text-emerald-400 hover:text-emerald-300 font-bold uppercase mt-2 hover:underline"
                    referrerPolicy="no-referrer"
                  >
                    Start Chat &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-stone-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center md:flex md:items-center md:justify-between text-[11px] text-stone-500">
        <p>
          &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved. Managed under national BIS manufacturing frameworks and GST accounting regulations.
        </p>
        <p className="flex items-center justify-center gap-1.5 mt-2 md:mt-0 font-semibold text-stone-400">
          Crafted in Prayagraj
        </p>
      </div>
    </footer>
  );
}
