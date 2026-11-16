/** The profile as the current visitor sees it (see src/data/views.js). */
import { profile as base, titleLine as baseTitleLine } from './profile.js';
import { applyView, detectView } from '../lib/view.js';

export const profile = applyView(base, detectView());
export const titleLine = (p = profile) => baseTitleLine(p);
export { base };
