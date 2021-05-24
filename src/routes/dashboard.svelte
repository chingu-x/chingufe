<script context="module">
  import { client } from "../graphql";

  export function preload(page, session) {
    if (!session) {
      return this.redirect(302, "/signIn?returnTo=dashboard");
    }

    return client(this.fetch).request({
      query: `
          query dashboardQuery {
            me {
              id
              firstName
              lastName
              avatarUrl
              discordAccount { 
                id
                username
                avatarHash
                email
                discriminator
              }
              githubAccount {
                id
              }
              country {
                id
                name
                code
              }
              cityName
              timezone {
                id
                name
                abbreviation
                gmtOffset
              }
              projectSubmissions {
                id
                status
                projectTier
                githubUrl
                deployedUrl
                specialInstructions
              }
              voyageCredits {
                id
                creditsIssued
                creditsRemaining
                expiresAt
              }
              voyageApplications {
                id
                status
                voyage {
                  id
                  name
                  startDate
                  endDate
                }
                role
                tier
              }
              voyageMemberships {
                id
                status
                voyage {
                  id
                  name
                  startDate
                  endDate
                }
              }
              explorerBatchApplications {
                id
                status
                explorerBatch {
                  id
                  name
                  startDate
                  endDate
                }
              }
              explorerBatchMemberships {
                id
                status
                explorerBatch {
                  id
                  name
                  startDate
                  endDate
                }
              }
            }

            upcomingVoyage {
              id
              name
              startDate
              endDate
            }
          }
        `
    }).then((data) => {
      if(page.query && page.query.success && page.query.sessionId) {
        return {
          ...data,
          paymentSuccess: true
        }
      }

      return data;
    });
  }
</script>

