const ENV_SCHEMA = {
	dotenv: true,
	schema: {
		type: "object",
		properties: {
			NODE_ENV: {
				type: "string",
				default: "development"
			},
			DOMAIN: {
				type: "string", 
				default: "https://localhost.chingu.io"
			},
			CHINGU_ENV: {
				type: "string",
				default: "development"
			},
			API_DOMAIN: {
				type: "string",
				default: "https://api.staging.chingu.io"
			},
			PORT: {
				type: "string",
				default: 3000
			},
			COOKIE_SECRET: {
				type: "string",
				default: "NOT_A_SECRET"
			},
			JWT_SECRET: {
				type: "string",
				default: "NOT_A_SECRET"
			},
			COOKIE_DOMAIN: {
				type: "string",
				default: "localhost"
			},
			SENTRY_DSN: {
				type: "string",
			},
		}
	}
}

module.exports = { ENV_SCHEMA }