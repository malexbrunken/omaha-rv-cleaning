// Hand-drawn line icon set — warm, crafted, no emoji.
const S = { strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const IconCamper = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M3 15.5V9.2A4.2 4.2 0 0 1 7.2 5h7.6A4.2 4.2 0 0 1 19 9.2v6.3" />
    <path d="M2 15.5h20" />
    <path d="M5 15.5v2.2h3.2" />
    <path d="M6.4 11.2h3.4" />
    <path d="M13 5v4.5h6" />
    <circle cx="17" cy="17.6" r="1.7" />
    <path d="M21.5 15.5l-1 3.4h-2.7" />
  </svg>
);

export const IconSteamer = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M5 18.5h9.5a3 3 0 0 0 3-3v-2.2" />
    <path d="M5 18.5v-6.2A3.3 3.3 0 0 1 8.3 9h3.2" />
    <path d="M17.5 13.3h2.4a1.6 1.6 0 0 0 0-3.2h-1.1" />
    <path d="M8 5.6c1-1 1-2.1 0-3.1" />
    <path d="M11.5 5.6c1-1 1-2.1 0-3.1" />
    <path d="M15 5.6c1-1 1-2.1 0-3.1" />
    <path d="M8.2 21.2h8" />
  </svg>
);

export const IconMattress = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <rect x="2.6" y="9" width="18.8" height="7.4" rx="2.2" />
    <path d="M6.2 9V6.4A2.4 2.4 0 0 1 8.6 4h6.8a2.4 2.4 0 0 1 2.4 2.4V9" />
    <path d="M7.5 13h3m3.5 0h3" />
    <path d="M2.6 16.4V18m18.8-1.6V18" />
  </svg>
);

export const IconRuler = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M3.5 16.9l9.2-9.2a2.1 2.1 0 0 1 3 0l4.4 4.4a2.1 2.1 0 0 1 0 3l-9.2 9.2a2.1 2.1 0 0 1-3 0l-4.4-4.4a2.1 2.1 0 0 1 0-3z" transform="scale(0.92) translate(1 1)" />
    <path d="M8 12l1.5 1.5M11 9l1.5 1.5M14 6l1.5 1.5" />
  </svg>
);

export const IconDroplet = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 3.2s6.2 6.4 6.2 11.2a6.2 6.2 0 0 1-12.4 0C5.8 9.6 12 3.2 12 3.2z" />
    <path d="M9.3 14a2.8 2.8 0 0 0 2.2 3" />
  </svg>
);

export const IconSun = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <circle cx="12" cy="12" r="3.6" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.4 4.4l1.6 1.6M18 18l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.4 19.6L6 18M18 6l1.6-1.6" />
  </svg>
);

export const IconSparkle = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 3l1.6 5.2L19 9.8l-5.4 1.6L12 16.6l-1.6-5.2L5 9.8l5.4-1.6L12 3z" />
    <path d="M18.5 15.5l.8 2.4 2.4.8-2.4.8-.8 2.4-.8-2.4-2.4-.8 2.4-.8.8-2.4z" />
  </svg>
);

export const IconMapPin = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 21s-6.8-5.6-6.8-10.8A6.8 6.8 0 0 1 12 3.4a6.8 6.8 0 0 1 6.8 6.8C18.8 15.4 12 21 12 21z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const IconShield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 2.8l7.2 2.7v5.6c0 4.6-3 8.1-7.2 10.1-4.2-2-7.2-5.5-7.2-10.1V5.5L12 2.8z" />
    <path d="M8.8 11.7l2.3 2.3 4-4.2" />
  </svg>
);

export const IconFlame = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={className} {...S} aria-hidden>
    <path d="M12 21.2c3.8 0 6.4-2.4 6.4-6 0-3.4-2.6-6-4.6-8.4-1-1.2-2.1-1-2.4.4-.4 2 .4 3.6-.9 4.8-1.2 1.2-2.9 1.2-2.9-1.4.1-1.1-.7-1.5-1.4-.6-1 1.3-1.7 3.2-1.7 5.2 0 3.6 3.2 6 5.5 6z" />
    <path d="M10.5 16.8c.8 1.5 2.4 2 3.6 1.2" />
  </svg>
);
