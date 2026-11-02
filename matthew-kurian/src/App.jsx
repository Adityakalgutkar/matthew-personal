import { useMemo, useRef } from 'react';
import Hero from './components/Hero.jsx';
import Introduction from './components/Introduction.jsx';
import Organisation from './components/Organisation.jsx';
import ContactActions from './components/ContactActions.jsx';
import Footer from './components/Footer.jsx';
import MobileDock from './components/MobileDock.jsx';
import { useContactActions, vcardHref } from './hooks/useContactActions.js';

export default function App() {
  const { toast, saved, onSave, onShare } = useContactActions();
  const href = useMemo(vcardHref, []);
  const heroActions = useRef(null);
  const props = { vcardHref: href, saved, onSave, onShare };

  return (
    <>
      <a className="skip-link" href="#connect">Skip to contact details</a>
      <Hero {...props} saveRef={heroActions} />
      <main>
        <Introduction />
        <Organisation />
        <ContactActions {...props} />
      </main>
      <Footer />
      <MobileDock {...props} watchRef={heroActions} />
      <div className={`toast${toast ? ' is-shown' : ''}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
