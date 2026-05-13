import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-20 bg-transparent relative overflow-hidden"
    >
      <div className="container-wide relative z-10 text-center">
        <p
          className={`text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gray-400 mb-10 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          Established 2013 • Rajapalayam
        </p>

        <h1
          className={`text-7xl md:text-[10rem] lg:text-[13rem] font-light tracking-tighter leading-[0.8] mb-16 transition-all duration-[1500ms] delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          Gokul Ram
          <br />
          <span className="font-medium">Electricals</span>
        </h1>

        <div
          className={`flex flex-col items-center transition-all duration-[1500ms] delay-700 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <a href="#contact" className="btn-primary">
            <span>Get a Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
}
