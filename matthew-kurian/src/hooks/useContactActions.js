import { useCallback, useRef, useState } from 'react';
import { profile, titleLine } from '../data/profile.js';
import { buildVCard } from '../lib/vcard.js';

/* global __INLINE_VCARD__ */
const INLINE = typeof __INLINE_VCARD__ !== 'undefined' && __INLINE_VCARD__;

export function permanentUrl() {
  if (profile.siteUrl) return profile.siteUrl.replace(/\/$/, '') + '/';
  if (typeof window === 'undefined') return '';
  const { origin, pathname } = window.location;
  return origin && origin !== 'null' ? origin + pathname : window.location.href;
}

/**
 * Where SAVE CONTACT points. The production build serves a static
 * /matthew-kurian.vcf (most reliable inside QR-scanner and social
 * in-app browsers). The single-file preview uses a data: URL instead.
 */
export function vcardHref() {
  if (!INLINE) return `/${profile.vcardFileName}`;
  const text = buildVCard(profile, { url: profile.siteUrl ? permanentUrl() : undefined });
  return `data:text/vcard;charset=utf-8,${encodeURIComponent(text)}`;
}

async function copy(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
  } catch { /* fall through */ }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  } catch { return false; }
}

export function useContactActions() {
  const [toast, setToast] = useState('');
  const [saved, setSaved] = useState(false);
  const timer = useRef();

  const notify = useCallback((msg) => {
    setToast(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 3200);
  }, []);

  const onSave = useCallback((e) => {
    if (INLINE && e && e.preventDefault) {
      // The hosted preview sandbox blocks file downloads.
      e.preventDefault();
      notify('Preview only: on the live site this downloads Matthew’s contact card.');
      return;
    }
    setSaved(true);
    notify('Contact card downloaded. Open it to add Matthew to your contacts.');
    setTimeout(() => setSaved(false), 4000);
  }, [notify]);

  const onShare = useCallback(async () => {
    const url = permanentUrl();
    const data = { title: profile.fullName, text: `${profile.fullName} — ${titleLine()}, ${profile.organisation}`, url };
    if (navigator.share && (!navigator.canShare || navigator.canShare(data))) {
      try { await navigator.share(data); return; }
      catch (err) { if (err && err.name === 'AbortError') return; }
    }
    const ok = await copy(url);
    notify(ok ? 'Link to Matthew’s profile copied.' : url);
  }, [notify]);

  return { toast, saved, onSave, onShare };
}
