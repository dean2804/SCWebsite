"use client";

import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Timeline, { TimelineItem } from "@/components/Timeline";
import LogoBanner from "@/components/LogoBanner";
import { mandateDetails } from "@/data/cv-mandates";

const KPI_VALUES = ["359 T€", "+27%", "−40%", "~250 Mio. €"];

// Chronologisch: ältestes Mandat zuerst (Index 0), neuestes zuletzt
const TIMELINE_BASE: Omit<TimelineItem, "scope" | "results" | "achievement">[] = [
  {
    id: "siemens", company: "Siemens AG (Wireline Networks & Business Services)", shortName: "Siemens",
    domain: "siemens.com", period: "10/1996 – 07/1999", role: "Inhouse BPR Consultant / Werkstudent",
    branche: "Technologie / Telekommunikation", color: "#0f2044", initials: "SI",
  },
  {
    id: "capgemini", company: "Cap Gemini Ernst & Young", shortName: "Cap Gemini E&Y",
    domain: "capgemini.com", period: "08/1999 – 07/2002", role: "Consultant & Projektleiter BPR",
    branche: "Unternehmensberatung", color: "#0f2044", initials: "CG",
  },
  {
    id: "tuev_holding", company: "TÜV SÜD Gruppe – Holding", shortName: "TÜV SÜD Holding",
    domain: "tuvsud.com", period: "09/2002 – 07/2005", role: "Stellv. Leiter Zentraleinkauf / Vorstandsassistent",
    branche: "Technische Dienstleistungen", color: "#0f2044", initials: "TS",
  },
  {
    id: "tuev_life", company: "TÜV SÜD Gruppe – Life Service GmbH", shortName: "TÜV SÜD Life",
    domain: "tuvsud.com", period: "08/2005 – 05/2008", role: "Leiter Einkauf",
    branche: "Technische Dienstleistungen", color: "#0f2044", initials: "TL",
  },
  {
    id: "swiss_air", company: "Swiss International Air Lines GmbH", shortName: "Swiss Airlines",
    domain: "swiss.com", period: "01/2010 – 12/2011", role: "Head of Indirect Procurement",
    branche: "Luftfahrt", color: "#0f2044", initials: "SW",
  },
  {
    id: "dbc", company: "Deutsche Business Consulting GmbH", shortName: "Deutsche BC",
    domain: "deutsche-business-consulting.de", period: "05/2015 – 03/2016", role: "Berater Strategischer Einkauf & Transportlogistik",
    branche: "Unternehmensberatung", color: "#0f2044", initials: "DB",
  },
  {
    id: "kloepfel", company: "Kloepfel Consulting GmbH", shortName: "Kloepfel",
    domain: "kloepfel-consulting.com", period: "03/2016 – 06/2018", role: "Senior Berater Strategischer Einkauf / Projektmanager",
    branche: "Unternehmensberatung", color: "#0f2044", initials: "KC",
  },
  {
    id: "koettschau", company: "Koettschau SPS GmbH", shortName: "Koettschau SPS",
    domain: "koettschau-sps.de", period: "08/2018 – 02/2019", role: "Projektmanager Globale Ausschreibungen",
    branche: "Einkaufsberatung", color: "#0f2044", initials: "KO",
  },
  {
    id: "siemens_mob", company: "Siemens Mobility d.o.o. (Serbien)", shortName: "Siemens Mobility",
    domain: "siemens.com", period: "02/2019 – 05/2019", role: "Consultant Strategischer Einkauf B-/C-Teile",
    branche: "Anlagenbau / Energie", color: "#0f2044", initials: "SM",
  },
  {
    id: "agrikomp", company: "Agrikomp GmbH", shortName: "Agrikomp",
    domain: "agrikomp.de", period: "05/2019 – 12/2020", role: "Bereichsleiter Einkauf & Supply Chain Management",
    branche: "Anlagenbau / Energie", color: "#0f2044", initials: "AG",
  },
  {
    id: "gardinia", company: "Gardinia Home Decor GmbH", shortName: "Gardinia",
    domain: "gardinia.de", period: "02/2021 – 09/2021", role: "Bereichsleitung Supply Chain & Operations Management",
    branche: "Consumer Goods", color: "#0f2044", initials: "GD",
  },
  {
    id: "amsilk", company: "AMSilk GmbH", shortName: "AMSilk",
    domain: "amsilk.com", period: "10/2021 – 05/2022", role: "Leiter Einkauf & SCM",
    branche: "Biotech", color: "#0f2044", initials: "AS",
  },
  {
    id: "omnivision", company: "OmniVision Technologies", shortName: "OmniVision",
    domain: "omnivision.com", period: "04/2022 – 08/2022", role: "Head of Procurement & SCM",
    branche: "Technologie", color: "#0f2044", initials: "OV",
  },
  {
    id: "borco", company: "Borco-Marken-Import Matthiesen GmbH & Co. KG", shortName: "Borco",
    domain: "borco.com", period: "08/2022 – 04/2023", role: "Consultant Einkauf & SCM",
    branche: "Food / Getränke", color: "#0f2044", initials: "BO",
  },
  {
    id: "phoenix", company: "Phoenix Contact E-Mobility GmbH", shortName: "Phoenix Contact",
    domain: "phoenixcontact.com", period: "11/2022 – 09/2023", role: "Head of Material Management, Procurement & Demand Planning",
    branche: "Automotive / E-Mobility", color: "#0f2044", initials: "PC",
  },
  {
    id: "glasfaser", company: "Deutsche Glasfaser Holding GmbH", shortName: "Deutsche Glasfaser",
    domain: "deutsche-glasfaser.de", period: "10/2023 – 01/2024", role: "Consultant Prozessmanagement Einkauf & SCM/Logistik",
    branche: "Telekommunikation", color: "#0f2044", initials: "DG",
  },
  {
    id: "autokabel", company: "Auto-Kabel Management GmbH", shortName: "Auto-Kabel",
    domain: "auto-kabel.com", period: "02/2024 – 05/2024", role: "Global Head of Procurement & SCM (Interim)",
    branche: "Automotive", color: "#0f2044", initials: "AK",
  },
  {
    id: "sebapharma", company: "Sebapharma GmbH & Co. KG", shortName: "Sebapharma",
    domain: "sebapharma.de", period: "05/2024 – 08/2024", role: "Senior Strategic Procurement Consultant",
    branche: "Pharma", color: "#0f2044", initials: "SE",
  },
  {
    id: "vahle", company: "Paul Vahle GmbH & Co. KG", shortName: "Vahle",
    domain: "vahle.com", period: "08/2024 – 04/2025", role: "Bereichsleitung Order Fulfillment / PPS / Einkauf (Interim)",
    branche: "Anlagenbau", color: "#0f2044", initials: "VA",
  },
  {
    id: "osypka", company: "Osypka AG", shortName: "Osypka AG",
    domain: "osypka.de", period: "04/2025 – 09/2025", role: "Interim VP Supply Chain Management",
    branche: "MedTech", color: "#0f2044", initials: "OS",
  },
  {
    id: "klingel", company: "KLINGEL medical metal GmbH (Elos Medtech)", shortName: "Elos Medtech",
    domain: "elosmedtech.com", period: "10/2025 – 02/2026", role: "Head of Procurement (Interim)",
    branche: "MedTech", color: "#0f2044", initials: "EM",
  },
];

