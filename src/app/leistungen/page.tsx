"use client";

import Link from "next/link";
import Image from "next/image";
import { Settings, ShoppingCart, TrendingUp, Lightbulb, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const BGS = ["var(--navy-faint)", "var(--navy-dim)", "var(--navy-faint)", "var(--navy-dim)"];
const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];
const ICONS = [Settings, ShoppingCart, TrendingUp, Lightbulb];

export default function Leistungen() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <>
      <section className="relative py-28 px-6 img-overlay min-h-[420px] flex items-center">
        <Image src="/warehouse.jpg" alt="Supply Chain" fill className="object-cover object-center" priority />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p style={{ color: "var(--accent-light)" }} className="glass-pill text-xs font-bold uppercase tracking-widest mb-3 anim-fade-in">{s.tag}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 anim-fade-up delay-100 img-text-shadow">{s.heroTitle}</h1>
          <p className="text-white/85 max-w-2xl leading-relaxed anim-fade-up delay-200 img-text-shadow">{s.heroSub}</p>
        </div>
      </section>

      <section className="py-24 px-6" style={{ backgroundColor: "var(--navy-faint)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {s.items.map((l, i) => (
            <div key={l.title} style={{ backgroundColor: BGS[i] }} className={`rounded-2xl p-7 card-hover anim-fade-up ${DELAYS[i]}`}>
              {(() => { const Icon = ICONS[i]; return <Icon size={32} strokeWidth={1.5} style={{ color: "var(--navy)" }} className="mb-4" />; })()}
              <h2 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-5">{l.title}</h2>
              <ul className="space-y-2.5">
                {l.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={14} strokeWidth={2.5} style={{ color: "var(--accent)" }} className="mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="relative h-56 md:h-72">
          <Image src="/consulting-meeting.jpg" alt="Beratung" fill className="object-cover object-top" />
          <div className="absolute inset-0 flex items-center px-10 md:px-20" style={{ background: "linear-gradient(90deg, rgba(15,32,68,0.92) 0%, rgba(15,32,68,0.5) 55%, transparent 100%)" }}>
            <div className="max-w-md">
              <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2">{s.approachTag}</p>
              <p className="text-white text-lg md:text-xl font-semibold leading-snug img-text-shadow whitespace-pre-line">{s.approachTitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--navy-faint)" }} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2 anim-fade-in">{s.branchenTag}</p>
          <h2 style={{ color: "var(--navy)" }} className="text-2xl font-bold mb-3 anim-fade-up">{s.branchenTitle}</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl anim-fade-up">{s.branchenSub}</p>
          <div className="flex flex-wrap gap-3">
            {s.branchen.map((b, i) => (
              <span key={b} style={{ backgroundColor: "var(--navy)", color: "white" }} className={`px-4 py-2 rounded-full text-sm font-medium anim-fade-up delay-${Math.min((i + 1) * 100, 500)}`}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--navy)" }} className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto anim-fade-up">
          <h2 className="text-2xl font-bold text-white mb-4">{s.ctaTitle}</h2>
          <p className="text-white/55 mb-8 text-sm leading-relaxed">{s.ctaSub}</p>
          <Link href="/kontakt" style={{ backgroundColor: "var(--accent)", color: "var(--navy)" }} className="inline-block px-8 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
            {s.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
