<script>
  export let name
  export let title
  export let description
</script>

<div class="py-10">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
    <div class="lg:text-center">
      <p
        class="text-base leading-6 text-green-600 font-semibold tracking-wide
        uppercase">
        { name }
      </p>
      <h3
        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight
        text-gray-900 sm:text-4xl sm:leading-10">
        { title }
      </h3>
      <p class="mt-4 max-w-4xl text-xl leading-7 text-gray-500 lg:mx-auto">
        { description }
      </p>
    </div>
  </div>
</div>