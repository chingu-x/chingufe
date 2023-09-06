import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","ProcessStep1.svg","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","how-it-works/DeadlinesScreenshot.png","how-it-works/DeadlinesScreenshot.webp","how-it-works/GithubWorkflowGraphic.png","how-it-works/GithubWorkflowGraphic.webp","how-it-works/PairProgrammingScreenshot.png","how-it-works/PairProgrammingScreenshot.webp","how-it-works/PreworkingScreenshot.png","how-it-works/PreworkingScreenshot.webp","how-it-works/SoftSkills_Desk.jpg","how-it-works/SoftSkills_Keyboard.jpg","how-it-works/TeamScreenshot.png","how-it-works/TeamScreenshot.webp","how-it-works/checkSquare.svg","how-it-works/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg","how-it-works/process-steps/ProcessStep1.png","how-it-works/process-steps/ProcessStep1.svg","how-it-works/process-steps/ProcessStep1.webp","how-it-works/process-steps/ProcessStep1_color.svg","how-it-works/process-steps/ProcessStep2.png","how-it-works/process-steps/ProcessStep2.svg","how-it-works/process-steps/ProcessStep2.webp","how-it-works/process-steps/ProcessStep3.png","how-it-works/process-steps/ProcessStep3.svg","how-it-works/process-steps/ProcessStep3.webp","how-it-works/process-steps/ProcessStep3_color.svg","how-it-works/process-steps/ProcessStep4.png","how-it-works/process-steps/ProcessStep4.svg","how-it-works/process-steps/ProcessStep4.webp","how-it-works/process-steps/ProcessStep4_color.svg","how-it-works/process-steps/ProcessStep5.png","how-it-works/process-steps/ProcessStep5.svg","how-it-works/process-steps/ProcessStep5.webp","how-it-works/process-steps/ProcessStep5_color.svg","how-it-works/process-steps/ProcessStep6.png","how-it-works/process-steps/ProcessStep6.svg","how-it-works/process-steps/ProcessStep6.webp","how-it-works/rightArrowCircle.svg","index.css","landing/.DS_Store","landing/ProcessStep1.png","landing/ProcessStep1.svg","landing/ProcessStep1.webp","landing/ProcessStep1_color.svg","landing/ProcessStep2.png","landing/ProcessStep2.svg","landing/ProcessStep2.webp","landing/ProcessStep3.png","landing/ProcessStep3.svg","landing/ProcessStep3.webp","landing/ProcessStep3_color.svg","landing/ProcessStep4.png","landing/ProcessStep4.svg","landing/ProcessStep4.webp","landing/ProcessStep4_color.svg","landing/ProcessStep5.png","landing/ProcessStep5.svg","landing/ProcessStep5.webp","landing/ProcessStep5_color.svg","landing/ProcessStep6.png","landing/ProcessStep6.svg","landing/ProcessStep6.webp","landing/RealProjects2.avif","landing/RealProjects2.png","landing/RealProjects2.webp","landing/RemoteTeam2.avif","landing/RemoteTeam2.png","landing/RemoteTeam2.webp","landing/SupportiveCommunity2.avif","landing/SupportiveCommunity2.png","landing/SupportiveCommunity2.webp","landing/close-quote-mark.png","landing/company-logos/amazon-logo.png","landing/company-logos/facebook-logo.png","landing/company-logos/intel-logo.png","landing/company-logos/linkedin-logo.svg","landing/company-logos/microsoft-logo.svg","landing/company-logos/redhat-logo.png","landing/company-logos/redhat-logo.svg","landing/nicole-wolf--xTBn1YBrTE-unsplash.jpg","landing/nicole-wolf--xTBn1YBrTE-unsplash.webp","landing/open-quote-mark.png","landing/tier-projects/BudgetBoardProject.avif","landing/tier-projects/BudgetBoardProject.png","landing/tier-projects/BudgetBoardProject.webp","landing/tier-projects/JobbaticalProject.avif","landing/tier-projects/JobbaticalProject.png","landing/tier-projects/JobbaticalProject.webp","landing/tier-projects/VolunteerAppProject.avif","landing/tier-projects/VolunteerAppProject.png","landing/tier-projects/VolunteerAppProject.webp","logo-192x192.png","logo-512x512.png","logo-with-text-192.png","logo-with-text.png","logo.png","manifest.json","sign-up/brooke-cagle-F_y8J9Ftwi0-unsplash.jpg","sign-up/brooke-cagle-F_y8J9Ftwi0-unsplash.webp"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".ico":"image/vnd.microsoft.icon",".webp":"image/webp",".jpg":"image/jpeg",".css":"text/css",".avif":"image/avif",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.20813af0.js","app":"_app/immutable/entry/app.55b22bf7.js","imports":["_app/immutable/entry/start.20813af0.js","_app/immutable/chunks/scheduler.d732cd1a.js","_app/immutable/chunks/singletons.b2e14300.js","_app/immutable/entry/app.55b22bf7.js","_app/immutable/chunks/scheduler.d732cd1a.js","_app/immutable/chunks/index.0bfbdd81.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/howItWorks",
				pattern: /^\/howItWorks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
