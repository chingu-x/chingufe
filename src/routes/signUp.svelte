<script context="module">
  import { client } from "../graphql";

  export function preload(page, session) {
    let returnTo = false;
    let destination = '/dashboard';
    if(page.query && page.query.returnTo) {
      switch(page.query.returnTo) {
        case 'apply':
          returnTo = 'apply';
          destination = '/apply';
          break;
      }
    }

    if(session) {
      return this.redirect(302, destination);
    }

    return { destination, returnTo };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import { init as initStripe } from "../stripe";
  import Picture from "../components/Picture.svelte";
  import Button from "../components/Button.svelte";

  export let destination = '/dashboard';
  export let returnTo = false;
  const signInUrl = returnTo ? `/signIn?returnTo=${returnTo}` : '/signIn';

  const { page } = stores();
  const { params } = $page;

  let signUpError = null;

  let email = "";
  let password = "";
  let firstName = "";
  let lastName = "";
  let source;
  let otherSource;
  let gender;
  let otherGender;
  let newsletterSignUp = false;
  let loading = false;

  $: profile = {
    firstName,
    lastName,
    gender,
    otherGender,
  };

  function handleSignUp() {
    loading = true;
    signUpError = null;

    return client(fetch)
      .request({
        query: `
        mutation signUp(
          $email: String!,
          $password: String!,
          $profile: SignUpProfileInput!,
          $newsletterSignUp: Boolean!
        ) {
          signUp(
            email: $email
            password: $password
            profile: $profile
            newsletterSignUp: $newsletterSignUp
          ) {
            error {
              message
              code
            }
            user {
              id
              avatarUrl
              firstName
              lastName
              email
              discordAccount {
                id
                username
                avatarHash
              }
            }
          }
        }
      `,
        variables: {
          email,
          password,
          profile,
          newsletterSignUp
        }
      })
      .then(async ({ signUp }) => {
        if (!signUp.error) {
          window.location.href = destination;
        } else {
          signUpError = formatSignUpError(signUp.error);
          window.scrollTo(0, 0);
        }
      })
      .finally(() => (loading = false));
  }

  function formatSignUpError(error) {
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
        console.error(error);
        return defaultError;
        break;
    }
  }
</script>

