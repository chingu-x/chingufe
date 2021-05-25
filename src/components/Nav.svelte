<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { away } from "../actions/away";
  import Button from "./Button.svelte";

  let open = false;

  const baseClasses =
    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
  const activeClasses = "border-green-500 text-gray-900";
  const inactiveClasses =
    "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";

  const menuBaseClasses =
    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium";
  const menuActiveClasses = "bg-green-50 border-green-500 text-green-700";
  const menuInactiveClasses =
    "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800";

  function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
</script>

<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between">
      <div class="-mr-2 flex items-center sm:hidden">
        <!-- Mobile menu button -->
        <button
          on:click={() => (open = !open)}
          class="bg-white inline-flex items-center justify-center p-2 rounded-md
          text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <span class="sr-only">Open main menu</span>
          <svg
            class:hidden={open}
            class:block={!open}
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            class:hidden={!open}
            class:block={open}
            class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
