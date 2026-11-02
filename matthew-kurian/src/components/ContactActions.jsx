import { profile } from '../data/profile.js';
import { personalChannels, organisationChannels } from '../lib/channels.js';
import SectionMark from './SectionMark.jsx';
import { SaveIcon, CheckIcon, ShareIcon, ArrowIcon, PhoneIcon, ChatIcon, MailIcon, ProfileIcon, GlobeIcon } from './Icons.jsx';

const ICONS = { phone: PhoneIcon, chat: ChatIcon, mail: MailIcon, profile: ProfileIcon, globe: GlobeIcon };

function Row({ r }) {
  const Icon = ICONS[r.icon];
  return (
    <li>
      <a href={r.href} {...(r.external ? { target: '_blank', rel: 'noopener' } : {})}>
        <span className="channel__icon"><Icon /></span>
        <span className="channel__text">
          <span className="channel__label">{r.label}</span>
          <span className="channel__value">{r.value}</span>
        </span>
        <ArrowIcon className="channel__arrow" width={16} height={16} />
      </a>
    </li>
  );
}

export default function ContactActions({ vcardHref, saved, onSave, onShare }) {
  const rows = [...personalChannels(profile), ...organisationChannels(profile)];
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact__grid">
        <SectionMark num="03" label="Contact" />
        <div className="contact__intro" data-reveal>
          <h2 className="contact__title" id="contact-title">Stay in <em>touch.</em></h2>
          <p>Save Matthew’s details to your phone in one tap, or pass this page on to someone who should meet him.</p>
        </div>

        <div className="contact__panel" data-reveal>
          <a
            className={`save-card${saved ? ' is-done' : ''}`}
            href={vcardHref}
            download={profile.vcardFileName}
            onClick={onSave}
          >
            <span className="save-card__top">
              <span className="save-card__kicker">Contact card</span>
              <span className="save-card__icon">{saved ? <CheckIcon /> : <SaveIcon />}</span>
            </span>
            <span className="save-card__title">{saved ? 'Contact saved' : 'Save contact'}</span>
            <span className="save-card__desc">Adds {profile.fullName} to your phone’s contacts. Works on iPhone and Android.</span>
          </a>

          <button type="button" className="share-row" onClick={onShare}>
            <ShareIcon />
            <span>Share profile</span>
            <span className="share-row__hint">Send a link to this page</span>
          </button>

          {rows.length > 0 && (
            <ul className="channels" aria-label="Ways to get in touch">
              {rows.map((r) => <Row key={r.key} r={r} />)}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
