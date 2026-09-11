import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Globe2, Send } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { navGroups } from '../data/navigation';
import { Button, LinkedInIcon, Logo } from './ui';

export default function Layout() {
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenNav(null);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/">
          <Logo />
        </Link>
        <nav className={`main-nav ${mobileOpen ? 'main-nav-open' : ''}`}>
          {navGroups.map((item) => (
            <div className="nav-item" key={item.label}>
              <button
                type="button"
                className="nav-button"
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
                      className={({ isActive }) => (isActive ? 'nav-link-active' : undefined)}
                      onClick={() => setOpenNav(null)}
                    >
                      {entry.label}
                      <ArrowUpRight size={13} />
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mobile-nav-actions">
            <a href="https://devb.zeak.io/auth/login">Sign In</a>
            <Button to="/company/contact">Book a Demo</Button>
          </div>
        </nav>
        <div className="header-actions">
          <a href="https://devb.zeak.io/auth/login">Sign In</a>
          <Button to="/company/contact">Book a Demo</Button>
        </div>
        <button
          type="button"
          className="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Logo />
              <p>
                The enterprise intelligence
                <br />
                &amp; execution platform.
              </p>
              <div className="footer-socials">
                <Link to="/company/contact">
                  <Globe2 size={16} />
                </Link>
                <Link to="/company/contact">
                  <LinkedInIcon />
                </Link>
                <Link to="/company/contact">
                  <Send size={16} />
                </Link>
              </div>
            </div>
            <div className="footer-links">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <strong>{group.label}</strong>
                  {group.items.slice(0, 3).map((item) => (
                    <Link to={item.path} key={item.path}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div>
                <strong>Trust</strong>
                <Link to="/platform/security-governance">Security</Link>
                <Link to="/company/contact">Privacy</Link>
                <Link to="/company/contact">Terms</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Zeak Technologies. All rights reserved.</span>
            <span>
              CONNECT <i /> UNDERSTAND <i /> DECIDE <i /> ACT
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
