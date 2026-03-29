import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const slides = [
  {
    image: "https://www.megaszolidaritas.org/images/home02-3.jpg",
    key: "slide1",
  },
  {
    image: "https://www.megaszolidaritas.org/images/home04-3.jpg",
    key: "slide2",
  },
];

const causes = [
  {
    image: "https://www.megaszolidaritas.org/images/cagnotte1.jpg",
    collected: "€ 2.580,00",
    percent: 53,
    key: "cause1",
  },
  {
    image: "https://www.megaszolidaritas.org/images/cause-img-5.jpg",
    collected: "€ 26.812,00",
    percent: 72,
    key: "cause2",
  },
  {
    image: "https://www.megaszolidaritas.org/images/cause-img-2.jpg",
    collected: "€ 7.198,00",
    percent: 32,
    key: "cause3",
  },
];

const testimonials = [
  {
    image: "https://www.megaszolidaritas.org/images/testimony-thumb-1.jpg",
    text: "Hugo Schulz vagyok, német állampolgár. 2012-ben fedeztem fel ezt az alapítványt, amikor pénzügyi problémáim voltak a bankommal. Ez az alapítvány támogatott engem, és 30 000 euró ingyenes alappal segített nekem anélkül, hogy visszatérítést kértem volna.",
    name: "Hugo Schulz",
    nationality: "Német",
  },
  {
    image: "https://www.megaszolidaritas.org/images/volunteer-4.jpg",
    text: "HELENE BUGLIONI vagyok, olasz állampolgár. Ez az alapítvány segített nekem, amikor 2018-ban méhrákot diagnosztizáltak nálam és műtétre volt szükségem. Egy hónap múlva megkaptam a pénzügyi támogatásukat, és nekik köszönhetően jól vagyok.",
    name: "Helene Buglioni",
    nationality: "Olasz",
  },
  {
    image: "https://www.megaszolidaritas.org/images/testimony-thumb-8.jpg",
    text: "Joakim Greger vagyok, svéd állampolgár. A házamat majdnem lefoglalták, a vállalkozásom már nem működött, de a segítségüket kérve 150 000 eurót kaptam ingyen, visszatérítés nélkül.",
    name: "Joakim Greger",
    nationality: "Svéd",
  },
  {
    image: "https://www.megaszolidaritas.org/images/testimony-thumb-7.jpg",
    text: "Antoni Gaetano vagyok, olasz. Elbocsátottak a munkahelyemről, amikor online felfedeztem ezt az alapítványt. Néhány héttel később jelentős támogatást kaptam. Ma már saját szépségszalonom van.",
    name: "Antoni Gaetano",
    nationality: "Olasz",
  },
];

const vipDonors = [
  { image: "https://www.megaszolidaritas.org/images/1a.jpg", name: "Susanne KLatten", nationality: "Német" },
  { image: "https://www.megaszolidaritas.org/images/2a.jpg", name: "Van Haeften Sophie", nationality: "Holland" },
  { image: "https://www.megaszolidaritas.org/images/3a.jpg", name: "Maria Giovanna Barilla", nationality: "Olasz" },
  { image: "https://www.megaszolidaritas.org/images/4a.jpg", name: "Ghermezian Pierre", nationality: "Kanadai" },
  { image: "https://www.megaszolidaritas.org/images/5a.jpg", name: "Christopher johnson", nationality: "Amerikai" },
];

