

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dd97ad4b.js","_app/immutable/chunks/scheduler.d732cd1a.js","_app/immutable/chunks/index.0bfbdd81.js"];
export const stylesheets = ["_app/immutable/assets/0.12c11b7a.css"];
export const fonts = [];
