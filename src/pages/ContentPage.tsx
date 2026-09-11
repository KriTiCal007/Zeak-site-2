import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { pageByPath, relatedPages, type PageContent } from '../data/navigation';
import { Button, SectionLabel } from '../components/ui';

function ContentView({ page }: { page: PageContent }) {
  const related = relatedPages(page.path);

  return (
    <main className="content-page">
      <section className="page-hero dark-section">
        <div className="hero-grid" />
        <div className="container page-hero-inner">
          <SectionLabel dark>{page.category.toUpperCase()}</SectionLabel>
          <h1>
            {page.title}
            <br />
            <span>{page.headline}</span>
          </h1>
          <p className="hero-copy">{page.description}</p>
          <div className="hero-actions">
            <Button to="/company/contact">Book a Demo</Button>
            <Link className="text-link light-link" to="/platform">
              Explore the Platform <ArrowRight size={16} />
            </Link>
          </div>
          <div className="page-highlights">
            {page.highlights.map((item) => (
              <span key={item}>
                <Check size={14} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel>CAPABILITIES</SectionLabel>
              <h2>
                Built for how
                <br />
                <em>your teams actually work.</em>
              </h2>
            </div>
            <p>
              Every Zeak experience shares the same design language—clear hierarchy, operational
              clarity, and a path from insight to governed action.
            </p>
          </div>
          <div className="capability-cards">
            {page.capabilities.map((capability, index) => (
              <article className="capability-card" key={capability.title}>
                <span className="capability-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{capability.title}</h3>
                <p>{capability.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-sand">
          <div className="container">
            <div className="section-heading centered-heading">
              <SectionLabel>RELATED IN {page.category.toUpperCase()}</SectionLabel>
              <h2>
                Keep exploring
                <br />
                <em>the same operating layer.</em>
              </h2>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <Link to={item.path} className="related-card" key={item.path}>
                  <small>{item.category}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>
                    View page <ArrowUpRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="final-cta dark-section page-cta">
        <div className="cta-lines" />
        <div className="container final-cta-inner">
          <SectionLabel dark>READY TO GO FURTHER</SectionLabel>
          <h2>
            See {page.title.toLowerCase()}
            <br />
            <span>in your operating context.</span>
          </h2>
          <p>
            Connect your systems. Build intelligent applications. Deploy AI agents. Automate
            operations—with security and governance built in.
          </p>
          <div className="hero-actions">
            <Button to="/company/contact">Book a Demo</Button>
            <a className="text-link light-link" href="mailto:hello@zeak.ai">
              Talk to Zeak <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContentPage() {
  const { pathname } = useLocation();
  const page = pageByPath[pathname];

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return <ContentView page={page} />;
}
