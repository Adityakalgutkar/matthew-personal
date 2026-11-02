import { profile, titleLine } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <p className="footer__name">{profile.firstName} <em>{profile.lastName}</em></p>
          <p className="footer__meta">{titleLine()}, {profile.organisation}<br />{profile.location}</p>
        </div>
        <div className="footer__bottom">
          {profile.website && <a className="label" href={profile.website} target="_blank" rel="noopener">{profile.websiteLabel}</a>}
          <a className="label" href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
