import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { P as Picture, H as Hero, A as ApplyLink } from "../../chunks/Hero.js";
import { P as Page_Section } from "../../chunks/Page-Section.js";
const HowItWorksLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="/howItWorks" class="w-full flex items-center justify-center px-8 py-3 mt-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-200 hover:bg-green-300 md:py-4 md:mt-0 md:text-lg md:px-10" data-svelte-h="svelte-1fxfes4">Learn more</a>`;
});
const Landing_ProjectExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { name } = $$props;
  let { description } = $$props;
  let { tier } = $$props;
  let { techStack } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.tier === void 0 && $$bindings.tier && tier !== void 0)
    $$bindings.tier(tier);
  if ($$props.techStack === void 0 && $$bindings.techStack && techStack !== void 0)
    $$bindings.techStack(techStack);
  return `<div class="flex flex-col flex-wrap items-center flex-grow-0 flex-shrink-0 px-0 m-auto text-center md:px-1">${validate_component(Picture, "Picture").$$render($$result, { src: images }, {}, {})} <h3 class="inline-block m-2 text-xl font-bold">${escape(name)}</h3> <div class="flex w-64 h-24 m-2 text-lg align-text-top">${escape(description)}</div> <h3 class="inline-block mt-4 text-xl font-bold">${escape(tier)}</h3> <div class="flex w-auto h-24 m-0 text-lg align-text-top">${escape(techStack)}</div></div>`;
});
const Testimonial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quote = "" } = $$props;
  let { author = "" } = $$props;
  let { title = "" } = $$props;
  let { location = "" } = $$props;
  let { logo = null } = $$props;
  let { logoClass = "" } = $$props;
  let { authorPhoto = null } = $$props;
  let { authorPhotoClass = "" } = $$props;
  let { display = "compact" } = $$props;
  const padding = display === "standalone" ? "py-12 md:py-20 lg:py-24" : "py-3";
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.logoClass === void 0 && $$bindings.logoClass && logoClass !== void 0)
    $$bindings.logoClass(logoClass);
  if ($$props.authorPhoto === void 0 && $$bindings.authorPhoto && authorPhoto !== void 0)
    $$bindings.authorPhoto(authorPhoto);
  if ($$props.authorPhotoClass === void 0 && $$bindings.authorPhotoClass && authorPhotoClass !== void 0)
    $$bindings.authorPhotoClass(authorPhotoClass);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  return `<section class="${"overflow-hidden " + escape(padding, true) + " mb-8 lg:mb-12"}"><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">${display === "standalone" ? `<svg class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-testimonial"><title id="svg-testimonial">Testimonial</title><defs><pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"></rect></svg>` : ``} <div class="relative">${logo ? `${validate_component(Picture, "Picture").$$render(
    $$result,
    {
      class: "lg:mx-auto h-8 mb-2 lg:mb-4 " + logoClass,
      src: logo
    },
    {},
    {}
  )}` : ``} <blockquote><div class="max-w-3xl lg:mx-auto lg:text-center text-2xl leading-9 font-medium text-gray-900"><p>“${escape(quote)}”</p></div> <footer class="mt-2 lg:mt-4"><div class="flex items-center lg:justify-center">${authorPhoto ? `<div class="md:flex-shrink-0 mr-4">${validate_component(Picture, "Picture").$$render(
    $$result,
    {
      class: "mx-auto h-10 w-10 rounded-full " + authorPhotoClass,
      src: authorPhoto
    },
    {},
    {}
  )}</div>` : ``} <div class="lg:text-center lg:flex lg:items-center"><div class="text-base font-medium text-gray-900">${escape(author)}</div> <svg class="hidden lg:block mx-1 h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M11 0h3L9 20H6l5-20z"></path></svg> <div class="text-xs lg:text-base font-medium text-gray-500">${escape(title || location)}</div></div></div></footer></blockquote></div></div></section>`;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = null } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { category = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  return `<div class="flex flex-col rounded-lg shadow-lg overflow-hidden"><div class="flex-shrink-0">${validate_component(Picture, "Picture").$$render(
    $$result,
    {
      class: "h-48 w-full object-cover",
      src: image
    },
    {},
    {}
  )}</div> <div class="flex-1 bg-white p-6 flex flex-col justify-between"><div class="flex-1">${category ? `<p class="text-sm font-medium text-green-600">${escape(category)}</p>` : ``} <p class="text-xl font-semibold text-gray-900">${escape(title)}</p> <p class="mt-3 text-base text-gray-500">${escape(description)}</p></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      title: "Collaborate and",
      subtitle: "gain real experience",
      description: "Turn what you've learned in courses, bootcamps, & schools into \n  the experience needed to land a Web Development job as a Developer, \n  UI/UX Designer, or Product Owner. Our 6-week remote team projects help you \n  level-up technical & soft skills sought after by employers.",
      primaryHref: "https://forms.gle/xAjXHyWtRKKh37di8",
      primaryText: "Apply for free",
      secondaryHref: "/howItWorks",
      secondaryText: "Learn more",
      imageClass: "object-top lg:object-left",
      images: [
        {
          type: "jpg",
          img: "/landing/nicole-wolf--xTBn1YBrTE-unsplash.jpg",
          alt: "Woman coding in a cafe"
        },
        {
          type: "webp",
          img: "/landing/nicole-wolf--xTBn1YBrTE-unsplash.webp",
          alt: "Woman coding in a cafe"
        }
      ]
    },
    {},
    {}
  )} <div class="pt-4 bg-white" data-svelte-h="svelte-1jm49us"><div class="py-6 bg-orange-50 lg:py-10"><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="text-center"><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Leading companies hire Chingus</h2> <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">We&#39;ve helped people get jobs at organizations like these:</p></div> <div class="flow-root mt-10 lg:mt-10"><div class="flex flex-wrap"><div class="flex flex-grow flex-shrink-0"><img class="h-12 mt-2 mr-3 md:mr-auto" src="/landing/company-logos/amazon-logo.png" alt="Amazon"></div> <div class="flex flex-grow flex-shrink-0"><img class="h-12 mt-4 md:mt-0" src="/landing/company-logos/intel-logo.png" alt="Intel"></div> <div class="flex flex-grow flex-shrink-0"><img class="h-12 mt-4 md:mt-0" src="/landing/company-logos/redhat-logo.png" alt="Red Hat"></div> <div class="flex flex-grow flex-shrink-0"><img class="h-12 mt-4 md:mt-0" src="/landing/company-logos/facebook-logo.png" alt="Facebook"></div> <div class="flex flex-grow flex-shrink-0"><img class="-mt-6 h-36 md:-mt-12" src="/landing/company-logos/microsoft-logo.svg" alt="Microsoft"></div> <div class="flex flex-grow flex-shrink-0"><img class="h-12 mt-0 md:mt-0" src="/landing/company-logos/linkedin-logo.svg" alt="LinkedIn"></div></div></div></div></div></div> <div class="pt-4 bg-white"><div class="py-6 bg-white lg:py-10"><div class="absolute inset-0" data-svelte-h="svelte-n0f3jm"><div class="h-1/3 sm:h-2/3"></div></div> <div class="relative mx-auto max-w-7xl"><div class="text-center" data-svelte-h="svelte-1xxw58q"><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">A collaborative learning experience</h2> <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">You will leave Chingu with portfolio projects, confidence from
          experience, and the soft skills that the 21st century world needs.</p></div> <div class="grid max-w-lg gap-4 px-4 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Gain experience in a remote team",
      description: "57% of full-time entry-level jobs now ask for 3 years or\n          more of experience.",
      image: [
        {
          type: "avif",
          img: "/landing/RemoteTeam2.avif",
          alt: "Team project"
        },
        {
          type: "webp",
          img: "/landing/RemoteTeam2.webp",
          alt: "Team project"
        },
        {
          type: "png",
          img: "/landing/RemoteTeam2.png",
          alt: "Team project"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Work on real projects",
      description: "Sick of doing tutorial after tutorial with nothing to show\n          for them?",
      image: [
        {
          type: "avif",
          img: "/landing/RealProjects2.avif",
          alt: "Team project"
        },
        {
          type: "webp",
          img: "/landing/RealProjects2.webp",
          alt: "Team project"
        },
        {
          type: "png",
          img: "/landing/RealProjects2.png",
          alt: "Team project"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "Join a supportive community",
      description: "It can be hard to find someone to help you get unstuck.",
      image: [
        {
          type: "avif",
          img: "/landing/SupportiveCommunity2.avif",
          alt: "Team project"
        },
        {
          type: "webp",
          img: "/landing/SupportiveCommunity2.webp",
          alt: "Team project"
        },
        {
          type: "png",
          img: "/landing/SupportiveCommunity2.png",
          alt: "Team project"
        }
      ]
    },
    {},
    {}
  )}</div></div></div></div> <div class="pb-10 bg-orange-50">${validate_component(Page_Section, "PageSection").$$render(
    $$result,
    {
      name: "What Developers Think",
      title: "Chingu has guided thousands of developers on learning adventures",
      description: "Chingu has helped thousands of people learning in-demand       skills accelerate their learning through collaboration and       project-building."
    },
    {},
    {}
  )} ${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      author: "Eric Zumwalt",
      location: "United States",
      quote: "I got my first developer job at the age of 35 largely due       to the technical AND soft skills I gained through Chingu."
    },
    {},
    {}
  )} ${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      author: "Sarah Schneider",
      location: "United States",
      quote: "I realized pretty quickly that I was learning more from       the Voyage project than from everything I did in the entire rest of       the year put together."
    },
    {},
    {}
  )} ${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      author: "Owen Ekhator",
      location: "United States",
      quote: "Chingu was a great place for me because while working on       the projects there, I honed my skills and I learned how to collaborate       with other developers. During my job interview process, I was able       to speak on the projects I worked on at Chingu. It impressed my       interviewers and consequently, I landed a job at a Fortune 500."
    },
    {},
    {}
  )}</div> <div class="bg-white">${validate_component(Page_Section, "PageSection").$$render(
    $$result,
    {
      name: "Turn Knowledge into Experience",
      title: "Real projects in Real teams",
      description: "When you join Chingu, you will collaborate with others to       build & launch real projects using any Web Dev Language (JS, Python, etc.).       We match learners from all skill levels,       all timezones, and a variety of different tech stacks."
    },
    {},
    {}
  )} <div class="flex items-end justify-center h-auto m-auto"><div class="flex flex-wrap items-end">${validate_component(Landing_ProjectExample, "LandingProjectExample").$$render(
    $$result,
    {
      name: "Jobbatical Landing Page",
      description: "A job listings and job application app for working           abroad.",
      tier: "Tier 1 (beginner)",
      techStack: "HTML, CSS, Flexbox",
      images: [
        {
          type: "avif",
          img: "/landing/tier-projects/JobbaticalProject.avif",
          alt: "Voyage project screenshot"
        },
        {
          type: "webp",
          img: "/landing/tier-projects/JobbaticalProject.webp",
          alt: "Voyage project screenshot"
        },
        {
          type: "png",
          img: "/landing/tier-projects/JobbaticalProject.png",
          alt: "Voyage project screenshot"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Landing_ProjectExample, "LandingProjectExample").$$render(
    $$result,
    {
      name: "Chrome Extension App",
      description: "A finance app to add income & expense categories           with graph rendering.",
      tier: "Tier 2 (intermediate)",
      techStack: "Frontend Framework & API usage",
      images: [
        {
          type: "avif",
          img: "/landing/tier-projects/BudgetBoardProject.avif",
          alt: "Voyage project screenshot"
        },
        {
          type: "webp",
          img: "/landing/tier-projects/BudgetBoardProject.webp",
          alt: "Voyage project screenshot"
        },
        {
          type: "png",
          img: "/landing/tier-projects/BudgetBoardProject.png",
          alt: "Voyage project screenshot"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(Landing_ProjectExample, "LandingProjectExample").$$render(
    $$result,
    {
      name: "Volunteer Manager App",
      description: "Helps people to recruit and manage volunteers for a           non-profit project.",
      tier: "Tier 3 (advanced)",
      techStack: "Backend API, Database (optional)",
      images: [
        {
          type: "avif",
          img: "/landing/tier-projects/VolunteerAppProject.avif",
          alt: "Voyage project screenshot"
        },
        {
          type: "webp",
          img: "/landing/tier-projects/VolunteerAppProject.webp",
          alt: "Voyage project screenshot"
        },
        {
          type: "png",
          img: "/landing/tier-projects/VolunteerAppProject.png",
          alt: "Voyage project screenshot"
        }
      ]
    },
    {},
    {}
  )}</div></div></div> <div class="bg-green-50"><div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"><h2 class="text-3xl font-extrabold leading-9 tracking-tight text-green-900 sm:text-4xl sm:leading-10" data-svelte-h="svelte-1w1k5my">Ready to dive in?
      <br> <span class="text-green-600">Join Chingu today.</span></h2> <div class="w-full mt-8 md:w-1/2 gap-x-4 lg:flex-shrink-0 lg:mt-0 sm:flex sm:justify-center lg:justify-start">${validate_component(ApplyLink, "ApplyLink").$$render($$result, {}, {}, {})} ${validate_component(HowItWorksLink, "HowItWorksLink").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
