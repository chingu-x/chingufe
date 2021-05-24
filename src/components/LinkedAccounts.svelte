<script>
  import { client } from "../graphql";
	export let me;

  let loadingDiscordDisconnect = false;
  let loadingGithubDisconnect = false;

  $: discordAccount = me.discordAccount;
	$: githubAccount = me.githubAccount;

  function handleDiscordDisconnect() {
    loadingDiscordDisconnect = true;
    client(fetch)
      .request({
        query: `
          mutation disconnectDiscord {
            disconnectDiscordAccount {
              error {
                message
                code
              }
            }
          }
        `
      })
      .then(({ disconnectDiscordAccount }) => {
        if (!disconnectDiscordAccount.error) {
          me.discordAccount = null;
        }
      })
      .finally(() => (loadingDiscordDisconnect = false));
  }

  function handleGithubDisconnect() {
    loadingGithubDisconnect = true;
    client(fetch)
      .request({
        query: `
          mutation disconnectGithub {
            disconnectGithubAccount {
              error {
                message
                code
              }
            }
          }
        `
      })
      .then(({ disconnectGithubAccount }) => {
        if (!disconnectGithubAccount.error) {
          me.githubAccount = null;
        }
      })
      .finally(() => (loadingGithubDisconnect = false));
  }
</script>

