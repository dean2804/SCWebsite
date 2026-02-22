"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

export interface TimelineItem {
  id: string;
  company: string;
  shortName: string;
  domain: string;
  period: string;
  role: string;
  branche: string;
  color: string;
  initials: string;
  achievement: string;
  scope: string;
  results: string[];
  leadership?: string[];
  activities?: string[];
  spezifisch?: string[];
  categories?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
  ariaBack: string;
  ariaNext: string;
  ariaPos: string;
}

function LogoWithFallback({ id, domain, initials, color, size = 48 }: {
  id: string; domain: string; initials: string; color: string; size?: number;
}) {
  const [stage, setStage] = useState<"local" | "clearbit" | "initials">("local");

  if (stage === "initials") {
    return (
      <div
        style={{ backgroundColor: color, width: size, height: size }}
        className="rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
      >
        {initials}
      </div>
    );
  }

  const src = stage === "local"
    ? `/logos/${id}.png`
    : `https://logo.clearbit.com/${domain}`;

  return (
    <div
      style={{ width: size, height: size, backgroundColor: "white" }}
      className="rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden"
    >
      <Image
        src={src}
        alt={initials}
        width={size - 8}
        height={size - 8}
        className="object-contain"
        onError={() => setStage((s) => s === "local" ? "clearbit" : "initials")}
        unoptimized
      />
    </div>
  );
}

const VISIBLE = 5;
const DRAG_STEP_PX = 110; // pixels per center step when dragging

