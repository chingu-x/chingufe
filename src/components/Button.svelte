<script>
  export let type = null;
  export let link = null;
  export let variant = "default";
  export let size = "default";
  export let wide = false;
  export let loading = false;
  export let disabled = false;
  export let loadingText = null;

  let additionalClassNames = "";
  export { additionalClassNames as class };

  let variantClassNames = "";
  switch (variant) {
    case "primary":
      variantClassNames = `
        border-transparent
        text-white
        bg-green-600
        hover:text-white
        hover:bg-green-500
        focus:border-green-700
        focus:ring-green-100
        active:text-white
        active:bg-green-700
      `;
      break;
    case "secondary":
      variantClassNames = `
        border-transparent
        text-green-700
        bg-green-100
        hover:text-green-700
        hover:bg-green-100
        focus:border-green-300
        focus:ring-green-100
        active:text-green-700
        active:bg-green-200
      `;
      break;
    default:
      variantClassNames = `
        border-gray-300
        text-gray-700
        bg-white
        hover:text-gray-500
        focus:border-green-300
        focus:ring-green-100
        active:text-gray-800
        active:bg-gray-100
      `;
      break;
  }

  const disabledClassNames = `
    border-gray-300
    text-gray-500
    bg-gray-200
    cursor-default
    focus:border-green-300
    focus:ring-green-100
  `;

  let sizeClassNames = "";
  switch (size) {
    case "small":
      sizeClassNames = `
        px-2.5
        py-1.5
        text-xs
        leading-4
        rounded
      `;
      break;
    case "large":
      sizeClassNames = `
        px-6
        py-3
        text-base
        leading-6
        rounded-md
      `;
      break;
    default:
      sizeClassNames = `
        px-4
        py-2
        text-sm
        leading-5
        rounded-md
      `;
      break;
  }

  let wrapperClassNames = `
    inline-flex
    rounded-md 
    ${wide ? "w-full" : ""}
    ${variant !== "secondary" && !disabled ? "shadow-sm" : ""}
    ${additionalClassNames}
  `;

  let classNames = `
    no-underline
    inline-flex
    h-full
    relative
    justify-center
    border
    font-medium
    hover:no-underline
    focus:outline-none
    transition
    duration-150
    ease-in-out
    ${wide ? "w-full" : ""}
    ${sizeClassNames}
    ${disabled ? disabledClassNames : variantClassNames}
  `;
</script>

<style>
  .spinner {
    animation: rotate 2s linear infinite;
    z-index: 2;
    width: 20px;
    height: 20px;
  }

  .spinner > .path {
    stroke: #fff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
</style>

<span class={wrapperClassNames}>
  {#if !link}
    <button
      {type}
      on:click
      on:submit
      class={classNames}
      disabled={loading || disabled}>
      {#if loading}
        <span class="flex items-center justify-between">
          <svg class="spinner" viewBox="0 0 50 50">
            <circle
              class="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke-width="5" />
          </svg>
          {#if loadingText}
            <span class="ml-2">{loadingText}</span>
          {/if}
        </span>
      {:else}
        <slot />
      {/if}
    </button>
  {:else if disabled}
    <span href={link} class={classNames}>
      <slot />
    </span>
  {:else}
    <a href={link} class={classNames}>
      <slot />
    </a>
  {/if}
</span>
