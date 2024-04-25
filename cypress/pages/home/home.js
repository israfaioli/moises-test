/// <reference types = "cypress"/>

const locators = {
  LABEL_LOGGED_USER: 'div > p.nav-user_title__J6YgS',
  BUTTON_USER_INFORMATION: '#user_info_button',
  BUTTON_LOGOUT: '#user_info_sign_out',
  BUTTON_ADD: '#empty_state_add_button'
}

Cypress.Commands.add('validateLoggerUser', (email) => {
  cy.get(locators.LABEL_LOGGED_USER).should('be.visible').contains(email)
})

Cypress.Commands.add('accessUserInformation', () => {
  cy.get(locators.BUTTON_USER_INFORMATION).should('be.visible').trigger('mouseover')
  cy.get(locators.BUTTON_USER_INFORMATION).should('be.visible').click()
})

Cypress.Commands.add('logOutWhenMenuIsHidden', () => {
  cy.accessUserInformation()
  cy.get(locators.BUTTON_USER_INFORMATION).should('be.visible').click()
  cy.get(locators.BUTTON_LOGOUT).click()
  cy.url().should('include', '/login')
})

Cypress.Commands.add('logOut', () => {
  cy.accessUserInformation()
  cy.get(locators.BUTTON_LOGOUT).click()
  cy.url().should('include', '/login')
})

Cypress.Commands.add('clickToAdd', () => {
  cy.get(locators.BUTTON_ADD).click()
})

Cypress.Commands.add('attachFileHandler', (file_name) => {
  cy.get('input[type=file]', { timeout: 5000 }).attachFile(file_name)
})

Cypress.Commands.add('validateTrackFile', (email) => {
  cy.get(locators.LABEL_LOGGED_USER).should('be.visible').contains(email)
})