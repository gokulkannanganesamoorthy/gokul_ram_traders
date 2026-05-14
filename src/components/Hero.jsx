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
      aria-label="Home - GOKULRAM ELECTRICALS"
      className="min-h-screen flex items-center justify-center pt-20 bg-transparent relative overflow-hidden"
    >
      <div className="container-wide relative z-10 text-center">
        {/* Main Heading Mask Reveal */}
        <div
          className={`mb-16 mask-reveal w-max mx-auto ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <h1 className="mask-reveal-content text-7xl md:text-[10rem] lg:text-[13rem] font-medium tracking-tighter leading-[0.8] uppercase text-brand-black pr-4 md:pr-12">
            GOKULRAM
            <br />
            ELECTRICALS
          </h1>
        </div>

        {/* Subtext Reveal */}
        <div
          className={`mb-16 mask-reveal ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="mask-reveal-content text-brand-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Rajapalayam and Tamil Nadu's most trusted wholesale supplier for
            electricals, plumbing & piping. Delivering industrial quality across
            places.
          </p>
        </div>

        {/* Buttons Reveal - Custom Pipe Slide Interaction */}
        <div
          className={`flex flex-col items-center justify-center transition-all duration-[1500ms] delay-700 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="btn-primary group"
          >
            {/* The Pipes */}
            <div className="pipe-layer pipe-1"></div>
            <div className="pipe-layer pipe-2"></div>
            <div className="pipe-layer pipe-3"></div>

            <span>Get a Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
}
