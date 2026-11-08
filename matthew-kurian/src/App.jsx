import { useMemo } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Introduction from './components/Introduction.jsx';
import Organisation from './components/Organisation.jsx';
import Gallery from './components/Gallery.jsx';
import ContactActions from './components/ContactActions.jsx';
import Footer from './components/Footer.jsx';
import ActionBar from './components/ActionBar.jsx';
import { useContactActions, vcardHref } from './hooks/useContactActions.js';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  const { toast, saved, onSave, onShare } = useContactActions();
  const href = useMemo(vcardHref, []);
  const props = { vcardHref: href, saved, onSave, onShare };
  useReveal();

  return (
    <>
      <a className="skip-link" href="#contact">Skip to contact</a>
      <Header vcardHref={href} onSave={onSave} />
      <main>
        <Hero {...props} />
        <Introduction />
        <Organisation />
        <Gallery />
        <ContactActions {...props} />
      </main>
      <Footer />
      <ActionBar {...props} />
      <div className={`toast${toast ? ' is-shown' : ''}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
