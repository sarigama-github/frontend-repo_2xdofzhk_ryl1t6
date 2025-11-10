export default function Admissions(){
  const steps = [
    { id: 1, title: 'Application', desc: 'Fill the online application with your details and preferences.' },
    { id: 2, title: 'Aptitude + Portfolio', desc: 'Attempt a simple aptitude test; optionally share projects or achievements.' },
    { id: 3, title: 'Interview', desc: 'Short interaction with faculty/mentors to understand your goals.' },
    { id: 4, title: 'Offer & Onboarding', desc: 'Receive the offer, confirm seat, and begin pre-term bootcamp.' },
  ];

  return (
    <section id="admissions" className="relative py-24 bg-zinc-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Admission Process</h2>
        <p className="text-center text-white/70 mt-3 max-w-2xl mx-auto">Transparent, fair, and outcome-oriented. We look for curiosity, grit, and collaborative spirit.</p>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={s.id} className="relative">
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-red-500 to-orange-500 opacity-70 blur" />
              <div className="relative rounded-xl bg-zinc-900 p-6 border border-white/10 h-full">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold">{s.id}</div>
                <h3 className="text-white font-semibold mt-4">{s.title}</h3>
                <p className="text-white/80 text-sm mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
