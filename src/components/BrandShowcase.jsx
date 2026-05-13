import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BRANDS = [
  {
    name: 'Supreme',
    category: 'Pipes and Fittings',
    detail: 'India\'s number one piping brand. CPVC, PVC, UPVC pipes and complete fitting solutions.',
    since: '1942',
  },
  {
    name: 'Crompton',
    category: 'Fans and Electricals',
    detail: 'Pioneer in electrical appliances. Ceiling fans, exhaust fans, and home electricals.',
    since: '1937',
  },
  {
    name: 'V-Guard',
    category: 'Electricals and Fans',
    detail: 'Trusted across India for voltage stabilizers, fans, and home electrical products.',
    since: '1977',
  },
  {
    name: 'Goldmedal',
    category: 'Wiring Devices',
    detail: 'Premium modular switches, sockets, and wiring accessories for modern interiors.',
    since: '1997',
  },
  {
    name: 'HiFi',
    category: 'Modular Switches',
    detail: 'Clean, durable modular wiring devices for residential and commercial projects.',
    since: '—',
  },
  {
    name: 'Vinay',
    category: 'Switches and Sockets',
    detail: 'Reliable wiring accessories and switch boards for everyday home wiring needs.',
    since: '—',
  },
]

const MARQUEE_BRANDS = [...BRANDS, ...BRANDS]

function BrandRow({ brand, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="grid grid-cols-12 gap-6 border-b border-[#E5E5E5] py-8 group items-start"
    >
      {/* Name */}
      <div className="col-span-12 sm:col-span-3">
        <p className="type-label text-[#A3A3A3] mb-1">0{index + 1}</p>
        <h3 className="text-[#0A0A0A] font-semibold text-lg" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
          {brand.name}
        </h3>
      </div>

      {/* Category */}
      <div className="col-span-12 sm:col-span-3">
        <span
          className="text-xs text-[#525252] bg-[#F5F5F5] border border-[#E5E5E5] px-3 py-1.5 rounded-full"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {brand.category}
        </span>
      </div>

      {/* Detail */}
      <div className="col-span-12 sm:col-span-5">
        <p className="type-body text-[#525252] leading-relaxed">{brand.detail}</p>
      </div>

      {/* Arrow */}
      <div className="col-span-12 sm:col-span-1 flex justify-end items-center">
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className="text-[#D4D4D4] group-hover:text-[#0A0A0A] transition-colors duration-200"
        >
          <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.div>
  )
}

export default function BrandShowcase() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="brands" className="bg-[#FAFAFA] section-pad border-t border-[#E5E5E5]" aria-label="Brands we carry">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            className="type-label text-[#737373] mb-4"
          >
            Brands We Carry
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="type-h1 text-[#0A0A0A]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Only the best brands.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="type-body text-[#737373] max-w-xs sm:text-right"
            >
              Authorized dealers stocking genuine, warranty-backed products.
            </motion.p>
          </div>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-12 gap-6 pb-4 border-b border-[#E5E5E5] hidden sm:grid">
          <p className="col-span-3 type-label text-[#A3A3A3]">Brand</p>
          <p className="col-span-3 type-label text-[#A3A3A3]">Category</p>
          <p className="col-span-5 type-label text-[#A3A3A3]">About</p>
        </div>

        {/* Brand rows */}
        <div>
          {BRANDS.map((brand, i) => (
            <BrandRow key={brand.name} brand={brand} index={i} />
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
          <div className="flex gap-3 animate-[marquee_22s_linear_infinite] whitespace-nowrap">
            {MARQUEE_BRANDS.map((brand, i) => (
              <span
                key={i}
                className="flex-shrink-0 text-sm font-medium text-[#0A0A0A] border border-[#E5E5E5] bg-white px-5 py-2.5 rounded-full"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
