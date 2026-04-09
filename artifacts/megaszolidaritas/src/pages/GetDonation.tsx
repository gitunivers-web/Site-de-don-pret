import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/config/web3forms";

type Status = "idle" | "loading" | "success" | "error";

export default function GetDonation() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    title: "",
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    country: "",
    donationType: "",
    amount: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const subject = `[SOLIDARIEDADE RODRIGUES] Demande de don — ${formData.firstName} ${formData.lastName}`;

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "Solidariedade Rodrigues — Obtenir un don",
      Civilité: formData.title,
      Nom: formData.lastName,
      Prénom: formData.firstName,
      Email: formData.email,
      Téléphone: formData.phone || "—",
      Pays: formData.country,
      "Type de don": formData.donationType,
      "Montant (EUR)": formData.amount || "—",
      Message: formData.message || "—",
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
        style={{ background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-green-200 uppercase tracking-widest text-sm mb-3">{t.getDonation.title}</p>
          <h1 className="text-4xl md:text-5xl font-bold">{t.getDonation.formTitle}</h1>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-[#2e7d32] mb-2">Merci !</h3>
                <p className="text-gray-600">Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.</p>
                <button
                  onClick={() => { setStatus("idle"); setFormData({ title: "", lastName: "", firstName: "", email: "", phone: "", country: "", donationType: "", amount: "", message: "" }); }}
                  className="mt-6 text-sm text-[#2e7d32] underline"
                >
                  Soumettre une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter par email.
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getDonation.titleLabel}</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32] text-gray-700"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  >
                    <option value="">--</option>
                    <option value="Mr">{t.getDonation.mr}</option>
                    <option value="Mme">{t.getDonation.mrs}</option>
                    <option value="Mlle">{t.getDonation.miss}</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getDonation.lastName}</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getDonation.firstName}</label>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getDonation.email}</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getDonation.phone}</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getDonation.country}</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getDonation.donationType}</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32] text-gray-700"
                    value={formData.donationType}
                    onChange={(e) => setFormData({ ...formData, donationType: e.target.value })}
                    required
                  >
                    <option value="">--</option>
                    <option value="En nature">{t.getDonation.inKind}</option>
                    <option value="Espèces">{t.getDonation.cash}</option>
                  </select>
                </div>

                {formData.donationType === "Espèces" && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getDonation.amount}</label>
                    <input
                      type="number"
                      min="5000"
                      max="250000"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    />
                    <p className="text-xs text-gray-500 mt-1">Min: 5 000 EUR – Max: 250 000 EUR</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.getDonation.message}</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-colors text-lg"
                >
                  {status === "loading" ? "Envoi en cours…" : t.getDonation.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
