import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_INFO } from "../lib/constants";
import { LANGUAGE_OPTIONS, useLanguage } from "../lib/language";
import BrandLogo from "./BrandLogo";

function LanguageSwitcher({
  compact = false,
  onSelect
}: {
  compact?: boolean;
  onSelect?: () => void;
}) {
  const { language, setLanguage, isHindi } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-stone-700 bg-stone-950/80 p-1 ${
        compact ? "self-start" : ""
      }`}
      aria-label={isHindi ? "भाषा चुनें" : "Choose language"}
    >
      {LANGUAGE_OPTIONS.map((option) => {
        const active = option.id === language;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => {
              setLanguage(option.id);
              onSelect?.();
            }}
            className={`min-w-[52px] rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
              active
                ? "bg-brick-primary text-white"
                : "text-stone-300 hover:text-white"
            }`}
          >
            {compact ? option.shortLabel : option.label}
          </button>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const { content, isHindi } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = content.navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [content.navLinks]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveLink(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className="fixed left-0 h-1 bg-gradient-to-r from-brick-primary via-orange-400 to-amber-300 z-[70] transition-all duration-100"
        style={{ width: `${scrollProgress}%`, top: isScrolled ? "0px" : "var(--announcement-bar-height, 0px)" }}
        id="scroll-progress-bar"
      />

      <header
        id="app-navbar"
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-stone-950/95 backdrop-blur-md border-b border-stone-850 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
        style={{ top: isScrolled ? "0px" : "var(--announcement-bar-height, 0px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center group focus:outline-none"
              id="navbar-logo"
            >
              <div className="rounded-sm bg-stone-50/95 px-3 py-2 shadow-sm ring-1 ring-stone-200/70 transition-transform duration-200 group-hover:scale-[1.02]">
                <BrandLogo
                  variant="primary"
                  className="h-12 sm:h-14 w-auto"
                />
              </div>
            </a>

            <nav className="hidden xl:flex items-center gap-4 xl:gap-5" id="desktop-nav">
              <ul className="flex items-center gap-0.5 xl:gap-1.5 flex-nowrap shrink-0">
                {content.navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors duration-200 rounded ${
                        activeLink === link.href
                          ? "text-brick-light text-white"
                          : "text-stone-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {activeLink === link.href && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-0.5 bg-brick-light"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              <LanguageSwitcher />

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className={`flex items-center gap-1 bg-brick-primary hover:bg-brick-light text-white text-[10px] font-bold py-2.5 px-4.5 rounded transition-all duration-200 shrink-0 focus:ring-1 focus:ring-brick-light focus:outline-none ${
                  isHindi ? "" : "tracking-widest"
                }`}
                id="header-cta"
              >
                {content.contact.submitCta}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </nav>

            <div className="xl:hidden flex items-center gap-2">
              <LanguageSwitcher compact />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded text-stone-300 hover:text-white hover:bg-stone-850 transition-colors focus:outline-none"
                aria-label={isHindi ? "नेविगेशन मेन्यू खोलें" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                id="mobile-menu-btn"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-stone-950 border-l border-stone-850 p-6 flex flex-col justify-between shadow-2xl xl:hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-900">
                  <div className="rounded-sm bg-stone-50 px-3 py-2 ring-1 ring-stone-200/70">
                    <BrandLogo
                      variant="primary"
                      className="h-12 w-auto"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-800 focus:outline-none"
                    aria-label={isHindi ? "मेन्यू बंद करें" : "Close menu"}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-5">
                  <LanguageSwitcher onSelect={() => setIsMobileMenuOpen(false)} />
                </div>

                <nav className="flex flex-col gap-1">
                  {content.navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        activeLink === link.href
                          ? "bg-brick-primary/15 text-brick-light font-bold"
                          : "text-stone-300 hover:bg-stone-900/50 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {activeLink === link.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brick-light"></span>
                      )}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-stone-900 flex flex-col gap-3">
                <span className="text-stone-500 text-xs font-medium">
                  {isHindi ? "प्रयागराज संपर्क" : "Prayagraj Contact"}
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-stone-300 hover:text-white text-xs"
                >
                  {COMPANY_INFO.phone}
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-stone-300 hover:text-white text-xs truncate"
                >
                  {COMPANY_INFO.email}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className={`mt-2 text-center bg-brick-primary hover:bg-brick-light text-white text-xs font-bold py-3 px-4 rounded transition-colors duration-200 ${
                    isHindi ? "" : "tracking-widest"
                  }`}
                >
                  {content.contact.submitCta}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
