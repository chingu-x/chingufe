<script>
  import Button from "../components/Button.svelte";
  let className = "";
  export { className as class };
  export let actions = [];
  export let title = "";
  export let errors = [];
  export let errorsTitle = "";
  let errorsTitleText = 'There was an error in your submission';
  $: {
    let errorsTitleSubtext = errors.length === 1 ? 'was an error' : `were ${errors.length} errors`
    let errorsTitleText = errorsTitle || `There ${errorsTitleSubtext} in your submission`;
  }
</script>

<div class="shadow sm:rounded-md sm:overflow-hidden {className}">
  <slot name="heading">
    {#if title}
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {title}
        </h3>
      </div>
    {/if}
  </slot>
  {#if errors.length}
  <slot name="errors">
    <div class="rounded-md bg-red-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">
            {errorsTitleText}
          </h3>
          <div class="mt-2 text-sm text-red-700">
            <ul class="list-disc pl-5 space-y-1">
              {#each errors as error (error.code)}
              <li>
                {error.message || error.code}
              </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </slot>
  {/if}
  <slot name="content">
    <div class="px-4 py-5 bg-white sm:p-6">
      <slot />
    </div>
  </slot>
  {#if Array.isArray(actions) ? actions.length : actions}
    <div class="px-4 py-3 bg-gray-100 text-right sm:px-6">
      <slot name="actions">
        {#each actions as action, i}
          <Button
            {...action}
            type={action.type}
            on:click={action.onClick}
            loading={action.loading}>
            {action.text}
          </Button>
        {/each}
      </slot>
    </div>
  {/if}
</div>
