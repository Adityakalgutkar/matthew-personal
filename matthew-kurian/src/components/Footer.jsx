import { profile, titleLine } from '../data/profile.js';
import { NAV } from './Header.jsx';
import { ArrowIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <nav className="footer__nav" aria-label="Sections">
            {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <a className="footer__totop" href="#top">Back to top</a>
        </div>
        <p className="footer__mark" aria-hidden="true">{profile.firstName} <em>{profile.lastName}</em></p>
        <div className="footer__bottom">
          <p>{titleLine()}, {profile.organisation}<br />{profile.location}</p>
          {profile.website && (
            <a href={profile.website} target="_blank" rel="noopener">{profile.websiteLabel}<ArrowIcon width={14} height={14} /></a>
          )}
        </div>
      </div>
    </footer>
  );
}
