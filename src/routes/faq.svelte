<script context="module">
  export function preload(page, session) {
    return { session };
  }
</script>

<script>
  import ApplyLink from "../components/ApplyLink.svelte"
  import Faq from "../components/HowItWorks-Faq.svelte";
  import Hero from "../components/Hero.svelte";
  import HowItWorksSection from "../components/HowItWorks-Section.svelte";
  export let session;
</script>

<Hero
  {session}
  title="Have questions?"
  subtitle="...we have answers"
  description="Questions are how we learn and at Chingu we love to hear and answer yours!"
  primaryHref="https://forms.gle/1etR3NUdyKRF6kZg9"
  primaryText="Apply for free"
  class="object-center"
  images={[{ type: 'jpg', img: '/faq/edwin-andrade-4V1dC_eoCwg-unsplash.jpeg', alt: 'FAQ' }]} />

<div class="bg-white h-6"/>

<div class="bg-green-50 pb-6 lg:pb-10">
  <HowItWorksSection
    photoOn={'none'}
    name={'FAQ'}
    title={'Frequently Asked Questions'}
    description={'Click on a question below to get the answers you need.'}
    images={[]}
    details={[]} />
  <Faq
    id="1"
    question={'How can I know I’m ready? What are the minimum \
    requirements to join?'}
    answers={['You will need at least basic HTML / CSS and Javascript skills to \
      qualify for a Chingu Voyage.', 'Know more than that? Chingu has you covered! \
      Our Voyages have three different tiers separated by skill \
      level (beginners, intermediate, advanced) so you can work in the Tier \
      you are most comfortable in. We also require you to complete a \
      Solo Project prior to starting your first Voyage so you can discover \
      what Tier you best fit into.', 'TL;DR - We encourage people at any level (including beginners) to \
      join, as our Solo Projects are designed to inspire / help people \
      gain the skills they need to be eligible to join.']} />
  <Faq
    id="2"
    question={'Can I do many Chingu Voyage programs and level up my \
      skills in each one?'}
    answers={['Yes, Chingu was designed for this. Companies want to hire experienced \
      developers.', "With each Voyage you'll be adding projects to your\
      portfolio, refining your technical and soft skills, and leveling up \
      your expertise. All of the things employers are looking for."]} />
  <Faq
    id="3"
    question={'Can I get a job from doing Chingu Voyages?'}
    answers={['Yes, every week we see members getting a job. Members who have \
      successfully completed 3 Voyages at the tier-3 level generally are \
      job ready. They have gained the skills necessary to build multiple \
      full-stack applications, have at least 4.5 months of experience \
      working on real projects in real teams, and understand the \
      importance of soft skills.']} />
  <Faq
    id="4"
    question={'I just finished a coding bootcamp and want to get more \
      experience? Is Chingu for me?'}
    answers={['Yes. Coding bootcamp instructors / career mentors from many of the \
      major bootcamps have referred their graduates to Chingu to help them \
      get a job.']} />
  <Faq
    id="5"
    question={'How can I know if I’m ready for the Voyage program?'}
    answers={['First, are you committed to your learning goals? A Chingu Voyage is \
      an experience that will get you out of your comfort zone and \
      accelerate your learning. If you aren’t committed, you’ll waste your \
      time and that of your teammates.', "Second, every new member has to complete a Solo \
      Project to be accepted into their first Voyage to ensure they are ready \
      and to help them validate their tier selection. Once you complete \
      and submit your Solo Project we'll evaluate it and provide \
      constructive feedback.", 'Finally, our vibrant Discord Community is a place where you can meet \
      other Developers, ask questions, explore ideas, and get the advice you \
      want and need.']} />
  <Faq
    id="6"
    question={'What happens if I don’t finish my Solo Project or pass \
      the qualifications?'}
    answers={['No worries, we start new Voyages every month so if you don’t complete the \
      Solo Project you can keep learning and be ready for the next one.']} />
  <Faq
    id="7"
    question={'How much time do I have to commit?'}
    answers={['We consider part-time to be around 12 hours a week and \
      full-time to be 25 or more hours a week. For you to get the \
      full benefits, Chingu must be a priority during \
      the duration of your Voyage.', "However, we understand that your availability may vary from \
      sprint-to-sprint. What's important is that you give you team plenty of \
      notice so the team can plan for these situations."]} />
  <Faq
    id="8"
    question={'Is the Voyage okay for Beginners?'}
    answers={['You will need to know basic CSS, HTML, and a programming language like \
      Javascript or Python.', 'But, even if you are not ready now, you can use the Solo Project to \
      help build and refine your skills to prepare you for the Voyage.']} />
  <Faq
    id="9"
    question={'What is the Solo Project project?'}
    answers={['The Solo Project allows new Chingus \
      to find out which Tier they best fit in, and build a project \
      from start to finish to ensure they are ready for the team Voyage \
      project.', "The solo projects are organized by Tier and requires skills that match \
      the tier that best suits your current skill level. Don't worry if you \
      find that you have selected the wrong tier - you can change your tier \
      at any time."]} />
  <Faq
    id="10"
    question={'How do you organize Voyage teams?'}
    answers={['In a Voyage you’ll be \
      matched with other teammates in the same tier, in similar timezones \
      and who have similar technical interests.']} />
  <Faq
    id="11"
    question={'What if something happens and I cannot join the next Voyage session?'}
    answers={['No worries. Just let us know by emailing your plans to support@chingu.io']} />
  <Faq
    id="12"
    question={'What if I have more questions?'}
    answers={["We'd be happy to answer any questions you have! Please feel free to \
      email them to us at: $$email$$"]} />

</div>

<div class="bg-white">
  <div
    class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex
    lg:items-center lg:justify-between">
    <h2
      class="text-3xl leading-9 font-extrabold tracking-tight text-green-900
      sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br />
      <span class="text-green-600">Join Chingu today.</span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
      <ApplyLink />
    </div>
  </div>
</div>
