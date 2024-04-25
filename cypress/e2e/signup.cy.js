// cypress/e2e/signup.cy.js

import { faker } from '@faker-js/faker/locale/en'

describe('Sign up', () => {
  const emailAddress = `${faker.datatype.uuid()}@qatest.com`
  const password = Cypress.env('USER_PASSWORD')

  afterEach(() => {
    cy.logOut()
  })

  it('Account Creation with a Random Email', () => {
    cy.fillSignupFormAndSubmit(emailAddress, password)
    cy.validateLoggerUser(emailAddress)
  })
})
