import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '15+', label: 'Years of Trusted Service', suffix: '' },
  { value: '500', label: 'Products in Stock', suffix: '+' },
  { value: '6', label: 'Premium Brands', suffix: '+' },
  { value: '1000', label: 'Happy Customers', suffix: '+' },
]

const MARQUEE_ITEMS = [
  '⚡ Genuine Branded Products',
  '🔩 Wholesale Pricing',
  '💧 Plumbing & Pipes',
  '🌀 Fans & Motors',
  '🔌 Switches & Accessories',
  '🛡️ 15+ Years of Trust',
  '📦 Bulk Orders Welcome',
  '🏭 Direct from Distributors',
]

function CountingNumber({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <span ref={ref}>
      {inView ? value : '0'}{suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0A0F1E]">
      {/* Marquee Strip */}
      <div className="border-y border-[#F5A623]/15 bg-[#F5A623]/5 py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 px-8 type-label text-[#F5A623]/80"
            >
              {item}
              <span className="text-[#F5A623]/30">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#0A0F1E] px-8 py-12 flex flex-col items-center text-center group hover:bg-[#0F1628] transition-colors duration-500"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#F5A623]/0 to-[#F5A623]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className="text-gradient mb-3 relative z-10"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                <CountingNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="type-body-sm text-white/45 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                {stat.label}
              </p>

              {/* Bottom accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.6 }}
                className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#F5A623]/60 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
