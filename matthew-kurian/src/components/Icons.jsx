const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' };

export const SaveIcon = (p) => (
  <svg {...base} {...p}><circle cx="9.5" cy="8" r="3.6" /><path d="M2.8 20c.6-3.7 3.3-6 6.7-6s6.1 2.3 6.7 6" /><path d="M19 7.5v6M16 10.5h6" /></svg>
);
export const ShareIcon = (p) => (
  <svg {...base} {...p}><path d="M12 15V3.5M7.5 8 12 3.5 16.5 8" /><path d="M5 12.5V20h14v-7.5" /></svg>
);
export const ArrowIcon = (p) => (
  <svg {...base} {...p}><path d="M7 17 17 7M9 7h8v8" /></svg>
);
export const CheckIcon = (p) => (
  <svg {...base} {...p}><path d="m4.5 12.5 4.5 4.5 10-10" /></svg>
);
