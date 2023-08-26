<script>
  import ApplyLink from "../../components/ApplyLink.svelte"
  import Hero from "../../components/Hero.svelte";

</script>

<Hero/>

<div class="bg-white">
  <div class="bg-green-50">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
    <div class="pb-16 mt-8 bg-white sm:mt-12 sm:pb-20 lg:pb-12">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-green-50" />
        <div class="relative px-4 pb-12 mx-auto bg-green-50 max-w-7xl sm:px-6 lg:px-8">
          <div
            class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
            <div class="flex-1 px-6 py-8 bg-white lg:p-12">
              <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Voyage Membership
              </h3>
              <p class="mt-6 text-base text-gray-500">
                Chingu offers something you don't get in courses or bootcamps: the opportunity to transform what you've learned into the experience & expertise employers are looking for.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-green-600 uppercase bg-white">
                    What's included
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul
                  class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check-circle -->
                      <svg
                        class="w-5 h-5 text-green-400"
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
                        class="w-5 h-5 text-green-400"
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
                        class="w-5 h-5 text-green-400"
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
                        class="w-5 h-5 text-green-400"
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
              class="px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
              <p class="text-lg font-medium leading-6 text-gray-900">
                Join today to level-up your Developer career!
              </p>
              <div
                class="flex items-center justify-center mt-4 text-5xl font-extrabold text-gray-900">
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

  <div class="mt-4 bg-green-900">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white">
        Frequently asked questions
      </h2>
      <div class="pt-10 mt-6 border-t border-green-400 border-opacity-25">
        <dl
          class="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
          <div>
            <dt class="text-lg font-medium leading-6 text-white">
              How can I know I'm ready?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              You will need at least basic HTML / CSS and Javascript skills to 
              qualify for a Chingu Voyage.', 'Know more than that? Chingu has you covered! 
              Our Voyages have three different tiers separated by skill 
              level (beginners, intermediate, advanced) so you can work in the Tier 
              you are most comfortable in. We also require you to complete a 
              Solo Project prior to starting your first Voyage so you can discover 
              what Tier you best fit into.', 'TL;DR - We encourage people at any level (including beginners) to 
              join, as our Solo Projects are designed to inspire / help people 
              gain the skills they need to be eligible to join.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium leading-6 text-white">
              Can I get a job from doing Chingu Voyages?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              Yes, every week we see members getting a job. Members who have 
              successfully completed 3 Voyages at the tier-3 level generally are 
              job ready. They have gained the skills necessary to build multiple 
              full-stack applications, have at least 4.5 months of experience 
              working on real projects in real teams, and understand the
              importance of soft skills.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium leading-6 text-white">
              I just finished a coding bootcamp. Is Chingu for me?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              Yes. Many of the major coding bootcamps have referred their
              graduates to Chingu to help them get more experience and prepare
              for a real job.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium leading-6 text-white">
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
            <dt class="text-lg font-medium leading-6 text-white">
              How do you organize Voyage teams?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              In a Voyage you’ll be matched with other teammates in the same
              tier, in similar timezones and who have similar technical
              interests.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium leading-6 text-white">
              Is the Voyage okay for Beginners?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              You will need to know basic CSS, HTML, and a programming language 
              like Javascript or Python. But, even if you are not ready now, 
              you can use the Solo Project to help build and refine your skills 
              to prepare you for the Voyage.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium leading-6 text-white">
              What is the Solo Project project?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              The Solo Project allows new Chingus 
              to find out which Tier they best fit in, and build a project 
              from start to finish to ensure they are ready for the team Voyage
              project.', "The solo projects are organized by Tier and requires skills that match 
              the tier that best suits your current skill level. Don't worry if you 
              find that you have selected the wrong tier - you can change your tier 
              at any time.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium leading-6 text-white">
              What if something happens and I cannot join the next Voyage session?
            </dt>
            <dd class="mt-2 text-base text-green-200">
              No worries. Just let us know by emailing your plans to 
              support@chingu.io
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium leading-6 text-white">
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

  <div class="h-6 bg-white"/>

  <div class="bg-green-50">
    <div
      class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2
        class="text-3xl font-extrabold tracking-tight text-green-900 sm:text-4xl">
        <span class="block">Ready to dive in?</span>
        <span class="block text-green-600">Start your voyage today.</span>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <ApplyLink />
        </div>
      </div>
    </div>
  </div>
</div>
