const cards = [
  {
    title: "Why mvpier?",
    desc: "Iterate faster, mitigate risk. Our lean approach ensures you validate your concept before heavy investment.",
    tag: "Lean Capability",
    bg: "bg-gradient-to-br from-slate-800 to-slate-900",
  },
  {
    title: "Design, dev, deployment",
    desc: "All in one team. No handoff friction, no miscommunication, just seamless execution.",
    tag: "End-to-End Build",
    bg: "bg-gradient-to-br from-indigo-950 to-slate-900",
  },
  {
    title: "We speak your language",
    desc: "We share your passion. Built by founders, for founders who want to move fast.",
    tag: "Founder First",
    bg: "bg-gradient-to-br from-blue-950 to-slate-900",
  }
];

export default function StackingCards() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="space-y-12">
        {cards.map((card, index) => (
          <div
            key={index}
            style={{ top: `${100 + index * 30}px` }}
            className={`sticky p-10 md:p-14 rounded-3xl border border-slate-700/60 shadow-2xl ${card.bg}`}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-white max-w-md">{card.title}</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600">
                {card.tag}
              </span>
            </div>
            <p className="text-slate-300 text-lg max-w-xl leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}