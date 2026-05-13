import { useInView } from '../hooks/useInView'

const BRANDS = ['Supreme', 'Crompton', 'V-Guard', 'Goldmedal', 'Havells', 'Finolex']

export default function BrandShowcase() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="brands" ref={ref} className="section-padding bg-white relative">
      <div className="container-wide text-center">
        <p className={`text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-12 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          Direct Partnerships
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-16">
          {BRANDS.map((brand, i) => (
            <div 
              key={brand}
              className={`transition-all duration-1000 group ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h4 className="text-3xl md:text-5xl font-light tracking-tighter text-brand-gray-200 group-hover:text-brand-black group-hover:scale-110 transition-all cursor-pointer">
                {brand}
              </h4>
            </div>
          ))}
        </div>

        <div className={`mt-24 p-12 glass rounded-[40px] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-sm text-brand-gray-600 leading-relaxed italic">
            "Authorized dealership ensures that every piece of infrastructure you buy from us is protected by original manufacturer warranties."
          </p>
        </div>
      </div>
    </section>
  )
}
