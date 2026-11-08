import { useEffect, useMemo, useRef, useState } from 'react';
import { profile } from '../data/profile.js';
import SectionMark from './SectionMark.jsx';
import { CloseIcon, ArrowRight } from './Icons.jsx';

const ALL = { id: 'all', label: 'All' };

/** Tabbed photo and video gallery with a full-screen viewer. Data: profile.gallery. */
export default function Gallery() {
  const items = profile.gallery || [];
  const tabs = useMemo(() => {
    const used = new Set(items.map((m) => m.tab));
    return [ALL, ...(profile.galleryTabs || []).filter((t) => used.has(t.id))];
  }, [items]);
  const [tab, setTab] = useState('all');
  const [open, setOpen] = useState(-1);
  const dialog = useRef(null);
  const shown = tab === 'all' ? items : items.filter((m) => m.tab === tab);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open >= 0 && !d.open) (d.showModal ? d.showModal() : d.setAttribute('open', ''));
    if (open < 0 && d.open) (d.close ? d.close() : d.removeAttribute('open'));
  }, [open]);

  useEffect(() => {
    if (open < 0) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % shown.length);
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + shown.length) % shown.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, shown.length]);

  if (!items.length) return null;
  const cur = open >= 0 ? shown[open] : null;

  const onTabKey = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    setTab(next.id);
    document.getElementById(`gtab-${next.id}`)?.focus();
  };

  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="wrap gallery__grid">
        <SectionMark num="03" label="Gallery" />
        <div className="gallery__head" data-reveal>
          <h2 className="gallery__title" id="gallery-title">Moments <em>along the way.</em></h2>
          <div className="gallery__tabs" role="tablist" aria-label="Gallery categories">
            {tabs.map((t, i) => {
              const count = t.id === 'all' ? items.length : items.filter((m) => m.tab === t.id).length;
              return (
                <button
                  key={t.id}
                  id={`gtab-${t.id}`}
                  role="tab"
                  type="button"
                  aria-selected={tab === t.id}
                  aria-controls="gallery-panel"
                  tabIndex={tab === t.id ? 0 : -1}
                  className="gallery__tab"
                  onClick={() => setTab(t.id)}
                  onKeyDown={(e) => onTabKey(e, i)}
                >
                  {t.label}<span className="gallery__count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ul className="gallery__items" id="gallery-panel" role="tabpanel" aria-labelledby={`gtab-${tab}`}>
          {shown.map((m, i) => (
            <li key={m.src}>
              <button type="button" className={`gallery__tile${m.type === 'video' ? ' is-video' : ''}`} onClick={() => setOpen(i)} aria-label={`Open: ${m.caption || m.alt}`}>
                <img
                  src={m.type === 'video' ? m.poster : m.src}
                  alt={m.alt}
                  width={m.w}
                  height={m.h}
                  loading="lazy"
                  decoding="async"
                  style={m.focus ? { objectPosition: m.focus } : undefined}
                />
                {m.type === 'video' && <span className="gallery__play" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog className="lightbox" ref={dialog} onClose={() => setOpen(-1)} onClick={(e) => { if (e.target === dialog.current) setOpen(-1); }} aria-label="Photo viewer">
        {cur && (
          <figure className="lightbox__figure">
            {cur.type === 'video' ? (
              <video key={cur.src} controls autoPlay playsInline poster={cur.poster} aria-label={cur.alt}>
                <source src={cur.src} type="video/mp4" />
              </video>
            ) : (
              <img key={cur.src} src={cur.src} alt={cur.alt} />
            )}
            <figcaption>
              <span>{cur.caption}</span>
              <span className="lightbox__pos">{open + 1} / {shown.length}</span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="lightbox__btn lightbox__close" onClick={() => setOpen(-1)} aria-label="Close"><CloseIcon width={20} height={20} /></button>
        {shown.length > 1 && (
          <>
            <button type="button" className="lightbox__btn lightbox__prev" onClick={() => setOpen((i) => (i - 1 + shown.length) % shown.length)} aria-label="Previous"><ArrowRight width={20} height={20} /></button>
            <button type="button" className="lightbox__btn lightbox__next" onClick={() => setOpen((i) => (i + 1) % shown.length)} aria-label="Next"><ArrowRight width={20} height={20} /></button>
          </>
        )}
      </dialog>
    </section>
  );
}
