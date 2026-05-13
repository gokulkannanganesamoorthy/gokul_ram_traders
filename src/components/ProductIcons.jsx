// Icons accept alwaysActive prop — when true (mobile), renders hover state permanently

export function WiringIcon({ alwaysActive }) {
  const on = alwaysActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="9"  cy="10" r="2" fill="white" opacity="0.85" />
      <circle cx="15" cy="10" r="2" fill="white" opacity="0.85" />
      <circle cx="12" cy="15" r="2" fill="white" opacity="0.85" />
      <circle cx="9"  cy="10" r="1.5" fill="#1a1a1a" className={`${on} transition-opacity duration-300`} />
      <circle cx="15" cy="10" r="1.5" fill="#1a1a1a" className={`${on} transition-opacity duration-300 delay-100`} />
      <circle cx="12" cy="15" r="1.5" fill="#1a1a1a" className={`${on} transition-opacity duration-300 delay-200`} />
    </svg>
  );
}

export function PipesIcon() {
  // pipe-animated CSS keyframe handles mobile via #products .pipe-animated rule
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9 H15 Q16 9 16 10 V21" stroke="#d4d4d8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path
        d="M3 9 H15 Q16 9 16 10 V21"
        stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
        className="pipe-animated"
        style={{ strokeDasharray: 42, strokeDashoffset: 42 }}
      />
      <line x1="3"    y1="6.5"  x2="3"    y2="11.5" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="13.5" y1="21"   x2="18.5" y2="21"   stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
}

export function MotorIcon() {
  // mobile-spin CSS class handles continuous rotation on mobile
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      className="group-hover:rotate-180 transition-transform duration-700 ease-in-out mobile-spin">
      <circle cx="12" cy="12" r="6" stroke="#1a1a1a" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={deg}
            x1={12 + 6.5 * Math.cos(rad)} y1={12 + 6.5 * Math.sin(rad)}
            x2={12 + 9.5 * Math.cos(rad)} y2={12 + 9.5 * Math.sin(rad)}
            stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"
          />
        );
      })}
      <circle cx="12" cy="12" r="2.5" fill="#1a1a1a" />
    </svg>
  );
}

export function SwitchIcon({ alwaysActive }) {
  const pos = alwaysActive ? 'translate-y-[5px]' : 'group-hover:translate-y-[5px]';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ overflow: 'hidden' }}>
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
      <rect x="10" y="7" width="4" height="5" rx="1" fill="#1a1a1a"
        className={`${pos} transition-transform duration-300`} />
      <circle cx="12" cy="18.5" r="1" fill="#a1a1aa" />
    </svg>
  );
}

export function FanIcon() {
  // mobile-spin CSS class handles continuous rotation on mobile
  return (
    <svg width="24" height="24" viewBox="0 0 72 72" fill="none"
      className="group-hover:rotate-[360deg] transition-transform duration-[1200ms] ease-out mobile-spin">
      {[0, 120, 240].map((angle) => (
        <g key={angle} style={{ transform: `rotate(${angle}deg)`, transformOrigin: '36px 36px' }}>
          <ellipse cx="36" cy="18" rx="4" ry="16" fill="#1a1a1a" opacity="0.85" />
        </g>
      ))}
      <circle cx="36" cy="36" r="6" fill="#000000" />
      <circle cx="36" cy="36" r="3" fill="#555" />
    </svg>
  );
}

export function TankIcon({ alwaysActive }) {
  const rise = alwaysActive ? '-translate-y-[7px]' : 'group-hover:-translate-y-[7px]';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="16" height="16" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
      <rect x="8" y="3" width="8" height="3" rx="1" stroke="#1a1a1a" strokeWidth="1.5" />
      <rect x="4.75" y="17" width="14.5" height="4.3" fill="#1a1a1a" opacity="0.12" rx="1" />
      <line x1="4.75" y1="17" x2="19.25" y2="17" stroke="#1a1a1a" strokeWidth="1"
        className={`${rise} transition-transform duration-700 ease-out`} />
      <rect x="4.75" y="17" width="14.5" height="5" fill="#1a1a1a" opacity="0.15" rx="1"
        className={`${rise} transition-transform duration-700 ease-out`} />
      <line x1="11" y1="22" x2="13" y2="22" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HeaterIcon({ alwaysActive }) {
  const scale = alwaysActive ? 'scale-y-150' : 'group-hover:scale-y-150';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="19" r="3" stroke="#1a1a1a" strokeWidth="1.5" />
      <rect x="10.5" y="4" width="3" height="13" rx="1.5" stroke="#1a1a1a" strokeWidth="1.5" />
      <rect x="11.2" y="14" width="1.6" height="5" rx="0.8" fill="#1a1a1a"
        className={`origin-bottom transition-all duration-700 ${scale}`} />
      <line x1="14" y1="8"  x2="15.5" y2="8"  stroke="#a1a1aa" strokeWidth="1" />
      <line x1="14" y1="11" x2="15.5" y2="11" stroke="#a1a1aa" strokeWidth="1" />
      <line x1="14" y1="14" x2="15.5" y2="14" stroke="#a1a1aa" strokeWidth="1" />
    </svg>
  );
}

