const postcssLoadConfig = require("postcss-load-config");
const postcss = require("postcss");

module.exports = {
	preprocess: {
		style: ({ content, filename }) =>
			postcssLoadConfig().then(({ plugins }) =>
				postcss(plugins)
					.process(content, { from: filename, map: { inline: false } })
					.then(result => ({
						code: result.css,
						map: result.map.toJSON()
					}))
			)
	}
};
