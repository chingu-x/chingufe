const DEFAULT_COOKIE_OPTIONS = {
	domain: process.env.COOKIE_DOMAIN,
	httpOnly: true,
	sameSite: "lax",
	signed: true,
	secure: ["production", "staging"].includes(process.env.CHINGU_ENV),
	secret: process.env.COOKIE_SECRET,
};

module.exports = { DEFAULT_COOKIE_OPTIONS };
