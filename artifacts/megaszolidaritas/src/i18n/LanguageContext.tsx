import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Translation, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "solidariedade_lang";

const countryToLanguage: Record<string, Language> = {
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", CI: "fr", SN: "fr", CM: "fr",
  CD: "fr", MG: "fr", ML: "fr", BF: "fr", NE: "fr", GN: "fr", BJ: "fr",
  TD: "fr", RW: "fr", HT: "fr",
  PT: "pt", BR: "pt", AO: "pt", MZ: "pt", CV: "pt", GW: "pt", ST: "pt",
  DE: "de", AT: "de",
  IT: "it", SM: "it", VA: "it",
  ES: "es", MX: "es", AR: "es", CL: "es", CO: "es", PE: "es", VE: "es",
  EC: "es", BO: "es", PY: "es", UY: "es", CR: "es", PA: "es", DO: "es",
  GT: "es", HN: "es", SV: "es", NI: "es", CU: "es", GQ: "es",
  NL: "nl",
  HU: "hu",
  RO: "ro", MD: "ro",
  PL: "pl",
  GB: "en", US: "en", CA: "en", AU: "en", NZ: "en", IE: "en",
  ZA: "en", SG: "en", IN: "en", PH: "en", NG: "en", KE: "en",
  CH: "fr",
};

function detectFromBrowser(): Language {
  const nav = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || "fr";
  const code = nav.split("-")[0].toLowerCase();
  const map: Record<string, Language> = {
    fr: "fr", pt: "pt", de: "de", it: "it", es: "es",
    nl: "nl", hu: "hu", ro: "ro", pl: "pl", en: "en",
  };
  return map[code] || "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && saved in translations) return saved;
    return detectFromBrowser();
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved in translations) return;

    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        const country = data?.country_code as string | undefined;
        if (country && countryToLanguage[country]) {
          setLanguageState(countryToLanguage[country]);
        }
      })
      .catch(() => {});
  }, []);

  const setLanguage = (lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
