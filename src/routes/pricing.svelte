<script context="module">
  export function preload(page, session) {
    return { session };
  }
</script>

<script>
  import ApplyLink from "../components/ApplyLink.svelte"
  import Hero from "../components/Hero.svelte";

  export let session;
  //let linkText = session ? "Dashboard" : "Sign in";
  //let linkLocation = session ? "/dashboard" : "/signIn";
  //let open = false;
</script>

<Hero {session} />

<div class="bg-white">
  <div class="bg-gray-100">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple no-tricks pricing
          </h2>
          <p class="mt-4 text-xl text-gray-600">
            $0 cost. That's right - zero, nil, nothing, nada!
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-12">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-100" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden
            lg:max-w-none lg:flex">
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Voyage Membership
              </h3>
              <p class="mt-6 text-base text-gray-500">
                Chingu offers something you don't get in courses or bootcamps: the opportunity to transform what you've learned into the experience & expertise employers are looking for.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider
                    font-semibold uppercase text-green-600">
                    What's included
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul
                  class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2
                  lg:gap-x-8 lg:gap-y-5">
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check-circle -->
                      <svg
                        class="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
                          00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414
                          1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="ml-3 text-sm text-gray-700">
                      6 weeks of remote team developer experience
                    </p>
                  </li>

                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check-circle -->
                      <svg
                        class="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
                          00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414
                          1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="ml-3 text-sm text-gray-700">Community of like-minded Developers</p>
                  </li>

                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check-circle -->
                      <svg
                        class="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
                          00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414
                          1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="ml-3 text-sm text-gray-700">
                      Completion certificate
                    </p>
                  </li>

                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check-circle -->
                      <svg
                        class="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
                          00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414
                          1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="ml-3 text-sm text-gray-700">
                      1 x team project for your portfolio
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex
              lg:flex-col lg:justify-center lg:p-12">
              <p class="text-lg leading-6 font-medium text-gray-900">
                Join today to level-up your Developer career!
              </p>
              <div
                class="mt-4 flex items-center justify-center text-5xl
                font-extrabold text-gray-900">
                <span>$0</span>
                <span class="ml-3 text-xl font-medium text-gray-500">USD</span>
              </div>
              <p class="mt-4 text-sm">
                <a
                  href="/privacy"
                  class="font-medium text-gray-500 underline">
                  Learn about our privacy policy
                </a>
              </p>
              <div class="mt-6">
                <div class="rounded-md shadow">
                <ApplyLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 bg-green-900">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white">
        Frequently asked questions
      </h2>
      <div class="mt-6 border-t border-green-400 border-opacity-25 pt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2
          md:gap-x-8 md:gap-y-12">
          <div>
            <dt class="text-lg leading-6 font-medium text-white">
              How can I know I'm ready?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              The minimum requirement is that you have a basic understanding of
              HTML, CSS, and JavaScript.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium text-white">
              Can I get a job from doing Chingu Voyages?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              Yes, every week we see members getting jobs! Those who have
              successfully completed 3 Voyages at the tier-3 level are generally
              considered to be job ready.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium text-white">
              I just finished a coding bootcamp. Is Chingu for me?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              Yes. Many of the major coding bootcamps have referred their
              graduates to Chingu to help them get more experience and prepare
              for a real job.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium text-white">
              How much time do I have to commit?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              In order for you to get the most out of your voyage, we recommend
              committing at least 12 hours per week. However, we understand that
              your availability may vary from sprint-to-sprint. What's important
              is that you give your team plenty of notice so the team can plan
              for these situations.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium text-white">
              How do you organize Voyage teams?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              In a Voyage you’ll be matched with other teammates in the same
              tier, in similar timezones and who have similar technical
              interests.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium text-white">
              What if I have more questions?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              We'd be happy to answer any questions you have! Please feel free
              to email them to us at: <a class="text-white hover:underline" href="mailto:support@chingu.io">support@chingu.io</a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- CTA section -->
  <div class="bg-green-50">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex
      lg:items-center lg:justify-between">
      <h2
        class="text-3xl font-extrabold tracking-tight text-green-900 sm:text-4xl">
        <span class="block">Ready to dive in?</span>
        <span class="block text-green-600">Start your voyage today.</span>
      </h2>
      <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <ApplyLink />
        </div>
      </div>
    </div>
  </div>
</div>
