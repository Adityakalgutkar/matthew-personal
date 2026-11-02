import { useState } from 'react';
import { profile } from '../data/profile.js';

/** Supplied portrait: local asset → supplied link → monogram. */
export default function Portrait() {
  const sources = [profile.profileImage, profile.profileImageFallback].filter(Boolean);
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const failed = i >= sources.length;

  return (
    <figure className="portrait hero-in">
      <div className="portrait__frame">
        {!failed && (
          <img
            key={sources[i]}
            src={sources[i]}
            alt={profile.profileImageAlt}
            className={loaded ? 'is-loaded' : ''}
            style={{ objectPosition: `50% ${profile.profileImageFocus}` }}
            width="360"
            height="450"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            referrerPolicy="no-referrer"
            onLoad={(e) => {
              // A 1×1 or tiny placeholder counts as a failure.
              if (e.currentTarget.naturalWidth < 40) { setLoaded(false); setI((n) => n + 1); }
              else setLoaded(true);
            }}
            onError={() => { setLoaded(false); setI((n) => n + 1); }}
          />
        )}
        {failed && (
          <div className="portrait__fallback" role="img" aria-label={profile.fullName}>
            {profile.monogram}
          </div>
        )}
      </div>
      <figcaption className="portrait__side" aria-hidden="true">
        <span className="label">{profile.fullName}</span>
        <span className="label">{profile.location}</span>
      </figcaption>
    </figure>
  );
}
