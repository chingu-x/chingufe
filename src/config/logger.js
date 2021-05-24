const {
	LOG_LEVEL = 'info',
	DISABLE_LOGGING,
	NODE_ENV = 'development',
} = process.env;

const PINO_LEVEL_TO_GCP_SEVERITY = {
	trace: 'DEBUG',
	debug: 'DEBUG',
	info: 'INFO',
	warn: 'WARNING',
	error: 'ERROR',
	fatal: 'CRITICAL',
};

const PINO_CONFIG = {
	name: 'ui',
	messageKey: 'message',
	level: LOG_LEVEL,
	enabled: !DISABLE_LOGGING,
	prettyPrint: NODE_ENV === 'development',
	timestamp: true,
	formatters: {
		level: (label, number) => ({
			level: number,
			severity:
				PINO_LEVEL_TO_GCP_SEVERITY[String(label)] ||
				PINO_LEVEL_TO_GCP_SEVERITY['info'],
		}),
	},
};

module.exports = { PINO_CONFIG };
