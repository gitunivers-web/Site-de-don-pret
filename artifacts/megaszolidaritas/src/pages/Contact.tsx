import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin, Mail, Globe, MessageCircle } from "lucide-react";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/config/web3forms";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    title: "",
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `[SOLIDARIEDADE RODRIGUES] ${formData.subject} — ${formData.firstName} ${formData.lastName}`,
      from_name: "Solidariedade Rodrigues — Contact",
      Civilité: formData.title,
      Nom: formData.lastName,
      Prénom: formData.firstName,
      Email: formData.email,
      Téléphone: formData.phone || "—",
      Pays: formData.country,
      Sujet: formData.subject,
      Message: formData.message,
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <section
        className="relative py-32 text-white text-center"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #333 50%, #444 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-300 uppercase tracking-widest text-sm mb-3">{t.contact.title}</p>
          <h1 className="text-4xl md:text-5xl font-bold">{t.contact.formTitle}</h1>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <p className="text-gray-600 mb-6">{t.contact.formDesc}</p>
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#2e7d32] mb-2">{t.contact.thankYou}</h3>
                    <p className="text-gray-600">{t.contact.successDesc}</p>
                    <button
                      onClick={() => { setStatus("idle"); setFormData({ title: "", lastName: "", firstName: "", email: "", phone: "", country: "", subject: "", message: "" }); }}
                      className="mt-6 text-sm text-[#2e7d32] underline"
                    >
                      {t.contact.newRequest}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                        {t.contact.errorMsg}
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.titleLabel}</label>
                      <select
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32] text-gray-700"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      >
                        <option value="">--</option>
                        <option value="Mr">{t.contact.mr}</option>
                        <option value="Mme">{t.contact.mrs}</option>
                        <option value="Mlle">{t.contact.miss}</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.lastName}</label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.firstName}</label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.email}</label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.phone}</label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.country}</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.subject}</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.message}</label>
                      <textarea
                        rows={5}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-colors text-lg"
                    >
                      {status === "loading" ? t.contact.sending : t.contact.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-xl text-[#2e7d32] mb-4">{t.contact.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2e7d32] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-1">{t.contact.address}</p>
                      <p className="text-gray-700 text-sm">{t.contact.addressValue}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2e7d32] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-1">{t.contact.emailLabel}</p>
                      <a href="mailto:contact@solidariedaderodrigues.org" className="text-[#2e7d32] hover:underline text-sm">
                        contact@solidariedaderodrigues.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#2e7d32] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-1">{t.contact.website}</p>
                      <span className="text-gray-700 text-sm">solidariedaderodrigues.org</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#2e7d32] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/447380310316"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2e7d32] hover:underline text-sm font-medium"
                      >
                        +44 7380 310316
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#2e7d32] rounded-xl p-6 text-white text-center">
                <p className="font-semibold mb-3">{t.advantages.volunteerAssoc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
