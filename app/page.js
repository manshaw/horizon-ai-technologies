import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { services } from '@/data/content';

const TITLE = 'HorizonAI Tech';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hbg">
          <img src="/images/hero.jpg" alt="Drone flying over a canola field" />
        </div>
        <div className="wrap mk">
          <h1 className="mark" aria-label={TITLE}>
            {[...TITLE].map((c, i) => (
              <span key={i} aria-hidden="true" style={{ animationDelay: `${0.25 + i * 0.05}s` }}>
                {c === ' ' ? '\u00a0' : c}
              </span>
            ))}
          </h1>
          <p>Intelligence, above all. We build AI, computer vision and software solutions, starting with agriculture.</p>
          <div className="cta">
            <Link className="btn" href="/agriculture">Explore agriculture AI</Link>
            <Link className="btn alt" href="/contact">Talk to our team</Link>
          </div>
        </div>
      </div>

      <section id="services">
        <div className="wrap">
          <h2 className="h2">What we build</h2>
          <p className="lead">From a single model to a complete platform, our team covers the full path from raw data to a working product.</p>
          <div className="services">
            {services.map((s, i) => (
              <Reveal key={s.title} className="svc" delay={(i % 3) * 0.08}>
                <h3>
                  <svg viewBox="0 0 32 32" aria-hidden="true">{s.icon.map((d) => <path key={d} d={d} />)}</svg>
                  {s.title}
                </h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="band">
            <div>
              <h2 className="h2" style={{ fontSize: 'clamp(28px,3.6vw,44px)', maxWidth: '22ch' }}>Agriculture is where we started</h2>
              <p style={{ color: '#c9dcef', maxWidth: '52ch', margin: '12px 0 0' }}>See how drone imagery becomes health maps, weed zones and spray plans.</p>
            </div>
            <Link className="btn" href="/agriculture">Explore agriculture AI</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
