/// <reference types = "cypress"/>

const locators = {
  INPUT_USERNAME: '#email_address_textbox',
  INPUT_PASSWORD: '#password_textbox',
  BUTTON_REGISTER: '#sign_up_button',
  BUTTON_REGISTER_FREE: '#signup_button',
  BUTTON_LOGIN: '#login_button'
}


Cypress.Commands.add('fillSignupFormAndSubmit', (email, password) => {
  cy.visit('/')
  cy.get(locators.BUTTON_REGISTER).click()
  cy.get(locators.INPUT_USERNAME).type(email)
  cy.get(locators.INPUT_PASSWORD).type(password, { log: false })
  cy.get(locators.BUTTON_REGISTER_FREE).click()
})

Cypress.Commands.add('guiLogin', (username, password) => {
  cy.visit('/')
  cy.get(locators.INPUT_USERNAME).type(username)
  cy.get(locators.INPUT_PASSWORD).type(password, { log: false })
  cy.get(locators.BUTTON_LOGIN).click()
})

Cypress.Commands.add('sessionLogin', (username, password) => {
  const login = () => cy.guiLogin(username, password)
  cy.session(username, login)
})