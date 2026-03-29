import { Link } from "wouter";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "185+", label: t.about.projects },
    { value: "622", label: t.about.partners },
    { value: "40+", label: t.about.years },
    { value: "256,861", label: t.about.volunteers },
  ];

  const reasons = [
    { title: t.about.reason1Title, desc: t.about.reason1Desc, img: "https://www.megaszolidaritas.org/images/blog-1.jpg" },
    { title: t.about.reason2Title, desc: t.about.reason2Desc, img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop" },
    { title: t.about.reason3Title, desc: t.about.reason3Desc, img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop" },
    { title: t.about.reason4Title, desc: t.about.reason4Desc, img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop" },
  ];

  return (
    <div>
      <section
        className="relative py-32 text-white text-center"
        style={{ background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-green-200 uppercase tracking-widest text-sm mb-3">{t.about.title}</p>
          <h1 className="text-4xl md:text-5xl font-bold">{t.about.whoWeAre}</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">{t.about.desc1}</p>
              <p className="text-gray-600 leading-relaxed">{t.about.desc2}</p>
            </div>
            <div>
              <img
                src="https://www.megaszolidaritas.org/images/about-img-2.jpg"
                alt="About"
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#2e7d32] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-[#f57c00]">{t.cta.title}</h2>
          <h3 className="text-xl font-semibold mb-4 text-[#4caf50]">{t.welcome.volunteer}</h3>
          <p className="text-gray-300 mb-8">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-donor" className="bg-[#f57c00] hover:bg-[#e65100] text-white font-bold px-8 py-3 rounded transition-colors">
              {t.cta.becomeDonor}
            </Link>
            <Link href="/get-donation" className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold px-8 py-3 rounded transition-colors">
              {t.cta.getFreeGift}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2e7d32] mb-4">{t.about.whyChooseUs}</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">{t.about.whyDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-4">
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="w-32 h-24 object-cover rounded flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=128&h=96&fit=crop";
                  }}
                />
                <div>
                  <h4 className="font-bold text-[#2e7d32] mb-2">{reason.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
