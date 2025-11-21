import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-600 shadow-inner" />
          <span className="font-extrabold tracking-tight text-slate-900 text-lg">Barakah Treats</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#gallery" className="hover:text-slate-900 transition-colors">Gallery</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">Our Story</a>
          <a href="#order" className="hover:text-slate-900 transition-colors">Order</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-white/70" aria-label="Open menu">
          <Menu className="h-6 w-6 text-slate-900" />
        </button>
      </div>
    </header>
  );
}
