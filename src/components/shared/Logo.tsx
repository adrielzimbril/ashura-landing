export function Logo() {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-2.5"
      aria-label="Ashura home"
    >
      {/* Ashura "A" mark — matches favicon.svg */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="white" fillOpacity="0.08" />
        <polygon points="16,4 27,28 22.5,28 16,13 9.5,28 5,28" fill="white" />
        <rect x="9" y="19" width="14" height="3.5" fill="#0a0a0a" />
      </svg>
      <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
        Ashura
      </span>
    </a>
  );
}
