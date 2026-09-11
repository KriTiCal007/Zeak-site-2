import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`logo ${compact ? 'logo-compact' : ''}`}>
      <span className="logo-mark">
        <i />
        <i />
        <i />
      </span>
      {!compact && <span>ZEAK</span>}
    </div>
  );
}

export function Button({
  children,
  light = false,
  className = '',
  to,
  href,
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
  to?: string;
  href?: string;
}) {
  const classes = `button ${light ? 'button-light' : ''} ${className}`;
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        <ArrowUpRight size={16} />
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowUpRight size={16} />
      </a>
    );
  }
  return (
    <button type="button" className={classes}>
      {children}
      <ArrowUpRight size={16} />
    </button>
  );
}

export function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`eyebrow ${dark ? 'eyebrow-dark' : ''}`}>
      <span className="eyebrow-dot" />
      {children}
    </div>
  );
}

export function LinkedInIcon() {
  return <span className="linkedin-icon">in</span>;
}

export function FlaskIcon() {
  return (
    <span className="flask-icon">
      <span />
    </span>
  );
}
