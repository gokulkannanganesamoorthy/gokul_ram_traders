export default function CTA() {
  return (
    <section id="contact" className="bg-brand-gray-100 border-t border-brand-gray-200">
      <div className="container-wide">
        <div className="grid-modular">
          
          <div className="grid-cell md:col-span-12 py-32 flex flex-col items-center text-center">
            <p className="label-mono">Get in touch</p>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mt-4 leading-none">
              Start Your<br />Project.
            </h2>
            <a 
              href="mailto:inquiry@gokulram.com"
              className="mt-16 px-12 py-6 bg-brand-black text-brand-white text-xl font-black uppercase tracking-tighter hover:bg-brand-gray-600 transition-all rounded-full flex items-center gap-4 group"
            >
              Request Quote
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-2 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid-cell md:col-span-6">
            <p className="label-mono">Location</p>
            <address className="not-italic text-2xl font-bold tracking-tight">
              Gokul Ram Electricals<br />
              Opposite New Bus Stand,<br />
              Rajapalayam, TN 626117
            </address>
            <div className="mt-12">
              <a href="https://maps.google.com" className="text-sm font-black underline underline-offset-4 uppercase tracking-tighter">Open in maps</a>
            </div>
          </div>

          <div className="grid-cell md:col-span-6">
            <p className="label-mono">Contact Details</p>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-brand-gray-400 uppercase font-bold tracking-widest mb-1">Direct Phone</p>
                <a href="tel:+919876543210" className="text-2xl font-bold tracking-tight hover:text-brand-gray-400 transition-colors">+91 98765 43210</a>
              </div>
              <div>
                <p className="text-[10px] text-brand-gray-400 uppercase font-bold tracking-widest mb-1">Email Inquiry</p>
                <a href="mailto:hello@gokulram.com" className="text-2xl font-bold tracking-tight hover:text-brand-gray-400 transition-colors">hello@gokulram.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
