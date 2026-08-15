import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGE_OPTIONS, SITE_CONTENT, type SiteContent, type SiteLanguage } from "./constants";

interface LanguageContextValue {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  isHindi: boolean;
  content: SiteContent;
}

const STORAGE_KEY = "luxmi_site_language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): SiteLanguage {
  if (typeof window === "undefined") {
    return "hi";
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (storedLanguage === "en" || storedLanguage === "hi") {
    return storedLanguage;
  }

  return "hi";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SiteLanguage>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = SITE_CONTENT[language].meta.htmlLang;
    document.documentElement.setAttribute("data-language", language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage: setLanguageState,
    isHindi: language === "hi",
    content: SITE_CONTENT[language]
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}

export { LANGUAGE_OPTIONS };
