import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function SectionShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-6 md:px-8">{children}</div>;
}

export function SectionPill({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      <span className="text-xs text-neutral-200 md:text-sm">{children}</span>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1.5 text-xs text-neutral-200 ring-1 ring-white/10 md:text-sm">
      {children}
    </span>
  );
}

export function PrimaryButton({
  children,
  icon = <ArrowRight className="h-5 w-5" />,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <a
      href="#contact"
      className="group relative inline-block rounded-xl bg-gray-800 p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative z-10 block rounded-xl bg-gray-950 px-5 py-2.5 text-sm">
        <span className="relative z-10 flex items-center gap-2">
          <span className="transition-all duration-500 group-hover:translate-x-0.5">
            {children}
          </span>
          {icon}
        </span>
      </span>
    </a>
  );
}

export function SecondaryButton({
  children = "Voir les travaux",
  icon = <Play className="h-4 w-4" />,
}: {
  children?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <a
      href="#work"
      className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/10"
    >
      {children}
      {icon}
    </a>
  );
}

export function FramedImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = "rounded-lg",
}: {
  src: string;
  alt: string;
  aspect?: string;
  sizes?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-neutral-900/50 ring-1 ring-white/10 ${aspect} ${rounded}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes={sizes}
        className="object-cover grayscale"
      />
    </div>
  );
}
