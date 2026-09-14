import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { navGroups } from '../data/navigation';
import { Logo } from './ui';

export default function Layout() {
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenNav(null);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.nav-item, .mobile-toggle, .site-header')) {
        setOpenNav(null);
      }
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <div className="site-shell">
      <div className="site-header-wrap">
        <header className={`site-header ${mobileOpen ? 'is-open' : ''}`}>
          <Link className="brand" to="/" aria-label="Zeak home">
            <Logo light />
          </Link>

          <nav className={`main-nav ${mobileOpen ? 'is-open' : ''}`}>
            {navGroups.map((item) => (
              <div className={`nav-item ${openNav === item.label ? 'is-open' : ''}`} key={item.label}>
                <button
                  type="button"
                  className="nav-trigger"
                  onClick={() => setOpenNav(openNav === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown size={13} strokeWidth={2.25} />
                </button>
                <div className="nav-dropdown">
                  {item.items.map((entry) => (
                    <NavLink
                      to={entry.path}
                      key={entry.path}
                      className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                      onClick={() => {
                        setOpenNav(null);
                        setMobileOpen(false);
                      }}
                    >
                      {entry.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <a className="signin-link" href="https://devb.zeak.io/auth/login">
              Sign in
            </a>
            <span className="header-divider" aria-hidden />
            <Link className="signup-link" to="/company/contact">
              Sign up
              <ArrowRight size={14} strokeWidth={2.4} />
            </Link>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </header>

        {mobileOpen && (
          <div className="mobile-panel">
            {navGroups.map((item) => (
              <div className={`nav-item ${openNav === item.label ? 'is-open' : ''}`} key={item.label}>
                <button
                  type="button"
                  className="nav-trigger"
                  onClick={() => setOpenNav(openNav === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                {openNav === item.label && (
                  <div className="nav-dropdown">
                    {item.items.map((entry) => (
                      <NavLink
                        to={entry.path}
                        key={entry.path}
                        onClick={() => {
                          setOpenNav(null);
                          setMobileOpen(false);
                        }}
                      >
                        {entry.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mobile-actions">
              <a className="signin-link" href="https://devb.zeak.io/auth/login">
                Sign in
              </a>
              <Link className="signup-link" to="/company/contact" onClick={() => setMobileOpen(false)}>
                Sign up
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>

      <Outlet />

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>Enterprise intelligence &amp; execution for teams that run on real systems.</p>
          </div>
          <div className="footer-cols">
            {navGroups.map((group) => (
              <div key={group.label}>
                <strong>{group.label}</strong>
                {group.items.slice(0, 4).map((item) => (
                  <Link to={item.path} key={item.path}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Zeak Technologies. All rights reserved.</span>
          <span className="footer-loop">
            CONNECT <i /> UNDERSTAND <i /> DECIDE <i /> ACT
          </span>
        </div>
      </footer>
    </div>
  );
}
