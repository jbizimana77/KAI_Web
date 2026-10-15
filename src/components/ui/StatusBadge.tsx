import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  "In Development": "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  Building: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  Prototype: "bg-sky-500/15 text-sky-300 ring-sky-400/30",
  Research: "bg-amber-500/15 text-amber-300 ring-amber-400/30",
  "Coming Soon": "bg-violet-500/15 text-violet-300 ring-violet-400/30",
  Completed: "bg-kai-cyan/15 text-kai-cyan ring-kai-cyan/30",
};

const statusStylesLight: Record<string, string> = {
  "In Development": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Building: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Prototype: "bg-sky-50 text-sky-700 ring-sky-200",
  Research: "bg-amber-50 text-amber-700 ring-amber-200",
  "Coming Soon": "bg-violet-50 text-violet-700 ring-violet-200",
  Completed: "bg-cyan-50 text-cyan-700 ring-cyan-200",
};

type StatusBadgeProps = {
  status: string;
  light?: boolean;
  className?: string;
};

export function StatusBadge({
  status,
  light = false,
  className,
}: StatusBadgeProps) {
  const map = light ? statusStylesLight : statusStyles;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
        map[status] ??
          (light
            ? "bg-slate-100 text-slate-700 ring-slate-200"
            : "bg-white/10 text-white/80 ring-white/20"),
        className,
      )}
    >
      {status}
    </span>
  );
}
