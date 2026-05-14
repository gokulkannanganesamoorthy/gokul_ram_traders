import { useInView } from '../hooks/useInView';

const FEATURES = [
  {
    id: '01',
    title: 'Trusted Legacy',
    desc: 'Serving Rajapalayam for over 13 years with genuine products.',
    detail: 'Since 2013, we have been the cornerstone of local infrastructure projects.',
  },
  {
    id: '02',
    title: 'Authorized Dealer',
    desc: 'Sourcing directly from Supreme, Global, and ELGI.',
    detail: 'Eliminating middle-men to ensure you get authentic products at the best prices.',
  },
  {
    id: '03',
    title: 'Project Ready',
    desc: 'Wholesale inventory and installation for contractors.',
    detail: 'Large-scale stock availability for immediate pickup and professional installation support.',
  },
];

export default function WhyUs() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About GOKULRAM ELECTRICALS"
      className="section-padding bg-transparent relative overflow-hidden"
    >
      <div className="container-wide relative z-10">
        <div
          className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400 mb-12">
            Our Roots
          </p>
          <h2 className="text-6xl md:text-[8rem] font-light tracking-tighter leading-[0.8] mb-24">
            Built on Trust.
            <br />
            <span className="font-medium text-brand-gray-400">
              Powered by Quality.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.id}
              className={`group relative h-auto lg:h-[520px] transition-all duration-1000 overflow-hidden border border-brand-black/5 rounded-[40px] hover:border-brand-black/20 hover:shadow-2xl p-8 md:p-12 flex flex-col justify-between cursor-pointer bg-white/50 backdrop-blur-sm ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-mono text-brand-gray-400">
                      {feat.id}
                    </span>
                  </div>
                  {/* Visual Affordance for Desktop */}
                  <div className="hidden lg:flex w-10 h-10 rounded-full border border-brand-black/10 items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all duration-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="group-hover:rotate-90 transition-transform duration-500"
                    >
                      <path
                        d="M6 1V11M1 6H11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-brand-black group-hover:text-white"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl font-medium tracking-tight mb-4 group-hover:lg:translate-y-[-10px] transition-transform duration-500">
                  {feat.title}
                </h3>
                <p className="text-brand-gray-600 leading-relaxed lg:group-hover:opacity-0 transition-opacity duration-500">
                  {feat.desc}
                </p>

                {/* Always visible on mobile */}
                <p className="lg:hidden mt-8 text-sm font-medium leading-relaxed text-brand-black border-t border-brand-black/5 pt-8">
                  {feat.detail}
                </p>
              </div>

              {/* Desktop Hidden Detail Layer */}
              <div className="hidden lg:block absolute inset-x-12 bottom-12 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <p className="text-lg font-medium leading-relaxed text-brand-black mb-8">
                  {feat.detail}
                </p>
                <div className="w-12 h-px bg-brand-black" />
              </div>

              {/* Hover Background Interaction - Desktop Only */}
              <div className="hidden lg:block absolute inset-0 bg-brand-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
