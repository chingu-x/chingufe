<script>
  import ApplyLink from "../components/ApplyLink.svelte"
  import Hero from "../components/Hero.svelte";
  import HowItWorksLink from "../components/HowItWorksLink.svelte";
  import LandingProjectExample from "../components/Landing-ProjectExample.svelte";
  import Testimonial from "../components/Testimonial.svelte";
  import PageSection from "../components/Page-Section.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
</script>

<Hero
  title="Collaborate and"
  subtitle="gain real experience"
  description="Turn what you've learned in courses, bootcamps, & schools into 
  the experience needed to land a Web Development job as a Developer, 
  UI/UX Designer, or Product Owner. Our 6-week remote team projects help you 
  level-up technical & soft skills sought after by employers."
  primaryHref="https://forms.gle/xAjXHyWtRKKh37di8"
  primaryText="Apply for free"
  secondaryHref="/howItWorks"
  secondaryText="Learn more"
  imageClass="object-top lg:object-left"
  images={[{ type: 'jpg', img: '/landing/nicole-wolf--xTBn1YBrTE-unsplash.jpg', alt: 'Woman coding in a cafe' }, { type: 'webp', img: '/landing/nicole-wolf--xTBn1YBrTE-unsplash.webp', alt: 'Woman coding in a cafe' }]} />

<div class="pt-4 bg-white">
  <div class="py-6 bg-orange-50 lg:py-10">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Leading companies hire Chingus
        </h2>
        <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
          We've helped people get jobs at organizations like these:
        </p>
      </div>
      <div class="flow-root mt-10 lg:mt-10">
        <div class="flex flex-wrap">
          <div class="flex flex-grow flex-shrink-0">
            <img class="h-12 mt-2 mr-3 md:mr-auto" src="/landing/company-logos/amazon-logo.png" alt="Amazon">
          </div>
          <div class="flex flex-grow flex-shrink-0">
            <img class="h-12 mt-4 md:mt-0" src="/landing/company-logos/intel-logo.png" alt="Intel">
          </div>
          <div class="flex flex-grow flex-shrink-0">
            <img class="h-12 mt-4 md:mt-0" src="/landing/company-logos/redhat-logo.png" alt="Red Hat">
          </div>
          <div class="flex flex-grow flex-shrink-0">
            <img class="h-12 mt-4 md:mt-0" src="/landing/company-logos/facebook-logo.png" alt="Facebook">
          </div>
          <div class="flex flex-grow flex-shrink-0">
            <img class="-mt-6 h-36 md:-mt-12" src="/landing/company-logos/microsoft-logo.svg" alt="Microsoft">
          </div>
          <div class="flex flex-grow flex-shrink-0">
            <img class="h-12 mt-0 md:mt-0" src="/landing/company-logos/linkedin-logo.svg" alt="LinkedIn">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="pt-4 bg-white">
  <div class="py-6 bg-white lg:py-10">
    <div class="absolute inset-0">
      <div class="h-1/3 sm:h-2/3" />
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A collaborative learning experience
        </h2>
        <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
          You will leave Chingu with portfolio projects, confidence from
          experience, and the soft skills that the 21st century world needs.
        </p>
      </div>
      <div class="grid max-w-lg gap-4 px-4 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
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
</div>

<div class="pb-10 bg-orange-50">
  <PageSection
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
  <PageSection
    name={'Turn Knowledge into Experience'}
    title={'Real projects in Real teams'}
    description={'When you join Chingu, you will collaborate with others to \
      build & launch real projects using any Web Dev Language (JS, Python, etc.). \
      We match learners from all skill levels, \
      all timezones, and a variety of different tech stacks.'} />

  <div class="flex items-end justify-center h-auto m-auto">
    <div class="flex flex-wrap items-end">
      <LandingProjectExample
        name={'Jobbatical Landing Page'}
        description={'A job listings and job application app for working \
          abroad.'}
        tier={'Tier 1 (beginner)'}
        techStack={'HTML, CSS, Flexbox'}
        images={[{ type: 'avif', img: '/landing/tier-projects/JobbaticalProject.avif', alt: 'Voyage project screenshot' }, { type: 'webp', img: '/landing/tier-projects/JobbaticalProject.webp', alt: 'Voyage project screenshot' }, { type: 'png', img: '/landing/tier-projects/JobbaticalProject.png', alt: 'Voyage project screenshot' }]} />
      <LandingProjectExample
        name={'Chrome Extension App'}
        description={'A finance app to add income & expense categories \
          with graph rendering.'}
        tier={'Tier 2 (intermediate)'}
        techStack={'Frontend Framework & API usage'}
        images={[{ type: 'avif', img: '/landing/tier-projects/BudgetBoardProject.avif', alt: 'Voyage project screenshot' }, { type: 'webp', img: '/landing/tier-projects/BudgetBoardProject.webp', alt: 'Voyage project screenshot' }, { type: 'png', img: '/landing/tier-projects/BudgetBoardProject.png', alt: 'Voyage project screenshot' }]} />
      <LandingProjectExample
        name={'Volunteer Manager App'}
        description={'Helps people to recruit and manage volunteers for a \
          non-profit project.'}
        tier={'Tier 3 (advanced)'}
        techStack={'Backend API, Database (optional)'}
        images={[{ type: 'avif', img: '/landing/tier-projects/VolunteerAppProject.avif', alt: 'Voyage project screenshot' }, { type: 'webp', img: '/landing/tier-projects/VolunteerAppProject.webp', alt: 'Voyage project screenshot' }, { type: 'png', img: '/landing/tier-projects/VolunteerAppProject.png', alt: 'Voyage project screenshot' }]} />
    </div>
  </div>
</div>

<div class="bg-green-50">
  <div
    class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2
      class="text-3xl font-extrabold leading-9 tracking-tight text-green-900 sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br />
      <span class="text-green-600">Join Chingu today.</span>
    </h2>
    <div class="w-full mt-8 md:w-1/2 gap-x-4 lg:flex-shrink-0 lg:mt-0 sm:flex sm:justify-center lg:justify-start">
      <ApplyLink />
      <HowItWorksLink />
    </div>
  </div>
</div>
