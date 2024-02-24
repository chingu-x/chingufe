<script>
    export let isOpen = false;
    export let close = () => {};
</script>
  
{#if isOpen}
    <div class="fixed inset-0 bg-black opacity-50 z-50"></div>
    <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg px-4 py-3 w-full max-w-xl mx-2 relative">
            <button on:click={close} class="absolute top-2 right-2 px-4 py-2 text-gray-900">X</button>
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-center">
                One thing 
                <span class="text-3xl font-extrabold tracking-tight text-green-600 sm:text-5xl">
                first
                </span>
            </h2>
            <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4 py-4">
                At Chingu we use Discord as our main source of communication, and therfore it's important
                that you have a Discord account before sending your application. We use Discords authentication to 
                make sure that this is the case and will pre-fill your application with your account name and ID.
            </p>
            <div class="flex space-x-4 pt-8 pb-1">
                <a href="https://forms.gle/xAjXHyWtRKKh37di8" 
                  class="flex-1 px-8 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:text-lg md:px-10 whitespace-nowrap text-center">
                  Apply to Chingu
                </a>
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"
                  class="flex-1 px-8 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 md:py-4 md:text-lg md:px-10 whitespace-nowrap text-center">
                  Create Discord Account
                </a>
              </div>
        </div>
    </div>
{/if}