import { profile, titleLine } from '../data/profile.js';
import { useReveal } from '../hooks/useReveal.js';
import SectionHead from './SectionHead.jsx';
import { ArrowIcon } from './Icons.jsx';

const roman = ['i', 'ii', 'iii', 'iv', 'v', 'vi'];

export default function Organisation() {
  const ref = useReveal();
  return (
    <section className="section org" id="work" aria-labelledby="work-title" ref={ref}>
      <div className="wrap section__grid">
        <SectionHead num="02" label="His work" />
        <div>
          <h2 className="section__title reveal" id="work-title">An enduring commitment to <em>better futures.</em></h2>
          <p className="org__summary reveal">{profile.organisationSummary}</p>

          <figure className="vision reveal">
            <blockquote>{profile.organisationVision.replace(/^“|”$/g, '')}</blockquote>
            <figcaption className="label">The vision of {profile.organisation}</figcaption>
          </figure>

          <ul className="focus reveal" aria-label="Areas of work">
            {profile.organisationFocus.map((f, i) => (
              <li key={f.title}>
                <span className="focus__i" aria-hidden="true">{roman[i]}.</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="orgcard reveal">
            <div>
              <span className="label">Established {profile.organisationFounded} · {profile.location}</span>
              <p className="orgcard__name">{profile.organisation}</p>
              <p className="orgcard__meta orgcard__role">
                <strong>{profile.fullName}</strong>, {titleLine()}
              </p>
            </div>
            {profile.website && (
              <a className="btn btn--ghost" href={profile.website} target="_blank" rel="noopener">
                Visit {profile.websiteLabel}<ArrowIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
