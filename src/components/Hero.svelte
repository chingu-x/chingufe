<script>
  import { scale } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { away } from "../actions/away";
  import Picture from "../components/Picture.svelte";
  import Button from "../components/Button.svelte";

  export let title = '';
  export let subtitle = '';
  export let description = '';
  export let heroClass = '';
  export let primaryHref = '';
  export let primaryText = '';
  export let secondaryHref = '';
  export let secondaryText = '';
  export let imageClass = '';
  export let images = [];

  const heroNavPaddingClasses = images.length ? "pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32" : "pb-6";

  let primaryLinkText = "Sign in";
  let open = false;
</script>

<div class="relative bg-white {heroClass}" class:overflow-hidden={images.length}>
  <div class="mx-auto max-w-7xl">
    <div
      class="relative z-10 bg-white lg:max-w-2xl lg:w-full {heroNavPaddingClasses}">
      {#if images.length}
        <svg
          class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      {/if}

      <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          class="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span class="sr-only">Chingu</span>
                <img
                  class="w-auto h-8 sm:h-10"
                  src="/logo-with-text-192.png"
                  alt="Chingu" />
              </a>
              <div class="flex items-center -mr-2 md:hidden">
                <button
                  on:click={() => (open = true)}
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                  id="main-menu"
                  aria-haspopup="true">
                  <span class="sr-only">Open main menu</span>
                  <!-- Heroicon name: menu -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <a
              href="/"
              class="font-medium text-gray-500 hover:text-gray-900">
              Home
            </a>
            
            <a
              href="/howItWorks"
              class="font-medium text-gray-500 hover:text-gray-900">
              How it works
            </a>

            <a
              href="/pricing"
              class="font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </a>

          </div>
        </nav>
      </div>

      {#if open}
        <div
          in:scale|global={{ duration: 100, start: 0.95, easing: cubicOut }}
          out:scale|global={{ duration: 75, start: 0.95, easing: cubicIn }}
          class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div
            class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img class="w-auto h-8" src="/logo-192x192.png" alt="Chingu" />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  on:click={() => (open = false)}
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: x -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu">
              <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                <a
                  href="/"
                  class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem">
                  Home
                </a>
                
                <a
                  href="/howItWorks"
                  class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem">
                  How it works
                </a>

                <a
                  href="/pricing"
                  class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      {/if}

      {#if title}
        <header
          class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">{title}</span>
              <span class="block text-green-600 xl:inline">{subtitle}</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {description}
            </p>
            {#if primaryHref && primaryText}
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a
                    href={ primaryHref } target="_blank"
                    class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                    {primaryText}
                  </a>
                </div>
                {#if secondaryHref && secondaryText}
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href={secondaryHref}
                      class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-700 bg-green-100 border border-transparent rounded-md hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                      {secondaryText}
                    </a>
                  </div>
                {/if}
              </div>
            {/if}
          </div>
        </header>
      {/if}
    </div>
  </div>
  {#if images.length}
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <Picture
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full {imageClass}"
        src={images} />
    </div>
  {/if}
</div>