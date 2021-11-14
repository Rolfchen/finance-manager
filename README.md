# Finance Manager

![GitHub package.json version](https://img.shields.io/github/package-json/v/Rolfchen/finance-manager)

This is a personal finance manager web application for managing budget, transactions and investments.

The project is built with [NextJS](https://nextjs.org/), [Material UI 5](https://mui.com/) with [emotionjs](https://emotion.sh/docs/introduction) as the styling solution. If you're developing for this project, please make sure you refer to the documentation and each library's motivations

# Installation

## Pre-requisite

- `nodejs`
- `firebase account` - The project uses Firebase as the authentication engine. Firebase is free, create a Firebase account [here](https://firebase.google.com/docs/web/setup)
- `yarn` - This is preferred over `npm`. The project includes a `yarn.lock`. If you're using `npm` please do not check in `package-lock.json`.

## Steps

1. Pull the repo (duh...)
2. Run `yarn` in the `cli`. (Short for `yarn install`)
3. Create a `.env.local` and copy the keys from `.env` . See [NextJS Environment variables](https://nextjs.org/docs/basic-features/environment-variables) for how this works.
4. Add your firebase config to the `.env` file. Refer to [Firebase setup](https://firebase.google.com/docs/web/setup) for more detail
5. `yarn dev` to start the project in the dev environment

# Development

TBA
