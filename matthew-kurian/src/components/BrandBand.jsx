import { profile } from '../data/current.js';

/** Logo (or wordmark) and a strip of photos for a focused QR version. */
export default function BrandBand() {
  const b = profile.brand;
  if (!b) return null;
  const photos = b.photos || [];
  return (
    <section className={`brand${photos.length ? '' : ' brand--plain'}`} aria-label={b.name}>
      <div className="wrap brand__grid">
        <div className="brand__mark" data-reveal>
          {b.logo ? (
            <img className="brand__logo" src={b.logo} alt={b.name} />
          ) : (
            <p className="brand__wordmark">{b.name}</p>
          )}
          {b.sub && <p className="brand__sub">{b.sub}</p>}
        </div>
        {photos.length > 0 && (
          <ul className={`brand__photos brand__photos--${Math.min(photos.length, 3)}`}>
            {photos.slice(0, 3).map((m) => (
              <li key={m.src} data-reveal>
                <figure>
                  <img src={m.src} alt={m.alt} width={m.w} height={m.h} loading="lazy" decoding="async" />
                  {m.caption && <figcaption>{m.caption}</figcaption>}
                </figure>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
