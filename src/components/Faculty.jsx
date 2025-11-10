export default function Faculty(){
  const mentors = [
    { name: 'Senior Engineer', company: 'FAANG', tag: 'AI/ML' },
    { name: 'Principal Engineer', company: 'FAANG', tag: 'Systems' },
    { name: 'Staff Developer', company: 'Top Product Co.', tag: 'Web/Cloud' },
    { name: 'Design Lead', company: 'FAANG', tag: 'Product' },
  ];

  return (
    <section id="faculty" className="relative py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="absolute inset-0 opacity-30" style={{background:'radial-gradient(900px 300px at 20% 0%, rgba(244,63,94,0.3), transparent), radial-gradient(900px 300px at 80% 0%, rgba(249,115,22,0.3), transparent)'}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Faculty & Mentors</h2>
            <p className="text-white/70 mt-3 max-w-2xl">Guided by experienced engineers and product leaders from world-class companies. Guest lectures, capstone reviews, and mentorship circles.</p>
          </div>
          <a href="#register" className="hidden md:inline-flex px-5 py-2 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold">Meet Them</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m) => (
            <div key={m.name+m.tag} className="relative group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 opacity-70 blur group-hover:opacity-100 transition" />
              <div className="relative bg-zinc-900 rounded-2xl p-6 border border-white/10 h-full">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-orange-500" />
                <h3 className="text-white font-bold mt-4">{m.name}</h3>
                <p className="text-orange-300 text-sm">{m.company}</p>
                <div className="inline-flex mt-4 px-3 py-1 rounded-full text-xs bg-white/10 text-white/80">{m.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
