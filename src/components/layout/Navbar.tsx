"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { navItems } from "@/lib/data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-[66px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-normal text-neutral-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-4 md:hidden"
          >
            <div className="rounded-2xl bg-neutral-900/70 p-4 ring-1 ring-white/10 backdrop-blur">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15"
                >
                  <Sparkles className="h-4 w-4" />
                  Request Access
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </header>
  );
}
