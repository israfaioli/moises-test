// cypress/e2e/signup.cy.js

import { faker } from '@faker-js/faker'

describe('Sign up', () => {
  const emailAddress = `${faker.internet.userName(50).toLowerCase()}@qatest.com`
  const password = Cypress.env('USER_PASSWORD')

  afterEach(() => {
    cy.logOut()
  })

  it('Account Creation with a Random Email', () => {
    cy.fillSignupFormAndSubmit(emailAddress, password)
    cy.validateLoggerUser(emailAddress)
  })
})
