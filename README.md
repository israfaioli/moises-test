# Testes _end-to-end_ com Cypress

👋 Olá Analistas, desenvolvedores e recrutadores. Este readme irá apresentar a estrutura deste projeto e2e cypress como portfólio pessoal.

* Projeto para fazer os testes automatizados e2e
  - url dos endpoints utilizados para testes do Scratch: https://studio.moises.ai/ ❤️

## Pre-requirements

To clone and run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.34.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v18.15.0` while writing this doc)
- npm (I've used version `9.5.0` while writing this doc)

**Note:** When installing Node.js, npm is automatically installed. 🚀

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** The `cypress.env.json` file is not tracked by git since it's listed in the `.gitignore` file.

## Running the tests

In this project, you can run tests in interactive and headless modes, both on desktop and tablet viewports.

### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode using a desktop viewport.

### Interactive mode

Run `npm run cy:open` to open the __Cypress App__ to run tests in interactive mode using a desktop viewport.

___

Made with ❤️ by [Israel Faioli](https://medium.com/@israfaioli).

