# Finance Manager

![GitHub package.json version](https://img.shields.io/github/package-json/v/Rolfchen/finance-manager)

This is a personal finance manager web application for managing budget, transactions and investments.

The project is built with [NextJS](https://nextjs.org/), [Material UI 5](https://mui.com/) with [emotionjs](https://emotion.sh/docs/introduction) as the styling solution. If you're developing for this project, please make sure you refer to the documentation and each library's motivations

# Installation

## Pre-requisite

- `nodejs`
- `firebase account` - The project uses Firebase as the authentication engine. Firebase is free, create a Firebase account [here](https://firebase.google.com/docs/web/setup)
- `yarn` - This is preferred over `npm`. The project includes a `yarn.lock`. If you're using `npm` please do not check in `package-lock.json`.
- `docker` - You need this to run local DB instance

## Steps

1. Pull the repo (duh...)
2. Run `yarn` in the `cli`. (Short for `yarn install`)
3. Create a `.env.local` and copy the keys from `.env` . See [NextJS Environment variables](https://nextjs.org/docs/basic-features/environment-variables) for how this works.
4. Add your firebase config to the `.env` file. Refer to [Firebase setup](https://firebase.google.com/docs/web/setup) for more detail
5. Setup local database (recommended. see steps below) if you wish to run local database via docker.
6. Add your database config to the `.env` file.
7. `yarn dev` to start the project in the dev environment

## Local Database Setup (docker)

1. At the root directory (Not workspace), run `docker-compose up` - this should pull the image and build the container.
2. Once the container is up, run `yarn db:create`. This will run the steps to create the database.
3. Run the migrations, `yarn db:up` to create the table schemas to date.

Local DB connection detail can be found in the docker files. It is recommended that you connect to the database using tools like Azure Data Studio or VSCode plugin

# Development

TBA

## Folder Structure

- All "utility" folders (components, context, hooks) etc. are in lower case. All "Class" or "Class-like" (React pure components) files should be in `CapitalCase`. Files under `pages` should be in lower, `kebab-case` or `snake_case` for URL routing reasons. Anything else should be in `camelCase`.
- Frontend folders:

  - `domain` - Separate major "groups", "concerns" in this folder. (i.e. `/User`, `Authentication`).
  - `components` - React components
  - `context` - React context
  - `hooks` - React hooks
  - `styles` - Styling related.

- Backend folders:

  - `services` - Usually data services. These are generally classes, but there's no set rule.
  - `entities` - Database entities

- The `utils` folder is used for utility classes. If specific for frontend or backend, place them in `utils/frontend/*` or `utils/backend/*`
