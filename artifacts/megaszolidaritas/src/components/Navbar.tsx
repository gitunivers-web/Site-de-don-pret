import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language, languageNames, languageFlags } from "@/i18n/translations";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const languages: Language[] = ["hu", "fr", "en", "it", "de", "es", "pt", "nl", "ro", "pl"];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/presentation" },
    { label: t.nav.getDonation, href: "/get-donation" },
    { label: t.nav.becomeDonor, href: "/become-donor" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#2e7d32] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">MS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#2e7d32] text-sm leading-tight">MEGA</span>
              <span className="font-bold text-[#f57c00] text-xs leading-tight">SZOLIDARITÁS</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#2e7d32] ${
                  location === link.href ? "text-[#2e7d32] border-b-2 border-[#2e7d32]" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#2e7d32] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{languageFlags[language]}</span>
                <span className="hidden lg:block">{languageNames[language]}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 text-left transition-colors ${
                        lang === language ? "bg-green-50 text-[#2e7d32] font-medium" : "text-gray-700"
                      }`}
                    >
                      <span>{languageFlags[lang]}</span>
                      <span>{languageNames[lang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-sm font-medium border-b border-gray-100 ${
                location === link.href ? "text-[#2e7d32]" : "text-gray-700"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <p className="text-xs text-gray-500 mb-2 flex items-center gap-1"><Globe className="w-3 h-3" /> Langue / Language</p>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => { setLanguage(lang); setMobileOpen(false); }}
                  className={`flex items-center gap-2 px-2 py-1 text-xs rounded ${
                    lang === language ? "bg-green-100 text-[#2e7d32] font-medium" : "text-gray-600"
                  }`}
                >
                  <span>{languageFlags[lang]}</span>
                  <span>{languageNames[lang]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
