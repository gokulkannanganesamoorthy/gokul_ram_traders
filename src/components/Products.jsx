const PRODUCTS = [
  { 
    id: '01', 
    name: 'Wiring & Cables', 
    desc: 'High-grade copper wiring for residential and industrial safety.',
    tags: ['FR', 'FRLS', 'Armored']
  },
  { 
    id: '02', 
    name: 'Pipes & Fittings', 
    desc: 'Durable PVC and GI piping systems for conduit protection.',
    tags: ['Heavy Duty', 'Fire Retardant']
  },
  { 
    id: '03', 
    name: 'Motors & Pumps', 
    desc: 'Energy-efficient solutions for water management and industry.',
    tags: ['Single Phase', 'Three Phase']
  },
  { 
    id: '04', 
    name: 'Switchgear', 
    desc: 'Modern modular switches and advanced circuit protection.',
    tags: ['MCB', 'RCCB', 'Smart Home']
  }
]

export default function Products() {
  return (
    <section id="products" className="bg-brand-gray-100 border-t border-brand-gray-200">
      <div className="container-wide">
        <div className="grid-modular">
          
          <div className="grid-cell md:col-span-12 py-16">
            <p className="label-mono">Core Categories</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Product Ecosystem</h2>
          </div>

          {PRODUCTS.map((product) => (
            <div key={product.id} className="grid-cell md:col-span-6 group cursor-pointer hover:bg-brand-black transition-colors duration-500">
              <div className="flex justify-between items-start mb-20">
                <span className="text-brand-gray-400 font-mono text-sm group-hover:text-brand-gray-600 transition-colors">{product.id}</span>
                <div className="w-12 h-12 border border-brand-gray-200 flex items-center justify-center rounded-full group-hover:bg-brand-white group-hover:border-transparent transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-brand-black">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 group-hover:text-brand-white transition-colors">
                  {product.name}
                </h3>
                <p className="text-brand-gray-600 max-w-sm group-hover:text-brand-gray-400 transition-colors">
                  {product.desc}
                </p>
                <div className="flex gap-2 mt-8 flex-wrap">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-brand-gray-100 rounded-full text-[9px] uppercase tracking-widest font-bold text-brand-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
