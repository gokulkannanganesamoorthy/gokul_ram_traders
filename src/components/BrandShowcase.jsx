const BRANDS = [
  { name: 'Supreme', type: 'Piping Systems' },
  { name: 'Crompton', type: 'Consumer Electricals' },
  { name: 'V-Guard', type: 'Power Solutions' },
  { name: 'Goldmedal', type: 'Modular Switches' },
  { name: 'Havells', type: 'Industrial Switchgear' },
  { name: 'Finolex', type: 'Wires & Cables' }
]

export default function BrandShowcase() {
  return (
    <section id="brands" className="bg-brand-gray-100 border-t border-brand-gray-200">
      <div className="container-wide">
        <div className="grid-modular">
          
          <div className="grid-cell md:col-span-4 bg-brand-white">
            <p className="label-mono">Partnerships</p>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Authorized Dealer</h2>
            <p className="mt-8 text-brand-gray-600 leading-relaxed">
              We maintain direct partnerships with India's leading electrical brands to ensure 100% genuine products and manufacturer warranties for every purchase.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-brand-gray-200">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="bg-brand-white p-8 flex flex-col justify-between aspect-square group cursor-pointer hover:bg-brand-gray-100 transition-colors">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-400 group-hover:text-brand-black transition-colors">{brand.type}</span>
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">{brand.name}</h4>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
