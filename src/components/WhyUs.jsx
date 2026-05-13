import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const REASONS = [
  {
    number: '01',
    title: '15 years of trusted service',
    description: 'Since 2009, we have served contractors, builders, architects, and homeowners across Rajapalayam and Tamil Nadu. Our long-standing reputation is built on reliability and honest pricing.',
  },
  {
    number: '02',
    title: 'Genuine branded products only',
    description: 'Every product we stock is 100% authentic — sourced directly from authorized distributors. No imitations, no compromises. What you see is exactly what you get.',
  },
  {
    number: '03',
    title: 'Best wholesale prices',
    description: 'We operate on wholesale margins, which means you pay less whether you are buying a single item or a full project\'s worth of materials. Transparent pricing, no hidden costs.',
  },
  {
    number: '04',
    title: 'Reliable customer support',
    description: 'Our team has deep product knowledge built over 15 years. We help you choose the right product for your application, estimate quantities, and resolve issues quickly.',
  },
  {
    number: '05',
    title: 'Long-lasting quality',
    description: 'We stock only products we trust. Materials that meet Indian standards and stand the test of time — because quality problems cost more than the savings on cheap alternatives.',
  },
]

function ReasonRow({ reason, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="grid grid-cols-12 gap-6 border-b border-[#E5E5E5] py-10"
    >
      <div className="col-span-12 sm:col-span-2">
        <span className="type-label text-[#A3A3A3]">{reason.number}</span>
      </div>
      <div className="col-span-12 sm:col-span-4">
        <h3
          className="text-[#0A0A0A] font-semibold text-lg leading-snug"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
        >
          {reason.title}
        </h3>
      </div>
      <div className="col-span-12 sm:col-span-6">
        <p className="type-body text-[#525252] leading-relaxed">{reason.description}</p>
      </div>
    </motion.div>
  )
}

export default function WhyUs() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="why-us" className="bg-white section-pad border-t border-[#E5E5E5]" aria-label="Why choose Gokul Ram Electricals">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            className="type-label text-[#737373] mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="type-h1 text-[#0A0A0A]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Built on trust.
            <br />
            Backed by quality.
          </motion.h2>
        </div>

        {/* Reasons */}
        <div>
          {REASONS.map((reason, i) => (
            <ReasonRow key={reason.number} reason={reason} index={i} />
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-l-2 border-[#0A0A0A] pl-8 max-w-2xl"
        >
          <p
            className="text-[#0A0A0A] font-medium leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', letterSpacing: '-0.02em' }}
          >
            "Quality is not what you see on the surface — it is what holds
            your project together for years to come."
          </p>
          <footer className="mt-4 type-label text-[#737373]">
            Gokul Ram Electricals, Rajapalayam
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
