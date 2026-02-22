"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LogoBanner from "@/components/LogoBanner";

type Status = "idle" | "loading" | "success" | "error";

export default function Kontakt() {
  const { t } = useLanguage();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const contactItems = [
    { Icon: Phone, label: c.phoneLabel, value: "+49 173 910 44 74", href: "tel:+4917391044474" },
    { Icon: Mail, label: c.emailLabel, value: "dean.dukic@supply-consult.com", href: "mailto:dean.dukic@supply-consult.com" },
    { Icon: MapPin, label: c.locationLabel, value: c.location, href: null },
  ];

  return (
    <>
      <LogoBanner />

      <section className="relative py-24 px-6 img-overlay min-h-[340px] flex items-center">
        <Image src="/office.jpg" alt="Büro" fill className="object-cover" priority />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p style={{ color: "var(--accent-light)" }} className="glass-pill text-xs font-bold uppercase tracking-widest mb-3 anim-fade-in">{c.tag}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 anim-fade-up delay-100 img-text-shadow">{c.heroTitle}</h1>
          <p className="text-white/85 max-w-xl leading-relaxed anim-fade-up delay-200 img-text-shadow">{c.heroSub}</p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: "var(--pastel-slate)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Kontaktdaten */}
          <div className="anim-slide-left">
            <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2">{c.directTag}</p>
            <h2 style={{ color: "var(--navy)" }} className="text-2xl font-bold mb-8">{c.directTitle}</h2>
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div style={{ backgroundColor: "var(--navy)" }} className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.Icon size={20} strokeWidth={1.5} color="white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ color: "var(--navy)" }} className="font-bold hover:opacity-70 transition-opacity break-all">{item.value}</a>
                    ) : (
                      <p style={{ color: "var(--navy)" }} className="font-semibold text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: "var(--pastel-mint)", borderLeft: "4px solid var(--accent)" }} className="mt-10 rounded-r-2xl p-5">
              <p style={{ color: "var(--navy)" }} className="font-bold mb-1.5">{c.available}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{c.availableBody}</p>
            </div>
          </div>

          {/* Formular */}
          <div className="anim-slide-right delay-200">
            <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2">{c.formTag}</p>
            <h2 style={{ color: "var(--navy)" }} className="text-2xl font-bold mb-8">{c.formTitle}</h2>

            {status === "success" ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{ backgroundColor: "var(--navy)" }}
              >
                <CheckCircle size={48} strokeWidth={1.5} style={{ color: "var(--accent)" }} className="mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">Nachricht gesendet!</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Vielen Dank für Ihre Anfrage. Sie erhalten sogleich eine Bestätigungs-E-Mail. Ich melde mich in der Regel innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: c.firstName, name: "vorname" }, { label: c.lastName, name: "nachname" }].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">{f.label} *</label>
                      <input type="text" name={f.name} required disabled={status === "loading"} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition disabled:opacity-50" style={{ "--tw-ring-color": "var(--navy-dim)" } as React.CSSProperties} />
                    </div>
                  ))}
                </div>
                {[
                  { label: c.company,  name: "unternehmen", type: "text",  required: false },
                  { label: c.email,    name: "email",        type: "email", required: true },
                  { label: c.phone,    name: "telefon",      type: "tel",   required: false },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">{f.label} {f.required && "*"}</label>
                    <input type={f.type} name={f.name} required={f.required} disabled={status === "loading"} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition disabled:opacity-50" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">{c.message} *</label>
                  <textarea name="nachricht" required rows={5} placeholder={c.messagePlaceholder} disabled={status === "loading"} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition resize-none disabled:opacity-50" />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3">
                    <AlertCircle size={16} strokeWidth={2} className="flex-shrink-0" />
                    Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie direkt an dean.dukic@supply-consult.com.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{ backgroundColor: "var(--navy)", color: "white" }}
                  className="w-full py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "loading" && <Loader2 size={16} strokeWidth={2} className="animate-spin" />}
                  {status === "loading" ? "Wird gesendet …" : c.submit}
                </button>
                <p className="text-xs text-gray-400 text-center">{c.privacy}</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
