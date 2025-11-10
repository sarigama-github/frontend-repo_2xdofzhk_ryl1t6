export default function ProgramDetails(){
  const pillars = [
    {
      title: 'Year 1 • Foundations',
      bullets: ['Programming, CS basics', 'Product thinking & UI basics', 'Industry immersion week']
    },
    {
      title: 'Year 2 • Systems & Web',
      bullets: ['Data structures & systems', 'Modern web + cloud', 'First paid co-op']
    },
    {
      title: 'Year 3 • Specializations',
      bullets: ['AI/ML or Systems or Product', 'Open-source contributions', '2nd paid co-op']
    },
    {
      title: 'Year 4 • Ship & Lead',
      bullets: ['Capstone with industry mentor', 'Leadership & career prep', 'Pre-placement offers']
    },
  ];

  return (
    <section id="program" className="relative py-24 bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(600px 300px at 10% 0%, rgba(255,87,34,0.2), transparent), radial-gradient(600px 300px at 90% 0%, rgba(239,68,68,0.2), transparent)'}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Program at a glance</h2>
            <p className="mt-3 text-white/70 max-w-xl">Structured to blend theory, systems depth, and industry practice. Each year advances you from strong fundamentals to real-world impact.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p) => (
                <div key={p.title} className="relative">
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-red-500 to-orange-500 opacity-60 blur" />
                  <div className="relative rounded-xl bg-zinc-900 p-5 border border-white/10">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <ul className="mt-3 space-y-1 text-white/80 text-sm">
                      {p.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-white/10">
            <h3 className="text-white text-xl font-bold">What you will build</h3>
            <p className="text-white/80 mt-2">Every semester ends with a showcase: shipped products, research demos, or systems projects — reviewed by industry mentors.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-black/40 border border-white/10 p-4 text-white/80">• SaaS apps</div>
              <div className="rounded-lg bg-black/40 border border-white/10 p-4 text-white/80">• Mobile apps</div>
              <div className="rounded-lg bg-black/40 border border-white/10 p-4 text-white/80">• ML pipelines</div>
              <div className="rounded-lg bg-black/40 border border-white/10 p-4 text-white/80">• System tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
