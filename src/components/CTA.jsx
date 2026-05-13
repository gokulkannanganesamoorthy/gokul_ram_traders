import { useInView } from '../hooks/useInView';

export default function CTA() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-white border-t border-brand-black/5"
    >
      <div className="container-wide">
        <div className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32">
            
            {/* Minimal Header */}
            <div className="max-w-sm">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gray-400 mb-6">
                Connect
              </p>
              <h2 className="text-5xl font-light tracking-tighter mb-8">
                Ready for your <br /> next project?
              </h2>
              <p className="text-brand-gray-600 text-sm leading-relaxed">
                Contact our technical team for wholesale pricing, stock availability, and installation support.
              </p>
            </div>

            {/* Informative Stack */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20">
              
              {/* Call */}
              <div className="group">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-3">Call Support</span>
                <a href="tel:+919364501230" className="text-2xl font-medium tracking-tight hover:text-brand-gray-400 transition-colors block mb-2">
                  +91 93645 01230
                </a>
                <p className="text-[10px] text-brand-gray-400">Available 9AM — 8PM</p>
              </div>

              {/* WhatsApp */}
              <div className="group">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-3">WhatsApp</span>
                <a 
                  href="https://wa.me/919364501230" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl font-medium tracking-tight hover:text-brand-gray-400 transition-colors block mb-2 underline underline-offset-8 decoration-brand-black/10"
                >
                  Direct Message
                </a>
                <p className="text-[10px] text-brand-gray-400">Instant Enquiry & Brochures</p>
              </div>

              {/* Email */}
              <div className="group">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-3">Email</span>
                <a href="mailto:mecrjpm@gmail.com" className="text-2xl font-medium tracking-tight hover:text-brand-gray-400 transition-colors block mb-2 uppercase">
                  mecrjpm@gmail.com
                </a>
                <p className="text-[10px] text-brand-gray-400">For Quotations & Tenders</p>
              </div>

              {/* Office */}
              <div className="group">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-3">Office</span>
                <address className="not-italic">
                  <p className="text-xl font-medium tracking-tight mb-2 leading-tight">
                    141 B/2 Andalpuram, <br />
                    Rajapalayam 626108
                  </p>
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
