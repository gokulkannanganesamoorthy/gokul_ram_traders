import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Products',  href: '#products' },
  { label: 'Brands',    href: '#brands'   },
  { label: 'Why Us',   href: '#why-us'   },
  { label: 'Contact',  href: '#contact'  },
]

const PRODUCT_LINKS = [
  { label: 'Wiring Materials',    href: '#products' },
  { label: 'Pipes & Fittings',    href: '#products' },
  { label: 'Fans & Electricals',  href: '#products' },
  { label: 'Switches',            href: '#products' },
  { label: 'Motors & Pumps',      href: '#products' },
  { label: 'Plumbing Products',   href: '#products' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#050810] border-t border-white/5 overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[#F5A623] flex items-center justify-center font-bold text-[#0A0F1E] text-xl"
                     style={{ fontFamily: 'Syne, sans-serif' }}>
                  G
                </div>
                <div className="absolute inset-0 rounded-xl bg-[#F5A623] blur-md opacity-30" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Gokul Ram Electricals
                </div>
                <div className="text-[#F5A623]/60 text-xs tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Trusted Since 2009
                </div>
              </div>
            </div>
            <p className="type-body text-white/40 max-w-sm leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tamil Nadu's trusted wholesale dealer for electrical, plumbing, wiring, motors,
              and branded materials. 15+ years of quality and service.
            </p>
            {/* Address */}
            <address className="not-italic type-body-sm text-white/35 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              141 B/2, Andalpuram, Chatrapatti Main Road,<br />
              Rajapalayam – 626108, Tamil Nadu, India
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="type-label text-[#F5A623] mb-6">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="type-body-sm text-white/45 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-0 h-px bg-[#F5A623] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="type-label text-[#F5A623] mb-6">Products</h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="type-body-sm text-white/45 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-0 h-px bg-[#F5A623] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="type-label text-white/25" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {currentYear} Gokul Ram Electricals. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse" />
            <span className="type-label text-white/25">Rajapalayam, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
