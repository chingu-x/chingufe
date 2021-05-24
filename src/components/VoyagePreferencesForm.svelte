<script>
  import { client } from "../graphql";
  import Card from "../components/Card.svelte";

  export let me;
	export let onUpdate = () => {};

  let role = me.voyagePreferences ? me.voyagePreferences.role : null;
  let tier = me.voyagePreferences ? me.voyagePreferences.tier : null;
  let voyagePreferencesLoading = false;
  let voyagePreferencesSaveError = null;

  function handleVoyagePreferencesSave() {
    voyagePreferencesLoading = true;
    voyagePreferencesSaveError = null;
    client(fetch)
      .request({
        query: `
          mutation updateVoyagePreferences($preferences: VoyagePreferencesInput!) {
            updateVoyagePreferences(preferences: $preferences) {
              error {
                message
                code
              }
            }
          }
        `,
        variables: {
          preferences: {
            tier,
            role
          }
        }
      })
      .then(({ updateVoyagePreferences }) => {
        if (updateVoyagePreferences.error) {
          voyagePreferencesSaveError = formatVoyagePreferencesError(
            updateVoyagePreferences.error
          );
          window.scrollTo(0, 0);
				}
				onUpdate(updateVoyagePreferences);
      })
      .finally(() => (voyagePreferencesLoading = false));
  }

  function formatVoyagePreferencesError(error) {
    const defaultError = {
      title: "An error occurred",
      text: "Please try again."
    };

    if (!error || typeof error !== "object") {
      return defaultError;
    }

    switch (error.code) {
      default:
        return defaultError;
        break;
    }
  }
</script>

<div class="mt-10 sm:mt-0">
	<div class="md:grid md:grid-cols-3 md:gap-6">
		<div class="md:col-span-1">
			<div class="px-4 sm:px-0">
				<h3 class="text-lg font-medium leading-6 text-gray-900">
					Voyage preferences
				</h3>
				<p class="mt-1 text-sm leading-5 text-gray-500">
					Please add your voyage preferences here. We will use this in any
					future matchings so please keep it up to date with your current
					preferences and skill level.
				</p>
			</div>
		</div>
		<div class="mt-5 md:mt-0 md:col-span-2">
			<Card
				actions={[{ type: 'submit', text: 'Save', loading: voyagePreferencesLoading, onClick: handleVoyagePreferencesSave }]}>
				<div>
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
								class="form-radio h-4 w-4 text-green-600 transition
								duration-150 ease-in-out" />
							<label for="dev" class="ml-3">
								<span
									class="block text-sm leading-5 font-medium text-gray-700">
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
								class="form-radio h-4 w-4 text-green-600 transition
								duration-150 ease-in-out" />
							<label for="designer" class="ml-3">
								<span
									class="block text-sm leading-5 font-medium text-gray-700">
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
								class="form-radio h-4 w-4 text-green-600 transition
								duration-150 ease-in-out" />
							<label for="product-owner" class="ml-3">
								<span
									class="block text-sm leading-5 font-medium text-gray-700">
									Product Owner
								</span>
							</label>
						</div>
					</div>
				</div>

				<div class="mt-6">
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
								class="form-radio h-4 w-4 text-green-600 transition
								duration-150 ease-in-out" />
							<label for="tier-3" class="ml-3">
								<span
									class="block text-sm leading-5 font-medium text-gray-700">
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
								class="form-radio h-4 w-4 text-green-600 transition
								duration-150 ease-in-out" />
							<label for="tier-2" class="ml-3">
								<span
									class="block text-sm leading-5 font-medium text-gray-700">
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
								class="form-radio h-4 w-4 text-green-600 transition
								duration-150 ease-in-out" />
							<label for="tier-1" class="ml-3">
								<span
									class="block text-sm leading-5 font-medium text-gray-700">
									Tier 1: Basic Javascript - Basic Algorithms (LANDING PAGES)
								</span>
							</label>
						</div>
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>
