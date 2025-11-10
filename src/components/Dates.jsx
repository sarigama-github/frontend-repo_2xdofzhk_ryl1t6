export default function Dates(){
  const dates = [
    { label: 'Applications open', value: 'Now' },
    { label: 'Early deadline', value: '30 Nov' },
    { label: 'Regular deadline', value: '31 Dec' },
    { label: 'Interviews', value: 'Rolling (Dec–Jan)' },
    { label: 'Offers out', value: 'By 15 Jan' },
    { label: 'Program start', value: 'July' },
  ];

  return (
    <section id="dates" className="relative py-20 bg-black">
      <div className="absolute inset-0 opacity-30" style={{background:'radial-gradient(800px 200px at 50% 0%, rgba(255,87,34,0.3), transparent)'}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
          <h2 className="text-white text-2xl font-bold">Important Dates</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dates.map((d) => (
              <div key={d.label} className="rounded-lg border border-white/10 bg-black/40 p-4 flex items-center justify-between">
                <span className="text-white/70">{d.label}</span>
                <span className="text-white font-semibold">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