<div class="min-h-screen bg-white flex w-full">
  <div
    class="flex-1 z-10 bg-white flex flex-col justify-center py-12 px-4 sm:px-6
    lg:flex-none lg:w-2/5 lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm">
      <div>
        <a href="/">
          <img class="h-12 w-auto" src="/logo-192x192.png" alt="Chingu" />
        </a>
        <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p class="mt-2 text-sm leading-5 text-gray-600 max-w">
          Or
          <a
            href={signInUrl}
            class="font-medium text-green-600 hover:text-green-500
            focus:outline-none focus:underline transition ease-in-out
            duration-150">
            sign in
          </a>
        </p>
      </div>

      {#if signUpError}
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
                  00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10
                  11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1
                  1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm leading-5 font-medium text-red-800">
                {signUpError.title}
              </h3>
              <div class="mt-2 text-sm leading-5 text-red-700">
                {signUpError.text}
              </div>
            </div>
          </div>
        </div>
      {/if}

      <div class="mt-8">
        <div class="mt-6">
          <form method="POST" on:submit|preventDefault={handleSignUp}>
            <div>
              <label
                for="first-name"
                class="block text-sm font-medium leading-5 text-gray-700">
                First name
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="first-name"
                  bind:value={firstName}
                  type="text"
                  required
                  class="appearance-none block w-full px-3 py-2 border
                  border-gray-300 rounded-md placeholder-gray-400
                  focus:outline-none focus:ring-blue
                  focus:border-blue-300 transition duration-150 ease-in-out
                  sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="last-name"
                class="block text-sm font-medium leading-5 text-gray-700">
                Last name
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="last-name"
                  bind:value={lastName}
                  type="text"
                  required
                  class="appearance-none block w-full px-3 py-2 border
                  border-gray-300 rounded-md placeholder-gray-400
                  focus:outline-none focus:ring-blue
                  focus:border-blue-300 transition duration-150 ease-in-out
                  sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700">
                Email address
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  bind:value={email}
                  type="email"
                  required
                  class="appearance-none block w-full px-3 py-2 border
                  border-gray-300 rounded-md placeholder-gray-400
                  focus:outline-none focus:ring-blue
                  focus:border-blue-300 transition duration-150 ease-in-out
                  sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password"
                class="block text-sm font-medium leading-5 text-gray-700">
                Password
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  bind:value={password}
                  type="password"
                  required
                  class="appearance-none block w-full px-3 py-2 border
                  border-gray-300 rounded-md placeholder-gray-400
                  focus:outline-none focus:ring-blue
                  focus:border-blue-300 transition duration-150 ease-in-out
                  sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div class="mt-6">
              <legend class="block text-sm font-medium leading-5 text-gray-700">
                Gender
              </legend>
              <div class="mt-4">
                <div class="flex items-center">
                  <input
                    id="gender-femail"
                    name="gender"
                    type="radio"
                    bind:group={gender}
                    value="FEMALE"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="gender-femail" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Female
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="gender-male"
                    name="gender"
                    type="radio"
                    bind:group={gender}
                    value="MALE"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="gender-male" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Male
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="gender-non-binary"
                    name="gender"
                    type="radio"
                    bind:group={gender}
                    value="NON_BINARY"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="gender-non-binary" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Non-binary
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="gender-prefer-not-to-say"
                    name="gender"
                    type="radio"
                    bind:group={gender}
                    value="PREFER_NOT_TO_SAY"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="gender-prefer-not-to-say" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Prefer not to say
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="gender-other"
                    name="gender"
                    type="radio"
                    bind:group={gender}
                    value="OTHER"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="gender-other" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Other
                    </span>
                  </label>
                </div>
                {#if gender === 'OTHER'}
                  <div class="mt-2 ml-6 rounded-md shadow-sm">
                    <input
                      id="otherGender"
                      type="text"
                      bind:value={otherGender}
                      placeholder="Please specify"
                      class="form-textarea block w-full transition duration-150
                      ease-in-out sm:text-sm sm:leading-5"
                      required />
                  </div>
                {/if}
              </div>
            </div>

            <!-- <div class="mt-6">
              <legend class="block text-sm font-medium leading-5 text-gray-700">
                Where did you hear about us?
              </legend>
              <div class="mt-4">
                <div class="flex items-center">
                  <input
                    id="source-dev"
                    name="source"
                    type="radio"
                    bind:group={source}
                    value="DEV"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="source-dev" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Dev.to
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="source-flutter"
                    name="source"
                    type="radio"
                    bind:group={source}
                    value="FLUTTER_EXPLAINED"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="source-flutter" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Flutter Explained
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="source-medium"
                    name="source"
                    type="radio"
                    bind:group={source}
                    value="MEDIUM"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="source-medium" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Medium
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="source-twitter"
                    name="source"
                    type="radio"
                    bind:group={source}
                    value="TWITTER"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="source-twitter" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Twitter
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="source-personal-network"
                    name="source"
                    type="radio"
                    bind:group={source}
                    value="PERSONAL_NETWORK"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="source-personal-network" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      From a friend/someone I know
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="source-free-code-camp-forum"
                    name="source"
                    type="radio"
                    bind:group={source}
                    value="FREE_CODE_CAMP_FORUM"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="source-free-code-camp-forum" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      The FreeCodeCamp forum
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="source-google-search"
                    name="source"
                    type="radio"
                    bind:group={source}
                    value="GOOGLE_SEARCH"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="source-google-search" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Google search
                    </span>
                  </label>
                </div>
                <div class="mt-4 flex items-center">
                  <input
                    id="source-other"
                    name="source"
                    type="radio"
                    bind:group={source}
                    value="OTHER"
                    required
                    class="form-radio h-4 w-4 text-green-600 transition
                    duration-150 ease-in-out" />
                  <label for="source-other" class="ml-3">
                    <span
                      class="block text-sm leading-5 font-medium text-gray-700">
                      Other
                    </span>
                  </label>
                </div>
                {#if source === 'OTHER'}
                  <div class="mt-2 ml-6 rounded-md shadow-sm">
                    <input
                      id="otherSource"
                      type="text"
                      bind:value={otherSource}
                      placeholder="Please specify"
                      class="form-textarea block w-full transition duration-150
                      ease-in-out sm:text-sm sm:leading-5"
                      required />
                  </div>
                {/if}
              </div>
            </div> -->

            <div class="mt-6 flex items-center">
              <input
                id="privacy_policy"
                type="checkbox"
                class="form-checkbox h-4 w-4 text-green-600 transition
                duration-150 ease-in-out"
                required />
              <label
                for="privacy_policy"
                class="ml-2 block text-sm leading-5 text-gray-900">
                I agree to the
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-medium text-green-600 hover:text-green-500
                  focus:outline-none focus:underline transition ease-in-out
                  duration-150">
                  Privacy Policy.
                </a>
              </label>
            </div>

            <div class="mt-6 flex items-center">
              <input
                id="marketing_consent"
                type="checkbox"
                class="form-checkbox h-4 w-4 text-green-600 transition
                duration-150 ease-in-out"
                bind:checked={newsletterSignUp} />
              <label
                for="marketing_consent"
                class="ml-2 block text-sm leading-5 text-gray-900">
                I want to hear from Chingu about products and services.
              </label>
            </div>

            <div class="mt-6">
              <Button variant="primary" type="submit" wide {loading}>
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:block relative w-0 flex-1">
    <Picture
      class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      src={[{ type: 'jpg', img: '/sign-up/brooke-cagle-F_y8J9Ftwi0-unsplash.jpg', alt: 'Woman coding in a cafe' }]} />
  </div>
</div>