export default function Referenzen() {
  const { t, locale } = useLanguage();
  const r = t.references;

  const timelineItems: TimelineItem[] = TIMELINE_BASE.map((base) => {
    const m = r.mandates[base.id as keyof typeof r.mandates];
    const details = mandateDetails[base.id]?.[locale] ?? mandateDetails[base.id]?.de ?? {};
    return { ...base, scope: m.scope, results: [...m.results], achievement: m.achievement, ...details };
  });

  return (
    <>
      <LogoBanner />

      {/* Hero */}
      <section className="relative py-28 px-6 img-overlay min-h-[420px] flex items-center">
        <Image src="/logistics-aerial.jpg" alt="Supply Chain Logistik" fill className="object-cover object-center" priority />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p style={{ color: "var(--accent-light)" }} className="glass-pill text-xs font-bold uppercase tracking-widest mb-3 anim-fade-in">
            {r.tag}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 anim-fade-up delay-100 img-text-shadow">
            {r.heroTitle}
          </h1>
          <p className="text-white/85 max-w-2xl leading-relaxed anim-fade-up delay-200 img-text-shadow">
            {r.heroSub}
          </p>
        </div>
      </section>

      {/* KPI Bar */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {KPI_VALUES.map((val, i) => (
            <div key={i} className={`anim-count delay-${(i + 1) * 100}`}>
              <p style={{ color: "var(--accent)" }} className="text-3xl font-bold">{val}</p>
              <p className="text-white/50 text-sm mt-1">{r.kpiLabels[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--navy-faint)" }}>
        <div className="max-w-6xl mx-auto">
          <Timeline
            items={timelineItems}
            title={r.timelineTitle}
            ariaBack={r.ariaBack}
            ariaNext={r.ariaNext}
            ariaPos={r.ariaPos}
          />
        </div>
      </section>

      {/* Hauptmandate cards – neueste 6 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2 anim-fade-in">{r.mandateTag}</p>
          <h2 style={{ color: "var(--navy)" }} className="text-2xl font-bold mb-8 anim-fade-up">{r.mandateTitle}</h2>
          <div className="space-y-5">
            {[...timelineItems].reverse().slice(0, 6).map((m, i) => (
              <div
                key={m.id}
                style={{ backgroundColor: i % 2 === 0 ? "var(--navy-faint)" : "var(--navy-dim)" }}
                className={`rounded-2xl p-6 card-hover anim-fade-up delay-${Math.min((i + 1) * 100, 500)}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-wider mb-1">{m.period}</p>
                    <h3 style={{ color: "var(--navy)" }} className="text-base font-bold">{m.role}</h3>
                    <p className="text-gray-500 text-sm">{m.company}</p>
                  </div>
                  <span style={{ backgroundColor: "var(--navy)", color: "white" }} className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap self-start">
                    {m.branche}
                  </span>
                </div>
                <p className="text-sm text-gray-400 italic mb-3">{m.scope}</p>
                <ul className="space-y-1.5">
                  {m.results.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={14} strokeWidth={2.5} style={{ color: "var(--accent)" }} className="mt-0.5 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weitere Mandate (Kurzmandate) */}
      <section style={{ backgroundColor: "var(--navy-faint)" }} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2 anim-fade-in">{r.furtherTag}</p>
          <h2 style={{ color: "var(--navy)" }} className="text-2xl font-bold mb-6 anim-fade-up">{r.furtherTitle}</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "var(--navy)", color: "white" }} className="text-left">
                  {r.tableHeaders.map((h, i) => (
                    <th key={i} className={`px-5 py-3.5 font-medium ${i === 0 ? "rounded-tl-2xl" : ""} ${i === r.tableHeaders.length - 1 ? "rounded-tr-2xl" : ""}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {r.weitere.map((m, i) => (
                  <tr key={m.z} className="border-b border-gray-100 last:border-0" style={{ backgroundColor: i % 2 === 0 ? "white" : "var(--navy-faint)" }}>
                    <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap text-xs">{m.z}</td>
                    <td className="px-5 py-3.5 font-semibold" style={{ color: "var(--navy)" }}>{m.r}</td>
                    <td className="px-5 py-3.5 text-gray-600">{m.u}</td>
                    <td className="px-5 py-3.5 text-gray-500 text-xs">{m.h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto anim-fade-up">
          <h2 className="text-2xl font-bold text-white mb-4">{r.ctaTitle}</h2>
          <p className="text-white/55 mb-8 text-sm">{r.ctaSub}</p>
          <Link href="/kontakt" style={{ backgroundColor: "var(--accent)", color: "var(--navy)" }} className="inline-block px-8 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
            {r.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
