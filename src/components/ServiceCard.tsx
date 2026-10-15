import {
  Bot,
  ChartColumnIncreasing,
  Cloud,
  Code2,
  Server,
  Shield,
} from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

const icons = {
  code: Code2,
  bot: Bot,
  server: Server,
  cloud: Cloud,
  chart: ChartColumnIncreasing,
  shield: Shield,
};

const iconStyles = [
  "from-kai-blue/15 to-kai-blue/5 text-kai-blue",
  "from-kai-cyan/20 to-kai-cyan/5 text-kai-cyan",
  "from-kai-navy/15 to-kai-navy/5 text-kai-navy",
  "from-kai-green/15 to-kai-green/5 text-kai-green",
  "from-kai-blue/15 to-kai-cyan/10 text-kai-blue",
  "from-kai-navy/10 to-kai-blue/10 text-kai-navy",
];

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = icons[service.icon];

  return (
    <article className="group h-full rounded-2xl border border-kai-border bg-white p-6 shadow-[0_8px_30px_rgba(7,26,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-kai-blue/30 hover:shadow-[0_18px_40px_rgba(7,26,61,0.08)]">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
            iconStyles[index % iconStyles.length],
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <span className="text-xs font-semibold tracking-[0.16em] text-kai-muted/70">
          {service.number}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-kai-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-kai-muted">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2 border-t border-kai-border/80 pt-4">
        {service.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-kai-text/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-kai-blue" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
