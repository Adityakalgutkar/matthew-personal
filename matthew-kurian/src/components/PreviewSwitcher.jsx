import { profile } from '../data/current.js';
import { views, viewIds } from '../data/views.js';

/* global __INLINE_VCARD__ */
const INLINE = typeof __INLINE_VCARD__ !== 'undefined' && __INLINE_VCARD__;

const NAMES = { full: 'Main', 'el-shaddai': 'El Shaddai', 'goa-marathon': 'Goa Marathon', business: 'Business' };

/** Preview only: a strip above the header to switch between the QR versions.
 *  The live site uses /el-shaddai, /goa-marathon and /business instead. */
export default function PreviewSwitcher() {
  if (!INLINE) return null;
  const go = (id) => { window.location.hash = id === 'full' ? '' : id; window.location.reload(); };
  return (
    <nav className="preview-strip" aria-label="Preview a QR version">
      <div className="wrap preview-strip__inner">
        <span className="preview-strip__label">QR version</span>
        <div className="preview-strip__tabs">
          {viewIds.map((id) => (
            <button key={id} type="button" aria-current={profile.view === id ? 'page' : undefined} onClick={() => go(id)}
              ref={(el) => { if (el && profile.view === id && el.scrollIntoView) el.scrollIntoView({ block: 'nearest', inline: 'center' }); }}>
              {NAMES[id] || views[id].label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
