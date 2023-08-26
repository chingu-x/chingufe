<script context="module">
  export function preload(page, session) {
    return { session };
  }
</script>

<script>
  import ApplyLink from "../../components/ApplyLink.svelte"
  import Hero from "../../components/Hero.svelte"
  import HowItWorksSection from "../../components/HowItWorks-Section.svelte";
  import LandingMetric from "../../components/Landing-Metric.svelte";
  import LandingSection from "../../components/Landing-Section.svelte";
  import LandingProcessStep from "../../components/Landing-ProcessStep.svelte";

  export let session;
</script>

<Hero
  {session}
  title="Boost your career"
  subtitle="with team projects"
  description="All self-directed developers run into the same problems. No team
  experience, feeling lost working alone, endless tutorials, not enough finished
  projects. The good news? Chingu solves them."
  primaryHref="https://forms.gle/xAjXHyWtRKKh37di8"
  primaryText="Apply for free"
  heroClass="object-center"
  images={[{ type: 'jpg', img: '/how-it-works/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg', alt: 'How it Works' }]} />

<div class="pt-6 bg-white sm:pt-10">
  <div class="pt-6 bg-orange-50 lg:pt-10">
    <div class="max-w-screen-xl px-4 mx-auto bg-orange-50 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
          Level-up your career from anywhere
        </h2>
        <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
          We place motivated people with similar goals together in project teams
          which allows them level-up in ways they couldn't otherwise.
        </p>
      </div>
    </div>
    <div class="pb-12 mt-10 bg-orange-50 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-green-50" />
        <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
              <LandingMetric metric={'2,028'} description={'Developer Teams'} />
              <LandingMetric
                metric={'11,150+'}
                description={'Coders & Designers'} />
              <LandingMetric
                metric={'3,200+'}
                description={'Pair-programming hours'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="pb-6 bg-white lg:pb-10">
  <HowItWorksSection
    photoOn={'left'}
    name={'Learn to Collaborate'}
    title={'Learn to Collaborate and gain experience as a Modern Developer'}
    description={'Gain experience using collaboration tools that are used in \
      modern tech companies. Real-time messaging, async communication, task \
      management tools, audio / video meetings, etc.'}
    images={[{ type: 'webp', img: '/how-it-works/TeamScreenshot.webp', alt: 'Team screenshot' }, { type: 'png', img: '/how-it-works/TeamScreenshot.png', alt: 'Team screenshot' }]}
    details={['Participate in weekly team standups', 'Real-time messaging & async communication', 'Participate in text / audio / video meetings (all depends on your preference as a team)', 'Overcome real challenges developers face on the job']} />
</div>

<div class="pb-6 bg-orange-50 lg:pb-10">
  <HowItWorksSection
    photoOn={'right'}
    name={'Use Real World Tools'}
    title={"Use the real-world coding tools you'll use on the job"}
    description={"Learn to manage your project's codebase in a team setting \
      like a pro! This is one of the most valuable skills you will learn as \
      a developer and will unlock a new world of collaboration opportunities."}
    images={[{ type: 'webp', img: '/how-it-works/GithubWorkflowGraphic.webp', alt: 'Tools' }, { type: 'png', img: '/how-it-works/GithubWorkflowGraphic.png', alt: 'Tools' }]}
    details={['Build and refine your Git skills', 'Contribute fixes and features to the project using Git and Github', 'Participate in code reviews with teammates to ensure the quality of \
      your project']} />
</div>

<div class="pb-6 bg-white lg:pb-10">
  <HowItWorksSection
    photoOn={'left'}
    name={'Grow & Thrive'}
    title={'Thrive with Deadlines & Accountability'}
    description={'Just like in the workplace, you will have deadlines. \
      Deadlines will push you out of your comfort zone and accelerate your \
      learning.'}
    images={[{ type: 'webp', img: '/how-it-works/DeadlinesScreenshot.webp', alt: 'Deadlines' }, { type: 'png', img: '/how-it-works/DeadlinesScreenshot.png', alt: 'Deadlines' }]}
    details={['Deadlines will make you actually finish your projects', 'Our deadlines will give structure to your learning journey', 'Get out of tutorial purgatory']} />
</div>

<div class="bg-orange-50">
  <HowItWorksSection
    photoOn={'right'}
    name={'Learn Soft Skills'}
    title={'Learn the soft skills you need to excel in your career'}
    description={'Improving your soft skills is one of the best investments \
      you can make in your career. Technology is always changing, but the \
      need for soft skills does not change. Linkedin found that 57% of senior \
      leaders today say that soft skills are more important than hard skills.'}
    images={[{ type: 'jpg', img: '/how-it-works/SoftSkills_Keyboard.jpg', alt: 'Soft Skills' }]}
    details={['Learn how to communicate your ideas in a professional setting', 'Collaborate with people with different mindsets and from different countries', 'Improve your time-management skills']} />
</div>

<div class="pb-6 bg-white lg:pb-10">
  <HowItWorksSection
    photoOn={'left'}
    name={'Learn about Pair Programming'}
    title={'Do Weekly Pair-programming Matching'}
    description={'Learn how to code with another developer and gain valuable \
      collaboration experience. Learn how other coders approach challenges \
      and how they think.'}
    images={[{ type: 'webp', img: '/how-it-works/PairProgrammingScreenshot.webp', alt: 'Pair Programming' }, { type: 'png', img: '/how-it-works/PairProgrammingScreenshot.png', alt: 'Pair Programming' }]}
    details={['Meet a new coder every week to solve a coding challenge (optional)', 'Take what you know to the next level by sharing your knowledge with others', 'Learn new technologies and techniques from your peers']} />
</div>

<div
  class="flex flex-col flex-wrap justify-center w-full bg-orange-50 sm:items-center">
  <LandingSection
    name={'How Voyages Work'}
    title={'The Chingu Process'}
    description={'Chingu follows an Agile methodology to create an \
      environment where you can level-up your "hard" & "soft" skills while \
      providing you with the freedom to be creative.'} />

  <div
    class="flex flex-col flex-wrap justify-center flex-grow-0 flex-shrink-0 w-auto h-auto pb-8 sm:ml-0 lg:ml-32">
    <LandingProcessStep
      images={[{ type: 'svg', img: '/landing/ProcessStep1.svg', alt: 'Chingu process step #1' }]}
      name={'1. Apply'}
      description={'Your learning adventure starts the moment you decide to \
        join Chingu.'} />
    <LandingProcessStep
      images={[{ type: 'svg', img: '/landing/ProcessStep2.svg', alt: 'Chingu process step #2' }]}
      name={'2. Validate your expertise through a Solo Project'}
      description={"Finish or submit a project to make sure you're prepared \
        for the program."} />
    <LandingProcessStep
      images={[{ type: 'svg', img: '/landing/ProcessStep3.svg', alt: 'Chingu process step #3' }]}
      name={'3. Be placed in a team'}
      description={'Get placed in a remote team of Chingus eager to learn.'} />
    <LandingProcessStep
      images={[{ type: 'svg', img: '/landing/ProcessStep4.svg', alt: 'Chingu process step #4' }]}
      name={'4. Build, build, build'}
      description={'Decide on a project and build it together. Practice \
        critical team workflow.'} />
    <LandingProcessStep
      images={[{ type: 'svg', img: '/landing/ProcessStep5.svg', alt: 'Chingu process step #5' }]}
      name={'5. Overcome obstacles'}
      description={'Overcome obstacles real developers face. Level up as a \
        human.'} />
    <LandingProcessStep
      images={[{ type: 'svg', img: '/landing/ProcessStep6.svg', alt: 'Chingu process step #6' }]}
      name={'6. Succeed & repeat'}
      description={'Get a job, join another Voyage - or do both.'} />
  </div>
</div>

<div class="h-6 bg-white"/>

<div class="bg-green-50">
  <div
    class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2
      class="text-3xl font-extrabold leading-9 tracking-tight text-green-900 sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br />
      <span class="text-green-600">Join Chingu today.</span>
    </h2>
    <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
      <ApplyLink />
    </div>
  </div>
</div>
