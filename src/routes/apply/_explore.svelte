<script context="module">
  import { client } from "../../graphql";

  export function preload(page, session) {
    if (!session) {
      return this.redirect(302, "/signIn");
    }

    return client(this.fetch)
      .request({
        query: `
        query explorerBatchQuery {
          upcomingExplorerBatch {
            id
            name
            startDate
          }

          me {
            id
            explorerBatchMemberships {
              id
              status
              explorerBatch {
                id
              }
            }
          }
        }
      `
      })
      .then(response => {
        if (
          !response.upcomingExplorerBatch ||
          response.me.explorerBatchMemberships.find(
            m => m.explorerBatch.id === response.upcomingExplorerBatch.id
          )
        ) {
          return this.redirect(302, "/apply");
        }

        return response;
      });
  }
</script>

<script>
  import { goto } from '@sapper/app';
  import Button from "../../components/Button.svelte";

  let applicationError = null;
  let loading = false;

  let role;
  let otherRole;
  let learningCommitment;
  let hasUsedGithub;
  let hasCompletedProject;
  let learningJourneyPosition;
  let otherLearningJourneyPosition;
  let excitedForFeatures = [];
  let reasonForApplying;
  let cohortCommitment;
  let previousProjectLinks;
  let additionalNotes;

  $: application = {
    role,
    otherRole,
    learningCommitment,
    hasUsedGithub,
    hasCompletedProject,
    learningJourneyPosition,
    otherLearningJourneyPosition,
    excitedForFeatures,
    reasonForApplying,
    cohortCommitment,
    previousProjectLinks,
    additionalNotes
  };

  function handleSubmission() {
    loading = true;
    applicationError = null;
    client(fetch)
      .request({
        query: `
          mutation createExplorerApplication(
            $application: ExplorerBatchApplicationCreateInput!
          ) {
            createExplorerBatchApplication(
              application: $application
            ) {
              error {
                code
                message
              }
            }
          }
        `,
        variables: { application }
      })
      .then(({ createExplorerBatchApplication }) => {
        if (!createExplorerBatchApplication.error) {
          return goto("/dashboard");
        } else {
          applicationError = formatApplicationError(
            createExplorerBatchApplication.error
          );
        }
      })
      .catch(() => (applicationError = formatApplicationError()))
      .finally(() => (loading = false));
  }

  function formatApplicationError(error) {
    const defaultError = {
      title: "An error occurred",
      text: "Please try again."
    };

    if (!error || typeof error !== "object") {
      return defaultError;
    }

    switch (error.code) {
      case "NO_UPCOMING_BATCHES":
        return {
          title: "There are no upcoming explorer cohorts",
          text: "Please try applying again at a later date."
        };
      case "EXISTING_APPLICATION":
        return {
          title: "Existing application",
          text: "You have already applied for the upcoming cohort."
        };
      default:
        return defaultError;
    }
  }
</script>