<script>
  import { onMount } from "svelte";
  import moment from "moment";
  import { init as initStripe } from "../stripe";
  import Button from "../components/Button.svelte";
  export let me;
  export let upcomingVoyage;
  export let paymentSuccess = false;

  const hasDiscordAccount = me.discordAccount ? true : false;
  const hasGithubAccount = me.githubAccount ? true : false;
  const pendingPayment = !!me.voyageMemberships.find(m => m.status === "PENDING_PAYMENT") && !paymentSuccess;
  const activeVoyager = !!me.voyageMemberships.find(m => ["ACTIVE", "PENDING_PROJECT_SUBMISSION"].includes(m.status)) || paymentSuccess;
  const pendingExplorer = !!me.explorerBatchApplications.find(a => a.status === "PENDING_REVIEW");
  const activeExplorer = !activeVoyager && !!me.explorerBatchApplications.find(a => a.status === "ACCEPTED");

  let loadingStripeCheckout = false;

  let projectStatus = "pending submission";
  if (me.projectSubmissions.length) {
    projectStatus = me.projectSubmissions.find(
      p => p.status === "PENDING_REVIEW"
    )
      ? "pending review"
      : me.projectSubmissions[0].status;
  }

  // Handle the edge case where a Chingu who didn't purchase a plan through
  // Chinug.io could have multiple credit records, each with a different number of
  // of credits & expirations
  const creditsIssued = me.voyageCredits.reduce((creditsIssued, current) => {
    return creditsIssued + current.creditsIssued 
  }, 0)

  const creditsUsed = 
    me.voyageMemberships.reduce((creditsUsed, current) => { 
      return ['ACTIVE', 'PENDING_PROJECT_SUBMISSION', 'COMPLETED']
        .includes(current.status) ? creditsUsed + 1 : creditsUsed
    }, 0)
  
  const remainingCredits = creditsIssued - creditsUsed

  const voyageApplicationPromtText = activeExplorer || pendingExplorer ?
    "Ready to level-up with a Voyage?" :
    "Ready for your next Voyage?";
  const eligibleToApplyForVoyage = activeExplorer || pendingExplorer || (!activeVoyager && !pendingPayment);

  function handleStripeCheckout(item) {
    loadingStripeCheckout = true;
    client(fetch)
      .request({
        query: `
          mutation createStripeCheckoutSession(
            $item: StripeCheckoutSessionItem!
            $itemId: ID
          ) {
            createStripeCheckoutSession(
              item: $item,
              itemId: $itemId
            ) {
              error {
                message
                code
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
          item,
          itemId: me.voyageMemberships.find(m => m.status === "PENDING_PAYMENT")
            .id
        }
      })
      .then(async ({ createStripeCheckoutSession }) => {
        if (!createStripeCheckoutSession.error) {
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
            });
        }
      })
      .finally(() => (loadingStripeCheckout = false));
  }

  onMount(() => {
    if (me.avatarUrl) {
      localStorage.setItem("av_url", me.avatarUrl);
      localStorage.setItem("av_alt", `${me.firstName} ${me.lastName}`);
    }
  });
</script>

<!-- Member Info Card -->
<main class="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">

  <div class="bg-white overflow-hidden shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <div class="flex justify-between">
        <div class="flex flex-wrap items-center w-full">
          {#if me.avatarUrl}
            <img
              class="h-32 w-32 rounded-full"
              src={me.avatarUrl}
              alt={`${me.firstName} ${me.lastName}`} />
          {:else}
            <svg
              class="h-32 w-32 rounded-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0
                9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {/if}
          <div class="flex flex-row flex-wrap items-center">
            <div class="flex flex-col ml-4 pt-4">
              <h1 class="font-bold tracking-tighter text-2xl">
                {me.firstName} {me.lastName}
              </h1>
              <div class="pt-2 md:pt-0">
                <p class="">{me.cityName}, {me.country.name}</p>
                {#if me.discordAccount}
                  <p class="flex pt-3 md:pt-0" style="color: rgb(114, 137, 218);">
                    <b>{me.discordAccount.username}</b>
                    {`#${me.discordAccount.discriminator}`}
                  </p>
                {:else}
                  <a href="/settings">Connect your Discord account</a>
                {/if}
              </div>
            </div>

            <div class="flex flex-wrap pt-3 md:pt-0 ml-4 md:ml-0 pl-0 md:pl-6 lg:pl-20 xl:pl-32">
              <div class=""> 
                {#if eligibleToApplyForVoyage}
                  {voyageApplicationPromtText}
                  <a class="text-green-500 hover:text-green-900" href="/apply">Apply here</a>
                {/if}
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-end">
          <Button link="/settings">Update</Button>
        </div>
      </div>
    </div>
  </div>

  {#if pendingPayment}
    <h1 class="mt-12 text-3xl text-center font-semibold">
      You’re almost there!
    </h1>
    <p class="mt-2 max-w-2xl mx-auto text-center text-lg text-gray-500">
      Complete payment below and get ready to join a remote developer team!
    </p>
    <div class="mt-8 flex justify-center">
      <span class="rounded-md shadow-sm">
        <button
          on:click={() => handleStripeCheckout('VOYAGE_CREDIT_1')}
          class="btn btn-primary">
          Voyage Plan ($29)
        </button>
      </span>
      <span class="ml-2 rounded-md shadow-sm">
        <button
          on:click={() => handleStripeCheckout('VOYAGE_CREDIT_6')}
          class="btn">
          Job-Ready Plan ($129)
        </button>
      </span>
    </div>
  {/if}

  {#if pendingExplorer}
    <h1 class="mt-12 text-3xl text-center font-semibold">
      Improvements to the Explorer plan are on the way!
    </h1>
    <p class="mt-2 max-w-2xl mx-auto text-center text-lg text-gray-500">
      We're currently working on improvements to the Explorer plan so be 
      patient and we'll reach out to you when they are ready.
      <br /><br />
      Please keep an eye on your email, including the junk folders (they can
      sometimes land there).
    </p>
  {:else if activeExplorer}
    <div class="mt-12">
      <h1 class="text-3xl text-center font-bold">
        Hello Explorer. It's time to build.
      </h1>
      <div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div class="relative max-w-7xl mx-auto">
          <div class="grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <div class="col-span-3">
              <h3 class="mt-6 text-2xl">Before Launch</h3>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">1</p>
                  <a
                    href="https://dev.to/tropicalchancer/chingu-explorer-overview-so-you-don-t-freak-out-before-we-start-26ap"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      How to Prepare / how it works
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      This will give you an overview of the Explorer program and
                      how to prepare.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>3 minute read</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-3">
              <h3 class="mt-6 text-2xl">Explorer Launch</h3>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">2</p>
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    When is the launch date?
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    Please see your admissions e-mail for the launch date and
                    everything you need to know about how the launch will work.
                    If you cannot find the e-mail, please let us know at
                    support@chingu.io
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">3</p>
                  <a
                    href="https://solofree.docs.chingu.io/solo/steps"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      What project do I build?
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      This will provide you details about the project you will
                      build in the Explorer session.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>4 minute read</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">4</p>
                  <a
                    href="https://solofree.docs.chingu.io/pairprog/howwork"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      How Pair-Programming works
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      This will give you an overview of the Explorer program and
                      how to prepare.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>2 minute read</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-3">
              <h3 class="mt-6 text-2xl">Extra Resources</h3>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">5</p>
                  <a
                    href="https://solofree.docs.chingu.io/solo"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Explorer Handbook
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      This will give you an overview of the Explorer program and
                      how to prepare.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>10 minute read</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">6</p>
                  <a
                    href="https://guides.github.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      New to Git/Github?
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Here are some handy guides to using Git / Github.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>20+ minute read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {:else if activeVoyager}
    <div class="mt-12">
      <h1 class="text-3xl text-center font-bold">
        Hello Voyager. It’s time to build. 🚀
      </h1>
      <div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div class="relative max-w-7xl mx-auto">
          <div class="grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <div class="col-span-3">
              <h3 class="mt-6 text-2xl">Getting Started</h3>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">1</p>
                  <a
                    href="https://medium.com/chingu/chingu-voyage-teaser-extra-info-1c9abc0472c7"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      How it all works
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      This will give you an overview of the Explorer program and
                      how to prepare.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>8 minute read</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">2</p>
                  <a
                    href="https://docs.chingu.io/voyage/soloproj/howwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Pre-work Requirement: Submit a solo project
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      This will give you an overview of the Explorer program and
                      how to prepare.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>3 minute read</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-3">
              <h3 class="mt-6 text-2xl">Build with a Team</h3>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    {upcomingVoyage ? upcomingVoyage.name : 'No upcoming voyage'}
                  </h3>
                  {#if upcomingVoyage}
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Project status: {projectStatus}
                      <br />
                      Due date for solo project: {moment(upcomingVoyage.startDate)
                        .subtract(2, 'days')
                        .calendar()}
                    </p>
                  {/if}
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">3</p>
                  <a
                    href="https://docs.chingu.io/voyage"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      The Voyage Handbook
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      This will give you an overview of the Voyage program and
                      how to prepare.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>2 minute read</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">4</p>
                  <a
                    href="https://docs.chingu.io/about/whatischingu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      FAQ
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Here is a list of Frequently Asked Questions.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>2 minute read</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-3">
              <h3 class="mt-6 text-2xl">Extra Resources</h3>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-green-600">5</p>
                  <a
                    href="https://docs.chingu.io/schedule"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Schedule
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      This will give you an overview of the Explorer program and
                      how to prepare.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex text-sm leading-5 text-green-600">
                    <span>2 minute read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</main>