export default function Home() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideContent = [
    { title: t.hero.slide1Title, desc: t.hero.slide1Desc, btn: t.hero.slide1Btn, href: "/get-donation" },
    { title: t.hero.slide2Title, desc: t.hero.slide2Desc, btn: t.hero.slide2Btn, href: "/contact" },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.key}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {slideContent[idx].title}
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 drop-shadow max-w-2xl">
                {slideContent[idx].desc}
              </p>
              <Link
                href={slideContent[idx].href}
                className="bg-[#f57c00] hover:bg-[#e65100] text-white font-bold px-8 py-3 rounded transition-colors text-lg"
              >
                {slideContent[idx].btn}
              </Link>
            </div>
          </div>
        ))}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2e7d32] mb-4">{t.welcome.title}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">{t.welcome.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-[#2e7d32] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#2e7d32] mb-2">{t.welcome.volunteer}</h3>
              <p className="text-gray-600">{t.welcome.volunteerDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-[#f57c00] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#f57c00] mb-2">{t.welcome.donate}</h3>
              <p className="text-gray-600">{t.welcome.donateDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-[#2e7d32] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#2e7d32] mb-2">{t.welcome.collect}</h3>
              <p className="text-gray-600">{t.welcome.collectDesc}</p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/presentation" className="inline-block text-[#2e7d32] font-bold hover:underline">
              {t.welcome.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Help / Causes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2e7d32] mb-10">{t.help.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((cause) => {
              const key = cause.key as "cause1" | "cause2" | "cause3";
              return (
                <div key={cause.key} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={cause.image}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <Link href="/become-donor" className="text-[#2e7d32] font-bold hover:underline text-lg">
                      {t.help[`${key}Title` as keyof typeof t.help]}
                    </Link>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                      {t.help[`${key}Desc` as keyof typeof t.help]}
                    </p>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#2e7d32] font-bold">{cause.collected}</span>
                        <span className="text-gray-500">{cause.percent}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-[#2e7d32] rounded-full transition-all"
                          style={{ width: `${cause.percent}%` }}
                        />
                      </div>
                      <p className="text-gray-500 text-xs mt-1">{t.help.collected}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2e7d32] mb-6">{t.foundation.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{t.foundation.desc1}</p>
              <p className="text-gray-600 leading-relaxed">{t.foundation.desc2}</p>
            </div>
            <div className="relative">
              <img
                src="https://www.megaszolidaritas.org/images/cause-img.jpg"
                alt="Foundation"
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2e7d32] mb-4">{t.advantages.title}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">{t.advantages.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-bold text-xl text-[#2e7d32] mb-3">{t.advantages.beneficiaries}</h3>
              <p className="text-gray-600 leading-relaxed">{t.advantages.beneficiariesDesc}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-bold text-xl text-[#f57c00] mb-3">{t.advantages.donors}</h3>
              <p className="text-gray-600 leading-relaxed">{t.advantages.donorsDesc}</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#2e7d32] font-bold hover:underline"
            >
              <span className="text-2xl">📄</span>
              <div className="text-left">
                <div>{t.advantages.downloadBrochure}</div>
                <div className="text-sm font-normal text-gray-500">{t.advantages.downloadBtn}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-16 bg-[#2e7d32] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t.howHelp.title}</h2>
          <p className="text-center text-green-100 max-w-2xl mx-auto mb-12">{t.howHelp.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: t.howHelp.step1Title, desc: t.howHelp.step1Desc },
              { num: "02", title: t.howHelp.step2Title, desc: t.howHelp.step2Desc },
              { num: "03", title: t.howHelp.step3Title, desc: t.howHelp.step3Desc },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.num}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-green-100 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-[#f57c00]">{t.cta.title}</h2>
          <h3 className="text-xl font-semibold mb-4 text-[#4caf50]">{t.welcome.volunteer}</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/become-donor"
              className="bg-[#f57c00] hover:bg-[#e65100] text-white font-bold px-8 py-3 rounded transition-colors"
            >
              {t.cta.becomeDonor}
            </Link>
            <Link
              href="/get-donation"
              className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold px-8 py-3 rounded transition-colors"
            >
              {t.cta.getFreeGift}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2e7d32] mb-2">{t.testimonials.title}</h2>
          <p className="text-center text-gray-600 mb-10">{t.testimonials.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t2, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 p-6 rounded-lg">
                <img
                  src={t2.image}
                  alt={t2.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop";
                  }}
                />
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">"{t2.text}"</p>
                  <p className="font-bold text-[#2e7d32]">{t2.name}</p>
                  <p className="text-gray-500 text-sm">{t2.nationality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Donors */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#2e7d32] mb-8">{t.vipDonors.title}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {vipDonors.map((donor, i) => (
              <div key={i} className="text-center">
                <img
                  src={donor.image}
                  alt={donor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-4 border-[#2e7d32]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=96&h=96&fit=crop";
                  }}
                />
                <p className="font-bold text-gray-800 text-sm">{donor.name}</p>
                <p className="text-gray-500 text-xs">{donor.nationality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
