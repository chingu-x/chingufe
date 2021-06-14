<script context="module">
  export function preload(page, session) {
    return { session };
  }
</script>

<script>
  import { scale } from "svelte/transition";
  import ApplyLink from "../components/ApplyLink.svelte"
  import Hero from "../components/Hero.svelte";
  import LandingMetric from "../components/Landing-Metric.svelte";
  import LandingProcessStep from "../components/Landing-ProcessStep.svelte";
  import LandingProjectExample from "../components/Landing-ProjectExample.svelte";
  import Testimonial from "../components/Testimonial.svelte";
  import LandingSection from "../components/Landing-Section.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import Picture from "../components/Picture.svelte";
  import Button from "../components/Button.svelte";
  export let session;
</script>

<Hero
  {session}
  title="Boost your career"
  subtitle="with team projects"
  description="All self-directed developers run into the same problems. No team
  experience, feeling lost working alone, endless tutorials, not enough finished
  projects. The good news? Chingu solves them."
  primaryHref="https://forms.gle/jYqoaMfJeW5Mw2r16"
  primaryText="Get started"
  secondaryHref="/howItWorks"
  secondaryText="Learn more"
  imageClass="object-top lg:object-left"
  images={[{ type: 'jpg', img: '/landing/nicole-wolf--xTBn1YBrTE-unsplash.jpg', alt: 'Woman coding in a cafe' }, { type: 'webp', img: '/landing/nicole-wolf--xTBn1YBrTE-unsplash.webp', alt: 'Woman coding in a cafe' }]} />

<div class="bg-gray-50 pt-12 sm:pt-16">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2
        class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl
        sm:leading-10">
        Level-up your career from anywhere
      </h2>
      <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
        We place motivated people with similar goals together in project teams
        which allows them level-up in ways they couldn't otherwise.
      </p>
    </div>
  </div>
  <div class="mt-10 pb-12 bg-white sm:pb-16">
    <div class="relative">
      <div class="absolute inset-0 h-1/2 bg-gray-50" />
      <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
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

<div
  class="relative bg-gray-50 pt-12 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="bg-white h-1/3 sm:h-2/3" />
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        A collaborative learning experience
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        You will leave Chingu with portfolio projects, confidence from
        experience, and the soft skills that the 21st century world needs.
      </p>
    </div>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <ProjectCard
        title="Gain experience in a remote team"
        description="57% of full-time entry-level jobs now ask for 3 years or
        more of experience."
        image={[{ type: 'avif', img: '/landing/RemoteTeam2.avif', alt: 'Team project' }, { type: 'webp', img: '/landing/RemoteTeam2.webp', alt: 'Team project' }, { type: 'png', img: '/landing/RemoteTeam2.png', alt: 'Team project' }]} />
      <ProjectCard
        title="Work on real projects"
        description="Sick of doing tutorial after tutorial with nothing to show
        for them?"
        image={[{ type: 'avif', img: '/landing/RealProjects2.avif', alt: 'Team project' }, { type: 'webp', img: '/landing/RealProjects2.webp', alt: 'Team project' }, { type: 'png', img: '/landing/RealProjects2.png', alt: 'Team project' }]} />
      <ProjectCard
        title="Join a supportive community"
        description="It can be hard to find someone to help you get unstuck."
        image={[{ type: 'avif', img: '/landing/SupportiveCommunity2.avif', alt: 'Team project' }, { type: 'webp', img: '/landing/SupportiveCommunity2.webp', alt: 'Team project' }, { type: 'png', img: '/landing/SupportiveCommunity2.png', alt: 'Team project' }]} />
    </div>
  </div>
</div>

