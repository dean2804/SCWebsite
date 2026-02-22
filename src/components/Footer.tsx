"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const links = [
    { href: "/leistungen", label: t.nav.services },
    { href: "/profil", label: t.nav.profile },
    { href: "/referenzen", label: t.nav.references },
    { href: "/kontakt", label: t.nav.contact },
  ];

  return (
    <footer style={{ backgroundColor: "var(--navy)" }} className="text-white/60 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="inline-block mb-3">
            <span style={{ color: "var(--accent)" }} className="text-lg font-bold tracking-wide">SupplyConsult</span>
            <span className="text-white/35 text-xs ml-1">GmbH</span>
          </Link>
          <p className="text-sm leading-relaxed">{f.tagline}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">{f.navTitle}</p>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                  <ChevronRight size={12} strokeWidth={2} style={{ color: "var(--accent)" }} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">{f.contactTitle}</p>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:+4917391044474" className="hover:text-white transition-colors">+49 173 910 44 74</a></li>
            <li><a href="mailto:dean.dukic@supply-consult.com" className="hover:text-white transition-colors break-all">dean.dukic@supply-consult.com</a></li>
            <li className="pt-1 text-white/35">{f.region}</li>
          </ul>
        </div>
      </div>
      <div style={{ borderColor: "rgba(255,255,255,0.07)" }} className="border-t text-center text-xs py-5 px-6 text-white/25">
        © {new Date().getFullYear()} SupplyConsult GmbH · Dean Dukic · {f.copyright}
      </div>
    </footer>
  );
}
