"use client";

import Image from "next/image";
import { Check, Layers, Zap, Server, Users, FileDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LogoBanner from "@/components/LogoBanner";

const TAGS_FIXED = ["Automotive / Industrie", "MedTech / Pharma", "Konsumgüter", "SAP S/4HANA", "Lean/SCOR/BPM"];
const KOMPETENZ_BGS = ["var(--navy-faint)", "var(--navy-dim)", "var(--navy-faint)"];
const DIFF_ICONS = [Layers, Zap, Server, Users];

export default function Profil() {
  const { t } = useLanguage();
  const p = t.profile;

  return (
    <>
      <LogoBanner />

      {/* Hero with photo */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-10">
          <div className="flex-shrink-0 anim-slide-left">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "3px solid var(--accent)" }}>
              <Image src="/dean-dukic.jpg" alt="Dean Dukic" width={200} height={240} className="object-cover object-top" style={{ height: "240px", width: "200px" }} priority />
            </div>
          </div>
          <div className="anim-fade-up delay-200">
            <p style={{ color: "var(--accent-light)" }} className="text-xs font-bold uppercase tracking-widest mb-3">{p.tag}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{p.name}</h1>
            <p style={{ color: "var(--accent)" }} className="text-lg font-semibold mb-3">{p.subtitle}</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl">{p.meta}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {TAGS_FIXED.map((tag) => (
                <span key={tag} style={{ backgroundColor: "rgba(200,168,75,0.18)", color: "var(--accent-light)", border: "1px solid rgba(200,168,75,0.3)" }} className="px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scope + Personality */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--navy-faint)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="anim-slide-left">
            <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2">{p.scopeTag}</p>
            <h2 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-5">{p.scopeTitle}</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>{p.scopeIntro}</p>
              {p.scopeItems.map((s) => (
                <p key={s.label}><strong className="text-gray-800">{s.label}:</strong> {s.body}</p>
              ))}
            </div>
          </div>
          <div className="anim-slide-right delay-200">
            <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2">{p.personalityTag}</p>
            <h2 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-5">{p.personalityTitle}</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              {p.personalityItems.map((text) => <p key={text}>{text}</p>)}
            </div>
            <div style={{ backgroundColor: "var(--navy-dim)", borderLeft: "3px solid var(--accent)" }} className="mt-6 rounded-r-xl p-4">
              <p style={{ color: "var(--navy)" }} className="font-semibold text-sm mb-1">{p.languagesLabel}</p>
              <p className="text-gray-600 text-sm">{p.languages}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differenzierung */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2 anim-fade-in">{p.diffTag}</p>
          <h2 className="text-2xl font-bold text-white mb-3 anim-fade-up">{p.diffTitle}</h2>
          <p className="text-white/55 text-sm mb-10 max-w-2xl anim-fade-up">{p.diffSub}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {p.diff.map((item, i) => {
              const Icon = DIFF_ICONS[i];
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl p-7 anim-fade-up delay-${Math.min((i + 1) * 100, 400)}`}
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,168,75,0.2)" }}
                >
                  <Icon size={22} strokeWidth={1.5} style={{ color: "var(--accent)" }} className="mb-4" />
                  <h3 className="font-bold text-white text-base mb-3 leading-snug">{item.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-4">{item.body}</p>
                  <p className="text-xs font-semibold" style={{ color: "var(--accent)" }}>{item.example}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kernkompetenzen */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2 anim-fade-in">{p.competencesTag}</p>
          <h2 style={{ color: "var(--navy)" }} className="text-2xl font-bold mb-10 anim-fade-up">{p.competencesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {p.kompetenzen.map((k, i) => (
              <div key={k.title} style={{ backgroundColor: KOMPETENZ_BGS[i] }} className={`rounded-2xl p-6 card-hover anim-fade-up delay-${(i + 1) * 100}`}>
                <h3 style={{ color: "var(--navy)" }} className="font-bold mb-4 text-xs uppercase tracking-wider border-b border-navy/10 pb-3">{k.title}</h3>
                <ul className="space-y-2.5">
                  {k.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={14} strokeWidth={2.5} style={{ color: "var(--accent)" }} className="mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Karriere */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2 anim-fade-in">{p.careerTag}</p>
          <h2 className="text-2xl font-bold text-white mb-12 anim-fade-up">{p.careerTitle}</h2>
          <div className="relative border-l-2 pl-10 space-y-10" style={{ borderColor: "rgba(200,168,75,0.35)" }}>
            {p.karriere.map((k, i) => (
              <div key={k.rolle} className={`relative anim-fade-up delay-${Math.min((i + 1) * 100, 500)}`}>
                <div style={{ backgroundColor: "var(--accent)" }} className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full border-2 shadow-lg" />
                <p style={{ color: "var(--accent)" }} className="text-xs font-semibold uppercase tracking-wider mb-1">{k.zeitraum}</p>
                <p className="text-white font-bold text-base mb-1">{k.rolle}</p>
                <p className="text-white/50 text-sm leading-relaxed">{k.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ausbildung */}
      <section style={{ backgroundColor: "var(--navy-faint)" }} className="py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-6 anim-fade-up">
          <div>
            <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-1">{p.educationTag}</p>
            <p style={{ color: "var(--navy)" }} className="font-bold text-lg">{p.education}</p>
            <p className="text-gray-500 text-sm">{p.educationSub}</p>
          </div>
          {p.tags.map((tag) => (
            <span key={tag} style={{ backgroundColor: "var(--navy)", color: "white" }} className="px-5 py-2 rounded-full text-sm font-medium">{tag}</span>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2 anim-fade-in">{p.downloadsTag}</p>
          <h2 className="text-2xl font-bold text-white mb-2 anim-fade-up">{p.downloadsTitle}</h2>
          <p className="text-white/50 text-sm mb-10 anim-fade-up">{p.downloadsSub}</p>
          <div className="grid md:grid-cols-2 gap-5">
            {p.downloads.map((d, i) => (
              <div
                key={d.title}
                className={`rounded-2xl p-7 anim-fade-up delay-${(i + 1) * 100}`}
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,168,75,0.2)" }}
              >
                <FileDown size={28} strokeWidth={1.5} style={{ color: "var(--accent)" }} className="mb-4" />
                <h3 className="font-bold text-white text-base mb-2">{d.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{d.desc}</p>
                <a
                  href={d.href}
                  download
                  style={{ backgroundColor: "var(--accent)", color: "var(--navy)" }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  <FileDown size={15} strokeWidth={2.5} />
                  {d.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
