export function WiringIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Zigzag lightning bolt — electric current */}
      <polyline
        points="13,2 8,13 12,13 11,22 16,11 12,11 13,2"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        className="group-hover:stroke-black transition-all duration-300"
        style={{ strokeDasharray: 50, strokeDashoffset: 50 }}
      />
      <polyline
        points="13,2 8,13 12,13 11,22 16,11 12,11 13,2"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        className="group-hover:[stroke-dashoffset:0] transition-all duration-500"
        style={{ strokeDasharray: 50, strokeDashoffset: 0 }}
      />
    </svg>
  );
}

export function PipesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Horizontal pipe body */}
      <rect x="2" y="9" width="20" height="6" rx="3" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Flow arrow that appears on hover and slides right */}
      <path
        d="M7 12 L10 12 M10 12 L8.5 10.5 M10 12 L8.5 13.5"
        stroke="#1a1a1a"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-5 transition-all duration-700 ease-in-out"
      />
      {/* End cap flanges */}
      <line x1="2" y1="8" x2="2" y2="16" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="22" y1="8" x2="22" y2="16" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
}

export function MotorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="6"
        y="8"
        width="12"
        height="8"
        rx="2"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <line x1="10" y1="8" x2="10" y2="16" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="14" y1="8" x2="14" y2="16" stroke="#1a1a1a" strokeWidth="1.5" />
      <line
        x1="18"
        y1="12"
        x2="22"
        y2="12"
        stroke="#1a1a1a"
        strokeWidth="2"
        className="group-hover:translate-x-1 transition-transform duration-300"
      />
      <circle
        cx="4"
        cy="12"
        r="3"
        stroke="#a1a1aa"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        className="group-hover:rotate-[360deg] origin-[4px_12px] transition-transform duration-1000 linear"
      />
    </svg>
  );
}

export function SwitchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="6"
        y="4"
        width="12"
        height="16"
        rx="2"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <rect
        x="10"
        y="8"
        width="4"
        height="6"
        rx="1"
        fill="#1a1a1a"
        className="group-hover:translate-y-4 transition-transform duration-300"
      />
      <circle cx="12" cy="19" r="1" fill="#a1a1aa" />
    </svg>
  );
}

export function FanIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 72 72"
      fill="none"
      className="group-hover:rotate-[360deg] transition-transform duration-[1200ms] ease-out"
    >
      {/* 3 blades at 0° , 120° and 240° */}
      {[0, 120, 240].map((angle) => (
        <g
          key={angle}
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: '36px 36px',
          }}
        >
          <ellipse
            cx="36"
            cy="18"
            rx="4"
            ry="16"
            fill="#1a1a1a"
            opacity="0.85"
          />
        </g>
      ))}
      <circle cx="36" cy="36" r="6" fill="#000000" />
      <circle cx="36" cy="36" r="3" fill="#555" />
    </svg>
  );
}

export function TankIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="6"
        width="14"
        height="14"
        rx="3"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <rect x="8" y="3" width="8" height="3" rx="1" fill="#1a1a1a" />
      <path
        d="M5 20 L19 20"
        stroke="#a1a1aa"
        strokeWidth="2"
        className="group-hover:-translate-y-6 transition-transform duration-1000 opacity-0 group-hover:opacity-100"
      />
      <path
        d="M5 20 L19 20"
        stroke="#a1a1aa"
        strokeWidth="2"
        className="group-hover:-translate-y-3 transition-transform duration-1000 delay-100 opacity-0 group-hover:opacity-100"
      />
    </svg>
  );
}

export function HeaterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Thermometer bulb */}
      <circle cx="12" cy="19" r="3" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Thermometer tube */}
      <rect x="10.5" y="4" width="3" height="13" rx="1.5" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Rising mercury level */}
      <rect
        x="11.2"
        y="14"
        width="1.6"
        height="5"
        rx="0.8"
        fill="#1a1a1a"
        className="origin-bottom transition-all duration-700 group-hover:scale-y-150"
      />
      {/* Tick marks */}
      <line x1="14" y1="8" x2="15.5" y2="8" stroke="#a1a1aa" strokeWidth="1" />
      <line x1="14" y1="11" x2="15.5" y2="11" stroke="#a1a1aa" strokeWidth="1" />
      <line x1="14" y1="14" x2="15.5" y2="14" stroke="#a1a1aa" strokeWidth="1" />
    </svg>
  );
}

export function SanitaryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Showerhead body */}
      <rect x="6" y="4" width="12" height="5" rx="2.5" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Water rays — appear and cascade on hover */}
      <line x1="8" y1="9" x2="7" y2="14" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-0" />
      <line x1="10" y1="9" x2="9.5" y2="15" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100" />
      <line x1="12" y1="9" x2="12" y2="16" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200" />
      <line x1="14" y1="9" x2="14.5" y2="15" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300" />
      <line x1="16" y1="9" x2="17" y2="14" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-[400ms]" />
    </svg>
  );
}

export function PlugIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Power socket face */}
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Left pin hole */}
      <rect x="8" y="9" width="2.5" height="4" rx="1" fill="#1a1a1a" />
      {/* Right pin hole */}
      <rect x="13.5" y="9" width="2.5" height="4" rx="1" fill="#1a1a1a" />
      {/* Ground pin hole — appears on hover */}
      <rect
        x="10.5" y="15" width="3" height="1.5" rx="0.75"
        fill="#a1a1aa"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
      />
    </svg>
  );
}

export function SolarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Sun circle */}
      <circle cx="12" cy="12" r="4" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Rays — expand outward on hover */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 12 + 5.5 * Math.cos(rad);
        const y1 = 12 + 5.5 * Math.sin(rad);
        const x2 = 12 + 8 * Math.cos(rad);
        const y2 = 12 + 8 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#1a1a1a"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ transitionDelay: `${i * 30}ms` }}
          />
        );
      })}
    </svg>
  );
}

export function ToolIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Hard hat brim */}
      <path
        d="M3 17 Q3 19 12 19 Q21 19 21 17"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Hard hat dome */}
      <path
        d="M6 17 C6 11 8 8 12 8 C16 8 18 11 18 17"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      {/* Center ridge line */}
      <line x1="12" y1="8" x2="12" y2="5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Brim highlight — slides in on hover */}
      <path
        d="M5 17 Q5 18.5 12 18.5 Q19 18.5 19 17"
        stroke="#a1a1aa"
        strokeWidth="1"
        strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
      />
    </svg>
  );
}

export function CategoryIcon({ name }) {
  switch (name) {
    case 'Wiring & Cables':
      return <WiringIcon />;
    case 'Pipes & Hoses':
      return <PipesIcon />;
    case 'Motor Pumps & Compressors':
      return <MotorIcon />;
    case 'MCBs, Switchgears & Boards':
      return <SwitchIcon />;
    case 'Fans, Lights & Ventilation':
      return <FanIcon />;
    case 'Water Tanks':
      return <TankIcon />;
    case 'Water Heaters':
      return <HeaterIcon />;
    case 'Sanitaryware':
      return <SanitaryIcon />;
    case 'Accessories':
      return <PlugIcon />;
    case 'Solar & Street Lighting':
      return <SolarIcon />;
    case 'Professional Installation':
      return <ToolIcon />;
    default:
      return <FanIcon />;
  }
}
