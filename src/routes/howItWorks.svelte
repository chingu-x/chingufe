<script context="module">
  export function preload(page, session) {
    return { session };
  }
</script>

<script>
  import { scale } from "svelte/transition";
  import ApplyLink from "../components/ApplyLink.svelte"
  import Faq from "../components/HowItWorks-Faq.svelte";
  import Hero from "../components/Hero.svelte";
  import HowItWorksSection from "../components/HowItWorks-Section.svelte";
  import Button from "../components/Button.svelte";
  export let session;

  //let linkText = session ? "Dashboard" : "Sign in";
  //let linkLocation = session ? "/dashboard" : "/signIn";
  //let open = false;
</script>

<Hero
  {session}
  title="Collaborate and"
  subtitle="gain real experience"
  description="The Chingu Voyage is a remote 6-week program for web developers.
  You will build a project in a remote team and level-up with the technical and
  soft skills required in a professional software job."
  primaryHref="https://forms.gle/A2j8WwWct2moVd4z6"
  primaryText="Apply"
  class="object-center"
  images={[{ type: 'jpg', img: '/how-it-works/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg', alt: 'How it Works' }]} />

<div class="bg-gray-100 pb-6 lg:pb-10">
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

<div class="bg-white pb-6 lg:pb-10">
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

<div class="bg-gray-100 pb-6 lg:pb-10">
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

<div class="bg-white pb-6 lg:pb-10">
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

<div class="bg-gray-100 pb-6 lg:pb-10">
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

<div class="bg-white pb-6 lg:pb-10">
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
      your expertise. All of the things employers are looking for.", 'You may choose from our Voyage Plan for a single Voyage or you can \
      sign up for our Job Ready Plan so you can take your career to the \
      next level over 6 Voyages.']} />
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
    answers={['We consider part-time to be around 15 hours a week and \
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

<div class="bg-gray-100">
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
