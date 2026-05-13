import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PRODUCTS = [
  {
    id: 'wiring',
    number: '01',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M8 24h32M8 16h16M24 32h16" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="36" cy="16" r="4" stroke="#F5A623" strokeWidth="2"/>
        <circle cx="12" cy="32" r="4" stroke="#F5A623" strokeWidth="2"/>
      </svg>
    ),
    title: 'Wiring Materials',
    description: 'Premium-grade wires, cables, conduits, and wiring accessories for residential and industrial installations.',
    tags: ['House Wiring', 'Industrial', 'Conduits', 'Cables'],
    accent: '#F5A623',
  },
  {
    id: 'pipes',
    number: '02',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="6" y="20" width="36" height="8" rx="4" stroke="#60A5FA" strokeWidth="2"/>
        <path d="M14 20v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" stroke="#60A5FA" strokeWidth="2"/>
        <path d="M18 28v6" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 28v6" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Pipes & Fittings',
    description: 'Supreme-brand CPVC, PVC, and UPVC pipes with complete fitting solutions for all plumbing needs.',
    tags: ['Supreme', 'CPVC', 'PVC', 'UPVC'],
    accent: '#60A5FA',
  },
  {
    id: 'fans',
    number: '03',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="4" stroke="#A78BFA" strokeWidth="2"/>
        <path d="M24 20c0-6-3-10-7-10s-5 5-1 8" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 24c6 0 10-3 10-7s-5-5-8-1" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 28c0 6 3 10 7 10s5-5 1-8" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 24c-6 0-10 3-10 7s5 5 8 1" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Fans & Electricals',
    description: 'Crompton and V-Guard ceiling fans, table fans, and electrical accessories with energy-efficient models.',
    tags: ['Crompton', 'V-Guard', 'Ceiling', 'Table Fans'],
    accent: '#A78BFA',
  },
  {
    id: 'switches',
    number: '04',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="8" y="12" width="32" height="24" rx="4" stroke="#34D399" strokeWidth="2"/>
        <circle cx="18" cy="24" r="4" stroke="#34D399" strokeWidth="2"/>
        <rect x="28" y="20" width="6" height="8" rx="2" stroke="#34D399" strokeWidth="2"/>
      </svg>
    ),
    title: 'Switches & Accessories',
    description: 'HiFi, Vinay, and Goldmedal modular switches, sockets, and wiring accessories for modern homes.',
    tags: ['HiFi', 'Vinay', 'Goldmedal', 'Modular'],
    accent: '#34D399',
  },
  {
    id: 'motors',
    number: '05',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="10" y="16" width="28" height="16" rx="3" stroke="#FB923C" strokeWidth="2"/>
        <circle cx="24" cy="24" r="5" stroke="#FB923C" strokeWidth="2"/>
        <path d="M6 24h4M38 24h4" stroke="#FB923C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 12v4M24 32v4" stroke="#FB923C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Motors & Pumps',
    description: 'Agricultural and domestic water pumps, motors, and related accessories from leading manufacturers.',
    tags: ['Water Pumps', 'Agricultural', 'Domestic', 'Monoblock'],
    accent: '#FB923C',
  },
  {
    id: 'plumbing',
    number: '06',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M12 8v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8" stroke="#F472B6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 12h32" stroke="#F472B6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 28v12" stroke="#F472B6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 40h12" stroke="#F472B6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Plumbing Products',
    description: 'Complete range of plumbing solutions including taps, valves, tanks, and sanitary fittings.',
    tags: ['Taps', 'Valves', 'Tanks', 'Sanitary'],
    accent: '#F472B6',
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass rounded-3xl p-8 hover:bg-white/5 transition-all duration-500 overflow-hidden cursor-default"
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
        style={{ background: `radial-gradient(circle at top left, ${product.accent}10, transparent 60%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${product.accent}60, transparent)` }}
      />

      {/* Number */}
      <div
        className="absolute top-6 right-8 text-7xl font-extrabold leading-none pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-20"
        style={{ fontFamily: 'Syne, sans-serif', color: product.accent, opacity: 0.06 }}
      >
        {product.number}
      </div>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        style={{ background: `${product.accent}15`, border: `1px solid ${product.accent}30` }}
      >
        {product.icon}
      </div>

      {/* Content */}
      <h3 className="type-h4 text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
        {product.title}
      </h3>
      <p className="type-body-sm text-white/50 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
        {product.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="type-label px-3 py-1 rounded-full"
            style={{
              background: `${product.accent}12`,
              border: `1px solid ${product.accent}25`,
              color: product.accent,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Products() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="products" className="relative py-32 bg-[#050810] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F5A623]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="type-label text-[#F5A623]">What We Offer</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="type-h1 text-white max-w-xl"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Everything You Need,{' '}
              <span className="text-gradient">One Trusted Source</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="type-body text-white/45 max-w-sm lg:text-right"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              From wiring to waterworks — we stock genuine branded materials
              for every electrical and plumbing need.
            </motion.p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
