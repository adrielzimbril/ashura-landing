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
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow-lg shadow-black/30 transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.03] active:scale-95"
    >
      <span className="transition-all duration-300 group-hover:translate-x-0.5">
        {children}
      </span>
      {icon}
    </a>
  );
}

export function SecondaryButton({
  children = "View our work",
  icon = <Play className="h-4 w-4" />,
}: {
  children?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <a
      href="#work"
      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/15 hover:border-white/25"
    >
      {children}
      {icon}
    </a>
  );
}

/**
 * FramedImage — overflow-hidden container with inner image that scales on
 * parent group hover. The container dimensions stay fixed; only the image
 * scales inside, so the layout never shifts.
 */
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
        className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:brightness-125 group-hover:grayscale-0"
      />
    </div>
  );
}
