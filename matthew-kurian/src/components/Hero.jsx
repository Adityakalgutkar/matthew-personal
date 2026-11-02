import { profile, titleLine } from '../data/profile.js';
import Portrait from './Portrait.jsx';
import { SaveIcon, ShareIcon, CheckIcon } from './Icons.jsx';

export default function Hero({ vcardHref, saved, onSave, onShare, saveRef }) {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="masthead">
          <span className="masthead__mark">
            <span className="masthead__name">Matthew <em>Kurian</em></span>
            <span className="label">Personal introduction</span>
          </span>
          <span className="masthead__right label">
            <span className="masthead__dot" aria-hidden="true" />
            {profile.location}
          </span>
        </div>
      </div>

      <div className="wrap hero__grid">
        <Portrait />

        <div className="hero__text">
          <p className="hero__kicker label">A life of purpose</p>
          <h1 className="hero__name hero-in hero-in--2">
            <span>{profile.firstName}</span>
            <span><em>{profile.lastName}</em></span>
          </h1>

          <p className="hero__role hero-in hero-in--2">
            <span>{titleLine()}</span>
            <span className="sep" aria-hidden="true" />
            <span>{profile.organisation}</span>
          </p>

          <p className="hero__intro hero-in hero-in--3">{profile.heroIntroduction}</p>

          <div className="hero__actions hero-in hero-in--3" ref={saveRef}>
            <a
              className={`btn btn--primary${saved ? ' is-done' : ''}`}
              href={vcardHref}
              download={profile.vcardFileName}
              onClick={onSave}
              aria-label={`Save contact: add ${profile.fullName} to your phone's contacts`}
            >
              <span className="btn__idle"><SaveIcon />Save contact</span>
              <span className="btn__done"><CheckIcon />Card saved</span>
            </a>
            <button type="button" className="btn btn--ghost" onClick={onShare} aria-label={`Share ${profile.fullName}'s profile page`}>
              <ShareIcon />Share
            </button>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="hero__foot">
          <span className="label">{profile.organisation} · Since {profile.organisationFounded}</span>
          <a className="label" href="#about" style={{ textDecoration: 'none' }}>Scroll — About Matthew</a>
        </div>
      </div>
    </header>
  );
}
