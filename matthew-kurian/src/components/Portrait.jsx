import { useState } from 'react';
import { profile } from '../data/profile.js';

/** Shows the first portrait source that loads (see profile.profileImages). */
export default function Portrait({ caption }) {
  const sources = profile.profileImages.filter(Boolean);
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const failed = i >= sources.length;
  const next = () => { setLoaded(false); setI((n) => n + 1); };

  return (
    <figure className="portrait">
      <div className={`portrait__frame${profile.profileImageTone === 'ink' ? ' is-toned' : ''}`}>
        {!failed ? (
          <img
            key={sources[i]}
            src={sources[i]}
            alt={profile.profileImageAlt}
            className={loaded ? 'is-loaded' : ''}
            style={{ objectPosition: `50% ${profile.profileImageFocus}` }}
            width="800"
            height="1000"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            onLoad={(e) => (e.currentTarget.naturalWidth < 40 ? next() : setLoaded(true))}
            onError={next}
          />
        ) : (
          <div className="portrait__fallback" role="img" aria-label={profile.fullName}>{profile.monogram}</div>
        )}
      </div>
      {caption && <figcaption className="portrait__caption">{caption}</figcaption>}
    </figure>
  );
}
