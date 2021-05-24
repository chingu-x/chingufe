<script>
  import Picture from "./Picture.svelte";

  export let quote = "";
  export let author = "";
  export let title = "";
  export let location = "";
  export let logo = null;
  export let logoClass = "";
  export let authorPhoto = null;
  export let authorPhotoClass = "";
  export let display = "compact";

  const padding = display === "standalone" ? "py-12 md:py-20 lg:py-24" : "py-3";
</script>

<section class="bg-gray-50 overflow-hidden {padding} mb-8 lg:mb-12">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {#if display === 'standalone'}
      <svg class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-testimonial">
        <title id="svg-testimonial">Testimonial</title>
        <defs>
          <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
      </svg>
    {/if}

    <div class="relative">
      {#if logo}
        <Picture
          class="lg:mx-auto h-8 mb-2 lg:mb-4 {logoClass}"
          src={logo} />
      {/if}
      <blockquote>
        <div
          class="max-w-3xl lg:mx-auto lg:text-center text-2xl leading-9 font-medium
          text-gray-900">
          <p>
            &ldquo;{quote}&rdquo;
          </p>
        </div>
        <footer class="mt-2 lg:mt-4">
          <div class="flex items-center lg:justify-center">
            {#if authorPhoto}
              <div class="md:flex-shrink-0 mr-4">
                <Picture
                  class="mx-auto h-10 w-10 rounded-full {authorPhotoClass}"
                  src={authorPhoto} />
              </div>
            {/if}
            <div
              class="lg:text-center lg:flex lg:items-center">
              <div class="text-base font-medium text-gray-900">
                {author}
              </div>

              <svg
                class="hidden lg:block mx-1 h-5 w-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M11 0h3L9 20H6l5-20z" />
              </svg>

              <div class="text-xs lg:text-base font-medium text-gray-500">
                {title || location}
              </div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  </div>
</section>
