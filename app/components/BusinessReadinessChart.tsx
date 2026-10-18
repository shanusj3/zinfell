import React from "react";

export default function BusinessReadinessChart() {
  return (
    <div className="relative w-full border border-[#38265a] bg-[#120b22] shadow-none">
      <svg
        viewBox="0 0 1000 520"
        className="w-full h-auto block select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Outer Glow for rising line */}
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Node Glow */}
          <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Tech Background Grid */}
          <pattern
            id="techGrid"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 36 0 L 0 0 0 36"
              fill="none"
              stroke="#261742"
              strokeWidth="0.8"
              opacity="0.75"
            />
          </pattern>

          {/* Ambient Background Radial Gradient */}
          <radialGradient id="bgGlow" cx="72%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#2b1754" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#180e30" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0f091f" stopOpacity="1" />
          </radialGradient>

          {/* Rising Line Gradient */}
          <linearGradient id="lineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Background Rect & Grid */}
        <rect width="1000" height="520" fill="url(#bgGlow)" />
        <rect width="1000" height="520" fill="url(#techGrid)" />

        {/* ================= Y-AXIS (Left) ================= */}
        {/* Axis Label "BUSINESS READINESS" */}
        <text
          x="-255"
          y="42"
          transform="rotate(-90)"
          fill="#A78BFA"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.22em"
          textAnchor="middle"
          className="font-sans opacity-90"
        >
          BUSINESS READINESS
        </text>

        {/* Vertical Y Line */}
        <line
          x1="95"
          y1="70"
          x2="95"
          y2="440"
          stroke="#36245c"
          strokeWidth="1.2"
        />

        {/* Y Ticks and Numbers */}
        {[
          { val: "2.5", y: 80 },
          { val: "2.0", y: 152 },
          { val: "1.5", y: 224 },
          { val: "1.0", y: 296 },
          { val: "0.5", y: 368 },
          { val: "0.0", y: 440 },
        ].map((item) => (
          <g key={item.val}>
            <text
              x="80"
              y={item.y + 4}
              fill="#C4B5FD"
              opacity="0.8"
              fontSize="12"
              fontWeight="500"
              textAnchor="end"
              className="font-mono"
            >
              {item.val}
            </text>
            <line
              x1="90"
              y1={item.y}
              x2="95"
              y2={item.y}
              stroke="#36245c"
              strokeWidth="1.2"
            />
          </g>
        ))}

        {/* ================= X-AXIS (Bottom) ================= */}
        {/* Bottom Baseline */}
        <line
          x1="95"
          y1="440"
          x2="940"
          y2="440"
          stroke="#36245c"
          strokeWidth="1.2"
        />

        {/* X Stage Marks & Labels */}
        {[
          { label: "DISCOVER", x: 175 },
          { label: "BUILD", x: 395 },
          { label: "DEPLOY", x: 660 },
          { label: "SCALE", x: 920 },
        ].map((stage) => (
          <g key={stage.label}>
            {/* Dot on baseline */}
            <circle cx={stage.x} cy="440" r="3" fill="#A78BFA" />
            {/* Tick below baseline */}
            <line
              x1={stage.x}
              y1="440"
              x2={stage.x}
              y2="447"
              stroke="#36245c"
              strokeWidth="1.2"
            />
            {/* Label text */}
            <text
              x={stage.x}
              y="475"
              fill="#e2e8f0"
              fontSize="12"
              fontWeight="600"
              letterSpacing="0.14em"
              textAnchor="middle"
              className="font-sans"
            >
              {stage.label}
            </text>
          </g>
        ))}

        {/* ================= VERTICAL DASHED GUIDES ================= */}
        {/* From Node 1 (BUILD) to X-axis */}
        <line
          x1="395"
          y1="330"
          x2="395"
          y2="440"
          stroke="#3b2963"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        {/* From Node 2 (DEPLOY) to X-axis */}
        <line
          x1="660"
          y1="230"
          x2="660"
          y2="440"
          stroke="#3b2963"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        {/* From Node 3 (SCALE) to X-axis */}
        <line
          x1="920"
          y1="145"
          x2="920"
          y2="440"
          stroke="#3b2963"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* ================= STEP CONNECTOR LINES TO CARDS ================= */}
        {/* Connector to Card 1 */}
        <path
          d="M 380 305 H 388 V 330 H 395"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="1.5"
        />

        {/* Connector to Card 2 */}
        <path
          d="M 635 200 H 648 V 230 H 660"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="1.5"
        />

        {/* Connector to Card 3 */}
        <path
          d="M 885 105 H 902 L 912 120 V 145 H 920"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="1.5"
        />

        {/* ================= MAIN RISING GROWTH LINE ================= */}
        {/* Glowing blur background line */}
        <path
          d="M 95 425 L 395 330 L 660 230 L 920 145"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="3.5"
          filter="url(#neonGlow)"
        />
        {/* Core crisp sharp line */}
        <path
          d="M 95 425 L 395 330 L 660 230 L 920 145"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="2.2"
        />

        {/* ================= GLOWING NODES ON THE LINE ================= */}
        {/* Node 1: at BUILD (395, 330) */}
        <g transform="translate(395, 330)">
          <circle r="12" fill="#A78BFA" fillOpacity="0.2" filter="url(#nodeGlow)" />
          <circle r="7.5" fill="#180e30" stroke="#A78BFA" strokeWidth="2" />
          <circle r="3.5" fill="#ffffff" />
        </g>

        {/* Node 2: at DEPLOY (660, 230) */}
        <g transform="translate(660, 230)">
          <circle r="12" fill="#A78BFA" fillOpacity="0.2" filter="url(#nodeGlow)" />
          <circle r="7.5" fill="#180e30" stroke="#A78BFA" strokeWidth="2" />
          <circle r="3.5" fill="#ffffff" />
        </g>

        {/* Node 3: at SCALE (920, 145) */}
        <g transform="translate(920, 145)">
          <circle r="15" fill="#A78BFA" fillOpacity="0.25" filter="url(#nodeGlow)" />
          <circle r="8.5" fill="#180e30" stroke="#A78BFA" strokeWidth="2.2" />
          <circle r="4" fill="#ffffff" />
        </g>

        {/* ================= THE 3 FLOATING STAT CARDS ================= */}
        {/* Card 1: 2+ Countries Served */}
        <foreignObject x="195" y="265" width="185" height="72">
          <div className="h-full border border-[#3d2766] bg-[#19102e]/95 px-4 py-2.5 shadow-none flex flex-col justify-center select-text">
            <div className="text-[26px] font-bold text-[#A78BFA] leading-none tracking-tight">
              2+
            </div>
            <div className="text-[13px] font-bold text-white mt-1 leading-tight">
              Countries Served
            </div>
            <div className="w-6 h-[2px] bg-[#A78BFA] mt-1.5"></div>
          </div>
        </foreignObject>

        {/* Card 2: 10+ Projects Completed */}
        <foreignObject x="450" y="160" width="185" height="72">
          <div className="h-full border border-[#3d2766] bg-[#19102e]/95 px-4 py-2.5 shadow-none flex flex-col justify-center select-text">
            <div className="text-[26px] font-bold text-[#A78BFA] leading-none tracking-tight">
              10+
            </div>
            <div className="text-[13px] font-bold text-white mt-1 leading-tight">
              Projects Completed
            </div>
            <div className="w-6 h-[2px] bg-[#A78BFA] mt-1.5"></div>
          </div>
        </foreignObject>

        {/* Card 3: 100% Digital Craftsmanship */}
        <foreignObject x="700" y="65" width="185" height="72">
          <div className="h-full border border-[#3d2766] bg-[#19102e]/95 px-4 py-2.5 shadow-none flex flex-col justify-center select-text">
            <div className="text-[26px] font-bold text-[#A78BFA] leading-none tracking-tight">
              100%
            </div>
            <div className="text-[13px] font-bold text-white mt-1 leading-tight">
              Digital Craftsmanship
            </div>
            <div className="w-6 h-[2px] bg-[#A78BFA] mt-1.5"></div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
