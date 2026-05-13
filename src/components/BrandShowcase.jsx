import { useInView } from '../hooks/useInView';

const BRANDS = [
  'Supreme',
  'Crompton',
  'V-Guard',
  'Goldmedal',
  'Hi-Fi',
  'Oriant',
  'Kundan',
  'LEO',
  'Ganga',
  'Surya',
  'Almonard',
  'Vinay',
  'Legrand',
  'Vijay',
  'Metro',
  'Atlas',
  'KVB',
  'Frixon',
  'Life',
  'Zoloto',
  'Apaxx',
  'Meet',
  'L&T',
  'Shivasu',
];

export default function BrandShowcase() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section
      id="brands"
      ref={ref}
      className="section-padding bg-white border-t border-brand-black/5"
    >
      <div className="container-wide text-center">
        <p
          className={`text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-12 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          Direct Partnerships
        </p>

        <div className="flex flex-wrap justify-center gap-x-20 gap-y-16">
          {BRANDS.map((brand, i) => (
            <div
              key={brand}
              className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h4 className="text-3xl md:text-5xl font-light  text-brand-black tracking-tighter  hover:text-brand-gray-400 transition-all">
                {brand}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
