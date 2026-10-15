"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-kai-border bg-kai-white transition-all duration-300",
        scrolled
          ? "py-2 shadow-[0_10px_34px_rgba(7,26,61,0.16)]"
          : "py-4 shadow-[0_4px_18px_rgba(7,26,61,0.10)]",
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-kai-navy text-sm font-bold tracking-tight text-white">
            KAI
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-kai-navy sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-kai-text/75 transition-colors hover:bg-kai-bg hover:text-kai-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden sm:inline-flex">
            Let&apos;s Talk →
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-kai-border bg-white text-kai-navy lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-x-0 top-[64px] bottom-0 origin-top bg-white transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0",
        )}
      >
        <Container className="flex h-full flex-col gap-2 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-kai-navy hover:bg-kai-bg"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-4" onClick={() => setOpen(false)}>
            Let&apos;s Talk →
          </Button>
        </Container>
      </div>
    </header>
  );
}
