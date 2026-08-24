import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl font-black text-white">MUPIER.</Link>
          <h3 className="text-3xl md:text-4xl font-serif italic text-slate-300 mt-4 mb-4">
            From Founders, For Founders
          </h3>
          <p className="text-sm text-slate-400 max-w-sm">
            Accelerating startups from idea to market with rapid MVP development. Turn your vision into reality in weeks.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>MVP Development</li>
            <li>Rapid Prototyping</li>
            <li>Full-Stack Development</li>
            <li>User Testing</li>
            <li>Market Validation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Get Started</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Our Process</li>
            <li>What We Build</li>
            <li>Success Stories</li>
            <li>Book a Call</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between text-xs text-slate-400">
        <p>© 2026 Mupier. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}