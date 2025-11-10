import Navbar from './components/Navbar';
import Hero from './components/Hero';
import USPSection from './components/USPSection';
import ProgramDetails from './components/ProgramDetails';
import Faculty from './components/Faculty';
import Admissions from './components/Admissions';
import Dates from './components/Dates';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <USPSection />
        <ProgramDetails />
        <Faculty />
        <Admissions />
        <Dates />
        <RegisterForm />
      </main>
      <footer className="border-t border-white/10 py-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} TechFoundry College. All rights reserved.</div>
          <a href="#register" className="px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold">Apply Now</a>
        </div>
      </footer>
    </div>
  )
}

export default App
