import { useInView } from '../hooks/useInView';

const CONTACT_METHODS = [
  {
    id: '01',
    label: 'Direct Inquiry',
    value: '+91 93645 01230',
    sub: 'Immediate Technical Support',
    link: 'tel:+919364501230',
    action: 'Call Now'
  },
  {
    id: '02',
    label: 'Digital Support',
    value: 'WhatsApp Message',
    sub: 'Project Details & Brochures',
    link: 'https://wa.me/919364501230',
    action: 'Send Message'
  },
  {
    id: '03',
    label: 'Official Mail',
    value: 'mecrjpm@gmail.com',
    sub: 'Bulk Quotations & Tenders',
    link: 'mailto:mecrjpm@gmail.com',
    action: 'Email Us'
  }
];

export default function CTA() {
  const [ref, inView] = useInView({ once: true });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-[#fafafa] relative overflow-hidden"
    >
      <div className="container-wide">
        <div className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="mb-24 md:mb-32 max-w-4xl">
             <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-gray-400 mb-8">
                Interaction
             </p>
             <h2 className="text-6xl md:text-[8rem] font-light tracking-tighter leading-[0.9]">
                Let's build <br />
                <span className="font-medium text-brand-black/40 italic">excellence.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-px lg:bg-brand-black/5 border-y border-brand-black/5">
            {CONTACT_METHODS.map((method, i) => (
              <a 
                key={method.id}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative bg-[#fafafa] py-12 md:py-20 lg:px-12 transition-all duration-700 hover:bg-white"
              >
                <div className="relative z-10">
                  <span className="text-[9px] font-mono text-brand-gray-400 mb-8 block">{method.id} — {method.label}</span>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {method.value}
                  </h3>
                  <p className="text-brand-gray-400 text-sm mb-12 opacity-100 group-hover:text-brand-black transition-colors duration-500">
                    {method.sub}
                  </p>
                  
                  <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-black">{method.action}</span>
                    <div className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:text-white">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Reveal */}
                <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom z-0" />
              </a>
            ))}
          </div>

          {/* Location Block - Technical Design */}
          <div className="mt-24 md:mt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-6">
               <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">Headquarters</span>
               <p className="text-xl md:text-2xl font-light leading-relaxed tracking-tight">
                 141 B/2 ANDALPURAM, CHATRAPATTI MAIN ROAD,<br />
                 RAJAPALAYAM, TAMIL NADU 626108.
               </p>
            </div>
            <a 
              href="https://maps.app.goo.gl/7Xjbt1dYqnoMBvtg7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-end gap-4"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-black">View Location</span>
              <div className="w-16 h-[1px] bg-brand-black/20 group-hover:w-24 group-hover:bg-brand-black transition-all duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
