const VALUES = [
  { 
    title: 'Ready Stock', 
    desc: 'Our 5,000 sq.ft warehouse ensures your project never hits a bottleneck.',
    icon: '📦'
  },
  { 
    title: 'Expert Advice', 
    desc: '15 years of technical knowledge to help you choose the right spec.',
    icon: '⚡'
  },
  { 
    title: 'Transparent Pricing', 
    desc: 'Fair, wholesale-tier pricing for retailers and contractors alike.',
    icon: '🏷️'
  }
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-brand-gray-100 border-t border-brand-gray-200">
      <div className="container-wide">
        <div className="grid-modular">
          
          <div className="grid-cell md:col-span-12 py-24 bg-brand-black text-brand-white text-center">
            <p className="label-mono text-brand-gray-400">The Difference</p>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mt-4">
              Why Professionals<br />Choose Gokul Ram
            </h2>
          </div>

          {VALUES.map((value) => (
            <div key={value.title} className="grid-cell md:col-span-4">
              <span className="text-4xl mb-8 block">{value.icon}</span>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{value.title}</h3>
                <p className="text-brand-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="grid-cell md:col-span-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-brand-gray-200">
            <p className="font-bold uppercase tracking-[0.2em] text-xs">Trusted by over 100+ local contractors</p>
            <div className="h-[1px] flex-1 bg-brand-gray-200 hidden md:block mx-12" />
            <a href="#contact" className="font-black underline underline-offset-4 uppercase tracking-tighter">Read testimonials</a>
          </div>

        </div>
      </div>
    </section>
  )
}
