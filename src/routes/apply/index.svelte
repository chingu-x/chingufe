<script context="module">
  import { client } from "../../graphql";

  export function preload(page, session) {
    if (!session) {
      return this.redirect(302, "/signIn?returnTo=apply");
    }

    return client(this.fetch)
      .request({
        query: `
        query currentApplications {
          upcomingVoyage {
            id
            name
            startDate
          }

          countries {
            id
            name
            code
          }

          me {
            id
            country {
              id
              name
              code
              zones {
                id
                name
              }
            }
            cityName
            timezone {
              id
              name
              abbreviation
              gmtOffset
            }
            voyagePreferences {
              id
              role
              tier
            }
            voyageMemberships {
              id
              status
              voyage {
                id
              }
            }
          }
        }
      `
      })
      .then(data => {
        if (!data.upcomingVoyage) {
          return this.redirect(302, "/dashboard");
        }

        return data;
      });
  }
</script>

<script>
  import moment from "moment";
  import { init as initStripe } from "../../stripe";
  import Button from "../../components/Button.svelte";
  import Card from "../../components/Card.svelte";

  export let upcomingVoyage;
  export let countries;
  export let me;

  const POSSIBLE_ERRORS = ["ALREADY_SIGNED_UP", "STRIPE_CHECKOUT_REDIRECT_ERROR"];

  let profileUpdateError = null;
  let profileUpdateLoading = false;
  let joinError = null;
  let joinLoading = false;
  let stripeCheckoutError = null;
  let stripeCheckoutLoading = false;

  let countryCode = me.country ? me.country.code : null;
  let cityName = me.cityName;
  let zones = me.country ? me.country.zones : [];
  let zoneId = me.timezone ? me.timezone.id : null;

  $: selectedCountry = countryCode
    ? countries.find(c => c.code === countryCode)
    : null;

  $: {
    if (countryCode && typeof fetch === "function") {
      zones = [];
      client(fetch)
        .request({
          query: `
          query loadCountryZones($countryCode: String!) {
            zones(countryCode: $countryCode) {
              id
              name
            }
          }
        `,
          variables: { countryCode }
        })
        .then(data => {
          zones = data.zones || [];
        });
    }
  }

  const appliedToVoyageIds = me.voyageMemberships.map(m => m.voyage.id);

  let role = me.voyagePreferences ? me.voyagePreferences.role : null;
  let tier = me.voyagePreferences ? me.voyagePreferences.tier : null;

  const alreadyJoined = appliedToVoyageIds.find(
    vId => vId === upcomingVoyage.id
  );

  const voyageStartDate = upcomingVoyage
    ? moment(upcomingVoyage.startDate)
    : null;

  function handleProfileSave() {
    profileUpdateLoading = true;
    profileUpdateError = null;

    return client(fetch)
      .request({
        query: `
          mutation updateProfileFromApply(
            $voyagePreferences: VoyagePreferencesInput!
            $profileUpdates: ProfileUpdateInput!
          ) {
            updateVoyagePreferences(preferences: $voyagePreferences) {
              error {
                message
                code
              }
            }

            updateProfile(updates: $profileUpdates) {
              error {
                message
                code
              }
            }
          }
        `,
        variables: {
          voyagePreferences: {
            tier,
            role
          },
          profileUpdates: {
            countryCode,
            cityName,
            zoneId
          }
        }
      })
      .then(({ updateVoyagePreferences, updateProfile }) => {
        if (updateProfile.error || updateVoyagePreferences.error) {
          profileUpdateError = formatProfileUpdateError(
            updateProfile.error || updateVoyagePreferences.error
          );
          window.scrollTo(0, 0);
        } else {
          return joinVoyage();
        }
      })
      .finally(() => (profileUpdateLoading = false));
  }

  function joinVoyage() {
    joinLoading = true;
    joinError = null;

    return client(fetch)
      .request({
        query: `
        mutation joinVoyage {
          joinVoyage {
            error {
              message
              code
            }

            membership: voyageMembership {
              id
            }
          }
        }
      `
      })
      .then(async ({ joinVoyage }) => {
        if (joinVoyage.error) {
          joinError = formatJoinError(joinVoyage.error);
          window.scrollTo(0, 0);
        } else {
          return triggerStripeCheckout(joinVoyage.membership);
        }
      })
      .finally(() => (joinLoading = false));
  }

  function triggerStripeCheckout(membership) {
    stripeCheckoutLoading = true;
    stripeCheckoutError = null;

    return client(fetch)
      .request({
        query: `
          mutation createStripeCheckoutSession($itemId: ID) {
            createStripeCheckoutSession(
              item: VOYAGE_CREDIT_1,
              itemId: $itemId
            ) {
              error {
                code
                message
              }

              checkoutSession {
                id
                checkoutSessionId
                paymentIntentId
              }
            }
          }
        `,
        variables: {
          itemId: membership.id
        }
      })
      .then(async ({ createStripeCheckoutSession }) => {
        if (createStripeCheckoutSession.error) {
          stripeCheckoutError = formatStripeCheckoutError(
            createStripeCheckoutSession.error
          );
          window.scrollTo(0, 0);
        } else {
          const stripe = await initStripe();
          return stripe
            .redirectToCheckout({
              sessionId:
                createStripeCheckoutSession.checkoutSession.checkoutSessionId
            })
            .then(result => {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
              stripeCheckoutError = {
                code: "STRIPE_CHECKOUT_REDIRECT_ERROR",
                message:
                  result && result.error
                    ? result.error.message
                    : "An error occurred. Please contact support@chingu.io"
              };
            });
        }
      })
      .finally(() => (stripeCheckoutLoading = false));
  }

  function formatJoinError(error) {
    const defaultError = {
      title: "An error occurred",
      message: "Please try again."
    };

    if (
      !error ||
      typeof error !== "object" ||
      !POSSIBLE_ERRORS.includes(error.code)
    ) {
      return defaultError;
    }

    return error;
  }

  function formatProfileUpdateError(error) {
    const defaultError = {
      title: "An error occurred",
      message: "Please try again."
    };

    if (
      !error ||
      typeof error !== "object" ||
      !POSSIBLE_ERRORS.includes(error.code)
    ) {
      return defaultError;
    }

    return error;
  }

  function formatStripeCheckoutError(error) {
    const defaultError = {
      title: "An error occurred",
      message: "Please try again."
    };

    if (
      !error ||
      typeof error !== "object" ||
      !POSSIBLE_ERRORS.includes(error.code)
    ) {
      return defaultError;
    }

    return error;
  }

  let buttonText = "Join now!";
  if (alreadyJoined) {
    buttonText = "You've already joined :)";
  }

  $: errors = [profileUpdateError, joinError, stripeCheckoutError].filter(
    e => e
  );
