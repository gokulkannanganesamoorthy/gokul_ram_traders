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
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 md:gap-32">
            
            {/* Branding Column */}
            <div className="lg:max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gray-400 mb-8">
                Next Steps
              </p>
              <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12">
                Ready to <br />
                <span className="font-medium">Scale up?</span>
              </h2>
              <p className="text-brand-gray-600 leading-relaxed text-lg max-w-sm">
                From residential wiring to massive industrial infrastructure, we supply the materials that power progress.
              </p>
            </div>

            {/* Technical Links Column */}
            <div className="w-full lg:max-w-2xl">
              <div className="flex flex-col">
                {/* Interaction Row: Phone */}
                <div className="group border-b border-brand-black/10 py-10 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-2">Inquiries</span>
                    <a href="tel:+919364501230" className="text-3xl md:text-5xl font-light tracking-tighter hover:text-brand-gray-400 transition-colors">
                      +91 93645 01230
                    </a>
                  </div>
                  <a href="tel:+919364501230" className="w-12 h-12 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:text-white">
                       <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Interaction Row: WhatsApp */}
                <div className="group border-b border-brand-black/10 py-10 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-2">Support</span>
                    <a 
                      href="https://wa.me/919364501230?text=Hello%20Gokul%20Ram%20Electricals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl md:text-5xl font-light tracking-tighter hover:text-brand-gray-400 transition-colors"
                    >
                      WhatsApp Message
                    </a>
                  </div>
                  <a href="https://wa.me/919364501230" className="w-12 h-12 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:text-white">
                       <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Interaction Row: Email & Address */}
                <div className="py-10 md:py-14 flex flex-col md:flex-row justify-between gap-12">
                   <div className="flex-1">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-4">Official Channel</span>
                      <a href="mailto:mecrjpm@gmail.com" className="text-lg font-medium hover:text-brand-gray-400 transition-colors border-b border-brand-black/20 pb-1">mecrjpm@gmail.com</a>
                   </div>
                   <div className="flex-1">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 block mb-4">Physical Office</span>
                      <p className="text-sm font-medium leading-relaxed">
                        141 B/2 Andalpuram,<br />
                        Rajapalayam 626108.
                      </p>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
