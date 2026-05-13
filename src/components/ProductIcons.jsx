export function WiringIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Cable outer insulation ring */}
      <circle cx="12" cy="12" r="9" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* 3-core conductor cross-section */}
      <circle cx="9" cy="10" r="2" fill="white" opacity="0.85" />
      <circle cx="15" cy="10" r="2" fill="white" opacity="0.85" />
      <circle cx="12" cy="15" r="2" fill="white" opacity="0.85" />
      {/* Inner insulation rings on hover */}
      <circle
        cx="9"
        cy="10"
        r="1.5"
        fill="#1a1a1a"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <circle
        cx="15"
        cy="10"
        r="1.5"
        fill="#1a1a1a"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
      />
      <circle
        cx="12"
        cy="15"
        r="1.5"
        fill="#1a1a1a"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
      />
    </svg>
  );
}

export function PipesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Ghost pipe — always visible, muted */}
      <path
        d="M3 9 H15 Q16 9 16 10 V21"
        stroke="#d4d4d8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Animated pipe — draws itself on hover */}
      <path
        d="M3 9 H15 Q16 9 16 10 V21"
        stroke="#1a1a1a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ strokeDasharray: 42, strokeDashoffset: 42 }}
        className="group-hover:[stroke-dashoffset:0] transition-[stroke-dashoffset] duration-700 ease-in-out"
      />
      {/* Flanges */}
      <line x1="3" y1="6.5" x2="3" y2="11.5" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="13.5" y1="21" x2="18.5" y2="21" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
}

export function MotorIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="group-hover:rotate-180 transition-transform duration-700 ease-in-out"
    >
      {/* Gear outer ring */}
      <circle cx="12" cy="12" r="6" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* 8 teeth around the gear */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 12 + 6.5 * Math.cos(rad);
        const y1 = 12 + 6.5 * Math.sin(rad);
        const x2 = 12 + 9.5 * Math.cos(rad);
        const y2 = 12 + 9.5 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
      {/* Center hub */}
      <circle cx="12" cy="12" r="2.5" fill="#1a1a1a" />
    </svg>
  );
}

export function SwitchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ overflow: 'hidden' }}
    >
      <rect
        x="6"
        y="4"
        width="12"
        height="16"
        rx="2"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      {/* Switch handle — flips from top to bottom, stays within box */}
      <rect
        x="10"
        y="7"
        width="4"
        height="5"
        rx="1"
        fill="#1a1a1a"
        className="group-hover:translate-y-[5px] transition-transform duration-300"
      />
      <circle cx="12" cy="18.5" r="1" fill="#a1a1aa" />
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
      {/* Tank body */}
      <rect x="4" y="6" width="16" height="16" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Lid / inlet at top */}
      <rect x="8" y="3" width="8" height="3" rx="1" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Static low water fill */}
      <rect x="4.75" y="17" width="14.5" height="4.3" fill="#1a1a1a" opacity="0.12" rx="1" />
      {/* Water surface line — rises on hover */}
      <line
        x1="4.75" y1="17" x2="19.25" y2="17"
        stroke="#1a1a1a"
        strokeWidth="1"
        className="group-hover:-translate-y-[7px] transition-transform duration-700 ease-out"
      />
      {/* Water fill body that also rises */}
      <rect
        x="4.75" y="17" width="14.5" height="5"
        fill="#1a1a1a"
        opacity="0.15"
        rx="1"
        className="group-hover:-translate-y-[7px] transition-transform duration-700 ease-out"
      />
      {/* Outlet pip at bottom center */}
      <line x1="11" y1="22" x2="13" y2="22" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HeaterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Thermometer bulb */}
      <circle cx="12" cy="19" r="3" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Thermometer tube */}
      <rect
        x="10.5"
        y="4"
        width="3"
        height="13"
        rx="1.5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
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
      <line
        x1="14"
        y1="11"
        x2="15.5"
        y2="11"
        stroke="#a1a1aa"
        strokeWidth="1"
      />
      <line
        x1="14"
        y1="14"
        x2="15.5"
        y2="14"
        stroke="#a1a1aa"
        strokeWidth="1"
      />
    </svg>
  );
}

export function SanitaryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Showerhead body */}
      <rect
        x="6"
        y="4"
        width="12"
        height="5"
        rx="2.5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      {/* Water rays — appear and cascade on hover */}
      <line
        x1="8"
        y1="9"
        x2="7"
        y2="14"
        stroke="#1a1a1a"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-0"
      />
      <line
        x1="10"
        y1="9"
        x2="9.5"
        y2="15"
        stroke="#1a1a1a"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
      />
      <line
        x1="12"
        y1="9"
        x2="12"
        y2="16"
        stroke="#1a1a1a"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"
      />
      <line
        x1="14"
        y1="9"
        x2="14.5"
        y2="15"
        stroke="#1a1a1a"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300"
      />
      <line
        x1="16"
        y1="9"
        x2="17"
        y2="14"
        stroke="#1a1a1a"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-[400ms]"
      />
    </svg>
  );
}

export function PlugIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Power socket face */}
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="3"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      {/* Left pin hole */}
      <rect x="8" y="9" width="2.5" height="4" rx="1" fill="#1a1a1a" />
      {/* Right pin hole */}
      <rect x="13.5" y="9" width="2.5" height="4" rx="1" fill="#1a1a1a" />
      {/* Ground pin hole — appears on hover */}
      <rect
        x="10.5"
        y="15"
        width="3"
        height="1.5"
        rx="0.75"
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
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
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
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="group-hover:rotate-45 transition-transform duration-300 origin-center"
    >
      {/* Screwdriver handle */}
      <rect x="9" y="2" width="6" height="7" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Shaft */}
      <line x1="12" y1="9" x2="12" y2="20" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      {/* Flat-head tip */}
      <line x1="9.5" y1="20" x2="14.5" y2="20" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Grip lines on handle */}
      <line x1="9.5" y1="5" x2="14.5" y2="5" stroke="#a1a1aa" strokeWidth="1"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <line x1="9.5" y1="7" x2="14.5" y2="7" stroke="#a1a1aa" strokeWidth="1"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
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
