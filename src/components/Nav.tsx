"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Locale } from "@/i18n/translations";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  // Home removed — SupplyConsult logo already links to /
  const links = [
    { href: "/leistungen", label: t.nav.services },
    { href: "/profil", label: t.nav.profile },
    { href: "/referenzen", label: t.nav.references },
    { href: "/kontakt", label: t.nav.contact },
  ];

  return (
    <header style={{ backgroundColor: "var(--navy)" }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">

        {/* Logo — links to homepage */}
        <Link href="/" className="flex flex-col leading-tight flex-shrink-0">
          <span style={{ color: "var(--accent)" }} className="text-lg font-bold tracking-wide">
            SupplyConsult
          </span>
          <span className="text-white text-xs tracking-widest uppercase opacity-60">GmbH</span>
        </Link>

        {/* Vertical divider */}
        <div className="hidden md:block w-px h-8 bg-white/10 flex-shrink-0" />

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-5 flex-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-bold transition-colors duration-200 whitespace-nowrap ${
                pathname === l.href
                  ? "text-[var(--accent)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right-side controls */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {/* Availability badge */}
          <span
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border avail-badge-pulse"
            style={{ backgroundColor: "rgba(200,168,75,0.12)", borderColor: "rgba(200,168,75,0.4)", color: "var(--accent)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
            <span className="text-xs font-bold whitespace-nowrap">{t.nav.available}</span>
          </span>

          {/* Language switcher */}
          <div className="flex items-center gap-0.5 border border-white/15 rounded-lg px-1 py-1">
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => setLocale(loc.code)}
                className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                  locale === loc.code
                    ? "text-[var(--navy)] bg-[var(--accent)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>

          {/* CTA button */}
          <Link
            href="/kontakt"
            style={{ backgroundColor: "var(--accent)", color: "var(--navy)" }}
            className="px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden ml-auto">
          <button
            className="text-white focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "var(--navy-light)" }} className="md:hidden px-6 pb-5 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-bold py-1 ${
                pathname === l.href ? "text-[var(--accent)]" : "text-white/75"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {/* Mobile language switcher */}
          <div className="flex gap-2 pt-2 border-t border-white/10">
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => setLocale(loc.code)}
                className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                  locale === loc.code
                    ? "bg-[var(--accent)] text-[var(--navy)]"
                    : "text-white/60"
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
