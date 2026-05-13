export default function Stats() {
  const data = [
    { label: 'Experience', value: '15+', sub: 'Years in Rajapalayam' },
    { label: 'Brands', value: '06+', sub: 'Premium Partners' },
    { label: 'Service', value: '100%', sub: 'Genuine Guarantee' },
    { label: 'Clientele', value: '5K+', sub: 'Happy Customers' },
  ]

  return (
    <section id="experience" className="bg-brand-gray-100">
      <div className="container-wide">
        <div className="grid-modular">
          {data.map((item, i) => (
            <div key={item.label} className="grid-cell md:col-span-3">
              <p className="label-mono">{item.label}</p>
              <div className="mt-8">
                <span className="text-5xl font-black tracking-tighter leading-none">{item.value}</span>
                <p className="text-brand-gray-400 mt-3 text-xs uppercase tracking-widest font-bold">{item.sub}</p>
              </div>
            </div>
          ))}
          
          <div className="grid-cell md:col-span-12 py-12 md:py-20 flex md:flex-row flex-col items-center justify-between gap-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter max-w-2xl">
              Building the infrastructure for tomorrow's industry.
            </h2>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div className="flex justify-between items-center border-b border-brand-gray-200 pb-4 gap-20">
                <span className="label-mono mb-0">Project Scale</span>
                <span className="font-bold">Residential to Industrial</span>
              </div>
              <div className="flex justify-between items-center border-b border-brand-gray-200 pb-4 gap-20">
                <span className="label-mono mb-0">Direct Dealership</span>
                <span className="font-bold">Authorized Distributor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
