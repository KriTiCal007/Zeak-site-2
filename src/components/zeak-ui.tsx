import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

/* ── ZeakButton ─────────────────────────────────────────── */
type ButtonProps = {
  children: ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
  onClick?: () => void;
};

export function ZeakButton({ children, variant = 'dark', className = '', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`zeak-btn ${variant === 'light' ? 'zeak-btn-light' : ''} ${className}`}
    >
      {children}
      <ArrowUpRight size={16} />
    </button>
  );
}

/* ── ZeakLink ────────────────────────────────────────────── */
type LinkProps = {
  children: ReactNode;
  href?: string;
  dark?: boolean;
};

export function ZeakLink({ children, href = '#', dark = false }: LinkProps) {
  return (
    <a href={href} className={`zeak-link ${dark ? 'zeak-link-light' : ''}`}>
      {children}
      <ArrowUpRight size={16} />
    </a>
  );
}

/* ── ZeakEyebrow ─────────────────────────────────────────── */
export function ZeakEyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`zeak-eyebrow ${dark ? 'zeak-eyebrow-dark' : ''}`}>
      {children}
    </span>
  );
}

/* ── ZeakCard ────────────────────────────────────────────── */
type CardProps = {
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

export function ZeakCard({ children, dark = false, className = '' }: CardProps) {
  return (
    <div className={`zeak-card ${dark ? 'zeak-card-dark' : ''} ${className}`}>
      {children}
    </div>
  );
}

/* ── ZeakStatusDot ───────────────────────────────────────── */
export function ZeakStatusDot({ live = false }: { live?: boolean }) {
  return <span className={`zeak-status-dot ${live ? 'zeak-status-live' : ''}`} />;
}

/* ── ZeakSection ────────────────────────────────────────── */
type SectionProps = {
  children: ReactNode;
  surface?: 'white' | 'sand' | 'charcoal' | 'dark';
  className?: string;
};

export function ZeakSection({ children, surface = 'white', className = '' }: SectionProps) {
  const surfaceClass = {
    white: 'zeak-section-white',
    sand: 'zeak-section-sand',
    charcoal: 'zeak-section-charcoal',
    dark: 'zeak-section-dark',
  }[surface];

  return (
    <section className={`${surfaceClass} ${className}`}>
      {children}
    </section>
  );
}
