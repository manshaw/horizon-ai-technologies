import Reveal from '@/components/Reveal';
import { projects } from '@/data/content';

export const metadata = { title: 'Projects | HorizonAI Tech' };

export default function Projects() {
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <h1>Projects</h1>
          <p>The kind of AI systems our team designs and ships.</p>
        </div>
      </div>
      <section id="projects">
        <div className="wrap">
          <div className="pgrid">
            {projects.map((p, i) => (
              <Reveal as="article" key={p.title} className="pc" delay={(i % 2) * 0.1}>
                <img src={p.img} alt={p.alt} />
                <div className="pt">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
