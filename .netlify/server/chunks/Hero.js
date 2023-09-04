import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component } from "./ssr.js";
const ApplyLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="https://forms.gle/xAjXHyWtRKKh37di8" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10" data-svelte-h="svelte-f7z6ik">Apply for free</a>`;
});
const Picture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { src } = $$props;
  const images = Array.isArray(src) ? src : [src];
  images.find((i) => i.type === "svg" || images[0]);
  const defaultImage = images.find((i) => ["png", "jpg"].includes(i.type)) || images[0];
  const remainingImages = images.filter((i) => i.img !== defaultImage.img);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `<picture><img class="${"h-full object-cover " + escape(className, true)}"${add_attribute("src", defaultImage.img, 0)}${add_attribute("alt", defaultImage.alt, 0)}> ${each(remainingImages, (image, i) => {
    return `<source${add_attribute("srcset", image.img, 0)}${add_attribute("type", `image/${image.type}`, 0)}>`;
  })}</picture>`;
});
const Button_svelte_svelte_type_style_lang = "";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { description = "" } = $$props;
  let { heroClass = "" } = $$props;
  let { primaryHref = "" } = $$props;
  let { primaryText = "" } = $$props;
  let { secondaryHref = "" } = $$props;
  let { secondaryText = "" } = $$props;
  let { imageClass = "" } = $$props;
  let { images = [] } = $$props;
  const heroNavPaddingClasses = images.length ? "pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32" : "pb-6";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.heroClass === void 0 && $$bindings.heroClass && heroClass !== void 0)
    $$bindings.heroClass(heroClass);
  if ($$props.primaryHref === void 0 && $$bindings.primaryHref && primaryHref !== void 0)
    $$bindings.primaryHref(primaryHref);
  if ($$props.primaryText === void 0 && $$bindings.primaryText && primaryText !== void 0)
    $$bindings.primaryText(primaryText);
  if ($$props.secondaryHref === void 0 && $$bindings.secondaryHref && secondaryHref !== void 0)
    $$bindings.secondaryHref(secondaryHref);
  if ($$props.secondaryText === void 0 && $$bindings.secondaryText && secondaryText !== void 0)
    $$bindings.secondaryText(secondaryText);
  if ($$props.imageClass === void 0 && $$bindings.imageClass && imageClass !== void 0)
    $$bindings.imageClass(imageClass);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  return `<div class="${[
    "relative bg-white " + escape(heroClass, true),
    images.length ? "overflow-hidden" : ""
  ].join(" ").trim()}"><div class="mx-auto max-w-7xl"><div class="${"relative z-10 bg-white lg:max-w-2xl lg:w-full " + escape(heroNavPaddingClasses, true)}">${images.length ? `<svg class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="50,0 100,0 50,100 0,100"></polygon></svg>` : ``} <div class="relative px-4 pt-6 sm:px-6 lg:px-8"><nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global"><div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"><div class="flex items-center justify-between w-full md:w-auto"><a href="/" data-svelte-h="svelte-1j1og5w"><span class="sr-only">Chingu</span> <img class="w-auto h-8 sm:h-10" src="/logo-with-text-192.png" alt="Chingu"></a> <div class="flex items-center -mr-2 md:hidden"><button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" id="main-menu" aria-haspopup="true" data-svelte-h="svelte-19l7jrx"><span class="sr-only">Open main menu</span>  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></div> <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8" data-svelte-h="svelte-hywncf"><a href="/" class="font-medium text-gray-500 hover:text-gray-900">Home</a> <a href="/howItWorks" class="font-medium text-gray-500 hover:text-gray-900">How it works</a> <a href="/pricing" class="font-medium text-gray-500 hover:text-gray-900">Pricing</a></div></nav></div> ${``} ${title ? `<header class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"><div class="sm:text-center lg:text-left"><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"><span class="block xl:inline">${escape(title)}</span> <span class="block text-green-600 xl:inline">${escape(subtitle)}</span></h1> <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">${escape(description)}</p> ${primaryHref && primaryText ? `<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"><div class="rounded-md shadow"><a${add_attribute("href", primaryHref, 0)} target="_blank" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:text-lg md:px-10">${escape(primaryText)}</a></div> ${secondaryHref && secondaryText ? `<div class="mt-3 sm:mt-0 sm:ml-3"><a${add_attribute("href", secondaryHref, 0)} class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-700 bg-green-100 border border-transparent rounded-md hover:bg-green-200 md:py-4 md:text-lg md:px-10">${escape(secondaryText)}</a></div>` : ``}</div>` : ``}</div></header>` : ``}</div></div> ${images.length ? `<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">${validate_component(Picture, "Picture").$$render(
    $$result,
    {
      class: "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full " + imageClass,
      src: images
    },
    {},
    {}
  )}</div>` : ``}</div>`;
});
export {
  ApplyLink as A,
  Hero as H,
  Picture as P
};
