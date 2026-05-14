import Image from "next/image";
import { logoSrc } from "@/lib/data";

export function Logo({ inverted = true }: { inverted?: boolean }) {
  return (
    <a
      href="#top"
      className="inline-flex h-[26px] w-[70px] items-center justify-center"
      aria-label="Novalume home"
    >
      <Image
        src={logoSrc}
        alt="Novalume"
        width={70}
        height={26}
        unoptimized
        className={
          inverted
            ? "h-[26px] w-[70px] object-contain invert"
            : "h-[26px] w-[70px] object-contain"
        }
      />
    </a>
  );
}
