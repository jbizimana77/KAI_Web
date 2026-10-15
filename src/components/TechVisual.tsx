import { Brain, Cloud, Code2, Database, ShieldCheck } from "lucide-react";

const chips = [
  { label: "Software", icon: Code2, position: "left-0 top-6" },
  { label: "Cloud", icon: Cloud, position: "right-0 top-6" },
  { label: "Data", icon: Database, position: "left-0 bottom-8" },
  { label: "Security", icon: ShieldCheck, position: "right-0 bottom-8" },
];

export function TechVisual() {
  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-[460px] animate-float-soft"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-[1.75rem] border border-kai-cyan/25 bg-kai-navy/15 backdrop-blur-[1px]" />
      <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_50%_45%,rgba(16,200,232,0.22),transparent_65%)]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-[38%] w-[38%] items-center justify-center rounded-2xl border border-kai-cyan/40 bg-kai-navy/50">
          <div className="absolute inset-3 rounded-xl border border-kai-cyan/15 animate-pulse-glow" />
          <Brain className="h-9 w-9 text-kai-cyan/90" strokeWidth={1.4} />
          <span className="absolute bottom-3 text-xs font-semibold tracking-[0.18em] text-white/90">
            AI
          </span>
        </div>
      </div>

      {chips.map(({ label, icon: Icon, position }) => (
        <div
          key={label}
          className={`absolute ${position} flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md`}
        >
          <Icon className="h-3.5 w-3.5 text-kai-cyan" strokeWidth={1.8} />
          <span className="text-xs font-semibold text-white">{label}</span>
        </div>
      ))}

      <svg
        viewBox="0 0 100 75"
        className="absolute inset-0 h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10c8e8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#10c8e8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1677ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[
          [16, 14],
          [84, 14],
          [16, 61],
          [84, 61],
        ].map(([x, y]) => (
          <line
            key={`${x}-${y}`}
            x1="50"
            y1="37"
            x2={x}
            y2={y}
            stroke="url(#heroLineGrad)"
            strokeWidth="0.4"
            strokeDasharray="2 2"
          />
        ))}
      </svg>
    </div>
  );
}
