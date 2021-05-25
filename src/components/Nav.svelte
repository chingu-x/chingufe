<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { away } from "../actions/away";
  //import { client } from "../graphql";
  import Button from "./Button.svelte";

  export let segment = '';
  export let user = false;
  export let upcomingVoyage = '';

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
