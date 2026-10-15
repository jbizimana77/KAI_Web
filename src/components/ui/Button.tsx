import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-kai-blue text-white shadow-[0_10px_30px_rgba(22,119,255,0.28)] hover:bg-[#0f66e6] hover:shadow-[0_14px_34px_rgba(22,119,255,0.34)]",
  secondary:
    "border border-kai-border bg-white text-kai-text hover:border-kai-blue/40 hover:bg-kai-bg",
  ghost:
    "border border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10",
  "outline-light":
    "border border-white/30 bg-transparent text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300",
    variants[variant],
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
