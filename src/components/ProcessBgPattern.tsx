// Subtle tiling flowchart background — navy on white, ~8% opacity
// Use inside a `position: relative` section as first child

const S  = "rgba(15,32,68,0.09)";   // stroke – boxes
const SL = "rgba(15,32,68,0.07)";   // stroke – connectors
const FA = "rgba(15,32,68,0.07)";   // fill   – arrowheads

export default function ProcessBgPattern({ id = "pbp" }: { id?: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        {/* 200×150 tile — 4-box circuit loop */}
        <pattern
          id={id}
          x="0" y="0"
          width="200" height="150"
          patternUnits="userSpaceOnUse"
        >
          {/* ── Boxes ─────────────────────────────────────────── */}
          <rect x="10"  y="18"  width="66" height="24" rx="5" fill="none" stroke={S} strokeWidth="1.4" />
          <rect x="124" y="18"  width="66" height="24" rx="5" fill="none" stroke={S} strokeWidth="1.4" />
          <rect x="124" y="108" width="66" height="24" rx="5" fill="none" stroke={S} strokeWidth="1.4" />
          <rect x="10"  y="108" width="66" height="24" rx="5" fill="none" stroke={S} strokeWidth="1.4" />

          {/* ── Box 1 → Box 2 (horizontal) ────────────────────── */}
          <line x1="76" y1="30" x2="124" y2="30" stroke={SL} strokeWidth="1.4" />
          <polygon points="121,27 127,30 121,33" fill={FA} />

          {/* ── Box 2 ↓ Box 3 (vertical) ──────────────────────── */}
          <line x1="157" y1="42" x2="157" y2="108" stroke={SL} strokeWidth="1.4" />
          <polygon points="153.5,105 157,111 160.5,105" fill={FA} />

          {/* ── Box 3 ← Box 4 (horizontal) ────────────────────── */}
          <line x1="124" y1="120" x2="76" y2="120" stroke={SL} strokeWidth="1.4" />
          <polygon points="79,117 73,120 79,123" fill={FA} />

          {/* ── Box 4 ↑ (dashed — continues into tile above) ──── */}
          <line x1="43" y1="108" x2="43" y2="42"
            stroke={SL} strokeWidth="1.4" strokeDasharray="5 4" />
          <polygon points="39.5,45 43,39 46.5,45" fill={FA} />

          {/* ── Small diamond accent (center of tile) ─────────── */}
          <polygon
            points="100,62  112,75  100,88  88,75"
            fill="none" stroke={S} strokeWidth="1.2"
          />
          {/* Connector lines to diamond */}
          <line x1="76"  y1="30" x2="88"  y2="75" stroke={SL} strokeWidth="1" strokeDasharray="3 4" opacity="0.6"/>
          <line x1="100" y1="88" x2="100" y2="108" stroke={SL} strokeWidth="1" strokeDasharray="3 4" opacity="0.6"/>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
