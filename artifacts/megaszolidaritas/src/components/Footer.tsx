import { Link } from "wouter";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin, Mail, Globe } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="bg-[#2e7d32] py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white text-lg font-semibold mb-4">{t.advantages.volunteerAssoc}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#2e7d32] font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            {t.advantages.joinUs}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#2e7d32] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MS</span>
            </div>
            <div>
              <div className="font-bold text-[#4caf50] text-lg">MEGA</div>
              <div className="font-bold text-[#f57c00] text-sm">SZOLIDARITÁS</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t.foundation.desc1}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-[#4caf50]">Navigation</h3>
          <ul className="space-y-2">
            {[
              { label: t.nav.home, href: "/" },
              { label: t.nav.about, href: "/presentation" },
              { label: t.nav.getDonation, href: "/get-donation" },
              { label: t.nav.becomeDonor, href: "/become-donor" },
              { label: t.nav.contact, href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 hover:text-[#4caf50] text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-[#4caf50]">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#4caf50] mt-0.5 flex-shrink-0" />
              <span className="text-gray-400 text-sm">{t.contact.addressValue}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#4caf50] flex-shrink-0" />
              <a href="mailto:contact@megaszolidaritas.org" className="text-gray-400 hover:text-[#4caf50] text-sm transition-colors">
                contact@megaszolidaritas.org
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-[#4caf50] flex-shrink-0" />
              <span className="text-gray-400 text-sm">www.megaszolidaritas.org</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center">
        <p className="text-gray-500 text-sm">© 2024 MEGA SZOLIDARITÁS. All rights reserved.</p>
      </div>
    </footer>
  );
}
