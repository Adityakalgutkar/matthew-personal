import { useEffect, useState } from 'react';
import { profile } from '../data/profile.js';
import { SaveIcon, ShareIcon } from './Icons.jsx';

/** Slim save bar on phones once the hero buttons have scrolled away (hidden near the contact section). */
export default function MobileDock({ vcardHref, onSave, onShare, watchRef }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const target = watchRef.current;
    const contact = document.getElementById('connect');
    if (!target || !('IntersectionObserver' in window)) return;
    let heroGone = false, contactIn = false;
    const update = () => setShow(heroGone && !contactIn);
    const a = new IntersectionObserver(([e]) => { heroGone = !e.isIntersecting && e.boundingClientRect.top < 0; update(); });
    const b = new IntersectionObserver(([e]) => { contactIn = e.isIntersecting || e.boundingClientRect.top < 0; update(); }, { rootMargin: '0px 0px -20% 0px' });
    a.observe(target);
    if (contact) b.observe(contact);
    return () => { a.disconnect(); b.disconnect(); };
  }, [watchRef]);

  return (
    <div className={`dock${show ? ' is-shown' : ''}`} aria-hidden={!show}>
      <a className="btn btn--primary" href={vcardHref} download={profile.vcardFileName} onClick={onSave} tabIndex={show ? 0 : -1}>
        <SaveIcon />Save contact
      </a>
      <button type="button" className="btn btn--ghost" onClick={onShare} aria-label="Share profile" tabIndex={show ? 0 : -1}>
        <ShareIcon />
      </button>
    </div>
  );
}
