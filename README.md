[![CircleCI](https://circleci.com/gh/lemiffe/cn-front/tree/master.svg?style=svg)](https://circleci.com/gh/lemiffe/cn-front/tree/master)
![npm-packages-status](https://david-dm.org/lemiffe/cn-front.svg)

# CN Frontend

Node & React-based frontend project for CN

## Running locally

### `yarn start`

Runs the project in development mode.

### `yarn build`

Builds the app for production to the build folder.

### `yarn start:prod`

Runs the compiled app in production.

### `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `yarn start -- --inspect`

To debug the node server, you can use `razzle start --inspect`. This will start the node server and enable the inspector agent. For more information, see [this](https://nodejs.org/en/docs/inspector/).

## Setting up the server (for automated CI/CD deploys using CircleCI and Dokku)

**Install Dokku (on the server):**
- wget https://raw.githubusercontent.com/dokku/dokku/v0.11.3/bootstrap.sh
- sudo DOKKU_TAG=v0.11.3 bash bootstrap.sh
- Browse to your server's IP address and follow the installer

**Set up the app (on the server):**
- dokku apps:create cn-front

**Set up the domain (on the server):**
- dokku domains:report cn-front
- dokku domains:add cn-front yourdomain.com
- dokku config:set cn-front DOKKU_NGINX_PORT=3000

**Set up the ports (on the server):**
- dokku proxy:ports cn-front (see list of ports, see the port of your container)
- dokku proxy:ports-add cn-front http:80:3000 (HTTP 80 on host will map to your container)
- dokku proxy:ports-add cn-front https:443:3000 (HTTPS 8443 on host will map to your container)
- If adding https fails, first set up SSL (see below)
- If you messed up the ports, run dokku proxy:ports-clear cn-front

**Troubleshooting:**
- Read this for more info: http://dokku.viewdocs.io/dokku~v0.11.3/deployment/application-deployment/
- If the ports are causing problems, check that there is only one "80" and one "443" for the app, then disable and re-enable the proxy

## Setting up SSL on the server (letsencrypt)

**Set up letsencrypt (after first deploy!):**
- sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
- dokku config:set --no-restart cn-front DOKKU_LETSENCRYPT_EMAIL=your@email.com
- dokku letsencrypt cn-front
- dokku letsencrypt:cron-job --add

## License

[GPL-3.0](LICENSE)

Built with [jaredpalmer/razzle](https://github.com/jaredpalmer/razzle)
