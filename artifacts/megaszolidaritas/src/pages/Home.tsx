import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronLeft, ChevronRight, Users, Gift, HeartHandshake, Star } from "lucide-react";

const slides = [
  { image: "https://www.megaszolidaritas.org/images/home02-3.jpg", key: "slide1" },
  { image: "https://www.megaszolidaritas.org/images/home04-3.jpg", key: "slide2" },
];

const causes = [
  { image: "https://www.megaszolidaritas.org/images/cagnotte1.jpg", collected: "€ 2.580,00", percent: 53, key: "cause1" },
  { image: "https://www.megaszolidaritas.org/images/cause-img-5.jpg", collected: "€ 26.812,00", percent: 72, key: "cause2" },
  { image: "https://www.megaszolidaritas.org/images/cause-img-2.jpg", collected: "€ 7.198,00", percent: 32, key: "cause3" },
];

const testimonialImages = [
  "https://www.megaszolidaritas.org/images/testimony-thumb-1.jpg",
  "https://www.megaszolidaritas.org/images/volunteer-4.jpg",
  "https://www.megaszolidaritas.org/images/testimony-thumb-8.jpg",
  "https://www.megaszolidaritas.org/images/testimony-thumb-7.jpg",
];

const fallbackImages = [
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop&face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&face",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&face",
];

