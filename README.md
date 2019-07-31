# Obojobo-Deploy

A reference setup for how to deploy and customize an Obojobo Next Server.

## Extending Express

Obojobo runs on [Express.js](https://expressjs.com).  Using Express's [middleware](http://expressjs.com/en/guide/writing-middleware.html#writing-middleware-for-use-in-express-apps), you can extend Obojobo infinately by adding your own routes, api endpoints, and pages.

## Configuration

Obojobo follows The Twelve Factor App methodology pertaining to [environment variables for configuration](https://12factor.net/config). To take advantage of it, we'll include an example of loading configuration variables from AWS's Secrets Manager.

### ENV vars required to load secrets

* `AWS_SECRETS_REGION`
* `AWS_SECRETS_KEY`

### ENV vars required for application

Thes can be defined any number of ways, via `.env`, `/etc/environment`, export, or secrets manager.

* `NODE_ENV`
* `DEBUG`
* `DB_USER`
* `DB_PASS`
* `DB_HOST`
* `DB_NAME`
* `DB_PORT`
* `DB_SSL`
* `OBO_COOKIE_SECRET`
* `OBO_COOKIE_SECURE`
* `OBO_LTI_KEYS_JSON`


## Running a Production Server

[PM2](http://pm2.keymetrics.io/) is a process manager for Node.  We'll use it here to run a production server and keep it fresh and fast.


```bash

# install npm modules
yarn install --production=true

# start the pm2 server
yarn start

# make sure pm2 starts on startup
yarn pm2 unstartup
yarn pm2 startup

# save the current pm2 processes
yarn pm2 save
```
