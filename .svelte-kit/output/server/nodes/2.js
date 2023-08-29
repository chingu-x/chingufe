import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.f1a65183.js","_app/immutable/chunks/scheduler.d732cd1a.js","_app/immutable/chunks/index.0bfbdd81.js","_app/immutable/chunks/Hero.aed49652.js","_app/immutable/chunks/Page-Section.2dc45d83.js"];
export const stylesheets = ["_app/immutable/assets/Hero.bd4f8171.css"];
export const fonts = [];