const vipDonors = [
  { image: "https://www.megaszolidaritas.org/images/1a.jpg", name: "Susanne KLatten", country: "🇩🇪" },
  { image: "https://www.megaszolidaritas.org/images/2a.jpg", name: "Van Haeften Sophie", country: "🇳🇱" },
  { image: "https://www.megaszolidaritas.org/images/3a.jpg", name: "Maria Giovanna Barilla", country: "🇮🇹" },
  { image: "https://www.megaszolidaritas.org/images/4a.jpg", name: "Ghermezian Pierre", country: "🇨🇦" },
  { image: "https://www.megaszolidaritas.org/images/5a.jpg", name: "Christopher Johnson", country: "🇺🇸" },
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
      {/* ── Hero Slider ── */}
      <section className="relative h-[500px] md:h-[620px] overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.key}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 drop-shadow-xl tracking-tight leading-tight">
                {slideContent[idx].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 drop-shadow max-w-2xl">
                {slideContent[idx].desc}
              </p>
              <Link
                href={slideContent[idx].href}
                className="bg-[#f57c00] hover:bg-[#e65100] text-white font-bold px-10 py-4 rounded transition-all duration-200 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                {slideContent[idx].btn}
              </Link>
            </div>
          </div>
        ))}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      {/* ── Welcome Section ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2e7d32] mb-3">{t.welcome.title}</h2>
          <div className="w-16 h-1 bg-[#f57c00] mx-auto mb-6 rounded" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">{t.welcome.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8 text-white" />, color: "#2e7d32", label: t.welcome.volunteer, desc: t.welcome.volunteerDesc },
              { icon: <Gift className="w-8 h-8 text-white" />, color: "#f57c00", label: t.welcome.donate, desc: t.welcome.donateDesc },
              { icon: <HeartHandshake className="w-8 h-8 text-white" />, color: "#2e7d32", label: t.welcome.collect, desc: t.welcome.collectDesc },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow text-center group">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: item.color }}>{item.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/presentation" className="inline-block bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold px-8 py-3 rounded transition-colors">
              {t.welcome.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Causes / Fundraising ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2e7d32] mb-2">{t.help.title}</h2>
          <div className="w-16 h-1 bg-[#f57c00] mx-auto mb-12 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((cause) => {
              const key = cause.key as "cause1" | "cause2" | "cause3";
              return (
                <div key={cause.key} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={cause.image}
                      alt=""
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <Link href="/become-donor" className="text-[#2e7d32] font-bold hover:text-[#f57c00] transition-colors text-lg block mb-2">
                      {t.help[`${key}Title` as keyof typeof t.help]}
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {t.help[`${key}Desc` as keyof typeof t.help]}
                    </p>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#f57c00] font-bold">{cause.collected}</span>
                        <span className="text-gray-500 font-semibold">{cause.percent}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-2 bg-[#2e7d32] rounded-full transition-all"
                          style={{ width: `${cause.percent}%` }}
                        />
                      </div>
                      <p className="text-gray-400 text-xs mt-1">{t.help.collected}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Foundation ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2e7d32] mb-3">{t.foundation.title}</h2>
              <div className="w-14 h-1 bg-[#f57c00] mb-6 rounded" />
              <p className="text-gray-600 leading-relaxed mb-4 text-base">{t.foundation.desc1}</p>
              <p className="text-gray-600 leading-relaxed text-base">{t.foundation.desc2}</p>
            </div>
            <div className="relative">
              <img
                src="https://www.megaszolidaritas.org/images/cause-img.jpg"
                alt="Foundation"
                className="w-full rounded-lg shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop";
                }}
              />
              <div className="absolute -bottom-5 -left-5 bg-[#f57c00] text-white font-bold text-center py-4 px-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-3xl font-extrabold">150 000€</div>
                <div className="text-sm">don max.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2e7d32] mb-2">{t.advantages.title}</h2>
          <div className="w-16 h-1 bg-[#f57c00] mx-auto mb-6 rounded" />
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">{t.advantages.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-50 border-l-4 border-[#2e7d32] p-8 rounded-lg">
              <h3 className="font-bold text-xl text-[#2e7d32] mb-3">{t.advantages.beneficiaries}</h3>
              <p className="text-gray-600 leading-relaxed">{t.advantages.beneficiariesDesc}</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#f57c00] p-8 rounded-lg">
              <h3 className="font-bold text-xl text-[#f57c00] mb-3">{t.advantages.donors}</h3>
              <p className="text-gray-600 leading-relaxed">{t.advantages.donorsDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Help ── */}
      <section className="py-20 bg-[#2e7d32] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2">{t.howHelp.title}</h2>
          <div className="w-16 h-1 bg-[#f57c00] mx-auto mb-6 rounded" />
          <p className="text-center text-green-100 max-w-2xl mx-auto mb-14">{t.howHelp.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: "01", title: t.howHelp.step1Title, desc: t.howHelp.step1Desc },
              { num: "02", title: t.howHelp.step2Title, desc: t.howHelp.step2Desc },
              { num: "03", title: t.howHelp.step3Title, desc: t.howHelp.step3Desc },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-20 h-20 border-4 border-[#f57c00] rounded-full flex items-center justify-center mx-auto mb-5 text-3xl font-extrabold text-[#f57c00]">
                  {step.num}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-green-100 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#f57c00]">{t.cta.title}</h2>
          <h3 className="text-xl font-semibold mb-5 text-[#4caf50]">{t.welcome.volunteer}</h3>
          <p className="text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/become-donor"
              className="bg-[#f57c00] hover:bg-[#e65100] text-white font-bold px-10 py-4 rounded transition-colors text-base"
            >
              {t.cta.becomeDonor}
            </Link>
            <Link
              href="/get-donation"
              className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold px-10 py-4 rounded transition-colors text-base"
            >
              {t.cta.getFreeGift}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2e7d32] mb-2">{t.testimonials.title}</h2>
          <div className="w-16 h-1 bg-[#f57c00] mx-auto mb-4 rounded" />
          <p className="text-center text-gray-500 mb-12">{t.testimonials.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.testimonials.list.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[#f57c00] text-[#f57c00]" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  <span className="text-[#f57c00] font-bold text-2xl leading-none mr-1 not-italic">"</span>
                  {item.text}
                  <span className="text-[#f57c00] font-bold text-2xl leading-none ml-1 not-italic">"</span>
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <img
                    src={testimonialImages[i % testimonialImages.length]}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#2e7d32] flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImages[i % fallbackImages.length];
                    }}
                  />
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                    <p className="text-[#2e7d32] text-xs font-semibold">{item.country}</p>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIP Donors ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-center text-[#2e7d32] mb-2">{t.vipDonors.title}</h2>
          <div className="w-14 h-1 bg-[#f57c00] mx-auto mb-10 rounded" />
          <div className="flex flex-wrap justify-center gap-10">
            {vipDonors.map((donor, i) => (
              <div key={i} className="text-center group">
                <img
                  src={donor.image}
                  alt={donor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-4 border-[#2e7d32] group-hover:border-[#f57c00] transition-colors"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=96&h=96&fit=crop";
                  }}
                />
                <p className="font-bold text-gray-800 text-sm">{donor.name}</p>
                <p className="text-gray-500 text-xs">{donor.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
