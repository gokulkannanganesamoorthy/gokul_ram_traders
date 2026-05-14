// #1 — Wire Divider — Real Electrical Cable with printed text markings
// Cylindrical look via gradient, with brand text printed on the insulation like real cables
import { useInView } from '../hooks/useInView';

const WIRE_TEXTS = ['GOKUL RAM ELECTRICALS'];

export default function WireDivider({ label }) {
  const [ref, inView] = useInView({ once: true, rootMargin: '-10% 0px' });
  const text =
    label || WIRE_TEXTS[Math.floor(Math.random() * WIRE_TEXTS.length)];

  return (
    <div
      ref={ref}
      className="container-wide py-6 overflow-hidden"
      aria-hidden="true"
    >
      {/* Cylindrical wire: a thick bar with a radial gradient to simulate 3D tube */}
      <div
        className="relative w-full h-6 rounded-full overflow-hidden transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          background:
            'linear-gradient(to bottom, #b0b0b5 0%, #e8e8ea 28%, #f5f5f7 50%, #e8e8ea 72%, #b0b0b5 100%)',
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          boxShadow:
            '0 3px 10px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(0,0,0,0.1), inset 0 2px 3px rgba(255,255,255,0.6)',
        }}
      >
        {/* Inner highlight stripe — top gloss */}
        <div
          className="absolute top-[4px] left-0 right-0 h-[3px] rounded-full"
          style={{ background: 'rgba(255,255,255,0.7)' }}
        />

        {/* Band rings every ~10% to simulate cable wrap rings — moved BEFORE text to avoid cutting letters */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-[2px]"
            style={{
              left: `${i * 10 + 5}%`,
              background: 'rgba(0,0,0,0.06)',
              opacity: inView ? 1 : 0,
              transition: `opacity 0.3s ease ${1 + i * 0.08}s`,
            }}
          />
        ))}

        {/* Printed cable text — repeating like real wire insulation — moved AFTER rings */}
        <div
          className="absolute inset-0 flex items-center px-10"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 1.2s',
          }}
        >
          <div className="flex w-full justify-around items-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="text-[8px] font-bold tracking-[0.3em] whitespace-nowrap leading-none flex-shrink-0"
                style={{ color: 'rgba(20,20,30,0.6)' }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