</script>

<main class="py-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
  <div class="py-6 px-6">
    <h1 class="text-center text-3xl leading-6 font-medium text-gray-900">
      Apply for {upcomingVoyage.name}!
    </h1>
    <h2 class="text-center mt-2 text-2xl font-light text-gray-700">
      {voyageStartDate.format('MMMM Do')}
    </h2>
    <Card
      class="mt-8"
      title="Voyage Application"
      {errors}
      actions={[{ variant: 'primary', type: 'submit', text: buttonText, loading: profileUpdateLoading, onClick: handleProfileSave, disabled: alreadyJoined }]}>
      <div class="grid grid-cols-6 gap-6">
        <!-- Role -->
        <div class="col-span-6 lg:col-span-3">
          <legend class="block text-sm leading-5 font-medium text-gray-700">
            Role
          </legend>
          <div class="mt-4">
            <div class="flex items-center">
              <input
                id="dev"
                name="role"
                bind:group={role}
                type="radio"
                value="DEVELOPER"
                class="form-radio h-4 w-4 text-green-600 transition duration-150
                ease-in-out" />
              <label for="dev" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700">
                  Developer
                </span>
              </label>
            </div>
            <div class="mt-4 flex items-center">
              <input
                id="designer"
                name="role"
                bind:group={role}
                type="radio"
                value="DESIGNER"
                class="form-radio h-4 w-4 text-green-600 transition duration-150
                ease-in-out" />
              <label for="designer" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700">
                  UI/UX Designer
                </span>
              </label>
            </div>
            <div class="mt-4 flex items-center">
              <input
                id="product-owner"
                name="role"
                bind:group={role}
                type="radio"
                value="PRODUCT_OWNER"
                class="form-radio h-4 w-4 text-green-600 transition duration-150
                ease-in-out" />
              <label for="product-owner" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700">
                  Product Owner
                </span>
              </label>
            </div>
          </div>
        </div>

        <!-- Tier -->
        <div class="col-span-6 lg:col-span-3">
          <legend class="block text-sm leading-5 font-medium text-gray-700">
            Tier
          </legend>
          <div class="mt-4">
            <div class="flex items-center">
              <input
                id="tier-3"
                name="tier"
                bind:group={tier}
                type="radio"
                value="TIER_3"
                class="form-radio h-4 w-4 text-green-600 transition duration-150
                ease-in-out" />
              <label for="tier-3" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700">
                  Tier 3: Apps having both Front-end and Back-end components
                  (FULL STACK)
                </span>
              </label>
            </div>
            <div class="mt-4 flex items-center">
              <input
                id="tier-2"
                name="tier"
                bind:group={tier}
                type="radio"
                value="TIER_2"
                class="form-radio h-4 w-4 text-green-600 transition duration-150
                ease-in-out" />
              <label for="tier-2" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700">
                  Tier 2: Intermediate Algorithms - Front-end projects
                  (FRONT-END)
                </span>
              </label>
            </div>
            <div class="mt-4 flex items-center">
              <input
                id="tier-1"
                name="tier"
                bind:group={tier}
                type="radio"
                value="TIER_1"
                class="form-radio h-4 w-4 text-green-600 transition duration-150
                ease-in-out" />
              <label for="tier-1" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700">
                  Tier 1: Basic Javascript - Basic Algorithms (LANDING PAGES)
                </span>
              </label>
            </div>
          </div>
        </div>

        <!-- Country -->
        <div class="col-span-6 md:col-span-3">
          <label
            for="country"
            class="block text-sm font-medium leading-5 text-gray-700">
            Country
          </label>
          <div class="mt-1 rounded-md shadow-sm">
            <select
              id="country"
              bind:value={countryCode}
              class="shadow-sm focus:ring-green-500 focus:border-green-500 block
              w-full sm:text-sm border-gray-300 rounded-md"
              required>
              <option value={null} disabled>Please select a country</option>
              {#each countries as country (country.id)}
                <option
                  value={country.code}
                  selected={countryCode === country.code}>
                  {country.name}
                </option>
              {/each}
            </select>
          </div>
        </div>

        <!-- City -->
        <div class="col-span-6 md:col-span-3">
          <label
            for="city"
            class="block text-sm font-medium leading-5 text-gray-700">
            City
          </label>
          <input
            id="city"
            type="text"
            bind:value={cityName}
            class="mt-1 shadow-sm focus:ring-green-500 focus:border-green-500
            block w-full sm:text-sm border-gray-300 rounded-md"
            required />
        </div>

        <!-- Timezone -->
        <div class="col-span-6 md:col-span-3">
          <label
            for="timezone"
            class="block text-sm font-medium leading-5 text-gray-700">
            Timezone
          </label>
          <div class="mt-1 rounded-md shadow-sm">
            {#if countryCode}
              <select
                id="timezone"
                bind:value={zoneId}
                class="shadow-sm focus:ring-green-500 focus:border-green-500
                block w-full sm:text-sm border-gray-300 rounded-md"
                required>
                <option value={null} disabled>Please select a timezone</option>
                {#each zones as timezone (timezone.id)}
                  <option value={timezone.id} selected={zoneId === timezone.id}>
                    {timezone.name}
                  </option>
                {/each}
              </select>
            {:else}
              <select
                id="timezone"
                class="form-select block w-full transition duration-150
                ease-in-out sm:text-sm sm:leading-5"
                required
                disabled>
                <option>Please select a country first</option>
              </select>
            {/if}
          </div>
        </div>
      </div>
    </Card>
  </div>
</main>
