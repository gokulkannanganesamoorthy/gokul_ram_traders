import { useInView } from '../hooks/useInView';

export default function CTA() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-transparent border-t border-brand-black/5"
    >
      <div className="container-wide">
        <div
          className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-32">
            {/* Header */}
            <div className="max-w-sm">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gray-400 mb-4 md:mb-6">
                Connect
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4 md:mb-8">
                Ready for your <br /> next project?
              </h2>
              <p className="text-brand-gray-600 text-sm leading-relaxed">
                Contact our technical team for wholesale pricing, stock
                availability, and installation support.
              </p>
            </div>

            {/* 2×2 contact grid */}
            <div className="flex-1 w-full grid grid-cols-2 gap-y-10 gap-x-6 md:gap-20">
              {/* Call */}
              <div className="group min-w-0">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-2 md:mb-3">
                  Call Support
                </span>
                <a
                  href="tel:+919364501230"
                  className="text-base md:text-2xl font-medium tracking-tight hover:text-brand-gray-400 transition-colors block mb-1 md:mb-2 break-all"
                >
                  +91 93645 01230
                </a>
                <p className="text-[10px] text-brand-gray-400">
                  Available 8:30 AM — 8:30 PM
                </p>
              </div>

              {/* WhatsApp */}
              <div className="group min-w-0">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-2 md:mb-3">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/919364501230?text=Hello%20Gokul%20Ram%20Electricals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-2xl font-medium tracking-tight hover:text-brand-gray-400 transition-colors block mb-1 md:mb-2 underline underline-offset-4 decoration-brand-black/10"
                >
                  Direct Message
                </a>
                <p className="text-[10px] text-brand-gray-400">
                  Instant Enquiry & Brochures
                </p>
              </div>

              {/* Email */}
              <div className="group min-w-0">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-2 md:mb-3">
                  Email
                </span>
                <a
                  href="mailto:mecrjpm@gmail.com"
                  className="text-[13px] md:text-2xl font-medium tracking-tight hover:text-brand-gray-400 transition-colors block mb-1 md:mb-2 break-all"
                >
                  mecrjpm@gmail.com
                </a>
                <p className="text-[10px] text-brand-gray-400">
                  For Quotations & Tenders
                </p>
              </div>

              {/* Address */}
              <div className="group min-w-0">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-2 md:mb-3">
                  Address
                </span>
                <address className="not-italic">
                  <a
                    href="https://maps.app.goo.gl/7Xjbt1dYqnoMBvtg7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-xl font-medium tracking-tight leading-snug block mb-2"
                  >
                    141 B/2 Andalpuram,
                    <br />
                    Chatrapatti Main Road,
                    <br />
                    Rajapalayam - 626108
                  </a>
                  <a
                    href="https://maps.app.goo.gl/7Xjbt1dYqnoMBvtg7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-black/20 hover:border-brand-black transition-all"
                  >
                    Open in Maps
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
