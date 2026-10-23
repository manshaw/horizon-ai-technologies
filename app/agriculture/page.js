import Reveal from '@/components/Reveal';
import DetectionDemo from '@/components/DetectionDemo';
import { stages, features } from '@/data/content';

export const metadata = { title: 'Agriculture AI | HorizonAI Tech' };

export default function Agriculture() {
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <h1>Agriculture AI</h1>
          <p>From drone flight to field decision, in one connected workflow.</p>
        </div>
      </div>

      <section id="solutions">
        <div className="wrap">
          <h2 className="h2">How it works</h2>
          <p className="lead">Five steps take you from a drone flight to a decision you can act on.</p>
          <div className="stages">
            {stages.map((s, i) => (
              <Reveal key={s.title} className="stage">
                <div className="stx">
                  <span className="n">Step {i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <figure className="pics">
                  <img src={s.img} alt={s.alt} className={s.cls} />
                  <figcaption>{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <h2 className="h2" style={{ marginTop: 84 }}>What the AI finds</h2>
          <p className="lead">Built for quality assurance in oilseed and general seed production in Pakistan.</p>
          <div className="feat">
            {features.map(([title, text], i) => (
              <Reveal key={title} delay={(i % 4) * 0.08}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>

          <h2 className="h2" style={{ marginTop: 84 }}>See the difference</h2>
          <p className="lead">First the original drone image, then the AI scans it and marks every detection.</p>
          <DetectionDemo />
        </div>
      </section>
    </>
  );
}
