import { profile } from '../data/profile.js';
import SectionMark from './SectionMark.jsx';

export default function Introduction() {
  const [lede, ...rest] = profile.introduction;
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <SectionMark num="01" label="About" />
        <h2 className="about__title" id="about-title" data-reveal>A little about <em>Matthew.</em></h2>

        <dl className="facts" data-reveal>
          {profile.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="about__text" data-reveal>
          <p className="about__lede">{lede}</p>
          {rest.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
        </div>

        <div className="path" data-reveal>
          <h3 className="sub-label">The path so far</h3>
          <ol>
            {profile.milestones.map((m) => (
              <li key={m.year}>
                <span className="path__year">{m.year}</span>
                <span className="path__title">{m.title}</span>
                <span className="path__text">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>

        {profile.recognition?.length > 0 && (
          <div className="ledger ledger--recognition" data-reveal>
            <h3 className="sub-label">Recognition</h3>
            <ul>
              {profile.recognition.map((r) => (
                <li key={r.title}>
                  <span className="ledger__year">{r.year}</span>
                  <span className="ledger__main">
                    <span className="ledger__name">{r.title}</span>
                    <span className="ledger__meta">{r.by}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {profile.ventures?.length > 0 && (
          <div className="ledger ledger--ventures" data-reveal>
            <h3 className="sub-label">Beyond El Shaddai</h3>
            <ul>
              {profile.ventures.map((v) => (
                <li key={v.name}>
                  <span className="ledger__year">{v.since}</span>
                  <span className="ledger__main">
                    <span className="ledger__name">{v.name}</span>
                    <span className="ledger__meta">{v.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
