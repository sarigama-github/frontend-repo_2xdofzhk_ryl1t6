export default function USPSection(){
  const items = [
    {
      k: 'co-op',
      title: 'Paid Industry Co-ops Every Year',
      desc: 'Work with leading tech teams while studying. Graduate with a portfolio and real experience.',
    },
    {
      k: 'mentor',
      title: 'Mentorship by FAANG Engineers',
      desc: 'Weekly mentorship circles run by senior engineers from world-class product companies.',
    },
    {
      k: 'stack',
      title: 'Modern Full‑Stack Curriculum',
      desc: 'From systems to AI — learn the technologies shaping the next decade of software.',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="absolute inset-0 opacity-40" style={{background: 'radial-gradient(1200px 400px at 20% -10%, rgba(251,113,133,0.35), transparent), radial-gradient(1200px 400px at 80% -10%, rgba(249,115,22,0.35), transparent)'}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white">Why this B.Tech stands out</h2>
        <p className="text-center text-white/70 mt-3 max-w-2xl mx-auto">Purpose-built for ambitious students in classes 11–12 and parents seeking outcomes that matter.</p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={it.k} className="relative group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 opacity-70 blur group-hover:opacity-100 transition" />
              <div className="relative rounded-2xl bg-zinc-900 p-6 min-h-[220px] flex flex-col justify-between border border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">{it.title}</h3>
                  <p className="mt-3 text-white/80">{it.desc}</p>
                </div>
                <div className="mt-6">
                  <div className="inline-flex items-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Learn more →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
