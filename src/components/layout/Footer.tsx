import { Mail } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 pt-16 pb-8"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Logo />
            <p className="mt-5 mb-6 max-w-xs text-sm leading-relaxed text-neutral-400">
              Crafting distinctive brand identities and digital product visuals
              that inspire and convert. Strategy-first design for modern teams.
            </p>
            <div className="flex items-center gap-4 text-neutral-400">
              {[
                { label: "X", name: "Twitter" },
                { label: "IG", name: "Instagram" },
                { label: "IN", name: "LinkedIn" },
              ].map((item) => (
                <a
                  key={item.name}
                  href="#contact"
                  aria-label={item.name}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-[11px] font-semibold transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="mb-5 text-sm font-medium text-white">{title}</h3>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
                    >
                      {link}
                      {link === "Careers" ? (
                        <span className="inline-flex items-center rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-white ring-1 ring-white/20">
                          We&apos;re hiring
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
              {title === "Connect" ? (
                <div className="mt-6">
                  <a
                    href="mailto:hello@novalume.studio"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-sm ring-1 ring-white/15 transition hover:bg-white/15"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    hello@novalume.studio
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </div>
            <span className="cursor-pointer text-sm text-neutral-400 transition hover:text-white">
              All systems operational
            </span>
          </div>

          <p className="text-sm text-neutral-400">
            Copyright 2026 Novalume Studio. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
              <a
                key={link}
                href="#contact"
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
