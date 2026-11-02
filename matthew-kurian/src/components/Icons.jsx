/* Line icons, 24px grid, stroke inherits currentColor. */
const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' };
const I = (paths) => (p) => <svg {...base} {...p}>{paths}</svg>;

export const SaveIcon = I(<><circle cx="9.5" cy="8" r="3.6" /><path d="M2.8 20c.6-3.7 3.3-6 6.7-6s6.1 2.3 6.7 6" /><path d="M19 7.5v6M16 10.5h6" /></>);
export const CheckIcon = I(<path d="m4.5 12.5 4.5 4.5 10-10" />);
export const ArrowIcon = I(<path d="M7 17 17 7M9 7h8v8" />);
export const ArrowRight = I(<path d="M4 12h15M13 6l6 6-6 6" />);
export const ShareIcon = I(<><path d="M12 15V3.5M7.5 8 12 3.5 16.5 8" /><path d="M5 12.5V20h14v-7.5" /></>);
export const PhoneIcon = I(<path d="M5 3.5h3.2l1.6 4-2 1.3a11 11 0 0 0 5.4 5.4l1.3-2 4 1.6V17A2.5 2.5 0 0 1 16 19.5 13.5 13.5 0 0 1 2.5 6 2.5 2.5 0 0 1 5 3.5Z" />);
export const ChatIcon = I(<path d="M4 19.5 5.3 16A8 8 0 1 1 8 18.7Z" />);
export const MailIcon = I(<><rect x="3" y="5.5" width="18" height="13" rx="1" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></>);
export const ProfileIcon = I(<><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-6.5M11.5 13.5c0-2 1.2-3 2.6-3s2.4 1 2.4 3V17" /></>);
export const GlobeIcon = I(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.6 5.7 3.6 9S14.5 18.3 12 21c-2.5-2.7-3.6-5.7-3.6-9S9.5 5.7 12 3Z" /></>);
export const MenuIcon = I(<path d="M4 8h16M4 16h16" />);
export const CloseIcon = I(<path d="M6 6l12 12M18 6 6 18" />);
