import { profile } from '../data/profile.js';
import { useReveal } from '../hooks/useReveal.js';
import SectionHead from './SectionHead.jsx';
import { SaveIcon, ShareIcon, ArrowIcon, CheckIcon } from './Icons.jsx';

/** Only verified (non-null) channels appear. */
function channels(p) {
  const rows = [];
  if (p.phone) rows.push({ label: 'Phone', value: p.phone, href: `tel:${p.phone.replace(/[^\d+]/g, '')}` });
  if (p.whatsapp) rows.push({ label: 'WhatsApp', value: 'Send a message', href: `https://wa.me/${p.whatsapp.replace(/\D/g, '')}`, ext: true });
  if (p.email) rows.push({ label: 'Email', value: p.email, href: `mailto:${p.email}` });
  if (p.linkedin) rows.push({ label: 'LinkedIn', value: 'View profile', href: p.linkedin, ext: true });
  if (p.website) rows.push({ label: 'Organisation website', value: p.websiteLabel, href: p.website, ext: true });
  if (p.organisationPhone) rows.push({ label: 'Organisation office', value: p.organisationPhone, href: `tel:${p.organisationPhone.replace(/[^\d+]/g, '')}` });
  if (p.organisationEmail) rows.push({ label: 'Organisation email', value: p.organisationEmail, href: `mailto:${p.organisationEmail}` });
  return rows;
}

export default function ContactActions({ vcardHref, saved, onSave, onShare }) {
  const ref = useReveal();
  const rows = channels(profile);
  return (
    <section className="section contact" id="connect" aria-labelledby="connect-title" ref={ref}>
      <div className="wrap section__grid">
        <SectionHead num="03" label="Stay connected" />
        <div>
          <h2 className="section__title reveal" id="connect-title">Keep in touch with <em>Matthew.</em></h2>
          <p className="contact__lead reveal">Save his details to your phone in one tap, or pass this page on to someone who should know about his work.</p>

          <div className="actions reveal">
            <a
              className={`action action--primary${saved ? ' is-done' : ''}`}
              href={vcardHref}
              download={profile.vcardFileName}
              onClick={onSave}
            >
              <span>
                <span className="action__title">{saved ? 'Card saved' : 'Save contact'}</span>
                <span className="action__desc">Adds {profile.fullName} to your phone’s contacts. Works on iPhone and Android.</span>
              </span>
              <span className="action__icon" aria-hidden="true">{saved ? <CheckIcon /> : <SaveIcon />}</span>
            </a>
            <button type="button" className="action action--secondary" onClick={onShare}>
              <span>
                <span className="action__title">Share profile</span>
                <span className="action__desc">Send a link to this page by message, email or any app.</span>
              </span>
              <span className="action__icon" aria-hidden="true"><ShareIcon /></span>
            </button>
          </div>

          {rows.length > 0 && (
            <ul className="links reveal" aria-label="Contact details">
              {rows.map((r) => (
                <li key={r.label}>
                  <a href={r.href} {...(r.ext ? { target: '_blank', rel: 'noopener' } : {})}>
                    <span className="label">{r.label}</span>
                    <span className="links__val">{r.value}</span>
                    <span className="links__arrow" aria-hidden="true"><ArrowIcon /></span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
