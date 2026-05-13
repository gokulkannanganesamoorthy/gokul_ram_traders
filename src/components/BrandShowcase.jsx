import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BRANDS = [
  {
    name: 'Supreme',
    category: 'Pipes & Fittings',
    color: '#F5A623',
    initial: 'S',
    description: "India's #1 piping solutions brand",
  },
  {
    name: 'Crompton',
    category: 'Fans & Electricals',
    color: '#60A5FA',
    initial: 'C',
    description: 'Pioneer in electrical appliances since 1937',
  },
  {
    name: 'V-Guard',
    category: 'Electricals',
    color: '#34D399',
    initial: 'V',
    description: 'Trusted voltage protection & home electricals',
  },
  {
    name: 'HiFi',
    category: 'Switches',
    color: '#A78BFA',
    initial: 'H',
    description: 'Premium modular wiring devices',
  },
  {
    name: 'Vinay',
    category: 'Switches & Sockets',
    color: '#FB923C',
    initial: 'V',
    description: 'Quality wiring accessories for modern homes',
  },
  {
    name: 'Goldmedal',
    category: 'Wiring Devices',
    color: '#FBBF24',
    initial: 'G',
    description: 'Award-winning modular switches & accessories',
  },
]

const MARQUEE_BRANDS = [...BRANDS, ...BRANDS]

function BrandCard({ brand, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-500 overflow-hidden cursor-default"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
        style={{ background: `radial-gradient(circle at center, ${brand.color}12, transparent 70%)` }}
      />

      <div className="relative z-10">
        {/* Brand avatar */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-extrabold mb-4 transition-all duration-500 group-hover:scale-110"
          style={{
            background: `${brand.color}20`,
            border: `1.5px solid ${brand.color}40`,
            color: brand.color,
            fontFamily: 'Syne, sans-serif',
          }}
        >
          {brand.initial}
        </div>

        <h3 className="type-h4 text-white mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>
          {brand.name}
        </h3>
        <p className="type-label mb-3" style={{ color: brand.color }}>
          {brand.category}
        </p>
        <p className="type-body-sm text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
          {brand.description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{ background: `linear-gradient(90deg, ${brand.color}60, transparent)` }}
        />
      </div>
    </motion.div>
  )
}

export default function BrandShowcase() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="brands" className="relative py-32 bg-[#0A0F1E] overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/4 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/4 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="type-label text-[#F5A623]">Trusted Brands</span>
            <div className="w-8 h-px bg-[#F5A623]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="type-h1 text-white mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Brands We Proudly{' '}
            <span className="text-gradient">Carry</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="type-body-lg text-white/45 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We partner only with India's most reliable manufacturers — so every
            product you source from us is built to last.
          </motion.p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {BRANDS.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} index={i} />
          ))}
        </div>

        {/* Marquee Logo Ticker */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0F1E] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0F1E] to-transparent z-10" />

          <div className="flex gap-6 animate-[marquee_18s_linear_infinite]">
            {MARQUEE_BRANDS.map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 glass rounded-2xl px-8 py-5 flex items-center gap-4 hover:bg-white/5 transition-colors duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0"
                  style={{
                    background: `${brand.color}20`,
                    color: brand.color,
                    fontFamily: 'Syne, sans-serif',
                  }}
                >
                  {brand.initial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm whitespace-nowrap" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {brand.name}
                  </div>
                  <div className="type-label whitespace-nowrap" style={{ color: brand.color }}>
                    {brand.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
