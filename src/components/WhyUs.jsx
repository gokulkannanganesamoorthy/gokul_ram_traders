import { useInView } from '../hooks/useInView';

const FEATURES = [
  {
    title: 'Trusted Legacy',
    desc: 'Serving Rajapalayam for over 13 years with genuine products.',
  },
  {
    title: 'Authorized Dealer',
    desc: 'Sourcing directly from top brands.',
  },
  {
    title: 'Stock Ready',
    desc: 'Wholesale inventory and bulk supply for contractors.',
  },
  {
    title: 'Wide Range & Best Price',
    desc: 'Wide Range of Products from Top Brands at Best Price.',
  },
  {
    title: 'Quality & Reliability',
    desc: 'Quality & Reliability Guaranteed.',
  },
];

export default function WhyUs() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section id="why-us" ref={ref} className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div
            className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-6">
              Our Roots
            </p>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">
              Built on Trust.
              <br />
              Powered by <span className="font-medium italic">Quality.</span>
            </h2>
            <div className="space-y-12">
              {FEATURES.map((feat, i) => (
                <div key={feat.title} className="flex gap-8 group">
                  <span className="text-brand-black font-mono text-sm mt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{feat.title}</h4>
                    <p className="text-brand-gray-600 max-w-sm">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <div className="aspect-square bg-brand-gray-100 rounded-[60px] flex flex-col items-center justify-center p-12 md:p-20 text-center">
              <h3 className="text-3xl font-medium mb-6 tracking-tight">
                Rajapalayam Legacy
              </h3>
              <p className="text-xl font-light text-brand-gray-600 leading-relaxed">
                "We build long-term customer relationships through fair pricing
                and authentic guidance."
              </p>
              <div className="mt-12 pt-12 border-t border-brand-black/5 w-full flex justify-center gap-12">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-400 mb-1">
                    Establishment
                  </p>
                  <p className="font-medium">2013</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-400 mb-1">
                    Location
                  </p>
                  <p className="font-medium">Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
