import { profile } from '../data/current.js';
import { views, viewIds } from '../data/views.js';

/* global __INLINE_VCARD__ */
const INLINE = typeof __INLINE_VCARD__ !== 'undefined' && __INLINE_VCARD__;

/** Preview only: switch between the QR views. The live site uses /business etc. instead. */
export default function PreviewSwitcher() {
  if (!INLINE) return null;
  const go = (id) => { window.location.hash = id === 'full' ? '' : id; window.location.reload(); };
  return (
    <div className="preview-switch" role="group" aria-label="Preview a QR version">
      <span>Preview</span>
      {viewIds.map((id) => (
        <button key={id} type="button" aria-pressed={profile.view === id} onClick={() => go(id)}>
          {id === 'full' ? 'Main' : views[id].label.replace(' Charitable Trust', '')}
        </button>
      ))}
    </div>
  );
}
