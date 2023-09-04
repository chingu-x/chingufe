<script>
  export let icon
  export let name
  export let description
</script>

<div class="flex flex-row flex-1 items-left">
  <div class="border-r-4 border-green-400">
    <img class="h-12 w-12 mr-2"
      src={ icon }
      alt="" />
  </div>
  <div class="ml-2">
    <div class="text-left text-xl mt-0 pl-1 font-bold">
      { name }
    </div>
    <div class="text-left text-lg mt-0 pl-6 pb-3">
      { description }
    </div>
  </div>
</div>
