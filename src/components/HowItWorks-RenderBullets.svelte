<script>
  let className = "";
  export { className as class };

  export let details
</script>

<div class="m-2 items-center w-full lg:w-2/5">
  <div class="m-auto w-auto mt-2 md:mt-4">
  {#each details as bulletText }
    <div class="flex items-center pb-4 last:pb-0 { className }">
      <img class="w-12 h-12" src="/how-it-works/checkSquare.svg" alt="Check box" />
      <div class="text-xl md:text-2xl text-gray-700 p-2">
        { bulletText }
      </div>
    </div>
  {/each}
  </div>
</div>