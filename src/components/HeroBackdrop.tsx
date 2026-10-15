import Image from "next/image";

export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Image
        src="/hero-workspace.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      {/* Keeps the left side dark enough for the heading while letting the
          workspace photo stay visible on the right. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#071a3d_0%,rgba(7,26,61,0.95)_32%,rgba(7,26,61,0.78)_45%,rgba(7,26,61,0.3)_62%,rgba(7,26,61,0.06)_100%)]" />
      <div className="absolute inset-0 tech-grid animate-grid-drift opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(22,119,255,0.26),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,61,0.1)_0%,rgba(7,26,61,0)_38%,rgba(7,26,61,0.5)_100%)]" />
    </div>
  );
}
