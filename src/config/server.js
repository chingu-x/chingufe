const { v4: uuid } = require('uuid');
const { PINO_CONFIG } = require('./logger');

function genReqId(req) {
	if (req.headers['x-cloud-trace-context']) {
		const { GOOGLE_CLOUD_PROJECT = 'chingu' } = process.env;
		const TRACE_IDENTIFIER_PREFIX = `projects/${GOOGLE_CLOUD_PROJECT}/traces`;
		return `${TRACE_IDENTIFIER_PREFIX}/${req.headers['x-cloud-trace-context']}`;
	}

	return uuid();
}

const SERVER_CONFIG = {
	logger: PINO_CONFIG,
	requestIdHeader: 'x-cloud-trace-context',
	requestIdLogLabel: 'logging.googleapis.com/trace',
	genReqId,
};

module.exports = { SERVER_CONFIG };
