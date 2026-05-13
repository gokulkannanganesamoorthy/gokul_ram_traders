import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [ref, inView] = useInView({ once: true });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      aria-label="Home — Gokul Ram Electricals"
      className="min-h-screen flex items-center justify-center pt-20 bg-transparent relative overflow-hidden"
    >
      <div className="container-wide relative z-10 text-center">
        <h1
          className={`text-7xl md:text-[10rem] lg:text-[13rem] font-light tracking-tighter leading-[0.8] mb-16 transition-all duration-[1500ms] delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          Gokul Ram
          <br />
          <span className="font-medium">Electricals</span>
        </h1>

        <p
          className={` hidden text-brand-gray-600 text-base md:text-lg mb-16 transition-all duration-[1500ms] delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          Tamil Nadu's most trusted wholesale supplier for electricals, plumbing
          & piping.
        </p>
        <p
          className={`text-brand-gray-600 text-base md:text-lg mb-16 transition-all duration-[1500ms] delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          Virudhunagar District's most trusted wholesale supplier for
          electricals, plumbing & piping.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-[1500ms] delay-700 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="btn-primary"
          >
            <span>Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
}
