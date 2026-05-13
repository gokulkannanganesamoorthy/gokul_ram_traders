import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MARQUEE_ITEMS = [
  'Genuine Branded Products',
  'Wholesale Pricing',
  'Plumbing and Pipes',
  'Fans and Motors',
  'Switches and Accessories',
  '15 Years of Trusted Service',
  'Bulk Orders Welcome',
  'Direct from Distributors',
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} aria-label="Brand ticker" className="border-y border-[#E5E5E5] bg-[#FAFAFA] overflow-hidden">
      <div className="flex whitespace-nowrap py-4 animate-[marquee_32s_linear_infinite]">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-6 type-label text-[#525252]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-[#D4D4D4] flex-shrink-0" />
          </span>
        ))}
      </div>
    </section>
  )
}
