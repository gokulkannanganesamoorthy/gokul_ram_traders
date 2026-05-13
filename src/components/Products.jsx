import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PRODUCTS = [
  {
    id: 'wiring',
    number: '01',
    title: 'Wiring Materials',
    description: 'Premium-grade wires, cables, conduits, and wiring accessories for residential and industrial installations. ISI-marked, durable, and safe.',
    specs: ['House Wiring', 'Industrial Cables', 'Conduits and Ducts', 'Wiring Accessories'],
  },
  {
    id: 'pipes',
    number: '02',
    title: 'Pipes and Fittings',
    description: 'Supreme-brand CPVC, PVC, and UPVC pipes with a complete range of fittings. For domestic plumbing, agriculture, and industrial use.',
    specs: ['CPVC Pipes', 'PVC Pipes', 'UPVC Pipes', 'All Fittings'],
  },
  {
    id: 'fans',
    number: '03',
    title: 'Fans and Electricals',
    description: 'Crompton and V-Guard ceiling fans, exhaust fans, and table fans. Energy-efficient models for homes, offices, and commercial spaces.',
    specs: ['Ceiling Fans', 'Exhaust Fans', 'Table Fans', 'Pedestal Fans'],
  },
  {
    id: 'switches',
    number: '04',
    title: 'Switches and Sockets',
    description: 'HiFi, Vinay, and Goldmedal modular switches, sockets, and wiring accessories. Clean design, reliable performance for modern spaces.',
    specs: ['Modular Switches', 'Sockets', 'Boards', 'Wiring Devices'],
  },
  {
    id: 'motors',
    number: '05',
    title: 'Motors and Pumps',
    description: 'Water pumps and electric motors for agricultural and domestic use. Monoblock pumps, submersible pumps, and centrifugal motors.',
    specs: ['Monoblock Pumps', 'Submersible Pumps', 'Agricultural Motors', 'Domestic Pumps'],
  },
  {
    id: 'plumbing',
    number: '06',
    title: 'Plumbing Products',
    description: 'Complete plumbing solutions including taps, valves, water tanks, and sanitary fittings for residential and commercial projects.',
    specs: ['Taps and Faucets', 'Ball Valves', 'Water Tanks', 'Sanitary Fittings'],
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-b border-[#E5E5E5] py-10 group"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <p className="type-label text-[#A3A3A3] mb-2">{product.number}</p>
          <h3 className="type-h3 text-[#0A0A0A]" style={{ fontFamily: 'Inter, sans-serif' }}>
            {product.title}
          </h3>
        </div>
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          className="flex-shrink-0 mt-2 text-[#D4D4D4] group-hover:text-[#0A0A0A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
        >
          <path d="M4 16L16 4M16 4H7M16 4V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Description */}
      <p className="type-body text-[#525252] max-w-xl mb-6 leading-relaxed">
        {product.description}
      </p>

      {/* Specs */}
      <div className="flex flex-wrap gap-2">
        {product.specs.map((spec) => (
          <span
            key={spec}
            className="text-xs text-[#525252] bg-[#F5F5F5] border border-[#E5E5E5] px-3 py-1.5 rounded-full"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {spec}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Products() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="products" className="bg-white section-pad" aria-label="Products — Electrical and Plumbing Materials">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="type-label text-[#737373] mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="type-h1 text-[#0A0A0A] max-w-2xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Everything you need.
            <br />
            One trusted source.
          </motion.h2>
        </div>

        {/* Product list */}
        <div>
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
