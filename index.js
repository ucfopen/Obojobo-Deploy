require('./preloadEnv') // sync loading of env

// start our own express app
const app = require('express')()
const obojoboMiddleware = require('obojobo-express/middleware.default')
const logger = require('obojobo-express/logger')
const startServer = require('obojobo-express/http_server.js')

// add the middleware to Express
obojoboMiddleware(app)

startServer(app, logger, process.env.PORT)
