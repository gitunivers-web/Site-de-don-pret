import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language, languageNames, languageFlags } from "@/i18n/translations";
import { Menu, X, ChevronDown, Globe, Heart } from "lucide-react";

const WHATSAPP_NUMBER = "447380310316";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const languages: Language[] = ["hu", "fr", "en", "it", "de", "es", "pt", "nl", "ro", "pl"];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/presentation" },
    { label: t.nav.getDonation, href: "/get-donation" },
    { label: t.nav.becomeDonor, href: "/become-donor" },
    { label: t.nav.testimonials, href: "/testimonials" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-[#2e7d32] rounded-full flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#2e7d32] text-sm leading-tight tracking-tight">SOLIDARIEDADE</span>
              <span className="font-bold text-[#f57c00] text-xs leading-tight tracking-wide">RODRIGUES</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
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

            {/* Language selector */}
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

            {/* Desktop WhatsApp button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile: WhatsApp icon + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact WhatsApp"
              className="flex items-center justify-center w-10 h-10 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <button
              className="p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
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

          {/* WhatsApp banner in mobile menu */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 mb-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>+44 7380 310316</span>
          </a>

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
