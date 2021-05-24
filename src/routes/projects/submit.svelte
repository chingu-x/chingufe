<script context="module">
  import { client } from "../../graphql";

  export function preload(page, session) {
    if (!session) {
      return this.redirect(302, "/signIn");
    }

    return client(this.fetch)
      .request({
        query: `
          query projectSubmissionQuery {
            me {
              id
              projectSubmissions {
                id
              }
            }
          }
        `
      })
      .then(response => {
        if (response.me.projectSubmissions.length) {
          return this.redirect(302, "/dashboard");
        }

        return response;
      });
  }
</script>

<script>
  import { goto } from "@sapper/app";

  let submissionError = null;
  let loading = false;

  let projectTier;
  let githubUrl;
  let deployedUrl;
  let voyageTier;
  let voyagePath;
  let partnerRequest;
  let projectCommitment;
  let developmentLanguage;
  let otherDevelopmentLanguage;
  let developmentFramework;
  let otherDevelopmentFramework;
  let developmentDatabase;
  let otherDevelopmentDatabase;
  let isInterestedInBeingProjectManager;
  let preferredTimeOfDay;
  let additionalNotes;
  let specialInstructions;

  $: submission = {
    projectTier,
    githubUrl,
    deployedUrl,
    voyageTier,
    voyagePath,
    partnerRequest,
    projectCommitment,
    developmentLanguage,
    otherDevelopmentLanguage,
    developmentFramework,
    otherDevelopmentFramework,
    developmentDatabase,
    otherDevelopmentDatabase,
    isInterestedInBeingProjectManager,
    preferredTimeOfDay,
    additionalNotes,
    specialInstructions
  };

  function handleSubmission() {
    loading = true;
    submissionError = null;
    client(fetch)
      .request({
        query: `
          mutation createProjectSubmission(
            $submission: ProjectSubmissionCreateInput!
          ) {
            createProjectSubmission(
              submission: $submission
            ) {
              error {
                code
                message
              }
            }
          }
        `,
        variables: { submission }
      })
      .then(({ createProjectSubmission }) => {
        if (!createProjectSubmission.error) {
          return goto("/dashboard");
        } else {
          submissionError = formatSubmissionError(
            createProjectSubmission.error
          );
        }
      })
      .catch(() => (submissionError = formatSubmissionError()))
      .finally(() => (loading = false));
  }

  function formatSubmissionError(error) {
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
                Project submission
              </h3>
            </div>
            {#if submissionError}
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
                      {submissionError.title}
                    </h3>
                    <div class="mt-2 text-sm leading-5 text-red-700">
                      {submissionError.text}
                    </div>
                  </div>
                </div>
              </div>
            {/if}
            <div class="mt-6 grid sm:grid-cols-8">
              <div class="col-span-8">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Which Tier matches your project?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="project-tier-1"
                      name="project-tier"
                      type="radio"
                      bind:group={projectTier}
                      value="TIER_1"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="project-tier-1" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Tier 1 - HTML - Basic Javascript - Basic Algorithms
                        (LANDING PAGES)
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="project-tier-2"
                      name="project-tier"
                      type="radio"
                      bind:group={projectTier}
                      value="TIER_2"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="project-tier-2" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Tier 2 - Intermediate Algorithms - Front-end Projects
                        (FRONT-END)
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="project-tier-3"
                      name="project-tier"
                      type="radio"
                      bind:group={projectTier}
                      value="TIER_3"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="project-tier-3" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Tier 3 - Advanced Projects - Apps having both Front-end
                        and Back-end components (FULL STACK)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:col-span-5 sm:col-start-1">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  What is the URL of your GitHub repo for your project? Your
                  project must include a readme.md describing the app's purpose,
                  major functions, dependencies, and build/deploy instructions.
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="github-url"
                      type="text"
                      bind:value={githubUrl}
                      class="appearance-none block w-full px-3 py-2 border
                      border-gray-300 rounded-md placeholder-gray-400
                      focus:outline-none focus:ring-blue
                      focus:border-blue-300 transition duration-150 ease-in-out
                      sm:text-sm sm:leading-5" />
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:col-span-5 sm:col-start-1">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  What is the URL to your deployed project?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="deployed-url"
                      type="text"
                      bind:value={deployedUrl}
                      class="appearance-none block w-full px-3 py-2 border
                      border-gray-300 rounded-md placeholder-gray-400
                      focus:outline-none focus:ring-blue
                      focus:border-blue-300 transition duration-150 ease-in-out
                      sm:text-sm sm:leading-5" />
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:col-span-5 sm:col-start-1">
                <label
                  for="special-instructions"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Let us know of any special Instructions for your project.
                  (Optional)
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="special-instructions"
                    type="text"
                    rows="3"
                    bind:value={specialInstructions}
                    class="form-textarea block w-full transition duration-150
                    ease-in-out sm:text-sm sm:leading-5" />
                </div>
              </div>
              <div class="mt-6 col-span-8">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Please select the Tier and project type that best suits you
                  for this Voyage:
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="voyage-tier-1"
                      name="voyage-tier"
                      type="radio"
                      bind:group={voyageTier}
                      value="TIER_1"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="voyage-tier-1" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Tier 1 - HTML - Basic Javascript - Basic Algorithms
                        (LANDING PAGES)
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="voyage-tier-2"
                      name="voyage-tier"
                      type="radio"
                      bind:group={voyageTier}
                      value="TIER_2"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="voyage-tier-2" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Tier 2 - Intermediate Algorithms - Front-end Projects
                        (FRONT-END
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="voyage-tier-3"
                      name="voyage-tier"
                      type="radio"
                      bind:group={voyageTier}
                      value="TIER_3"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="voyage-tier-3" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Tier 3 - Advanced Projects - Apps having both Front-end
                        and Back-end components (FULL STACK)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:col-span-5 sm:col-start-1">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Please select the path you want to take:
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="voyage-path-team"
                      name="voyage-path"
                      type="radio"
                      bind:group={voyagePath}
                      value="TEAM_PATH"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="voyage-path-team" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        TEAM PATH - this means you'll be matched up with another
                        developer to build the project.
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="voyage-path-solo"
                      name="voyage-path"
                      type="radio"
                      bind:group={voyagePath}
                      value="SOLO_PATH"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="voyage-path-solo" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        SOLO PATH - this means you will complete the project by
                        yourself (note: you'll still complete the weekly
                        check-ins to remain accountable).
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:col-span-5 sm:col-start-1">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  If you have chosen the TEAM PATH is there someone you want to
                  be paired with? Please submit their GitHub username.
                  <b>Note that this is not a guarantee.</b>
                  (Optional)
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="partner-request"
                      type="text"
                      bind:value={partnerRequest}
                      class="appearance-none block w-full px-3 py-2 border
                      border-gray-300 rounded-md placeholder-gray-400
                      focus:outline-none focus:ring-blue
                      focus:border-blue-300 transition duration-150 ease-in-out
                      sm:text-sm sm:leading-5" />
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:col-span-5 sm:col-start-1">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  How much time can you commit to the project?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="learning-commitment-part"
                      name="learning-commitment"
                      type="radio"
                      bind:group={projectCommitment}
                      value="PART_TIME"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="learning-commitment-part" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Part Time (10 - 20 hours a week)
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="learning-commitment-full"
                      name="learning-commitment"
                      type="radio"
                      bind:group={projectCommitment}
                      value="FULL_TIME"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="learning-commitment-full" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Full Time (20+ hours a week)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:col-span-5 sm:col-start-1">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  A big part of the Voyage is accountability. Members are
                  required to fill out a 3 minute "check-in" each week during
                  the Voyage. We use these check-ins to help you keep engaged
                  but also to support teams. Members who fail to submit their
                  check-in may be removed.
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="accountability-pledge"
                      name="accountability-pledge"
                      type="checkbox"
                      required
                      class="form-check h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="accountability-pledge" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I understand the importance of the check-ins and that
                        they are required.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6 col-span-8">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  What development language will you be using to in this Voyage?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="development-language-javascript"
                      name="development-language"
                      type="radio"
                      bind:group={developmentLanguage}
                      value="JAVASCRIPT"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-language-javascript" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        JavaScript
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-language-php"
                      name="development-language"
                      type="radio"
                      bind:group={developmentLanguage}
                      value="PHP"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-language-php" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        PHP
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-language-python"
                      name="development-language"
                      type="radio"
                      bind:group={developmentLanguage}
                      value="PYTHON"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-language-python" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Python
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-language-ruby"
                      name="development-language"
                      type="radio"
                      bind:group={developmentLanguage}
                      value="RUBY"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-language-ruby" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Ruby
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-language-other"
                      name="development-language"
                      type="radio"
                      bind:group={developmentLanguage}
                      value="OTHER"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="development-language-other" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Other
                      </span>
                    </label>
                  </div>
                  {#if developmentLanguage === 'OTHER'}
                    <div class="mt-2 ml-6 rounded-md shadow-sm">
                      <input
                        id="development-language"
                        type="text"
                        bind:value={otherDevelopmentLanguage}
                        placeholder="Please specify"
                        class="form-textarea block w-full transition
                        duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required />
                    </div>
                  {/if}
                </div>
              </div>
              <div class="mt-6 col-span-8">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  What framework will you be using in this Voyage?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="development-framework-angular"
                      name="development-framework"
                      type="radio"
                      bind:group={developmentFramework}
                      value="ANGULAR"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-framework-angular" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Angular
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-framework-django"
                      name="development-framework"
                      type="radio"
                      bind:group={developmentFramework}
                      value="DJANGO"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-framework-django" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Django
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-framework-react"
                      name="development-framework"
                      type="radio"
                      bind:group={developmentFramework}
                      value="REACT"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-framework-react" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        React
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-framework-vue"
                      name="development-framework"
                      type="radio"
                      bind:group={developmentFramework}
                      value="VUE"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-framework-vue" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Vue
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-framework-vanilla"
                      name="development-framework"
                      type="radio"
                      bind:group={developmentFramework}
                      value="VANILLA"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-framework-vanilla" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Vanilla HTML, CSS, and JS
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-framework-other"
                      name="development-framework"
                      type="radio"
                      bind:group={developmentFramework}
                      value="OTHER"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="development-framework-other" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Other
                      </span>
                    </label>
                  </div>
                  {#if developmentFramework === 'OTHER'}
                    <div class="mt-2 ml-6 rounded-md shadow-sm">
                      <input
                        id="development-framework"
                        type="text"
                        bind:value={otherDevelopmentFramework}
                        placeholder="Please specify"
                        class="form-textarea block w-full transition
                        duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required />
                    </div>
                  {/if}
                </div>
              </div>
              <div class="mt-6 col-span-8">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  What databases will you be using in this Voyage?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="development-database-firebase"
                      name="development-database"
                      type="radio"
                      bind:group={developmentDatabase}
                      value="FIREBASE"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-database-firebase" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Firebase
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-database-mongo"
                      name="development-database"
                      type="radio"
                      bind:group={developmentDatabase}
                      value="MONGO"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-database-mongo" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        MongoDB
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-database-postgresql"
                      name="development-database"
                      type="radio"
                      bind:group={developmentDatabase}
                      value="POSTGRESQL"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-database-postgresql" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        PostgreSQL
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-database-none"
                      name="development-database"
                      type="radio"
                      bind:group={developmentDatabase}
                      value="NONE"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="development-database-none" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        None
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="development-database-other"
                      name="development-database"
                      type="radio"
                      bind:group={developmentDatabase}
                      value="OTHER"
                      required
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out" />
                    <label for="development-database-other" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Other
                      </span>
                    </label>
                  </div>
                  {#if developmentDatabase === 'OTHER'}
                    <div class="mt-2 ml-6 rounded-md shadow-sm">
                      <input
                        id="development-database"
                        type="text"
                        bind:value={otherDevelopmentDatabase}
                        placeholder="Please specify"
                        class="form-textarea block w-full transition
                        duration-150 ease-in-out sm:text-sm sm:leading-5"
                        required />
                    </div>
                  {/if}
                </div>
              </div>
              <div class="mt-6 col-span-8">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Do you have any interest in being a Project Manager for a
                  Remote Dev Team?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="project-manager-yes"
                      name="project-manager"
                      type="radio"
                      bind:group={isInterestedInBeingProjectManager}
                      value="YES"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="project-manager-yes" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Yes
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="project-manager-no"
                      name="project-manager"
                      type="radio"
                      bind:group={isInterestedInBeingProjectManager}
                      value="NO"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="project-manager-no" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        No
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="project-manager-maybe"
                      name="project-manager"
                      type="radio"
                      bind:group={isInterestedInBeingProjectManager}
                      value="MAYBE"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="project-manager-maybe" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Maybe
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6 col-span-8">
                <legend
                  class="block text-sm font-medium leading-5 text-gray-700">
                  When are you usually free to code or work with your team?
                </legend>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="preferred-time-morning"
                      name="preferred-time"
                      type="radio"
                      bind:group={preferredTimeOfDay}
                      value="MORNING"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="preferred-time-morning" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Mornings
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="preferred-time-afternoon"
                      name="preferred-time"
                      type="radio"
                      bind:group={preferredTimeOfDay}
                      value="AFTERNOON"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="preferred-time-afternoon" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Afternoons
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="preferred-time-evening"
                      name="preferred-time"
                      type="radio"
                      bind:group={preferredTimeOfDay}
                      value="EVENING"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="preferred-time-evening" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        Evenings
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="preferred-time-all-night"
                      name="preferred-time"
                      type="radio"
                      bind:group={preferredTimeOfDay}
                      value="ALL_NIGHT"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="preferred-time-all-night" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I stay up all night
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="preferred-time-any-time"
                      name="preferred-time"
                      type="radio"
                      bind:group={preferredTimeOfDay}
                      value="ANY_TIME"
                      class="form-radio h-4 w-4 text-green-600 transition
                      duration-150 ease-in-out"
                      required />
                    <label for="preferred-time-any-time" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700">
                        I'm doing this full-time and free anytime!
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:col-span-5 sm:col-start-1">
                <label
                  for="extra-notes"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Before you go is there anything else you'd like to share with
                  us?
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
            <span class="ml-3 inline-flex rounded-md shadow-sm">
              <button
                disabled={loading}
                type="submit"
                class="inline-flex justify-center py-2 px-4 border
                border-transparent text-sm leading-5 font-medium rounded-md
                text-white bg-green-600 hover:bg-green-500 focus:outline-none
                focus:border-green-700 focus:ring-green-100
                active:bg-green-700 transition duration-150 ease-in-out">
                Submit
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</main>
