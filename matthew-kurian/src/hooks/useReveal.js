import { useEffect } from 'react';

/**
 * Fades sections in as they enter the viewport. Content is visible by
 * default; only elements still below the fold when JS runs are hidden
 * first, so nothing is ever left invisible.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = [...document.querySelectorAll('[data-reveal]')].filter((el) => el.getBoundingClientRect().top > innerHeight * 0.92);
    els.forEach((el) => el.classList.add('is-pending'));
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); e.target.classList.remove('is-pending'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -10% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
