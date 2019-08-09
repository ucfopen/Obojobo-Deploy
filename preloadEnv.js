require('dotenv').config() // load .env into the environment
const loadAWSJSONSecretsIntoENV = require('aws-secrets-environment')
const region = process.env.AWS_SECRETS_REGION
const key =  process.env.AWS_SECRETS_KEY
let secretsLoaded = false
// load the secrets (async)
loadAWSJSONSecretsIntoENV(region, key).then(() => {secretsLoaded = true})

// loop here till the secrets are loaded
while(!secretsLoaded){
	require('deasync').sleep(100);
}
