const NAV_LINKS = [
  { label: 'Products',  href: '#products' },
  { label: 'Brands',    href: '#brands'   },
  { label: 'Why Us',    href: '#why-us'   },
  { label: 'Contact',   href: '#contact'  },
]

const PRODUCT_LINKS = [
  { label: 'Wiring Materials'   },
  { label: 'Pipes and Fittings' },
  { label: 'Fans and Electricals' },
  { label: 'Switches and Sockets' },
  { label: 'Motors and Pumps'  },
  { label: 'Plumbing Products' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E5E5]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 bg-[#0A0A0A] rounded-sm flex items-center justify-center">
                <span className="text-white text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>G</span>
              </div>
              <span className="text-[#0A0A0A] font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Gokul Ram Electricals
              </span>
            </div>
            <p className="type-body text-[#737373] max-w-xs leading-relaxed mb-6">
              The best electrical shop in Rajapalayam, Tamil Nadu. Trusted wholesale dealer for
              electrical, plumbing, wiring, fans, motors, and pipes since 2009.
            </p>
            <address className="not-italic type-body-sm text-[#A3A3A3] leading-relaxed">
              141 B/2, Andalpuram, Chatrapatti Main Road,
              Rajapalayam – 626108, Tamil Nadu, India
            </address>
          </div>

          {/* Navigation */}
          <div>
            <p className="type-label text-[#A3A3A3] mb-5">Navigate</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="type-body-sm text-[#525252] hover:text-[#0A0A0A] transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="type-label text-[#A3A3A3] mb-5">Products</p>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href="#products"
                    className="type-body-sm text-[#525252] hover:text-[#0A0A0A] transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#E5E5E5] py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="type-label text-[#A3A3A3]">
            &copy; {new Date().getFullYear()} Gokul Ram Electricals. All rights reserved.
          </p>
          <p className="type-label text-[#A3A3A3]">
            Best Electrical Shop in Rajapalayam, Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  )
}