<div class="md:grid md:grid-cols-3 md:gap-6">
	<div class="md:col-span-1">
		<div class="px-4 sm:px-0">
			<h3 class="text-lg font-medium leading-6 text-gray-900">
				Accounts
			</h3>
			<p class="mt-1 text-sm leading-5 text-gray-500">
				Connect your Discord and Github accounts to gain access to the community.
			</p>
		</div>
	</div>
	<div class="mt-5 md:mt-0 md:col-span-2">
		<div class="shadow sm:rounded-md sm:overflow-hidden">
			<div class="px-4 py-5 bg-white sm:p-6">
				<div>
					<legend
						class="block text-sm leading-5 font-medium text-gray-700">
						Discord <span class="text-xs">(This will set your profile picture)</span>
					</legend>
					<div class="mt-2 flex items-center">
						<span
							class="inline-block h-12 w-12 rounded-full overflow-hidden
							bg-gray-100">
							{#if me.avatarUrl}
								<img
									class="h-full w-full"
									src={`${me.avatarUrl}?size=512`}
									alt={`${me.firstName} ${me.lastName}`} />
							{:else}
								<svg
									class="h-full w-full text-gray-300"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path
										d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004
										15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0
										11-8 0 4 4 0 018 0z" />
								</svg>
							{/if}
						</span>
						{#if !discordAccount}
							<div class="inline-block ml-2 rounded-md shadow-sm">
								<a
									href="https://discordapp.com/api/oauth2/authorize?client_id={process.env.DISCORD_CLIENT_ID}&redirect_uri={encodeURIComponent(process.env.DISCORD_REDIRECT_URI)}&response_type=code&scope=email%20identify%20guilds.join&prompt=none"
									class="inline-flex items-center py-2 px-3 border
									border-gray-300 rounded-md text-sm leading-4 font-medium
									text-gray-700 hover:text-gray-500 focus:outline-none
									focus:border-blue-300 focus:ring-blue active:bg-gray-100
									active:text-gray-800 transition duration-150 ease-in-out">
									Connect account with
									<svg class="ml-1 -mr-0.5 h-4" viewBox="0 0 532 130">
										<style>
											.st0 {
												fill: #7289da;
											}
										</style>
										<path
											class="st0"
											d="M53.2 20.3H20v37.6l22.1 20V41.4H54c7.5 0 11.2 3.7
											11.2 9.5v27.9c0 5.8-3.5 9.7-11.2
											9.7H20v21.2h33.2c17.8.1 34.5-8.8
											34.5-29.4V50.2c0-20.8-16.7-29.9-34.5-29.9zm174.1
											60.1V49.6c0-11.1 19.8-13.7 25.8-2.5l18.3-7.5C264.3
											23.7 251.1 19 240.2 19c-17.8 0-35.4 10.4-35.4
											30.6v30.8c0 20.3 17.6 30.6 35 30.6 11.2 0 24.6-5.6
											32-20.1l-19.6-9.1c-4.8 12.4-24.9
											9.4-24.9-1.4zm-60.6-26.6c-6.9-1.5-11.5-4-11.8-8.3.4-10.4
											16.3-10.7 25.6-.8l14.7-11.4C186 22 175.6 19 164.8
											19c-16.3 0-32.1 9.2-32.1 26.8 0 17.1 13 26.2 27.3
											28.4 7.3 1 15.4 3.9 15.2 9-.6 9.6-20.2
											9.1-29.1-1.8L132 94.8c8.3 10.7 19.6 16.2 30.2 16.2
											16.3 0 34.4-9.5 35.1-26.8
											1-22-14.8-27.5-30.6-30.4zm-66.9
											55.9h22.4V20.3H99.8v89.4zm377.7-89.4h-33.2v37.6l22.1
											20V41.4h11.8c7.5 0 11.2 3.7 11.2 9.5v27.9c0 5.8-3.5
											9.7-11.2 9.7h-34v21.2h33.2c17.8.1 34.5-8.8
											34.5-29.4V50.2c.1-20.8-16.6-29.9-34.4-29.9zM314.6
											19c-18.4 0-36.7 10.1-36.7 30.7v30.6c0 20.5 18.4 30.7
											36.9 30.7 18.4 0 36.7-10.2
											36.7-30.7V49.7c0-20.5-18.5-30.7-36.9-30.7zM329
											80.3c0 6.4-7.2 9.7-14.3 9.7-7.2
											0-14.4-3.2-14.4-9.7V49.7c0-6.6 7-10.1 14-10.1 7.3 0
											14.7 3.2 14.7
											10.1v30.6zm102.8-30.6c-.5-21-14.7-29.4-33-29.4h-35.5v89.5H386V81.3h4l20.6
											28.4h28L414.4 79c10.8-3.4 17.4-12.7 17.4-29.3zm-32.6
											12.1H386V41.4h13.2c14.2 0 14.2 20.4 0 20.4z" />
									</svg>
								</a>
							</div>
						{:else}
							<div class="inline-flex ml-2 flex-col">
								<span class="inline-flex rounded-md shadow-sm">
									<button
										on:click={handleDiscordDisconnect}
										class="btn btn-small btn-default">
										Disconnect&nbsp;
										<span style="color: #7289da">
											<b>{discordAccount.username}</b>
										</span>
										<span style="color: #9daad8">
											#{discordAccount.discriminator}
										</span>
									</button>
								</span>
							</div>
						{/if}
					</div>
				</div>
				<div class="mt-8">
					<legend
						class="block text-sm leading-5 font-medium text-gray-700">
						Github
					</legend>
					<div class="mt-2">
						{#if !githubAccount}
							<div class="inline-block rounded-md shadow-sm">
								<a
									href="https://github.com/login/oauth/authorize?client_id={process.env.GITHUB_CLIENT_ID}&redirect_uri={encodeURIComponent(process.env.GITHUB_REDIRECT_URI)}&state=test&login={me.email}"
									class="inline-flex items-center py-2 px-3 border
									border-gray-300 rounded-md text-sm leading-4 font-medium
									text-gray-700 hover:text-gray-500 focus:outline-none
									focus:border-blue-300 focus:ring-blue active:bg-gray-100
									active:text-gray-800 transition duration-150 ease-in-out">
									Connect account with
									<svg
										class="ml-1 -mr-0.5 h-3"
										viewBox="-0.122 175.062 480.244 129.875">
										<g fill="#121110">
											<path
												d="M92.375 230.65H52.019a1.887 1.887 0 0 0-1.886
												1.886v19.731a1.89 1.89 0 0 0 1.886
												1.889h15.743v24.513s-3.535 1.206-13.308
												1.206c-11.53 0-27.637-4.214-27.637-39.632 0-35.425
												16.772-40.087 32.518-40.087 13.63 0 19.502 2.401
												23.238 3.556 1.174.36 2.26-.808
												2.26-1.851l4.502-19.063c0-.487-.165-1.075-.721-1.474-1.517-1.082-10.774-6.262-34.16-6.262-26.941
												0-54.576 11.463-54.576 66.562 0 55.103 31.64
												63.313 58.302 63.313 22.076 0 35.468-9.434
												35.468-9.434.552-.306.612-1.077.612-1.431v-61.537c0-1.04-.844-1.885-1.885-1.885M300.354
												181.664a1.88 1.88 0 0 0-1.873-1.896h-22.724a1.889
												1.889 0 0 0-1.882 1.896l.006
												43.913h-35.419v-43.913a1.882 1.882 0 0
												0-1.875-1.896h-22.722a1.887 1.887 0 0 0-1.877
												1.896v118.904c0 1.048.843 1.901 1.877
												1.901h22.722c1.039 0 1.875-.854
												1.875-1.901v-50.86h35.419l-.062 50.86c0 1.048.844
												1.901 1.883 1.901h22.777c1.041 0 1.873-.854
												1.875-1.901V181.664M135.254
												197.268c0-8.183-6.56-14.795-14.653-14.795-8.085
												0-14.65 6.612-14.65 14.795 0 8.173 6.565 14.802
												14.65 14.802 8.093 0 14.653-6.629
												14.653-14.802M133.629 275.486V220.6a1.89 1.89 0 0
												0-1.88-1.895h-22.651c-1.039 0-1.969 1.072-1.969
												2.115v78.634c0 2.312 1.44 2.998 3.304
												2.998h20.408c2.239 0 2.788-1.1
												2.788-3.034v-23.932M386.71 218.884h-22.549c-1.034
												0-1.876.852-1.876 1.901v58.302s-5.729 4.192-13.859
												4.192c-8.13
												0-10.287-3.689-10.287-11.65v-50.844c0-1.049-.841-1.901-1.875-1.901h-22.886c-1.032
												0-1.879.852-1.879 1.901v54.693c0 23.646 13.179
												29.431 31.31 29.431 14.873 0 26.864-8.216
												26.864-8.216s.571 4.329.829 4.843c.259.512.932
												1.029 1.659 1.029l14.56-.064c1.032 0 1.879-.854
												1.879-1.898l-.008-79.817c0-1.05-.843-1.902-1.882-1.902M439.445
												283.207c-7.821-.238-13.126-3.788-13.126-3.788v-37.653s5.233-3.208
												11.654-3.782c8.12-.727 15.944 1.726 15.944
												21.095.001 20.426-3.53 24.457-14.472
												24.128zm8.894-66.993c-12.807 0-21.518 5.714-21.518
												5.714v-40.263c0-1.05-.839-1.897-1.875-1.897h-22.787a1.887
												1.887 0 0 0-1.878 1.897v118.903c0 1.048.842 1.901
												1.881 1.901h15.811c.711 0 1.25-.367
												1.648-1.009.393-.639.96-5.482.96-5.482s9.318 8.83
												26.957 8.83c20.708 0 32.584-10.504 32.584-47.154
												0-36.651-18.967-41.44-31.783-41.44M198.936
												218.695h-17.045l-.026-22.519c0-.852-.439-1.278-1.424-1.278h-23.228c-.903
												0-1.388.398-1.388 1.265v23.271s-11.64 2.809-12.427
												3.037a1.886 1.886 0 0 0-1.361 1.812v14.623c0
												1.052.84 1.898 1.879 1.898h11.909v35.178c0 26.13
												18.328 28.697 30.696 28.697 5.651 0 12.411-1.814
												13.527-2.228.675-.248 1.067-.947
												1.067-1.705l.019-16.086c0-1.05-.886-1.897-1.884-1.897-.993
												0-3.534.404-6.15.404-8.372
												0-11.209-3.893-11.209-8.932l-.001-33.432h17.046c1.039
												0 1.88-.847 1.88-1.898v-18.317a1.884 1.884 0 0
												0-1.88-1.893" />
										</g>
									</svg>
								</a>
							</div>
						{:else}
							<div class="inline-flex flex-col">
								<span class="inline-flex rounded-md shadow-sm">
									<button
										on:click={handleGithubDisconnect}
										class="btn btn-small btn-default">
										Disconnect&nbsp;
										<span style="color: #121110">
											<b>{githubAccount.username}</b>
										</span>
									</button>
								</span>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>