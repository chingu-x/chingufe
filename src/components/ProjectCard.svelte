<script>
  import Picture from "./Picture.svelte";

  export let image = null;
  export let title;
  export let description;
  export let category = "";
</script>

<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
  <div class="flex-shrink-0">
    <Picture class="h-48 w-full object-cover" src={image} />
  </div>
  <div class="flex-1 bg-white p-6 flex flex-col justify-between">
    <div class="flex-1">
      {#if category}
        <p class="text-sm font-medium text-green-600">{category}</p>
      {/if}
      <p class="text-xl font-semibold text-gray-900">{title}</p>
      <p class="mt-3 text-base text-gray-500">{description}</p>
    </div>
  </div>
</div>
