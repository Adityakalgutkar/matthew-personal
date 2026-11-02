import { profile, titleLine } from '../data/profile.js';
import { getInTouchTarget } from '../lib/channels.js';
import Portrait from './Portrait.jsx';
import { SaveIcon, CheckIcon, ArrowRight } from './Icons.jsx';

export default function Hero({ vcardHref, saved, onSave }) {
  const touch = getInTouchTarget(profile);
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__grid">
        <p className="hero__meta">
          <span>Personal profile</span>
          <span className="hero__meta-rule" aria-hidden="true" />
          <span>{profile.location}</span>
        </p>

        <h1 className="hero__name" id="hero-name">
          <span className="hero__first">{profile.firstName}</span>
          <span className="hero__last">{profile.lastName}</span>
        </h1>

        <div className="hero__figure">
          <Portrait caption={`${profile.fullName} · ${profile.organisationShort}`} />
        </div>

        <div className="hero__side">
          <p className="hero__role-label">{titleLine()}</p>
          <p className="hero__org">{profile.organisation}</p>
          <p className="hero__note">{profile.heroNote}</p>
        </div>

        <div className="hero__body">
          <p className="hero__intro">{profile.heroIntroduction}</p>
          <div className="hero__actions">
            <a
              className={`btn btn--primary${saved ? ' is-done' : ''}`}
              href={vcardHref}
              download={profile.vcardFileName}
              onClick={onSave}
            >
              {saved ? <CheckIcon /> : <SaveIcon />}
              {saved ? 'Contact saved' : 'Save contact'}
            </a>
            <a className="btn btn--ghost" href={touch.href} {...(touch.external ? { target: '_blank', rel: 'noopener' } : {})}>
              Get in touch<ArrowRight width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
