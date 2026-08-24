import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-indigo-200">
              M
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              MVP<span className="text-indigo-600">ier</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#process" className="hover:text-indigo-600 transition-colors">Process</a>
            <a href="#portfolio" className="hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonials</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-sm transition-all">
              Book a Strategy Call
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-slate-600 hover:text-slate-900 p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}