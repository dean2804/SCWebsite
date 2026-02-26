"use client";

import Link from "next/link";
import Image from "next/image";
import { Settings, ShoppingCart, TrendingUp, Lightbulb, ArrowRight, ChevronRight, AlertTriangle, TrendingDown, Server, Target, Layers, Zap, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LogoTicker from "@/components/LogoTicker";
import ProcessFlowSVG from "@/components/ProcessFlowSVG";
import ProcessBgPattern from "@/components/ProcessBgPattern";

const STATS = [
  { value: "26+",          delay: "delay-100" },
  { value: "69",           delay: "delay-200" },
  { value: "~250 Mio. €", delay: "delay-300" },
  { value: "−40%",         delay: "delay-400" },
];

const SERVICE_ICONS = [Settings, ShoppingCart, TrendingUp, Lightbulb];
const SCENARIO_ICONS = [AlertTriangle, TrendingDown, Server, Target];
const DIFF_ICONS = [Layers, Zap, Server, Users];

export default function Home() {
  const { t } = useLanguage();
  const h = t.home as typeof t.home & { availBadge: string };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "var(--navy)" }}
      >
        {/* ── Floating orbs ── */}
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="orb-3" />

        {/* Right panel — Process Flow SVG */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] hidden md:block">
          <ProcessFlowSVG />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--navy) 0%, rgba(15,32,68,0.88) 20%, rgba(15,32,68,0.25) 48%, transparent 72%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-28">
          <div className="max-w-[600px]">

            {/* Identity line */}
            <div className="flex items-center gap-3 mb-8 anim-fade-in">
              <span className="text-white/40 text-xs tracking-wide">Dean Dukic · SupplyConsult GmbH</span>
            </div>

            {/* Main headline — serif */}
            <h1
              className="heading-serif text-5xl md:text-[4.5rem] leading-[1.1] text-white mb-5 anim-fade-up delay-100"
              style={{ fontWeight: 400 }}
            >
              {h.hero}
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                {h.heroHighlight}
              </em>
            </h1>

            {/* Gold rule */}
            <div
              className="w-14 h-px mb-6 anim-fade-in delay-200"
              style={{ backgroundColor: "var(--accent)" }}
            />

            {/* Subtitle */}
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-lg anim-fade-up delay-200">
              {h.heroSub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 anim-fade-up delay-300">
              <Link
                href="/kontakt"
                style={{ backgroundColor: "var(--accent)", color: "var(--navy)" }}
                className="px-8 py-4 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity btn-pulse inline-flex items-center gap-2"
              >
                {h.ctaPrimary}
                <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="/referenzen"
                className="px-8 py-4 rounded-lg font-bold text-sm text-white border hover:bg-white/8 transition-colors inline-flex items-center gap-2"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                {h.ctaSecondary}
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom gold gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }}
        />
      </section>

      {/* ── LOGO TICKER ─────────────────────────────────────────────── */}
      <LogoTicker />

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`stats-grid-item text-center py-10 px-4 anim-count ${s.delay}`}
              >
                <p
                  className="heading-serif mb-2"
                  style={{ color: "var(--accent)", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 400, lineHeight: 1 }}
                >
                  {s.value}
                </p>
                <p className="text-white/45 text-xs uppercase tracking-widest mt-2">
                  {h.statsLabel[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--navy-faint)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 anim-slide-left">
            <p
              style={{ color: "var(--accent)" }}
              className="text-xs font-bold uppercase tracking-widest mb-3"
            >
              {h.servicesTag}
            </p>
            <h2
              className="heading-serif text-3xl md:text-4xl mb-3"
              style={{ color: "var(--navy)", fontWeight: 400 }}
            >
              {h.servicesTitle}
            </h2>
            <p className="text-gray-500 max-w-xl text-sm leading-relaxed">{h.servicesSub}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {t.services.items.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <div
                  key={s.title}
                  className="rounded-2xl p-7 card-hover group cursor-default anim-fade-up"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid var(--navy-dim)",
                    animationDelay: `${(i + 1) * 0.1}s`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors"
                    style={{ backgroundColor: "var(--navy-faint)" }}
                  >
                    <Icon size={22} strokeWidth={1.5} style={{ color: "var(--navy)" }} />
                  </div>
                  <h3
                    style={{ color: "var(--navy)" }}
                    className="font-bold text-base mb-2 leading-snug"
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.items[0]}</p>
                  <div
                    className="mt-5 w-8 h-0.5 group-hover:w-14 transition-all duration-300"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-10 anim-fade-up delay-500">
            <Link
              href="/leistungen"
              style={{ color: "var(--navy)" }}
              className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
            >
              {h.servicesLink}
              <ArrowRight size={14} strokeWidth={2} style={{ color: "var(--accent)" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── APPROACH / PROFIL ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "white" }} className="relative py-20 px-6">
        <ProcessBgPattern id="pbp-approach" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Portrait photo — contained, cropped to face/eyes */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl anim-slide-left"
            style={{ height: "560px" }}
          >
            <Image
              src="/dean-portrait.jpg"
              alt="Dean Dukic"
              fill
              className="object-cover"
              style={{ objectPosition: "center 38%" }}
            />
            {/* Subtle gold frame accent */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ boxShadow: "inset 0 0 0 2px rgba(200,168,75,0.25)" }}
            />
          </div>

          {/* Text content */}
          <div className="anim-slide-right">
            <p
              style={{ color: "var(--accent)" }}
              className="text-xs font-bold uppercase tracking-widest mb-4"
            >
              {h.approachTag}
            </p>
            <h2
              className="heading-serif text-3xl md:text-4xl mb-6 leading-tight"
              style={{ color: "var(--navy)", fontWeight: 400 }}
            >
              {h.approachTitle.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <div
              className="w-12 h-px mb-6"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              {h.approachBody}
            </p>
            <Link
              href="/profil"
              style={{ color: "var(--navy)" }}
              className="text-sm font-bold inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              {h.approachLink}
              <ArrowRight size={14} strokeWidth={2} style={{ color: "var(--accent)" }} />
            </Link>
          </div>

        </div>
      </section>

      {/* ── DIFFERENZIERUNG ──────────────────────────────────────────── */}
      <section className="relative py-20 px-6" style={{ backgroundColor: "white" }}>
        <ProcessBgPattern id="pbp-diff" />
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 anim-slide-left">
            <p
              style={{ color: "var(--accent)" }}
              className="text-xs font-bold uppercase tracking-widest mb-3"
            >
              {h.diffTag}
            </p>
            <h2
              className="heading-serif text-3xl md:text-4xl"
              style={{ color: "var(--navy)", fontWeight: 400 }}
            >
              {h.diffTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {h.diff.map((item, i) => {
              const Icon = DIFF_ICONS[i];
              return (
                <div
                  key={item.title}
                  className="anim-fade-up"
                  style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--navy-faint)" }}
                  >
                    <Icon size={20} strokeWidth={1.5} style={{ color: "var(--navy)" }} />
                  </div>
                  <h3
                    className="font-bold text-sm mb-2 leading-snug"
                    style={{ color: "var(--navy)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SCENARIOS ────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--navy-faint)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 anim-slide-left">
            <p
              style={{ color: "var(--accent)" }}
              className="text-xs font-bold uppercase tracking-widest mb-3"
            >
              {h.scenariosTag}
            </p>
            <h2
              className="heading-serif text-3xl md:text-4xl mb-3"
              style={{ color: "var(--navy)", fontWeight: 400 }}
            >
              {h.scenariosTitle}
            </h2>
            <p className="text-gray-500 max-w-xl text-sm leading-relaxed">{h.scenariosSub}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {h.scenarios.map((s, i) => {
              const Icon = SCENARIO_ICONS[i];
              return (
                <div
                  key={s.title}
                  className="rounded-2xl p-7 anim-fade-up"
                  style={{
                    backgroundColor: "white",
                    borderLeft: "4px solid var(--accent)",
                    animationDelay: `${(i + 1) * 0.1}s`,
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    style={{ color: "var(--accent)" }}
                    className="mb-4"
                  />
                  <h3
                    style={{ color: "var(--navy)" }}
                    className="font-bold text-base mb-2 leading-snug"
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.body}</p>
                  <p
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: "var(--navy)" }}
                  >
                    {s.action}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── KPI HIGHLIGHTS ───────────────────────────────────────────── */}
      <section className="relative py-28 px-6 img-overlay">
        <Image src="/handshake.jpg" alt="Erfolg" fill className="object-cover" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p
            style={{ color: "var(--accent-light)" }}
            className="glass-pill text-xs font-bold uppercase tracking-widest mb-4 anim-fade-in"
          >
            {h.resultsTag}
          </p>
          <h2
            className="heading-serif text-3xl md:text-4xl text-white mb-12 anim-fade-up delay-100 img-text-shadow"
            style={{ fontWeight: 400 }}
          >
            {h.resultsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {h.kpis.map((item, i) => (
              <div
                key={item.kpi}
                className={`rounded-xl px-7 py-6 backdrop-blur-sm anim-fade-up delay-${(i + 1) * 200}`}
                style={{
                  backgroundColor: "rgba(15,32,68,0.78)",
                  borderLeft: "3px solid var(--accent)",
                }}
              >
                <p
                  className="heading-serif mb-1"
                  style={{ color: "var(--accent)", fontSize: "2.5rem", fontWeight: 400, lineHeight: 1 }}
                >
                  {item.kpi}
                </p>
                <p className="text-white font-bold text-sm mt-2">{item.label}</p>
                <p className="text-white/60 text-xs mt-2 leading-relaxed">{item.ctx}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 anim-fade-up delay-600">
            <Link
              href="/referenzen"
              style={{ color: "var(--accent-light)" }}
              className="text-sm font-bold inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {h.resultsLink} <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl px-10 py-14 text-center anim-fade-up"
            style={{
              background: "linear-gradient(135deg, var(--navy-light) 0%, var(--navy-mid) 100%)",
              border: "1px solid rgba(200,168,75,0.2)",
            }}
          >
            <h2
              className="heading-serif text-3xl md:text-4xl text-white mb-4"
              style={{ fontWeight: 400 }}
            >
              {h.ctaTitle}
            </h2>
            <p className="text-white/50 mb-10 text-sm leading-relaxed max-w-md mx-auto">
              {h.ctaBody}
            </p>
            <Link
              href="/kontakt"
              style={{ backgroundColor: "var(--accent)", color: "var(--navy)" }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity btn-pulse"
            >
              {h.ctaButton} <ChevronRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
