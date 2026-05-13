// #1 — Wire Uncoiling Divider
// Animated SVG cable that unrolls left-to-right on scroll into view
import { useInView } from '../hooks/useInView';

export default function WireDivider() {
  const [ref, inView] = useInView({ once: true, rootMargin: '-20% 0px' });

  return (
    <div ref={ref} className="container-wide py-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-7"
      >
        {/* Outer jacket (grey) */}
        <path
          d="M0 14 Q300 6 600 14 Q900 22 1200 14"
          stroke="#d1d1d6"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: 1300,
            strokeDashoffset: inView ? 0 : 1300,
            transition: 'stroke-dashoffset 1.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
        {/* Inner copper core highlight */}
        <path
          d="M0 14 Q300 6 600 14 Q900 22 1200 14"
          stroke="#f5c57a"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: 1300,
            strokeDashoffset: inView ? 0 : 1300,
            transition: 'stroke-dashoffset 1.8s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        />
        {/* Cable band markings */}
        {[200, 400, 600, 800, 1000].map((x) => (
          <line
            key={x}
            x1={x} y1="9"
            x2={x} y2="19"
            stroke="#a1a1aa"
            strokeWidth="1.5"
            style={{
              opacity: inView ? 0.5 : 0,
              transition: `opacity 0.4s ease ${0.8 + x / 3000}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
