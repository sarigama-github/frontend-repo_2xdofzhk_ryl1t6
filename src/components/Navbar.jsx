import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Program", href: "#program" },
    { label: "Faculty", href: "#faculty" },
    { label: "Admissions", href: "#admissions" },
    { label: "Dates", href: "#dates" },
    { label: "Register", href: "#register" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-white font-bold tracking-tight text-lg">
            <span className="text-orange-400">Tech</span>Foundry B.Tech
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#register" className="px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow hover:opacity-90 transition">
              Apply Now
            </a>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#register" onClick={() => setOpen(false)} className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