<main class="py-10">
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div
      class="mx-4 py-6 px-6 bg-white rounded-md shadow border border-transparent">
      <form on:submit|preventDefault={handleSubmission}>
        <div>
          <div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Explorer Application
              </h3>
            </div>
            {#if applicationError}
              <div class="mt-8 rounded-md bg-red-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0
                        00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414
                        1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414
                        10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707
                        7.293z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm leading-5 font-medium text-red-800">
                      {applicationError.title}
                    </h3>
                    <div class="mt-2 text-sm leading-5 text-red-700">
                      {applicationError.text}
                    </div>
                  </div>
                </div>
              </div>
            {/if}
            <div class="mt-6 max-w-screen-sm">
              <div>
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  I want to join a Chingu cohort as...
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="role-dev"
                      name="role"
                      type="radio"
                      bind:group={role}
                      value="DEVELOPER"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="role-dev" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Developer
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="role-product-owner"
                      name="role"
                      type="radio"
                      bind:group={role}
                      value="PRODUCT_OWNER"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="role-product-owner" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Product owner
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="role-designer"
                      name="role"
                      type="radio"
                      bind:group={role}
                      value="DESIGNER"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="role-designer" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        UI/UX Designer
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="role-data-scientist"
                      name="role"
                      type="radio"
                      bind:group={role}
                      value="DATA_SCIENTIST"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="role-data-scientist" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Data Scientist
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="role-other"
                      name="role"
                      type="radio"
                      bind:group={role}
                      value="OTHER"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="role-other" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Other
                      </span>
                    </label>
                  </div>
                  {#if role === 'OTHER'}
                    <div class="mt-2 ml-6 rounded-md shadow-sm">
                      <input
                        id="otherRole"
                        type="text"
                        bind:value={otherRole}
                        placeholder="Please specify"
                        class="form-textarea block w-full transition
                        duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required />
                    </div>
                  {/if}
                </div>
              </div>
              <div class="mt-6">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Are you learning coding full time or part time?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="learning-commitment-full"
                      name="learning-commitment"
                      type="radio"
                      bind:group={learningCommitment}
                      value="FULL_TIME"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="learning-commitment-full" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Full-time - my coding goals are my priority right now.
                        (25+ hours a week)
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="learning-commitment-part"
                      name="learning-commitment"
                      type="radio"
                      bind:group={learningCommitment}
                      value="PART_TIME"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="learning-commitment-part" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Part-time (8 - 25 hours a week)
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="learning-commitment-goals"
                      name="learning-commitment"
                      type="radio"
                      bind:group={learningCommitment}
                      value="GOAL_BASED"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="learning-commitment-goals" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I work towards my coding goals a few hours a week
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Have you ever used Git/Github before?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="github-yes"
                      name="github"
                      type="radio"
                      bind:group={hasUsedGithub}
                      value={true}
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="github-yes" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Yes
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="github-no"
                      name="github"
                      type="radio"
                      bind:group={hasUsedGithub}
                      value={false}
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="github-no" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        No
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Have you completed a project before? (complete means you can show someone the code or design work)
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="project-yes"
                      name="project"
                      type="radio"
                      bind:group={hasCompletedProject}
                      value="TRUE"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="project-yes" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Yes
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="project-no"
                      name="project"
                      type="radio"
                      bind:group={hasCompletedProject}
                      value="FALSE"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="project-no" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        No
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="project-ongoing"
                      name="project"
                      type="radio"
                      bind:group={hasCompletedProject}
                      value="ONGOING"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="project-ongoing" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I've started a lot, but haven't finished one yet.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Where are you on your learning journey? (roughly)
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="learning-journey-confident"
                      name="learning-journey"
                      type="radio"
                      bind:group={learningJourneyPosition}
                      value="CONFIDENT"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="learning-journey-confident" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I'm confident in my ability to create a project.
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="learning-journey-fundamentals"
                      name="learning-journey"
                      type="radio"
                      bind:group={learningJourneyPosition}
                      value="WORKING_ON_FUNDAMENTALS"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="learning-journey-fundamentals" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I'm still working on the fundamentals.
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="learning-journey-getting-started"
                      name="learning-journey"
                      type="radio"
                      bind:group={learningJourneyPosition}
                      value="GETTING_STARTED"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="learning-journey-getting-started" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I'm just getting started.
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="learning-journey-other"
                      name="learning-journey"
                      type="radio"
                      bind:group={learningJourneyPosition}
                      value="OTHER"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="learning-journey-other" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Other
                      </span>
                    </label>
                  </div>
                  {#if learningJourneyPosition === 'OTHER'}
                    <div class="mt-2 ml-6 rounded-md shadow-sm">
                      <input
                        id="otherLearningJourneyPosition"
                        type="text"
                        bind:value={otherLearningJourneyPosition}
                        placeholder="Please specify"
                        class="form-textarea block w-full transition
                        duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required />
                    </div>
                  {/if}
                </div>
              </div>
              <div class="mt-6">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Please check the features you're MOST excited about in the Explorer cohort. (Maximum 3)
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="features-community"
                      name="features"
                      type="checkbox"
                      bind:group={excitedForFeatures}
                      value="COMMUNITY"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="features-community" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Being in a community of friendly coders / learners who share my goals
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="features-tutorial-purgatory"
                      name="features"
                      type="checkbox"
                      bind:group={excitedForFeatures}
                      value="GET_OUT_OF_TUTORIAL_PURGATORY"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="features-tutorial-purgatory" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Get out of tutorial purgatory and finish a real project
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="features-deadlines"
                      name="features"
                      type="checkbox"
                      bind:group={excitedForFeatures}
                      value="DEADLINES"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="features-deadlines" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Have a deadline to push me to finish a project
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="features-help"
                      name="features"
                      type="checkbox"
                      bind:group={excitedForFeatures}
                      value="HELP"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="features-help" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Help when I get stuck on a coding problem
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="features-comfort-zone"
                      name="features"
                      type="checkbox"
                      bind:group={excitedForFeatures}
                      value="LEAVING_COMFORT_ZONE"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="features-comfort-zone" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Getting out of my comfort zone
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="features-pair-programming"
                      name="features"
                      type="checkbox"
                      bind:group={excitedForFeatures}
                      value="PAIR_PROGRAMMING"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="features-pair-programming" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Pair-Programming opportunities
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <label
                  for="reason-for-applying"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Why do you think the Explorer cohort will be valuable to you?
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="reason-for-applying"
                    type="text"
                    rows="3"
                    bind:value={reasonForApplying}
                    class="form-textarea block w-full transition duration-150
                    ease-in-out sm:text-sm sm:leading-5"
                    required />
                </div>
              </div>
              <div class="mt-6">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Many people want to join the cohorts, but in the past we have had some people who join and then stop being active after a few weeks. Or don't get started on their project. This brings down the value of the cohort for others so we want to avoid it. Cohorts now last about 1 month and you will be expected to finish a project in that time. If accepted, can you see yourself leaving after a few weeks without saying anything or do you plan on being involved and completing your project?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="cohort-commitment-uncommitted"
                      name="cohort-commitment"
                      type="radio"
                      bind:group={cohortCommitment}
                      value="UNCOMMITTED"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="cohort-commitment-uncommitted" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I might give up and leave without saying anything.
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="cohort-commitment-full"
                      name="cohort-commitment"
                      type="radio"
                      bind:group={cohortCommitment}
                      value="FULLY_COMMITTED"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="cohort-commitment-full" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I will stay for the full 1 month and will complete my project.
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="cohort-commitment-unsure"
                      name="cohort-commitment"
                      type="radio"
                      bind:group={cohortCommitment}
                      value="NOT_SURE"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="cohort-commitment-unsure" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I don't know.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <label
                  for="project-links"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  If you have any previous projects to share, please leave a link here. (Optional)
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="project-links"
                    type="text"
                    rows="3"
                    bind:value={previousProjectLinks}
                    class="form-textarea block w-full transition duration-150
                    ease-in-out sm:text-sm sm:leading-5" />
                </div>
              </div>
              <div class="mt-6">
                <label
                  for="extra-notes"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  If you have any extra notes or comments, please add them here. (Optional)
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="extra-notes"
                    type="text"
                    rows="3"
                    bind:value={additionalNotes}
                    class="form-textarea block w-full transition duration-150
                    ease-in-out sm:text-sm sm:leading-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-5">
          <div class="flex justify-end">
            <Button
              class="ml-3"
              variant="primary"
              type="submit"
              {loading}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</main>
