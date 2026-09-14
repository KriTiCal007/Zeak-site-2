import { ArrowRight, Check } from 'lucide-react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { pageByPath, relatedPages, type PageContent } from '../data/navigation';
import { Button, SectionMark, Tag } from '../components/ui';

function ContentView({ page }: { page: PageContent }) {
  const related = relatedPages(page.path);

  return (
    <main className="content-page">
      <section className="page-hero">
        <div className="hero-glow" />
        <div className="container page-hero-inner">
          <Tag tone="lime">{page.category}</Tag>
          <h1>
            {page.title}
            <br />
            <span className="hero-highlight soft">{page.headline}</span>
          </h1>
          <p className="hero-copy">{page.description}</p>
          <div className="hero-actions">
            <Button to="/company/contact" variant="lime">
              Book a demo
            </Button>
            <Button to="/platform" variant="teal">
              Explore platform
            </Button>
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

      <section className="section section-cream">
        <div className="container">
          <div className="section-head">
            <SectionMark>CAPABILITIES</SectionMark>
            <h2>Built for how your teams actually work</h2>
          </div>
          <div className="capability-board">
            {page.capabilities.map((capability, index) => (
              <article key={capability.title}>
                <span className="mono-meta">{String(index + 1).padStart(2, '0')}</span>
                <h3>{capability.title}</h3>
                <p>{capability.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-cream related-band">
          <div className="container">
            <div className="section-head centered">
              <SectionMark>RELATED</SectionMark>
              <h2>Keep exploring {page.category.toLowerCase()}</h2>
            </div>
            <div className="related-board">
              {related.map((item) => (
                <Link to={item.path} key={item.path} className="related-tile">
                  <Tag>{item.category}</Tag>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="tile-link">
                    View page <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="final-cta page-cta">
        <div className="final-cta-glow" />
        <div className="container final-cta-inner">
          <SectionMark>NEXT STEP</SectionMark>
          <h2>
            See {page.title.toLowerCase()}
            <br />
            in your operating context
          </h2>
          <div className="hero-actions">
            <Button to="/company/contact" variant="lime">
              Book a demo
            </Button>
            <Button href="mailto:hello@zeak.ai" variant="teal">
              Talk to Zeak
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContentPage() {
  const { pathname } = useLocation();
  const page = pageByPath[pathname];
  if (!page) return <Navigate to="/" replace />;
  return <ContentView page={page} />;
}