export default function Timeline({ items, title, ariaBack, ariaNext, ariaPos }: TimelineProps) {
  const [center, setCenter] = useState(items.length - 1);

  // Drag state (refs for performance, no re-render on move)
  const dragState = useRef({ active: false, startX: 0, startCenter: 0, moved: false });

  const canPrev = center > 0;
  const canNext = center < items.length - 1;

  const prev = () => canPrev && setCenter((c) => c - 1);
  const next = () => canNext && setCenter((c) => c + 1);

  // Global drag handlers
  const handleMove = useCallback((clientX: number) => {
    const d = dragState.current;
    if (!d.active) return;
    const delta = d.startX - clientX; // positive = dragged left = go newer (higher index)
    if (Math.abs(delta) > 8) d.moved = true;
    const steps = Math.round(delta / DRAG_STEP_PX);
    const newCenter = Math.max(0, Math.min(items.length - 1, d.startCenter + steps));
    setCenter(newCenter);
  }, [items.length]);

  const handleEnd = useCallback(() => {
    dragState.current.active = false;
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();
    const onTouchMove = (e: TouchEvent) => { e.preventDefault(); handleMove(e.touches[0].clientX); };
    const onTouchEnd = () => handleEnd();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [handleMove, handleEnd]);

  const startDrag = (clientX: number) => {
    dragState.current = { active: true, startX: clientX, startCenter: center, moved: false };
  };

  const handleCardClick = (idx: number) => {
    if (!dragState.current.moved) setCenter(idx);
  };

  // Build visible window: up to 2 before center, center, up to 2 after
  const half = Math.floor(VISIBLE / 2); // 2
  const visibleItems = items.map((item, idx) => {
    const distance = idx - center;
    return { item, idx, distance };
  }).filter(({ distance }) => Math.abs(distance) <= half);

  const activeItem = items[center];

  // Scale and opacity based on distance from center
  const getStyle = (distance: number) => {
    const abs = Math.abs(distance);
    if (abs === 0) return { scale: 1.15, opacity: 1, zIndex: 10 };
    if (abs === 1) return { scale: 0.92, opacity: 0.85, zIndex: 5 };
    return { scale: 0.80, opacity: 0.60, zIndex: 1 };
  };

  return (
    <div className="w-full">
      <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-2 anim-fade-in">
        {title}
      </p>

      {/* Carousel strip */}
      <div
        className="relative flex items-center gap-3 py-8 overflow-hidden select-none"
        style={{ cursor: "grab" }}
        onMouseDown={(e) => { startDrag(e.clientX); e.preventDefault(); }}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      >
        {/* Left arrow */}
        <button
          onClick={prev}
          disabled={!canPrev}
          style={{ backgroundColor: canPrev ? "var(--navy)" : "rgba(15,32,68,0.2)" }}
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:opacity-80 disabled:cursor-not-allowed z-20"
          aria-label={ariaBack}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>

        {/* Cards container */}
        <div className="flex-1 flex items-center justify-center gap-3 min-h-[160px]">
          {visibleItems.map(({ item, idx, distance }) => {
            const { scale, opacity, zIndex } = getStyle(distance);
            const isCenter = distance === 0;
            return (
              <button
                key={item.id}
                onClick={() => handleCardClick(idx)}
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  backgroundColor: isCenter ? "var(--navy)" : "white",
                  borderColor: isCenter ? "var(--accent)" : "transparent",
                  borderWidth: isCenter ? "2px" : "1px",
                  borderStyle: "solid",
                  minWidth: "160px",
                  maxWidth: "180px",
                  cursor: "pointer",
                }}
                className="flex-shrink-0 rounded-2xl p-4 flex flex-col items-center gap-2 text-center shadow-md hover:shadow-lg"
              >
                <LogoWithFallback
                  id={item.id}
                  domain={item.domain}
                  initials={item.initials}
                  color={item.color}
                  size={isCenter ? 52 : 40}
                />
                <div>
                  <p
                    style={{ color: isCenter ? "var(--accent)" : "var(--navy)" }}
                    className="font-bold text-xs leading-tight"
                  >
                    {item.shortName}
                  </p>
                  <p
                    style={{ color: isCenter ? "rgba(255,255,255,0.7)" : "rgba(15,32,68,0.5)" }}
                    className="text-xs mt-0.5"
                  >
                    {item.period}
                  </p>
                </div>
                {isCenter && (
                  <span
                    style={{ backgroundColor: "var(--accent)", color: "var(--navy)" }}
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                  >
                    {item.branche}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          disabled={!canNext}
          style={{ backgroundColor: canNext ? "var(--navy)" : "rgba(15,32,68,0.2)" }}
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:opacity-80 disabled:cursor-not-allowed z-20"
          aria-label={ariaNext}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mb-8 flex-wrap">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCenter(idx)}
            style={{
              backgroundColor: idx === center ? "var(--accent)" : "rgba(15,32,68,0.2)",
              width: idx === center ? "20px" : "6px",
              transition: "all 0.3s ease",
            }}
            className="h-1.5 rounded-full"
            aria-label={`${ariaPos} ${idx + 1}`}
          />
        ))}
      </div>

      {/* Active item detail panel */}
      {activeItem && (
        <div
          style={{ backgroundColor: "var(--navy)", borderColor: "var(--accent)", maxHeight: "600px" }}
          className="rounded-2xl border-l-4 p-7 transition-all duration-400 anim-fade-up overflow-y-auto"
          key={activeItem.id}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="flex items-start gap-4">
              <LogoWithFallback
                id={activeItem.id}
                domain={activeItem.domain}
                initials={activeItem.initials}
                color={activeItem.color}
                size={52}
              />
              <div>
                <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-wider mb-1">
                  {activeItem.period}
                </p>
                <h3 className="text-white font-bold text-lg leading-snug">{activeItem.role}</h3>
                <p className="text-white/60 text-sm">{activeItem.company}</p>
              </div>
            </div>
            <span
              style={{ backgroundColor: "rgba(200,168,75,0.2)", color: "var(--accent-light)", borderColor: "rgba(200,168,75,0.3)" }}
              className="px-3 py-1 rounded-full text-xs font-bold border"
            >
              {activeItem.branche}
            </span>
          </div>

          {/* Fokus */}
          <p className="text-white/50 text-sm italic mb-4">{activeItem.scope}</p>

          {/* Erfolge */}
          <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-wider mb-2">Erfolge & Highlights</p>
          <ul className="space-y-2 mb-5">
            {activeItem.results.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm text-white/75">
                <Check size={14} strokeWidth={2.5} style={{ color: "var(--accent)" }} className="mt-0.5 flex-shrink-0" />
                {r}
              </li>
            ))}
          </ul>

          {/* Fach- & Führungsverantwortung */}
          {activeItem.leadership && activeItem.leadership.length > 0 && (
            <div className="mb-5">
              <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-wider mb-2">Fach- & Führungsverantwortung</p>
              <ul className="space-y-1.5">
                {activeItem.leadership.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span style={{ color: "var(--accent)" }} className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-current" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tätigkeiten & Aufgaben */}
          {activeItem.activities && activeItem.activities.length > 0 && (
            <div className="mb-5">
              <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-wider mb-2">Tätigkeiten & Aufgaben</p>
              <ul className="space-y-1.5">
                {activeItem.activities.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span style={{ color: "var(--accent)" }} className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-current" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Spezifische Projekte */}
          {activeItem.spezifisch && activeItem.spezifisch.length > 0 && (
            <div className="mb-5">
              <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-wider mb-2">Spezifische Projekte</p>
              <ul className="space-y-1.5">
                {activeItem.spezifisch.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span style={{ color: "var(--accent)" }} className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-current" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Materialgruppen */}
          {activeItem.categories && (
            <div>
              <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-wider mb-1">Materialgruppen</p>
              <p className="text-sm text-white/55 leading-relaxed">{activeItem.categories}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
