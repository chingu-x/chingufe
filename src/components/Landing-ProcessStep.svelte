<script>
  import Picture from "../components/Picture.svelte";

  export let images;
  export let name;
  export let description;
</script>

<div class="flex flex-col items-left sm:flex-row ml-2 mr-2 md:ml-0 md:mr-0">
  <div
    class="border-grey-900 border-b-4 mt-4 pb-2 mb-2 sm:mt-0 sm:mb-0
    sm:border-r-4 sm:border-b-0 sm:pr-4"
    style="border-color: #38a169">
    <Picture class="h-12 w-12 inline-block" src={images} />
  </div>
  <div class="sm:pl-4">
    <div class="text-left text-xl mt-0 font-bold">{name}</div>
    <div class="text-left text-lg mt-0 pb-4">{description}</div>
  </div>
</div>
