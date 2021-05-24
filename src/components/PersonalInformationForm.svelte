<script>
  import { client } from "../graphql";
  import Card from "../components/Card.svelte";
	import Button from "./Button.svelte";

  export let me;
  export let countries;
	export let onUpdate = () => {};

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

  let personalInfoLoading = false;
	let personalInfoSaveError = null;

  function handlePersonalInfoSave() {
    personalInfoLoading = true;
    personalInfoSaveError = null;
    client(fetch)
      .request({
        query: `
          mutation updatePersonalInfo($updates: ProfileUpdateInput!) {
            updateProfile(updates: $updates) {
              error {
                message
                code
              }
            }
          }
        `,
        variables: {
          updates: {
            countryCode,
            cityName,
            zoneId
          }
        }
      })
      .then(({ updateProfile }) => {
        if (updateProfile.error) {
          personalInfoSaveError = formatPersonalInfoSaveError(
            updateProfile.error
          );
          window.scrollTo(0, 0);
				}
				onUpdate(updateProfile);
      })
      .finally(() => (personalInfoLoading = false));
  }

  function formatPersonalInfoSaveError(error) {
    const defaultError = {
      title: "An error occurred",
      text: "Please try again."
    };

    if (!error || typeof error !== "object") {
      return defaultError;
    }

    switch (error.code) {
      case "EMAIL_EXISTS":
        return {
          title: "That email already exists",
          text: "Try signing in to your account."
        };
        break;
      default:
        return defaultError;
        break;
    }
  }
</script>

<div class="md:grid md:grid-cols-3 md:gap-6">
	<div class="md:col-span-1">
		<div class="px-4 sm:px-0">
			<h3 class="text-lg font-medium leading-6 text-gray-900">
				Personal information
			</h3>
			<p class="mt-1 text-sm leading-5 text-gray-500">
				We use this information to better personalize your experience and to keep the voyage teams balanced.
			</p>
		</div>
	</div>
	<div class="mt-5 md:mt-0 md:col-span-2">
		<Card
			actions={[{ type: 'submit', text: 'Save', loading: personalInfoLoading, onClick: handlePersonalInfoSave }]}
		>
			<div class="grid grid-cols-6 gap-6">
				<div class="col-span-6 sm:col-span-3">
					<label
						for="country"
						class="block text-sm font-medium leading-5 text-gray-700">
						Country
					</label>
					<div class="mt-1 rounded-md shadow-sm">
						<select
							id="country"
							bind:value={countryCode}
							class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
							required>
							<option value={null} disabled>
								Please select a country
							</option>
							{#each countries as country (country.id)}
								<option value={country.code} selected={countryCode === country.code}>{country.name}</option>
							{/each}
						</select>
					</div>
				</div>

				<div class="col-span-6 sm:col-span-3">
					<label
						for="city"
						class="block text-sm font-medium leading-5 text-gray-700">
						City
					</label>
					<input
						id="city"
						type="text"
						bind:value={cityName}
						class="mt-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
						required />
				</div>

				<div class="col-span-6 sm:col-span-3">
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
								class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
								required>
								<option value={null} disabled>
									Please select a timezone
								</option>
								{#each zones as timezone (timezone.id)}
									<option value={timezone.id} selected={zoneId === timezone.id}>{timezone.name}</option>
								{/each}
							</select>
						{:else}
							<select
								id="timezone"
								class="form-select block w-full transition
								duration-150 ease-in-out sm:text-sm sm:leading-5"
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
</div>