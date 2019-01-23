# Setup Inteligir locally

### Foreword

If you see a step below that could be improved (or is outdated), please update the instructions. We rarely go through this process ourselves, so your fresh pair of eyes and your recent experience with it, makes you the best candidate to improve them for other users. Thank you!

### Prerequisite

1. Make sure you have Node.js version >= 10.

- We recommend using [nvm](https://github.com/creationix/nvm): `nvm use`.

2. Make sure you have a PostgreSQL database available

- Check the version: 10.3, 9.6.8, 9.5.12, 9.4.17, 9.3.22 or newer

3. For [node-gyp](https://github.com/nodejs/node-gyp), make sure you have Python 2 available and configured as the active version. You can use [pyenv](https://github.com/pyenv/pyenv) to manage Python versions.

4. You'll need the Prisma CLI. Please install it via NPM or [using another method](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/#installation):

```
npm install -g prisma
```

### Getting Started

Inteligir uses a **GraphQL server** built with [graphql-yoga](https://github.com/prisma/graphql-yoga) & [graphql-shield](https://github.com/maticzav/graphql-shield). The database interface uses [Prisma](https://github.com/prisma/prisma). Frontend is a SSR **React app** via [next.js](https://github.com/zeit/next.js).

#### How to install

We recommend cloning the repository in a folder dedicated to `inteligir` projects.

```
git clone git@github.com:inteligir/inteligir.git inteligir/app
cd inteligir/app
npm run setup
```

### Building and Running Locally

#### To start a dev web server with Webpack Dev Server:

```bash
npm run dev
```

This will do two things:

1.  Start the Webpack Dev Server that serves assets in the client directory (it will refresh the page on any changes)
2.  Start a nodemon server for the server directory which will watch all server files and restart the server on changes

#### To build a production version of the app:

```bash
npm run build
npm start
```

You can then load: [http://localhost:5000/](http://localhost:5000/)

## Deployment

To deploy to staging or production, you need to be a core member of the Inteligir team.

#### To deploy to development or production:

```bash
npm run deploy
```

The deploy script will guide you through the rest of the deployment process.

Release tag names follow [semantic versioning](http://semver.org/) e.g.

- `v1.0.0`

## Debugging Tips

You can debug node apps by attaching an `ndb` instance to your running node server. First install the
[ndb](https://www.npmjs.com/package/ndb) package into your global environment:

```bash
npm i -g ndb
```

You can now use the node debugger to profile, add breakpoints, log errors, and even inject JavaScript
without needing to restart the server! Start the debugger by running:

```bash
make debug
```

## Style Guide

JavaScript - this project follows the [Airbnb Style Guide](https://github.com/airbnb/javascript) along with [Prettier](https://prettier.io/) formatting.