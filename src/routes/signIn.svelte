<script context="module">
  export function preload(page, session) {
    let returnTo = false;
    let destination = "/dashboard";
    if (page.query && page.query.returnTo) {
      switch (page.query.returnTo) {
        case "apply":
          returnTo = "apply";
          destination = "/apply";
          break;
      }
    }

    if (session) {
      return this.redirect(302, destination);
    }

    return { destination, returnTo };
  }
</script>

<script>
  import { client } from "../graphql";
  import { user } from "../stores";
  import Picture from "../components/Picture.svelte";
  import Button from "../components/Button.svelte";

  export let destination = "/dashboard";
  export let returnTo = false;
  const signUpUrl = returnTo ? `/signUp?returnTo=${returnTo}` : "/signUp";
  const forgotPasswordUrl = returnTo
    ? `/requestPasswordReset?returnTo=${returnTo}`
    : "/requestPasswordReset";
  let email = "";
  let password = "";
  let loading = false;
  let signInError = false;

  function handleSignIn() {
    loading = true;
    return client(fetch)
      .request({
        query: `
        mutation signIn(
          $email: String!,
          $password: String!
        ) {
          signIn(
            email: $email,
            password: $password
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
          password
        }
      })
      .then(({ signIn }) => {
        if (!signIn.error) {
          return (window.location.href = destination);
        } else {
          handleSignInError(signIn.error);
        }
      })
      .finally(() => (loading = false));
  }

  function handleSignInError(error) {
    const defaultError = {
      title: "An error occurred",
      text: "Please try again."
    };

    if (!error || typeof error !== "object") {
      signInError = defaultError;
      return;
    }

    switch (error.code) {
      case "INVALID_EMAIL_OR_PASSWORD":
        signInError = {
          title: "Invalid login",
          text: "Check your email/password combination"
        };
        break;
      default:
        console.error(error);
        signInError = defaultError;
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
          Sign in to your account
        </h2>
        <p class="mt-2 text-sm leading-5 text-gray-600 max-w">
          Or
          <a
            href={signUpUrl}
            class="font-medium text-green-600 hover:text-green-500
            focus:outline-none focus:underline transition ease-in-out
            duration-150">
            sign up
          </a>
        </p>
      </div>

      {#if signInError}
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
                {signInError.title}
              </h3>
              <div class="mt-2 text-sm leading-5 text-red-700">
                {signInError.text}
              </div>
            </div>
          </div>
        </div>
      {/if}

      <div class="mt-8">
        <div class="mt-6">
          <form method="POST" on:submit|preventDefault={handleSignIn}>
            <div>
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
                  focus:outline-none focus:ring-blue focus:border-blue-300
                  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
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
                  focus:outline-none focus:ring-blue focus:border-blue-300
                  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div class="text-sm leading-5">
                <a
                  href={forgotPasswordUrl}
                  class="font-medium text-green-600 hover:text-green-500
                  focus:outline-none focus:underline transition ease-in-out
                  duration-150">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div class="mt-6">
              <Button variant="primary" type="submit" wide {loading}>
                Sign in
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
      src={[{ type: 'jpg', img: '/landing/nicole-wolf--xTBn1YBrTE-unsplash.jpg', alt: 'Woman coding in a cafe' }]} />
  </div>
</div>
