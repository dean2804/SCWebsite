"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const TICKER_LOGOS = [
  { id: "siemens",      name: "Siemens" },
  { id: "tuev_holding", name: "TÜV SÜD" },
  { id: "swiss_air",    name: "Swiss Airlines" },
  { id: "phoenix",      name: "Phoenix Contact" },
  { id: "autokabel",    name: "Auto-Kabel" },
  { id: "agrikomp",     name: "Agrikomp" },
  { id: "vahle",        name: "Vahle" },
  { id: "osypka",       name: "Osypka" },
  { id: "klingel",      name: "Elos Medtech" },
  { id: "gardinia",     name: "Gardinia" },
  { id: "capgemini",    name: "Cap Gemini" },
  { id: "borco",        name: "Borco" },
  { id: "amsilk",       name: "AMSilk" },
  { id: "sebapharma",   name: "Sebapharma" },
];

function TickerLogo({ id, name }: { id: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span
        className="text-xs font-bold whitespace-nowrap opacity-40"
        style={{ color: "var(--navy)" }}
      >
        {name}
      </span>
    );
  }
  return (
    <div className="relative h-8 w-24 flex-shrink-0">
      <Image
        src={`/logos/${id}.png`}
        alt={name}
        fill
        className="object-contain opacity-50 hover:opacity-80 transition-opacity grayscale"
        onError={() => setFailed(true)}
        unoptimized
      />
    </div>
  );
}

export default function LogoTicker() {
  const { t } = useLanguage();
  const label = (t.home as { tickerLabel?: string }).tickerLabel ?? "Ausgewählte Mandate & Referenzen";

  return (
    <div className="py-10 border-y" style={{ backgroundColor: "white", borderColor: "var(--navy-dim)" }}>
      <p
        className="text-center text-xs font-bold uppercase tracking-widest mb-6 opacity-35"
        style={{ color: "var(--navy)" }}
      >
        {label}
      </p>
      <div className="ticker-wrap overflow-hidden">
        <div className="ticker-track">
          {/* First set */}
          {TICKER_LOGOS.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center px-8">
              <TickerLogo id={logo.id} name={logo.name} />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {TICKER_LOGOS.map((logo) => (
            <div key={`dup-${logo.id}`} className="flex items-center justify-center px-8">
              <TickerLogo id={logo.id} name={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
