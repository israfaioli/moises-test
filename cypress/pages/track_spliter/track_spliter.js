/// <reference types = "cypress"/>

const locators = {
  BUTTON_SPLITER_OPTION: 'div.change-operations_container__nZL1y > button',
  LABEL_SPLITER_MESSAGE: 'p.split-loader-with-message_message__l7N_L',
  BUTTON_CONFIRM_SPLIT: '#modal_button_confirm'
}


Cypress.Commands.add('accessMyLibraryTrack', (track_position) => {
  cy.get('div.track-list_container__SKIeX > div:nth-child('+ track_position + ') > div > button > span > p:nth-child(1)').should('be.visible', { timeout: 3000 }).click()
})

Cypress.Commands.add('validateSplitTrackInitialized', () => {
  cy.get(locators.LABEL_SPLITER_MESSAGE).should('be.visible', { timeout: 3000 }).contains('Estamos processando sua música...')
})

Cypress.Commands.add('selectTwoTracks', () => {
  cy.get('button[data-id="vocals-accompaniment"]').should('be.visible', { timeout: 3000 }).click()
})

Cypress.Commands.add('ClickSplitOptionMenu', () => {
  cy.get(locators.BUTTON_SPLITER_OPTION).should('be.visible').click()
})

Cypress.Commands.add('ClickConfirmSplit', () => {
  cy.get(locators.BUTTON_CONFIRM_SPLIT).should('be.visible').click()
})

Cypress.Commands.add('validateSplitProgress', () => {
  cy.get(locators.LABEL_SPLITER_MESSAGE).should('be.visible', { timeout: 3000 }).contains('Estamos processando sua música...')
})

Cypress.Commands.add('validateIfSongHasTwoTracks', () => {
  cy.get('div.channel_container__j7plY').should('have.length', 3)
})