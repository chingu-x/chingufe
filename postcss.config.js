const tailwindcss = require("tailwindcss");
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssNesting = require("postcss-nesting");
const cssnano = require("cssnano")({
	preset: "default"
});

// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
	content: ["./src/**/*.svelte", "./src/**/*.html"],
	whitelistPatterns: [/svelte-/],
	defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
});

module.exports = {
	plugins: [
		postcssImport,
		tailwindcss,
		postcssNesting,
		...(process.env.NODE_ENV === "production" ? [autoprefixer, purgecss, cssnano] : [])
	]
};
