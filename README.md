# Obojobo-Deploy

A reference setup for how to deploy and customize an Obojobo Next Server.

## Extending Express

Obojobo runs on [Express.js](https://expressjs.com).  Using Express's [middleware](http://expressjs.com/en/guide/writing-middleware.html#writing-middleware-for-use-in-express-apps), you can extend Obojobo infinately by adding your own routes, api endpoints, and pages.

## Configuration

Obojobo follows The Twelve Factor App methodology pertaining to [environment variables for configuration](https://12factor.net/config). To take advantage of it, we'll include an example of loading configuration variables from AWS's Secrets Manager.

## Running a Production Server

[PM2](http://pm2.keymetrics.io/) is a process manager for Node.  We'll use it here to run a production server and keep it fresh and fast.
