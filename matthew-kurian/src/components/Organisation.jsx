import { profile } from '../data/profile.js';
import SectionMark from './SectionMark.jsx';
import { ArrowIcon } from './Icons.jsx';

export default function Organisation() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="wrap work__grid">
        <SectionMark num="02" label="His work" />
        <div className="work__intro" data-reveal>
          <h2 className="work__title" id="work-title">A vision that grew into a <em>movement.</em></h2>
          <p className="work__summary">{profile.organisationSummary}</p>
          {profile.website && (
            <a className="work__link" href={profile.website} target="_blank" rel="noopener">
              Visit El Shaddai<ArrowIcon width={16} height={16} />
            </a>
          )}
        </div>
        <ol className="areas" aria-label="Areas of work" data-reveal>
          {profile.organisationAreas.map((a, i) => (
            <li key={a.title}>
              <span className="areas__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="areas__title">{a.title}</span>
              <span className="areas__text">{a.text}</span>
            </li>
          ))}
        </ol>
        <figure className="vision" data-reveal>
          <blockquote>{profile.organisationVision}</blockquote>
          <figcaption>The vision of {profile.organisation}</figcaption>
        </figure>
      </div>
    </section>
  );
}
