import { profile } from '../data/profile.js';
import SectionMark from './SectionMark.jsx';

function Ledger({ kind }) {
  const rows = kind === 'recognition'
    ? (profile.recognition || []).map((r) => ({ key: r.title, year: r.year, name: r.title, meta: r.by }))
    : (profile.ventures || []).map((v) => ({ key: v.name, year: v.since || '', name: v.name, meta: [v.role, v.note, v.since && `since ${v.since}`].filter(Boolean).join(', ') }));
  if (!rows.length) return null;
  return (
    <ul className="ledger chapter__ledger">
      {rows.map((r) => (
        <li key={r.key}>
          <span className="ledger__year">{r.year}</span>
          <span className="ledger__main">
            <span className="ledger__name">{r.name}</span>
            <span className="ledger__meta">{r.meta}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function Media({ items }) {
  return (
    <div className={`chapter__media${items.length === 1 ? ' is-single' : ''}`}>
      {items.map((m) => (
        <figure className={`chapter__figure${m.h > m.w ? ' is-portrait' : ''}${m.type === 'video' ? ' is-video' : ''}`} key={m.src}>
          {m.type === 'video' ? (
            <video controls preload="none" playsInline poster={m.poster} width={m.w} height={m.h} aria-label={m.alt}>
              <source src={m.src} type="video/mp4" />
            </video>
          ) : (
            <img src={m.src} alt={m.alt} width={m.w} height={m.h} loading="lazy" decoding="async" />
          )}
          {m.caption && <figcaption>{m.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

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

        {profile.focus?.length > 0 && (
          <div className="focus" data-reveal>
            <h3 className="sub-label">Areas of focus</h3>
            <ul className="focus__list">
              {profile.focus.map((f) => (
                <li key={f.title}>
                  <span className="focus__title">{f.title}</span>
                  <span className="focus__text">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {profile.quotes && (
          <div className="voices" data-reveal>
            {['own', 'said'].filter((k) => profile.quotes[k]).map((k) => (
              <figure className={`voice voice--${k}`} key={k}>
                <blockquote>“{profile.quotes[k].text}”</blockquote>
                <figcaption>{profile.quotes[k].source}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="chapters">
          <h3 className="sub-label chapters__label" data-reveal>His life, in chapters</h3>
          <ol className="chapters__list">
            {profile.chapters.map((c, i) => (
              <li className="chapter" id={c.id} key={c.id} data-reveal>
                <div className="chapter__head">
                  <span className="chapter__num">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="chapter__title">{c.title}</h4>
                  {c.period && <span className="chapter__period">{c.period}</span>}
                </div>
                <div className="chapter__body">
                  {c.body.map((t) => <p key={t.slice(0, 32)}>{t}</p>)}
                  {c.private?.show && <p>{c.private.text}</p>}
                  {c.points?.length > 0 && (
                    <ul className="chapter__points">
                      {c.points.map((pt) => (
                        <li key={pt.when + pt.what}>
                          <span className="chapter__when">{pt.when}</span>
                          <span className="chapter__what">{pt.what}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {c.ledger && <Ledger kind={c.ledger} />}
                  {c.media?.length > 0 && <Media items={c.media} />}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
