<script>
  import Picture from "./Picture.svelte";

  export let images;
  export let name;
  export let description;
  export let tier;
  export let techStack;
</script>

<div
  class="flex flex-col flex-wrap items-center flex-grow-0 flex-shrink-0 px-0 m-auto text-center md:px-1">
  <Picture src={images} />
  <h3 class="inline-block m-2 text-xl font-bold">{name}</h3>
  <div class="flex w-64 h-24 m-2 text-lg align-text-top">{description}</div>
  <h3 class="inline-block mt-4 text-xl font-bold">{tier}</h3>
  <div class="flex w-auto h-24 m-0 text-lg align-text-top">{techStack}</div>
</div>
