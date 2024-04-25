// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '../pages/login/login'
import '../pages/home/home'
import '../pages/tracks/tracks'
import '../pages/track_spliter/track_spliter'
import 'cypress-file-upload'

// Alternatively you can use CommonJS syntax:
// require('./commands')