export function SanitaryIcon({ alwaysActive }) {
  const on = alwaysActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="4" width="12" height="5" rx="2.5" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="8"  y1="9" x2="7"    y2="14" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" className={`${on} transition-all duration-300 delay-0`} />
      <line x1="10" y1="9" x2="9.5"  y2="15" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" className={`${on} transition-all duration-300 delay-100`} />
      <line x1="12" y1="9" x2="12"   y2="16" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" className={`${on} transition-all duration-300 delay-200`} />
      <line x1="14" y1="9" x2="14.5" y2="15" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" className={`${on} transition-all duration-300 delay-300`} />
      <line x1="16" y1="9" x2="17"   y2="14" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" className={`${on} transition-all duration-300 delay-[400ms]`} />
    </svg>
  );
}

export function PlugIcon({ alwaysActive }) {
  const on = alwaysActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="#1a1a1a" strokeWidth="1.5" />
      <rect x="8"    y="9" width="2.5" height="4" rx="1" fill="#1a1a1a" />
      <rect x="13.5" y="9" width="2.5" height="4" rx="1" fill="#1a1a1a" />
      <rect x="10.5" y="15" width="3" height="1.5" rx="0.75" fill="#a1a1aa"
        className={`${on} transition-opacity duration-300 delay-200`} />
    </svg>
  );
}

export function SolarIcon({ alwaysActive }) {
  const on = alwaysActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="#1a1a1a" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={deg}
            x1={12 + 5.5 * Math.cos(rad)} y1={12 + 5.5 * Math.sin(rad)}
            x2={12 + 8   * Math.cos(rad)} y2={12 + 8   * Math.sin(rad)}
            stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"
            className={`${on} transition-opacity duration-300`}
            style={{ transitionDelay: `${i * 30}ms` }}
          />
        );
      })}
    </svg>
  );
}

export function ToolIcon({ alwaysActive }) {
  const on = alwaysActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100';
  // mobile-spin handles the SVG rotation on mobile
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      className="group-hover:rotate-45 transition-transform duration-300 origin-center mobile-spin">
      <rect x="9" y="2" width="6" height="7" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="12" y1="9"  x2="12"   y2="20"  stroke="#1a1a1a" strokeWidth="2"   strokeLinecap="round" />
      <line x1="9.5" y1="20" x2="14.5" y2="20" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="9.5" y1="5"  x2="14.5" y2="5"  stroke="#a1a1aa" strokeWidth="1"   className={`${on} transition-opacity duration-300`} />
      <line x1="9.5" y1="7"  x2="14.5" y2="7"  stroke="#a1a1aa" strokeWidth="1"   className={`${on} transition-opacity duration-300 delay-100`} />
    </svg>
  );
}

export function CategoryIcon({ name, alwaysActive }) {
  const p = { alwaysActive };
  switch (name) {
    case 'Wiring & Cables':                  return <WiringIcon   {...p} />;
    case 'Pipes & Hoses':                    return <PipesIcon    />;
    case 'Motor Pumps & Compressors':        return <MotorIcon    />;
    case 'MCBs, Switchgears & Boards':       return <SwitchIcon   {...p} />;
    case 'Fans, Lights & Ventilation':       return <FanIcon      />;
    case 'Water Tanks':                      return <TankIcon     {...p} />;
    case 'Water Heaters':                    return <HeaterIcon   {...p} />;
    case 'Sanitaryware':                     return <SanitaryIcon {...p} />;
    case 'Accessories':                      return <PlugIcon     {...p} />;
    case 'Solar & Street Lighting':          return <SolarIcon    {...p} />;
    case 'Professional Installation':        return <ToolIcon     {...p} />;
    default:                                 return <FanIcon      />;
  }
}
