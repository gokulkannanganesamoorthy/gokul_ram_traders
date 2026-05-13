export function WiringIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="group-hover:rotate-[360deg] transition-transform duration-1000 ease-out"
    >
      <circle cx="12" cy="12" r="10" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle
        cx="12"
        cy="12"
        r="7"
        stroke="#a1a1aa"
        strokeWidth="1"
        strokeDasharray="2 2"
        className="group-hover:rotate-180 origin-center transition-transform duration-1000"
      />
      <circle cx="12" cy="12" r="1" fill="#1a1a1a" />
    </svg>
  );
}

export function PipesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20L4 12C4 8 8 4 12 4L20 4"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <rect x="2" y="10" width="4" height="4" fill="#1a1a1a" />
      <rect x="10" y="2" width="4" height="4" fill="#1a1a1a" />
      <circle
        cx="4"
        cy="20"
        r="1.5"
        fill="#a1a1aa"
        className="opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-8"
      />
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
      <rect
        x="6"
        y="3"
        width="12"
        height="18"
        rx="6"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="16"
        r="2"
        className="fill-transparent group-hover:fill-brand-black transition-colors duration-500"
      />
      <path
        d="M9 10 Q12 8 15 10 T9 10"
        stroke="#a1a1aa"
        strokeWidth="1"
        className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-700"
      />
    </svg>
  );
}

export function SanitaryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 20V12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 12V14"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="4"
        y="10"
        width="4"
        height="2"
        rx="1"
        fill="#1a1a1a"
        className="group-hover:-rotate-45 origin-right transition-transform duration-300"
      />
      <path
        d="M18 16L19 18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18L18 16Z"
        fill="#a1a1aa"
        className="opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-700"
      />
    </svg>
  );
}

export function PlugIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="8"
        y="10"
        width="8"
        height="10"
        rx="2"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <path
        d="M10 10V6"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 10V6"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 2 L14 4 L12 6 L10 4 Z"
        fill="#a1a1aa"
        className="scale-0 group-hover:scale-100 origin-center transition-transform duration-300 delay-200"
      />
    </svg>
  );
}

export function SolarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g transform="skewX(-15)">
        <rect
          x="8"
          y="10"
          width="16"
          height="10"
          rx="1"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          fill="transparent"
        />
        <line
          x1="12"
          y1="10"
          x2="12"
          y2="20"
          stroke="#1a1a1a"
          strokeWidth="1"
        />
        <line
          x1="16"
          y1="10"
          x2="16"
          y2="20"
          stroke="#1a1a1a"
          strokeWidth="1"
        />
      </g>
      <circle
        cx="12"
        cy="6"
        r="3"
        fill="#a1a1aa"
        className="-translate-x-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-1000 ease-in-out"
      />
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
      className="group-hover:rotate-45 transition-transform duration-300"
    >
      <path
        d="M14.7 9.3C15.8 10.4 17.7 10.4 18.8 9.3L19.5 8.6L15.4 4.5L14.7 5.2C13.6 6.3 13.6 8.2 14.7 9.3Z"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <path
        d="M14.7 9.3L5 19L3 21L5 21L14.7 11.3"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="#a1a1aa" />
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
