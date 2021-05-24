<script>
  import Picture from "./Picture.svelte";

  export let images;
  export let name;
  export let description;
  export let tier;
  export let techStack;
</script>

<div
  class="flex flex-col flex-wrap flex-grow-0 flex-shrink-0 items-center
  text-center m-auto px-0 md:px-1">
  <Picture src={images} />
  <h3 class="inline-block text-xl font-bold m-2">{name}</h3>
  <div class="flex align-text-top text-lg m-2 h-16 w-72">{description}</div>
  <h3 class="inline-block text-xl font-bold mt-4">{tier}</h3>
  <div class="flex align-text-top text-lg m-0 h-24 w-72">{techStack}</div>
</div>
