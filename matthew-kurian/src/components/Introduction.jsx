import { profile } from '../data/profile.js';
import SectionMark from './SectionMark.jsx';

export default function Introduction() {
  const [lede, ...rest] = profile.introduction;
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <SectionMark num="01" label="About" />
        <h2 className="about__title" id="about-title" data-reveal>A little about <em>Matthew.</em></h2>
        <div className="about__text" data-reveal>
          <p className="about__lede">{lede}</p>
          {rest.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
        </div>
        <ol className="timeline" aria-label="Milestones" data-reveal>
          {profile.milestones.map((m) => (
            <li key={m.year}>
              <span className="timeline__year">{m.year}</span>
              <span className="timeline__text">{m.text}</span>
            </li>
          ))}
        </ol>
        {profile.ventures?.length > 0 && (
          <div className="ventures" data-reveal>
            <h3 className="ventures__title">Beyond El Shaddai</h3>
            <p className="ventures__intro">{profile.venturesIntro}</p>
            <ul aria-label="Other ventures">
              {profile.ventures.map((v) => (
                <li key={v.name}>
                  <span className="ventures__name">{v.name}</span>
                  <span className="ventures__meta">{v.role} · since {v.since}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
