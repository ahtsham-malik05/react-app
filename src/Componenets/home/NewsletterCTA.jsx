export default function NewsletterCTA() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-b from-slate-800/80 to-slate-900 border border-slate-700/60 p-12 rounded-3xl shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get MVP Insights & Startup Tips</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
          Join 500+ founders who receive our weekly insights on MVP development, startup strategies, and rapid prototyping.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition"
          >
            Get Insights
          </button>
        </form>

        <div className="flex justify-center items-center gap-6 text-xs text-slate-400">
          <span>✔ Weekly insights</span>
          <span>✔ Founder resources</span>
          <span>✔ No spam, unsubscribe anytime</span>
        </div>
      </div>
    </section>
  );
}