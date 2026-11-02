import { useEffect, useState } from 'react';
import { profile } from '../data/profile.js';
import { getInTouchTarget } from '../lib/channels.js';
import { SaveIcon, CheckIcon, ShareIcon } from './Icons.jsx';

/**
 * Fixed bar on phones and tablets: Save contact, Get in touch, Share.
 * It stays out of the way while the hero buttons or the contact
 * section's own buttons are on screen, and is visible everywhere else.
 */
export default function ActionBar({ vcardHref, saved, onSave, onShare }) {
  const [show, setShow] = useState(false);
  const touch = getInTouchTarget(profile);

  useEffect(() => {
    const targets = ['.hero__actions', '.contact__panel'].map((s) => document.querySelector(s)).filter(Boolean);
    if (!targets.length || !('IntersectionObserver' in window)) { setShow(true); return; }
    const visible = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setShow(visible.size === 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div className={`action-bar${show ? ' is-shown' : ''}`} aria-hidden={!show} inert={show ? undefined : ''}>
      <a className={`btn btn--primary${saved ? ' is-done' : ''}`} href={vcardHref} download={profile.vcardFileName} onClick={onSave}>
        {saved ? <CheckIcon /> : <SaveIcon />}
        {saved ? 'Saved' : 'Save contact'}
      </a>
      <a className="btn btn--ghost" href={touch.href} {...(touch.external ? { target: '_blank', rel: 'noopener' } : {})}>
        Get in touch
      </a>
      <button type="button" className="btn btn--ghost action-bar__share" onClick={onShare} aria-label="Share profile">
        <ShareIcon />
      </button>
    </div>
  );
}
