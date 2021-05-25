<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { away } from "../actions/away";
  //import { client } from "../graphql";
  import Button from "./Button.svelte";

  export let segment;
  export let user;
  export let upcomingVoyage;

  let open = false;
  let avatarAlt = user ? `${user.firstName} ${user.lastName}` : "";

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

  function handleSignOut() {
    return client(fetch)
      .request({
        query: `mutation signOut { signOut { error { message } } }`
      })
      .then(() => {
        deleteAllCookies();
        localStorage.clear();
        return (window.location.href = "/");
      });
  }


  const appliedToVoyageIds = user ? user.voyageMemberships.map(m => m.voyage.id) : [];

  const alreadyJoined = appliedToVoyageIds.find(
    vId => vId === upcomingVoyage.id
  );

  let applyButtonText = "Apply";
  let applyButtonDisabled = false;
  if (alreadyJoined) {
    applyButtonText = `You're signed up for ${upcomingVoyage.name}!`;
    applyButtonDisabled = true;
  }
</script>

<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex-shrink-0 flex items-center">
          <a href="/">
            <img class="h-8 w-auto" src="/logo-192x192.png" alt="Chingu" />
          </a>
        </div>
        <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
          <a
            href="/dashboard"
            class="{baseClasses}
            {segment === 'dashboard' ? activeClasses : inactiveClasses}">
            Dashboard
          </a>
        </div>
      </div>
      {#if user}
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <Button disabled={applyButtonDisabled} variant="primary" link="/apply" class="float-right">
            {applyButtonText}
          </Button>
          <!-- Profile dropdown -->
          <div use:away on:away={() => (open = false)} class="ml-3 relative">
            <button
              on:click={() => (open = !open)}
              class="bg-white flex text-sm rounded-full focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              id="user-menu"
              aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              {#if user.avatarUrl}
                <img
                  class="h-8 w-8 rounded-full"
                  src={user.avatarUrl}
                  alt={avatarAlt} />
              {:else}
                <svg
                  class="h-8 w-8 rounded-full text-gray-300 border-gray-300
                  border"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904
                    0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0
                    018 0z" />
                </svg>
              {/if}
            </button>

            <!-- Profile dropdown panel -->
            {#if open}
              <div
                in:scale={{ duration: 100, start: 0.95, easing: cubicOut }}
                out:scale={{ duration: 75, start: 0.95, easing: cubicIn }}
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md
                shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu">
                <a
                  href="/settings"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem">
                  Settings
                </a>

                <button
                  on:click|preventDefault={handleSignOut}
                  class="w-full text-left block px-4 py-2 text-sm text-gray-700
                  hover:bg-gray-100"
                  role="menuitem">
                  Sign out
                </button>
              </div>
            {/if}
          </div>
        </div>
      {/if}
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

  <!-- Mobile menu -->
  {#if open}
    <div class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <a
          href="/dashboard"
          class="{menuBaseClasses}
          {segment === 'dashboard' ? menuActiveClasses : menuInactiveClasses}">
          Dashboard
        </a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            {#if user.avatarUrl}
              <img
                class="h-10 w-10 rounded-full"
                src={user.avatarUrl}
                alt={avatarAlt} />
            {:else}
              <svg
                class="h-10 w-10 rounded-full text-gray-300 border-gray-300
                border"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0
                  9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018
                  0z" />
              </svg>
            {/if}
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">
              {user.firstName} {user.lastName}
            </div>
            <div class="text-sm font-medium text-gray-500">
              {user.country && user.cityName && `${user.cityName}, ${user.country.name}`}
            </div>
          </div>
          <Button class="ml-auto" variant="primary" link="/apply">Apply</Button>
        </div>
        <div class="mt-3 space-y-1">
          <a
            href="/settings"
            class="block px-4 py-2 text-base font-medium text-gray-500
            hover:text-gray-800 hover:bg-gray-100">
            Settings
          </a>

          <button
            on:click|preventDefault={handleSignOut}
            class="w-full text-left block px-4 py-2 text-base font-medium
            text-gray-500 hover:text-gray-800 hover:bg-gray-100">
            Sign out
          </button>
        </div>
      </div>
    </div>
  {/if}
</nav>
