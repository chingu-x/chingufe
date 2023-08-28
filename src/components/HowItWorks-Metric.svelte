<script>
  export let metric
  export let description
</script>

<div class="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
  <p class="text-5xl leading-none font-extrabold text-green-600">
    { metric }
  </p>
  <p class="mt-2 text-lg leading-6 font-medium text-gray-500">
    { description }
  </p>
</div>