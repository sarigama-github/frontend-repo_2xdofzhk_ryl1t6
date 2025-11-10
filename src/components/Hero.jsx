import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs mb-4">
            4-year Flagship • Industry Immersive • Future-Proof Skills
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
            Build Your Future in Tech with a Modern B.Tech
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-base md:text-lg">
            A next‑gen engineering program shaped by industry leaders. Learn by doing, ship real projects, and graduate job‑ready.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#register" className="px-6 py-3 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg shadow-orange-900/20 hover:opacity-90 transition">
              Start Your Application
            </a>
            <a href="#program" className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">
              Explore the Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
