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

## License

[GPL-3.0](LICENSE)

Built with [jaredpalmer/razzle](https://github.com/jaredpalmer/razzle)

