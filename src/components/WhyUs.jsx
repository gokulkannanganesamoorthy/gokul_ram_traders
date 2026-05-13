import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const REASONS = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <path
          d="M16 3l2.5 7.7H27l-6.6 4.8 2.5 7.7L16 19.4l-6.9 3.8 2.5-7.7L5 10.7h8.5z"
          stroke="#F5A623"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: '15+ Years of Trust',
    description:
      'Over a decade and a half of serving contractors, builders, and homeowners across Tamil Nadu. Our track record speaks for itself.',
    color: '#F5A623',
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <path
          d="M16 4l3 9H28l-7.5 5.5 3 9L16 22l-7.5 5.5 3-9L4 13h9z"
          stroke="#34D399"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="16" r="4" stroke="#34D399" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Genuine Branded Products',
    description:
      'Every product we sell is 100% authentic — sourced directly from authorized distributors. No counterfeits, no compromises.',
    color: '#34D399',
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <rect
          x="4"
          y="8"
          width="24"
          height="16"
          rx="3"
          stroke="#60A5FA"
          strokeWidth="1.8"
        />
        <path
          d="M10 16h4M18 12l4 4-4 4"
          stroke="#60A5FA"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Wholesale Pricing',
    description:
      "Best-in-market wholesale rates for bulk orders. Whether you're a contractor or retailer, you get the best deal, every time.",
    color: '#60A5FA',
  },
  {
    number: '04',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <path
          d="M16 4C10 4 6 8.5 6 14c0 6 5 11 10 14 5-3 10-8 10-14 0-5.5-4-10-10-10z"
          stroke="#A78BFA"
          strokeWidth="1.8"
        />
        <path
          d="M12 15l3 3 6-6"
          stroke="#A78BFA"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Reliable Customer Support',
    description:
      'Our team is always ready to help you choose the right product, plan quantities, and resolve any concerns quickly.',
    color: '#A78BFA',
  },
  {
    number: '05',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <path
          d="M6 24V12l10-8 10 8v12"
          stroke="#FB923C"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <rect
          x="12"
          y="18"
          width="8"
          height="6"
          rx="1"
          stroke="#FB923C"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: 'Long-Lasting Quality',
    description:
      'We stock only durable materials that stand the test of time. Because quality is not negotiable when it comes to your home or project.',
    color: '#FB923C',
  },
];

function ReasonRow({ reason, index, totalCount }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`flex items-start gap-8 group relative ${
        index < totalCount - 1 ? 'pb-14' : ''
      }`}
    >
      {/* Vertical connecting line */}
      {index < totalCount - 1 && (
        <div className="absolute left-7 top-14 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
      )}

      {/* Number + Icon */}
      <div className="relative flex-shrink-0">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
          style={{
            background: `${reason.color}15`,
            border: `1.5px solid ${reason.color}30`,
          }}
        >
          {reason.icon}
        </div>
        <div
          className="absolute -top-2 -right-2 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
          style={{
            background: reason.color,
            color: '#0A0F1E',
            fontFamily: 'Syne, sans-serif',
            fontSize: '0.6rem',
          }}
        >
          {reason.number}
        </div>
      </div>

      {/* Content */}
      <div className="pt-1">
        <h3
          className="type-h4 text-white mb-2 group-hover:text-gradient transition-all duration-300"
          style={{ fontFamily: 'Syne, sans-serif', color: 'white' }}
        >
          {reason.title}
        </h3>
        <p
          className="type-body text-white/50 max-w-xl leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {reason.description}
        </p>
      </div>

      {/* Hover accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
        className="absolute left-0 top-0 bottom-0 w-0.5 origin-top opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: reason.color }}
      />
    </motion.div>
  );
}

export default function WhyUs() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      id="why-us"
      className="relative py-32 bg-[#050810] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5A623]/4 blur-3xl rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Header + decorative element */}
          <div>
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              className="mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="type-label text-[#F5A623]">Why Choose Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="type-h1 text-white mb-8"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Built on Trust,{' '}
              <span className="text-gradient">Backed by Quality</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="type-body-lg text-white/45 mb-12 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              When you choose Gokul Ram Electricals, you're choosing decades of
              expertise, genuine products, and a team that truly cares about
              your project's success.
            </motion.p>

            {/* Decorative quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="glass-amber rounded-3xl p-8 relative overflow-hidden"
            >
              <div
                className="absolute -top-4 -left-2 text-8xl leading-none pointer-events-none select-none"
                style={{
                  color: '#F5A623',
                  opacity: 0.15,
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                "
              </div>
              <p
                className="type-body-lg text-white/80 italic relative z-10 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Quality is not what you see on the surface — it's what holds
                your project together for years to come.
              </p>
              <p className="type-label text-[#F5A623] mt-4 relative z-10">
                — Gokul Ram Electricals
              </p>
            </motion.div>
          </div>

          {/* Right: Reasons list */}
          <div className="lg:pt-16">
            {REASONS.map((reason, i) => (
              <ReasonRow
                key={reason.number}
                reason={reason}
                index={i}
                totalCount={REASONS.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
