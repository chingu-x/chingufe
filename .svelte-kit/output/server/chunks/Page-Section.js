import { c as create_ssr_component, e as escape } from "./ssr.js";
const Page_Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="py-10"><div class="max-w-screen-xl mx-auto px-4 sm:px-6"><div class="lg:text-center"><p class="text-base leading-6 text-green-600 font-semibold tracking-wide uppercase">${escape(name)}</p> <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">${escape(title)}</h3> <p class="mt-4 max-w-4xl text-xl leading-7 text-gray-500 lg:mx-auto">${escape(description)}</p></div></div></div>`;
});
export {
  Page_Section as P
};
