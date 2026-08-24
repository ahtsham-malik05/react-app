import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto flex flex-col items-center">
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-8">
        <Sparkles size={16} />
        <span>Launch your vision, fast</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
        We Build Ideas That <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
          Make Impact.
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
        We design, develop, and launch your first version in weeks, not months.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-blue-600/25 transition"
      >
        <span>Let's Build Your Pitch</span>
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}