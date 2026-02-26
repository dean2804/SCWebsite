"use client";

const NODES = [
  { label: "Lieferant",   sub: "Supplier",   y: 95  },
  { label: "Einkauf",     sub: "Procurement", y: 225, kpi: { val: "359K€", desc: "Savings"   } },
  { label: "Produktion",  sub: "Production",  y: 355, kpi: { val: "+27%",  desc: "Output"    } },
  { label: "Lager",       sub: "Warehouse",   y: 485, kpi: { val: "−26%",  desc: "Bestände"  } },
  { label: "Logistik",    sub: "Logistics",   y: 615, kpi: { val: "+23%",  desc: "Picks"     } },
  { label: "Kunde",       sub: "Customer",    y: 735 },
];

const CX = 220;   // center-x of node column
const NW = 180;   // node width
const NH = 50;    // node height
const R  = 10;    // corner radius
const LINE_X = CX;
const LINE_TOP = NODES[0].y + NH / 2;
const LINE_BOT = NODES[NODES.length - 1].y + NH / 2;

export default function ProcessFlowSVG() {
  return (
    <svg
      viewBox="0 0 520 870"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="pdots" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1.3" fill="rgba(255,255,255,0.08)" />
        </pattern>

        <marker id="arrow" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
          <polygon points="0 0, 7 2.5, 0 5" fill="rgba(200,168,75,0.85)" />
        </marker>

        <style>{`
          @keyframes flow-dash {
            from { stroke-dashoffset: 240; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes node-pulse {
            0%, 100% { opacity: 0.75; }
            50%       { opacity: 1; }
          }
          @keyframes badge-pop {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50%       { opacity: 1;   transform: scale(1.04); }
          }
          .flow-line { animation: flow-dash 3s linear infinite; }
          .n-pulse    { animation: node-pulse 4s ease-in-out infinite; }
          .b-pop      { animation: badge-pop  3.5s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Dot grid */}
      <rect width="520" height="870" fill="url(#pdots)" />

      {/* Static background line */}
      <line x1={LINE_X} y1={LINE_TOP} x2={LINE_X} y2={LINE_BOT}
        stroke="rgba(200,168,75,0.12)" strokeWidth="2" />

      {/* Animated flow line */}
      <line x1={LINE_X} y1={LINE_TOP} x2={LINE_X} y2={LINE_BOT}
        stroke="rgba(200,168,75,0.7)" strokeWidth="2"
        strokeDasharray="10 20"
        markerEnd="url(#arrow)"
        className="flow-line" />

      {/* Nodes */}
      {NODES.map((node, i) => (
        <g key={node.label} style={{ animationDelay: `${i * 0.6}s` }}>
          {/* Node box */}
          <rect
            x={CX - NW / 2} y={node.y}
            width={NW} height={NH} rx={R} ry={R}
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(200,168,75,0.5)"
            strokeWidth="1.5"
            className="n-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
          {/* Label */}
          <text x={CX} y={node.y + NH / 2 - 6}
            textAnchor="middle" fill="white"
            fontSize="13" fontWeight="600" fontFamily="system-ui,sans-serif">
            {node.label}
          </text>
          {/* Sub-label */}
          <text x={CX} y={node.y + NH / 2 + 10}
            textAnchor="middle" fill="rgba(255,255,255,0.4)"
            fontSize="10" fontFamily="system-ui,sans-serif">
            {node.sub}
          </text>

          {/* KPI badge */}
          {node.kpi && (() => {
            const bx = CX + NW / 2 + 30;
            const by = node.y + NH / 2;
            const bw = 96;
            const bh = 40;
            return (
              <g className="b-pop" style={{ animationDelay: `${i * 0.5 + 0.3}s` }}>
                {/* Connector */}
                <line
                  x1={CX + NW / 2 + 1} y1={by}
                  x2={bx - 2}           y2={by}
                  stroke="rgba(200,168,75,0.45)" strokeWidth="1.5"
                  strokeDasharray="4 3" />
                {/* Badge */}
                <rect x={bx} y={by - bh / 2} width={bw} height={bh}
                  rx={8} ry={8}
                  fill="rgba(200,168,75,0.16)"
                  stroke="rgba(200,168,75,0.55)" strokeWidth="1" />
                <text x={bx + bw / 2} y={by - 3}
                  textAnchor="middle" fill="rgba(226,201,126,1)"
                  fontSize="15" fontWeight="700" fontFamily="system-ui,sans-serif">
                  {node.kpi.val}
                </text>
                <text x={bx + bw / 2} y={by + 13}
                  textAnchor="middle" fill="rgba(226,201,126,0.65)"
                  fontSize="9.5" fontFamily="system-ui,sans-serif">
                  {node.kpi.desc}
                </text>
              </g>
            );
          })()}
        </g>
      ))}

      {/* Top label */}
      <text x={CX} y="50"
        textAnchor="middle" fill="rgba(200,168,75,0.55)"
        fontSize="9" fontWeight="600" letterSpacing="3"
        fontFamily="system-ui,sans-serif">
        END-TO-END PROCESS
      </text>
      <line x1={CX - 70} y1="56" x2={CX + 70} y2="56"
        stroke="rgba(200,168,75,0.25)" strokeWidth="1" />
    </svg>
  );
}
