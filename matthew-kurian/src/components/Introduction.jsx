import { profile } from '../data/profile.js';
import { useReveal } from '../hooks/useReveal.js';
import SectionHead from './SectionHead.jsx';

export default function Introduction() {
  const ref = useReveal();
  const [lede, ...rest] = profile.introduction;
  return (
    <section className="section" id="about" aria-labelledby="about-title" ref={ref}>
      <div className="wrap section__grid">
        <SectionHead num="01" label="Introduction" />
        <div>
          <h2 className="section__title reveal" id="about-title">A little about <em>Matthew</em></h2>
          <div className="intro__body">
            <div className="reveal">
              <p className="intro__lede">{lede}</p>
              {rest.map((t) => <p className="intro__para" key={t.slice(0, 20)}>{t}</p>)}
            </div>
            <div className="reveal">
              <ul className="notes" aria-label="At a glance">
                <li><span className="label">From</span><span className="val">Kerala</span></li>
                <li><span className="label">In Goa since</span><span className="val">1993</span></li>
                <li><span className="label">Co-founded</span><span className="val">{profile.organisation}, {profile.organisationFounded}</span></li>
                <li><span className="label">With</span><span className="val">Anita Edgar</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
