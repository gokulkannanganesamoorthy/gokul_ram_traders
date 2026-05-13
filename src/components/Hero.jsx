import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-20 bg-white relative overflow-hidden"
    >
      {/* Dynamic Industrial Background - Subtle Drawing Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-brand-black rounded-full animate-pulse opacity-20" />
        <div className="absolute bottom-1/4 right-10 w-96 h-px bg-brand-black animate-in fade-in slide-in-from-right duration-1000" />
      </div>

      <div className="container-wide relative z-10 text-center">
        <p
          className={`text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gray-400 mb-8 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          Established 2013 • Rajapalayam
        </p>

        <h1
          className={`text-7xl md:text-[10rem] lg:text-[13rem] font-light tracking-tighter leading-[0.8] mb-12 transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          Gokul Ram
          <br />
          <span className="font-medium">Electricals</span>
        </h1>

        <div
          className={`flex flex-col items-center gap-10 transition-all duration-1000 delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <a href="#contact" className="btn-primary">
            <span>Get a Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
}
