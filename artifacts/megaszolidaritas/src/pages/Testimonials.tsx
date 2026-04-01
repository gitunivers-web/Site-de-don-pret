import { useLanguage } from "@/i18n/LanguageContext";
import { Star, Quote } from "lucide-react";

const TESTIMONIAL_PEOPLE = [
  {
    name: "Sophie Martin",
    country: "France",
    flag: "🇫🇷",
    date: "March 2023",
    amount: "€ 42,000",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Carlos Ruiz",
    country: "Spain",
    flag: "🇪🇸",
    date: "July 2023",
    amount: "€ 67,500",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Anna Kowalska",
    country: "Poland",
    flag: "🇵🇱",
    date: "November 2023",
    amount: "€ 28,000",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "David Chen",
    country: "Canada",
    flag: "🇨🇦",
    date: "February 2024",
    amount: "€ 90,000",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Elena Ionescu",
    country: "Romania",
    flag: "🇷🇴",
    date: "June 2024",
    amount: "€ 35,000",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Klaus Weber",
    country: "Germany",
    flag: "🇩🇪",
    date: "September 2024",
    amount: "€ 55,000",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Maria Silva",
    country: "Brazil",
    flag: "🇧🇷",
    date: "January 2025",
    amount: "€ 78,000",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Omar Al-Hassan",
    country: "Morocco",
    flag: "🇲🇦",
    date: "August 2025",
    amount: "€ 120,000",
    photo: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=120&h=120&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const tp = t.testimonialsPage;

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-[#2e7d32] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-green-200 mb-3 font-semibold">
            SOLIDARIEDADE RODRIGUES
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{tp.pageTitle}</h1>
          <div className="w-20 h-1 bg-[#f57c00] mx-auto mb-6 rounded" />
          <p className="text-green-100 text-lg max-w-2xl mx-auto">{tp.pageSubtitle}</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#f57c00] text-white py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-10 text-center">
          {[
            { num: "12,400+", label: t.about?.projects ?? "Bénéficiaires" },
            { num: "150,000 €", label: "Maximum" },
            { num: "10", label: "Langues" },
            { num: "98%", label: "Satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold">{s.num}</div>
              <div className="text-sm text-orange-100 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {TESTIMONIAL_PEOPLE.map((person, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Colored top bar */}
                <div className="h-2 bg-gradient-to-r from-[#2e7d32] to-[#f57c00]" />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-[#f57c00] text-[#f57c00]" />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-[#f57c00] opacity-30 -mb-2" />

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                    {tp.texts[i as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7]}
                  </p>

                  {/* Amount badge */}
                  <div className="inline-flex items-center gap-2">
                    <span className="bg-green-50 text-[#2e7d32] border border-green-200 text-xs font-bold px-3 py-1 rounded-full">
                      {person.amount} reçu
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-14 h-14 rounded-full object-cover border-3 border-[#2e7d32] flex-shrink-0 shadow-sm"
                      style={{ border: "3px solid #2e7d32" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=2e7d32&color=fff&size=120`;
                      }}
                    />
                    <div>
                      <p className="font-bold text-gray-800">{person.name}</p>
                      <p className="text-[#2e7d32] text-sm font-semibold">
                        {person.flag} {person.country}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">{person.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2e7d32] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">{t.cta?.title}</h2>
          <div className="w-16 h-1 bg-[#f57c00] mx-auto mb-6 rounded" />
          <p className="text-green-100 mb-8">{t.cta?.subtitle}</p>
          <a
            href="/get-donation"
            className="inline-block bg-[#f57c00] hover:bg-[#e65100] text-white font-bold px-10 py-4 rounded transition-colors text-base"
          >
            {t.cta?.getFreeGift}
          </a>
        </div>
      </section>
    </div>
  );
}
