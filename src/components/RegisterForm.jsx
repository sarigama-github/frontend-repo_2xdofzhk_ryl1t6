import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function RegisterForm(){
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);
  const [error, setError] = useState(null);

  async function onSubmit(e){
    e.preventDefault();
    setLoading(true); setError(null); setDone(null);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    // Transform types
    payload.consent_marketing = fd.get('consent_marketing') === 'on';

    try{
      const res = await fetch(`${API_BASE}/api/register`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      if(!res.ok){
        const t = await res.text();
        throw new Error(t || 'Failed to submit');
      }
      const data = await res.json();
      setDone(data.id);
      e.currentTarget.reset();
    }catch(err){
      setError(err.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <section id="register" className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{background:'radial-gradient(900px 300px at 10% 0%, rgba(239,68,68,0.3), transparent), radial-gradient(900px 300px at 90% 0%, rgba(249,115,22,0.3), transparent)'}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Apply for the B.Tech</h2>
            <p className="text-white/70 mt-3 max-w-xl">Tell us about yourself. The form takes ~5 minutes. Our team will reach out with next steps and timelines.</p>
            {done && (
              <div className="mt-4 p-3 rounded-md bg-green-500/10 border border-green-500/30 text-green-300 text-sm">Thank you! Your application ID is {done}.</div>
            )}
            {error && (
              <div className="mt-4 p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-300 text-sm">{error}</div>
            )}
          </div>
          <form onSubmit={onSubmit} className="relative bg-zinc-900 rounded-2xl p-6 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/80 text-sm">First name</label>
                <input name="first_name" required className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white"/>
              </div>
              <div>
                <label className="text-white/80 text-sm">Last name</label>
                <input name="last_name" required className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white"/>
              </div>
              <div>
                <label className="text-white/80 text-sm">Email</label>
                <input type="email" name="email" required className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white"/>
              </div>
              <div>
                <label className="text-white/80 text-sm">Phone</label>
                <input name="phone" required className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white"/>
              </div>
              <div>
                <label className="text-white/80 text-sm">Guardian name (optional)</label>
                <input name="guardian_name" className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white"/>
              </div>
              <div>
                <label className="text-white/80 text-sm">Current class</label>
                <select name="current_class" required className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white">
                  <option>11th</option>
                  <option>12th</option>
                  <option>Gap Year</option>
                </select>
              </div>
              <div>
                <label className="text-white/80 text-sm">Stream</label>
                <select name="stream" required className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white">
                  <option>Science (PCM)</option>
                  <option>Science (PCB)</option>
                  <option>Commerce</option>
                  <option>Arts</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-white/80 text-sm">City</label>
                <input name="city" required className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white"/>
              </div>
              <div>
                <label className="text-white/80 text-sm">State</label>
                <input name="state" required className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white"/>
              </div>
              <div>
                <label className="text-white/80 text-sm">Preferred campus</label>
                <select name="preferred_campus" required className="mt-1 w-full bg-black/40 border border-white/10 rounded-md p-2 text-white">
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                  <option>Any</option>
                </select>
              </div>
              <div className="sm:col-span-2 flex items-center gap-2 mt-2">
                <input id="consent" type="checkbox" name="consent_marketing" className="w-4 h-4"/>
                <label htmlFor="consent" className="text-white/70 text-sm">I agree to receive important updates and reminders.</label>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button disabled={loading} className="px-6 py-3 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold disabled:opacity-60">
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
              <span className="text-white/60 text-sm">Takes ~5 minutes</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
