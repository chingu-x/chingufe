<script context="module">
  export function preload(page, session) {
    if (session || !page.query || !page.query.token) {
      return this.redirect(302, "/requestPasswordReset");
    }

    return { token: page.query.token };
  }
</script>

<script>
  import { client } from "../graphql";
  import { user } from "../stores";
  import Picture from "../components/Picture.svelte";
  import Button from "../components/Button.svelte";

  export let token;

  let password = "";
  let passwordConfirmation = "";
  let loading = false;
  let requestError = false;
  let passwordReset = false;

  function resetPassword() {
    if (password !== passwordConfirmation) {
      requestError = {
        title: "Passwords do not match"
      };
      return;
    }

    loading = true;
    requestError = false;
    return client(fetch)
      .request({
        query: `
        mutation resetPassword($token: String!, $password: String!) {
          resetPassword(token: $token, password: $password) {
            error {
              message
              code
            }
          }
        }
      `,
        variables: { token, password }
      })
      .then(({ resetPassword }) => {
        if (!resetPassword.error) {
          passwordReset = true;
        } else {
          handleRequestError(resetPassword.error);
        }
      })
      .finally(() => (loading = false));
  }

  function handleRequestError(error) {
    const defaultError = {
      title: "An error occurred",
      text: "Please try again."
    };

    if (!error || typeof error !== "object") {
      requestError = defaultError;
      return;
    }

    switch (error.code) {
      case "INVALID_TOKEN":
        requestError = {
          title: "Invalid token",
          text: error.message
        };
        break;
      default:
        console.error(error);
        requestError = defaultError;
        break;
    }
  }
</script>

<div class="min-h-screen bg-white flex w-full">
  <div
    class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none
    lg:w-2/5 lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm">
      <div>
        <a href="/">
          <img class="h-12 w-auto" src="/logo-192x192.png" alt="Chingu" />
        </a>
        <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
          Set a new password
        </h2>
      </div>

      {#if requestError}
        <div class="mt-6 rounded-md bg-red-50 p-4">
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
                {requestError.title}
              </h3>
              {#if requestError.text}
                <div class="mt-2 text-sm leading-5 text-red-700">
                  {requestError.text}
                </div>
              {/if}
            </div>
          </div>
        </div>
      {/if}

      {#if !passwordReset}
        <div class="mt-6">
          <div class="mt-6">
            <form method="POST" on:submit|preventDefault={resetPassword}>
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  New password
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    bind:value={password}
                    type="password"
                    required
                    class="appearance-none block w-full px-3 py-2 border
                    border-gray-300 rounded-md placeholder-gray-400
                    focus:outline-none focus:ring-blue focus:border-blue-300
                    transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="password-confirmation"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Confirm password
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="password-confirmation"
                    bind:value={passwordConfirmation}
                    type="password"
                    required
                    autocomplete="false"
                    class="appearance-none block w-full px-3 py-2 border
                    border-gray-300 rounded-md placeholder-gray-400
                    focus:outline-none focus:ring-blue focus:border-blue-300
                    transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                </div>
              </div>

              <div class="mt-6">
                <Button variant="primary" type="submit" wide {loading}>
                  Reset password
                </Button>
              </div>
            </form>
          </div>
        </div>
      {:else}
        <div class="mt-6 rounded-md bg-green-100 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm leading-5 font-medium text-green-800">
                Your password has been reset!
              </h3>
              <div class="mt-2 text-sm leading-5 text-green-700">
                You can now
                <a href="/signIn">sign in</a>
                to your account.
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
  <div class="hidden lg:block relative w-0 flex-1">
    <Picture
      class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      src={[{ type: 'jpg', img: '/landing/nicole-wolf--xTBn1YBrTE-unsplash.jpg', alt: 'Woman coding in a cafe' }]} />
  </div>
</div>
