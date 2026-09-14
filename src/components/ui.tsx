import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <span className={`logo ${compact ? 'logo-compact' : ''} ${light ? 'logo-light' : ''}`}>
      <img
        src={light ? '/zeak-logo-on-dark.png' : '/zeak-logo.png'}
        alt="ZEAK"
        className="logo-img"
        width={840}
        height={280}
      />
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: 'lime' | 'teal' | 'ghost' | 'dark';
  className?: string;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
};

export function Button({
  children,
  variant = 'lime',
  className = '',
  to,
  href,
  type = 'button',
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight size={15} strokeWidth={2.25} />
    </>
  );
  if (to) return <Link to={to} className={classes}>{content}</Link>;
  if (href) return <a href={href} className={classes}>{content}</a>;
  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}

export function Tag({ children, tone = 'muted' }: { children: ReactNode; tone?: 'muted' | 'lime' | 'cream' }) {
  return <span className={`tag tag-${tone}`}>[{children}]</span>;
}

export function SectionMark({ children }: { children: ReactNode }) {
  return (
    <div className="section-mark">
      <i />
      {children}
    </div>
  );
}

export function LinkedInIcon() {
  return <span className="linkedin-icon">in</span>;
}
