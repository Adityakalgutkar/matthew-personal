import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/current.js';
import { MenuIcon, CloseIcon, SaveIcon } from './Icons.jsx';

const SECTION_LABELS = { about: 'About', work: 'His work', gallery: 'Gallery', contact: 'Contact' };

/** Sections in the current view, numbered in order. */
export const NAV = profile.sections
  .filter((id) => id !== 'gallery' || (profile.gallery || []).length > 0)
  .map((id, i) => ({ id, href: `#${id}`, num: String(i + 1).padStart(2, '0'), label: SECTION_LABELS[id] }));

export const sectionNum = (id) => (NAV.find((n) => n.id === id) || {}).num || '';
export const hasSection = (id) => NAV.some((n) => n.id === id);

export default function Header({ vcardHref, onSave }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="site-header__inner">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)} aria-label={`${profile.fullName}, back to top`}>
          <span className="wordmark__full">{profile.firstName} <em>{profile.lastName}</em></span>
          <span className="wordmark__short" aria-hidden="true">M<em>K</em></span>
        </a>

        <nav className="nav" aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}><span className="nav__num">{n.num}</span>{n.label}</a>
          ))}
        </nav>

        <a className="header-save" href={vcardHref} download={profile.vcardFileName} onClick={onSave}>
          <SaveIcon width={16} height={16} />Save contact
        </a>

        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <div className="mobile-menu" id="mobile-menu" hidden={!open}>
        <nav aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              <span className="nav__num">{n.num}</span>{n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary btn--block" href={vcardHref} download={profile.vcardFileName} onClick={(e) => { onSave(e); setOpen(false); }}>
          <SaveIcon />Save contact
        </a>
        <p className="mobile-menu__foot">{profile.organisation} · {profile.location}</p>
      </div>
    </header>
  );
}
