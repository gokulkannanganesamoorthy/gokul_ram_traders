import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden bg-white"
    >
      <div
        className={`text-center max-w-5xl relative z-20 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
      >
        <h1 className="text-[clamp(3.5rem,12vw,14.5rem)] font-light leading-[0.85] tracking-tight mb-12">
          Gokul Ram
          <br />
          <span className="font-medium">Electricals.</span>
        </h1>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="px-12 py-6 bg-brand-black text-brand-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-gray-600 transition-all shadow-xl"
          >
            Direct Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
