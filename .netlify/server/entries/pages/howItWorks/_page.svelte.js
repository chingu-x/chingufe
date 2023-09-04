import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { P as Picture, H as Hero, A as ApplyLink } from "../../../chunks/Hero.js";
import { P as Page_Section } from "../../../chunks/Page-Section.js";
const HowItWorks_RenderBullets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { details } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  return `<div class="m-2 items-center w-full lg:w-2/5"><div class="m-auto w-auto mt-2 md:mt-4">${each(details, (bulletText) => {
    return `<div class="${"flex items-center pb-4 last:pb-0 " + escape(className, true)}"><img class="w-12 h-12" src="/how-it-works/checkSquare.svg" alt="Check box"> <div class="text-xl md:text-2xl text-gray-700 p-2">${escape(bulletText)}</div> </div>`;
  })}</div></div>`;
});
const HowItWorks_Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { photoOn } = $$props;
  let { name } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { images } = $$props;
  let { details } = $$props;
  if ($$props.photoOn === void 0 && $$bindings.photoOn && photoOn !== void 0)
    $$bindings.photoOn(photoOn);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  return `<div class="py-6 lg:py-10"><div class="max-w-screen-xl mx-auto px-4 sm:px-6"><div class="lg:text-center"><p class="text-base leading-6 text-green-600 font-semibold tracking-wide uppercase">${escape(name)}</p> <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">${escape(title)}</h3> <p class="mt-4 max-w-4xl text-xl leading-7 text-gray-500 lg:mx-auto">${escape(description)}</p></div></div></div> <div class="flex m-auto h-auto"><div class="flex flex-wrap items-center justify-center m-auto w-full">${photoOn === "left" ? `${validate_component(Picture, "Picture").$$render($$result, { class: "px-2 md:px-0", src: images }, {}, {})} ${validate_component(HowItWorks_RenderBullets, "RenderBullets").$$render($$result, { class: "px-0 md:px-2", details }, {}, {})}` : `${photoOn === "right" ? `<div class="flex flex-wrap items-center justify-center m-auto w-full">${validate_component(HowItWorks_RenderBullets, "RenderBullets").$$render($$result, { class: "px-0 md:px-2", details }, {}, {})} <div class="order-first md:order-last">${validate_component(Picture, "Picture").$$render($$result, { class: "px-2 md:px-0", src: images }, {}, {})}</div></div>` : ``}`}</div></div>`;
});
const HowItWorks_Metric = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metric } = $$props;
  let { description } = $$props;
  if ($$props.metric === void 0 && $$bindings.metric && metric !== void 0)
    $$bindings.metric(metric);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"><p class="text-5xl leading-none font-extrabold text-green-600">${escape(metric)}</p> <p class="mt-2 text-lg leading-6 font-medium text-gray-500">${escape(description)}</p></div>`;
});
const HowItWorks_ProcessStep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { name } = $$props;
  let { description } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="flex flex-col items-left sm:flex-row ml-2 mr-2 md:ml-0 md:mr-0"><div class="border-grey-900 border-b-4 mt-4 pb-2 mb-2 sm:mt-0 sm:mb-0 sm:border-r-4 sm:border-b-0 sm:pr-4" style="border-color: #38a169">${validate_component(Picture, "Picture").$$render(
    $$result,
    {
      class: "h-12 w-12 inline-block",
      src: images
    },
    {},
    {}
  )}</div> <div class="sm:pl-4"><div class="text-left text-xl mt-0 font-bold">${escape(name)}</div> <div class="text-left text-lg mt-0 pb-4">${escape(description)}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      title: "Boost your career",
      subtitle: "with team projects",
      description: "All self-directed developers run into the same problems. No team\n  experience, feeling lost working alone, endless tutorials, & not enough finished\n  projects. The good news? Chingu solves them.",
      primaryHref: "https://forms.gle/xAjXHyWtRKKh37di8",
      primaryText: "Apply for free",
      heroClass: "object-center",
      images: [
        {
          type: "jpg",
          img: "/how-it-works/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg",
          alt: "How it Works"
        }
      ]
    },
    {},
    {}
  )} <div class="pt-6 bg-white sm:pt-10"><div class="pt-6 bg-orange-50 lg:pt-10"><div class="max-w-screen-xl px-4 mx-auto bg-orange-50 sm:px-6 lg:px-8" data-svelte-h="svelte-1smqmvk"><div class="max-w-4xl mx-auto text-center"><h2 class="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">Level-up your career from anywhere</h2> <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">We place motivated people with similar goals together in project teams
          which allows them level-up in ways they couldn&#39;t otherwise.</p></div></div> <div class="pb-12 mt-10 bg-orange-50 sm:pb-16"><div class="relative"><div class="absolute inset-0 h-1/2 bg-green-50"></div> <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8"><div class="max-w-4xl mx-auto"><div class="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">${validate_component(HowItWorks_Metric, "HowItWorksMetric").$$render(
    $$result,
    {
      metric: "2,028",
      description: "Developer Teams"
    },
    {},
    {}
  )} ${validate_component(HowItWorks_Metric, "HowItWorksMetric").$$render(
    $$result,
    {
      metric: "11,150+",
      description: "Coders & Designers"
    },
    {},
    {}
  )} ${validate_component(HowItWorks_Metric, "HowItWorksMetric").$$render(
    $$result,
    {
      metric: "3,200+",
      description: "Pair-programming hours"
    },
    {},
    {}
  )}</div></div></div></div></div></div></div> <div class="pb-6 bg-white lg:pb-10">${validate_component(HowItWorks_Section, "HowItWorksSection").$$render(
    $$result,
    {
      photoOn: "left",
      name: "Learn to Collaborate",
      title: "Learn to Collaborate and gain experience as a Modern Developer",
      description: "Gain experience using collaboration tools that are used in       modern tech companies. Real-time messaging, async communication, task       management tools, audio / video meetings, etc.",
      images: [
        {
          type: "webp",
          img: "/how-it-works/TeamScreenshot.webp",
          alt: "Team screenshot"
        },
        {
          type: "png",
          img: "/how-it-works/TeamScreenshot.png",
          alt: "Team screenshot"
        }
      ],
      details: [
        "Participate in weekly team standups",
        "Real-time messaging & async communication",
        "Communicate & collaborate with your team in text / audio / video channels",
        "Overcome the same challenges developers face on the job"
      ]
    },
    {},
    {}
  )}</div> <div class="pb-6 bg-orange-50 lg:pb-10">${validate_component(HowItWorks_Section, "HowItWorksSection").$$render(
    $$result,
    {
      photoOn: "right",
      name: "Use Real World Tools",
      title: "Use the real-world coding tools you'll use on the job",
      description: "Learn to manage your project's codebase in a team setting       like a pro! This is one of the most valuable skills you will learn as       a developer and will unlock a new world of collaboration opportunities.",
      images: [
        {
          type: "webp",
          img: "/how-it-works/GithubWorkflowGraphic.webp",
          alt: "Tools"
        },
        {
          type: "png",
          img: "/how-it-works/GithubWorkflowGraphic.png",
          alt: "Tools"
        }
      ],
      details: [
        "Build and refine your Git skills",
        "Contribute fixes and features to the project using Git and Github",
        "Participate in code reviews with teammates to ensure the quality of       your project"
      ]
    },
    {},
    {}
  )}</div> <div class="pb-6 bg-white lg:pb-10">${validate_component(HowItWorks_Section, "HowItWorksSection").$$render(
    $$result,
    {
      photoOn: "left",
      name: "Grow & Thrive",
      title: "Thrive with Deadlines & Accountability",
      description: "Just like in the workplace, you will have deadlines.       Deadlines will push you out of your comfort zone and accelerate your       learning.",
      images: [
        {
          type: "webp",
          img: "/how-it-works/DeadlinesScreenshot.webp",
          alt: "Deadlines"
        },
        {
          type: "png",
          img: "/how-it-works/DeadlinesScreenshot.png",
          alt: "Deadlines"
        }
      ],
      details: [
        "Deadlines will make you actually finish your projects",
        "Our deadlines will give structure to your learning journey",
        "Get out of tutorial purgatory"
      ]
    },
    {},
    {}
  )}</div> <div class="bg-orange-50">${validate_component(HowItWorks_Section, "HowItWorksSection").$$render(
    $$result,
    {
      photoOn: "right",
      name: "Learn Soft Skills",
      title: "Learn the soft skills you need to excel in your career",
      description: "Improving your soft skills is one of the best investments       you can make in your career. Technology is always changing, but the       need for soft skills does not change. Linkedin found that 57% of senior       leaders today say that soft skills are more important than hard skills.",
      images: [
        {
          type: "jpg",
          img: "/how-it-works/SoftSkills_Keyboard.jpg",
          alt: "Soft Skills"
        }
      ],
      details: [
        "Learn how to communicate your ideas in a professional setting",
        "Collaborate with people with different mindsets and from different countries",
        "Improve your time-management skills"
      ]
    },
    {},
    {}
  )}</div> <div class="pb-6 bg-white lg:pb-10">${validate_component(HowItWorks_Section, "HowItWorksSection").$$render(
    $$result,
    {
      photoOn: "left",
      name: "Learn about Pair Programming",
      title: "Do Weekly Pair-programming Matching",
      description: "Learn how to code with another developer and gain valuable       collaboration experience. Learn how other coders approach challenges       and how they think.",
      images: [
        {
          type: "webp",
          img: "/how-it-works/PairProgrammingScreenshot.webp",
          alt: "Pair Programming"
        },
        {
          type: "png",
          img: "/how-it-works/PairProgrammingScreenshot.png",
          alt: "Pair Programming"
        }
      ],
      details: [
        "Meet a new developer every week to solve a coding challenge",
        "Take what you know to the next level by sharing your knowledge with others",
        "Learn new technologies and techniques from your peers"
      ]
    },
    {},
    {}
  )}</div> <div class="flex flex-col flex-wrap justify-center w-full bg-orange-50 sm:items-center">${validate_component(Page_Section, "PageSection").$$render(
    $$result,
    {
      name: "How Voyages Work",
      title: "The Chingu Process",
      description: 'Chingu follows an Agile methodology to create an       environment where you can level-up your "hard" & "soft" skills while       providing you with the freedom to be creative.'
    },
    {},
    {}
  )} <div class="flex flex-col flex-wrap justify-center flex-grow-0 flex-shrink-0 w-auto h-auto pb-8 sm:ml-0 lg:ml-32">${validate_component(HowItWorks_ProcessStep, "HowItWorksProcessStep").$$render(
    $$result,
    {
      images: [
        {
          type: "svg",
          img: "/how-it-works/process-steps/ProcessStep1.svg",
          alt: "Chingu process step #1"
        }
      ],
      name: "1. Apply",
      description: "Your learning adventure starts the moment you decide to         join Chingu."
    },
    {},
    {}
  )} ${validate_component(HowItWorks_ProcessStep, "HowItWorksProcessStep").$$render(
    $$result,
    {
      images: [
        {
          type: "svg",
          img: "/how-it-works/process-steps/ProcessStep2.svg",
          alt: "Chingu process step #2"
        }
      ],
      name: "2. Validate your expertise through a Solo Project",
      description: "Finish or submit a project to make sure you're prepared         for the program."
    },
    {},
    {}
  )} ${validate_component(HowItWorks_ProcessStep, "HowItWorksProcessStep").$$render(
    $$result,
    {
      images: [
        {
          type: "svg",
          img: "/how-it-works/process-steps/ProcessStep3.svg",
          alt: "Chingu process step #3"
        }
      ],
      name: "3. Be placed in a team",
      description: "Get placed in a remote team of Chingus eager to learn."
    },
    {},
    {}
  )} ${validate_component(HowItWorks_ProcessStep, "HowItWorksProcessStep").$$render(
    $$result,
    {
      images: [
        {
          type: "svg",
          img: "/how-it-works/process-steps/ProcessStep4.svg",
          alt: "Chingu process step #4"
        }
      ],
      name: "4. Build, build, build",
      description: "Decide on a project and build it together. Practice         critical team workflow."
    },
    {},
    {}
  )} ${validate_component(HowItWorks_ProcessStep, "HowItWorksProcessStep").$$render(
    $$result,
    {
      images: [
        {
          type: "svg",
          img: "/how-it-works/process-steps/ProcessStep5.svg",
          alt: "Chingu process step #5"
        }
      ],
      name: "5. Overcome obstacles",
      description: "Overcome obstacles real developers face. Level up as a         human."
    },
    {},
    {}
  )} ${validate_component(HowItWorks_ProcessStep, "HowItWorksProcessStep").$$render(
    $$result,
    {
      images: [
        {
          type: "svg",
          img: "/how-it-works/process-steps/ProcessStep6.svg",
          alt: "Chingu process step #6"
        }
      ],
      name: "6. Succeed & repeat",
      description: "Get a job, join another Voyage - or do both."
    },
    {},
    {}
  )}</div></div> <div class="h-6 bg-white"></div> <div class="bg-green-50"><div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"><h2 class="text-3xl font-extrabold leading-9 tracking-tight text-green-900 sm:text-4xl sm:leading-10" data-svelte-h="svelte-1w1k5my">Ready to dive in?
      <br> <span class="text-green-600">Join Chingu today.</span></h2> <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">${validate_component(ApplyLink, "ApplyLink").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
