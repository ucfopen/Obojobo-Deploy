const loadAWSJSONSecretsIntoENV = require('aws-secrets-environment')

// load AWSsecrets into process.env vars
// we need to do this before any code in the app runs
loadAWSJSONSecretsIntoENV(process.env.AWS_SECRETS_REGION, process.env.AWS_SECRETS_KEY)
.then(() => {
	// start our own express app
	const app = require('express')()
	const obojoboMiddleware = require('obojobo-express/middleware.default')
	const logger = require('obojobo-express/logger')
	const startServer = require('obojobo-express/http_server.js')

	// add the middleware to Express
	obojoboMiddleware(app)

	startServer(app, logger, process.env.PORT)
})
