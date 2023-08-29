

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/howItWorks/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9d340d5c.js","_app/immutable/chunks/scheduler.d732cd1a.js","_app/immutable/chunks/index.0bfbdd81.js","_app/immutable/chunks/Hero.aed49652.js","_app/immutable/chunks/Page-Section.2dc45d83.js"];
export const stylesheets = ["_app/immutable/assets/Hero.bd4f8171.css"];
export const fonts = [];
