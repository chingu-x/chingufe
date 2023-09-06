

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.50919189.js","_app/immutable/chunks/scheduler.d732cd1a.js","_app/immutable/chunks/index.0bfbdd81.js","_app/immutable/chunks/singletons.b2e14300.js"];
export const stylesheets = [];
export const fonts = [];