<div class="bg-gray-50 pb-10">
  <LandingSection
    name={'What Developers Think'}
    title={'Chingu has guided thousands of developers on learning adventures'}
    description={'Chingu has helped thousands of people learning in-demand \
      skills accelerate their learning through collaboration and \
      project-building.'} />
  <Testimonial
    author={'Eric Zumwalt'}
    location={'United States'}
    quote={'I got my first developer job at the age of 35 largely due \
      to the technical AND soft skills I gained through Chingu.'} />
  <Testimonial
    author={'Sarah Schneider'}
    location={'United States'}
    quote={'I realized pretty quickly that I was learning more from \
      the Voyage project than from everything I did in the entire rest of \
      the year put together.'} />
  <Testimonial
    author={'Owen Ekhator'}
    location={'United States'}
    quote={'Chingu was a great place for me because while working on \
      the projects there, I honed my skills and I learned how to collaborate \
      with other developers. During my job interview process, I was able \
      to speak on the projects I worked on at Chingu. It impressed my \
      interviewers and consequently, I landed a job at a Fortune 500.'} />
</div>

<div class="bg-white">
  <LandingSection
    name={'Turn Knowledge into Experience'}
    title={'Real projects in Real teams'}
    description={'When you join Chingu, you will collaborate with others to \
      build & launch real projects. We match learners from all skill levels, \
      all timezones, and a variety of different tech stacks.'} />

  <div class="flex m-auto h-auto justify-center items-end">
    <div class="flex items-end flex-wrap">
      <LandingProjectExample
        name={'Jobbatical Landing Page'}
        description={'A job listings and job application app for working \
          abroad.'}
        tier={'Tier 1 (beginner)'}
        techStack={'HTML, CSS, Flexbox, Javascript'}
        images={[{ type: 'avif', img: '/landing/JobbaticalProject.avif', alt: 'Voyage project screenshot' }, { type: 'webp', img: '/landing/JobbaticalProject.webp', alt: 'Voyage project screenshot' }, { type: 'png', img: '/landing/JobbaticalProject.png', alt: 'Voyage project screenshot' }]} />
      <LandingProjectExample
        name={'Chrome Extension App'}
        description={'A finance app to add income & expense categories \
          with graph rendering.'}
        tier={'Tier 2 (intermediate)'}
        techStack={'Javascript, SCSS, D3.js, Chrome Storage Sync'}
        images={[{ type: 'avif', img: '/landing/BudgetBoardProject.avif', alt: 'Voyage project screenshot' }, { type: 'webp', img: '/landing/BudgetBoardProject.webp', alt: 'Voyage project screenshot' }, { type: 'png', img: '/landing/BudgetBoardProject.png', alt: 'Voyage project screenshot' }]} />
      <LandingProjectExample
        name={'Volunteer Manager App'}
        description={'Helps people to recruit and manage volunteers for a \
          non-profit project.'}
        tier={'Tier 3 (advanced)'}
        techStack={'MongoDB, React / Redux, Node.js'}
        images={[{ type: 'avif', img: '/landing/VolunteerAppProject.avif', alt: 'Voyage project screenshot' }, { type: 'webp', img: '/landing/VolunteerAppProject.webp', alt: 'Voyage project screenshot' }, { type: 'png', img: '/landing/VolunteerAppProject.png', alt: 'Voyage project screenshot' }]} />
    </div>
  </div>
</div>

<div
  class="flex flex-col flex-wrap bg-gray-50 w-full sm:items-center
  justify-center">
  <LandingSection
    name={'How Voyages Work'}
    title={'The Chingu Process'}
    description={'Chingu follows an Agile methodology to create an \
      environment where you can level-up your "hard" & "soft" skills while \
      providing you with the freedom to be creative.'} />

  <div
    class="flex flex-col flex-wrap flex-grow-0 flex-shrink-0 h-auto w-auto
    justify-center sm:ml-0 lg:ml-32 pb-8">
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

<div class="bg-gray-50">
  <div
    class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex
    lg:items-center lg:justify-between">
    <h2
      class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900
      sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br />
      <span class="text-green-600">Join Chingu today.</span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
      <ApplyLink />
      <!--
      <Button variant="primary" size="large" link="/apply">Apply</Button>
      -->
    </div>
  </div>
</div>
