import Reveal from '@/components/Reveal';
import { faqs } from '@/data/content';

export const metadata = { title: 'About | HorizonAI Tech' };

export default function About() {
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <h1>About HorizonAI</h1>
          <p>A technology company focused on applied artificial intelligence.</p>
        </div>
      </div>

      <section id="about">
        <div className="wrap about">
          <Reveal>
            <h2 className="h2">Built to see further</h2>
            <p className="lead" style={{ marginBottom: 22 }}>HorizonAI Technologies is a Pakistan-registered technology company focused on applied artificial intelligence.</p>
            <p>We combine machine learning, computer vision and software engineering to solve practical problems, with a strong background in drone-based agricultural intelligence.</p>
            <p>Our work ranges from research and prototypes to production platforms, and we also provide consultancy and training so that clients can run and grow what we build.</p>
          </Reveal>
          <Reveal className="facts" delay={0.1}>
            <div><b>Company</b>HORIZONAI TECHNOLOGIES (SMC-PRIVATE) LIMITED</div>
            <div><b>Sector</b>Information Technology</div>
            <div><b>Focus areas</b>AI, machine learning, computer vision, data analytics, automation, cloud and IT consulting</div>
            <div><b>Tagline</b>Intelligence, above all</div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="h2">Questions we hear often</h2>
          <div style={{ marginTop: 28, borderTop: '1px solid var(--line)' }}>
            {faqs.map(([q, a]) => (
              <Reveal as="details" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
