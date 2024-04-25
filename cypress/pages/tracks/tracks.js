/// <reference types = "cypress"/>

const locators = {
  LABEL_ATTACH_TRACK: 'div.track-selected_title__2b1RQ > p',
  LABEL_YOUR_TRACK: 'div.carousel-steps-footer_tracks__mYuGM > div > div > p',
  BUTTON_NEXT: '#upload_next_button',
  BUTTON_SUBMIT: '#upload_submit_button',
  LABEL_UPLOADING: 'p.upload-progress_title__gY_Bs',
  BUTTON_HIDE_COLLECTION: '#playlist_hide_button',
  BUTTON_CONFIRM_HIDE: '#modal_button_confirm',
  LABEL_MOISES_COLLECTION: 'p.playlist-sample_description__zQuI8',
  BUTTON_TRACK_ACTIONS: 'button.actions-task_button__JgMW6',
  BUTTON_EXCLUDE_TRACK: '#library_song_delete_from_library_option',
  BUTTON_CONFIRM_EXCLUDE_TRACK: '#modal_button_confirm',
  LABEL_HOW_TO_START: 'p.empty_boxTitle__WpL7q',
  LABEL_SECOND_HOW_TO_START: 'p.empty_content__3mMxT'
}


Cypress.Commands.add('validateAttachedTrack', (track_name) => {
  cy.get(locators.LABEL_ATTACH_TRACK).should('be.visible').contains(track_name, {timeout: 5000})
})

Cypress.Commands.add('validateYourTrackName', (track_name) => {
  cy.get(locators.LABEL_YOUR_TRACK).should('be.visible').contains(track_name, {timeout: 5000})
})

Cypress.Commands.add('clickNext', () => {
  cy.get(locators.BUTTON_NEXT).should('be.visible').click()
})

Cypress.Commands.add('clickSubmit', () => {
  cy.get(locators.BUTTON_SUBMIT).should('be.visible').click()
})

Cypress.Commands.add('validateUploadProgress', () => {
  cy.get(locators.LABEL_UPLOADING, {timeout: 5000}).should('be.visible').contains('Enviando')
})

Cypress.Commands.add('validateMyLibraryTrack', (track_position, track_name) => {
  cy.get('div.track-list_container__SKIeX > div:nth-child('+ track_position + ') > div > button > span > p:nth-child(1)').contains(track_name)
})

Cypress.Commands.add('hideCollection', () => {
  cy.get(locators.BUTTON_HIDE_COLLECTION).should('be.visible', { timeout: 3000 }).click()
  cy.get(locators.BUTTON_CONFIRM_HIDE).should('be.visible', { timeout: 3000 }).click()
})

Cypress.Commands.add('validateCollectionIsHidden', () => {
  cy.get(locators.LABEL_MOISES_COLLECTION).should('not.exist')
})

Cypress.Commands.add('clickTrackActions', () => {
  cy.get(locators.BUTTON_TRACK_ACTIONS).click()
})

Cypress.Commands.add('clickExcludeToLIbrary', () => {
  cy.get(locators.BUTTON_EXCLUDE_TRACK).should('be.visible').click()
})

Cypress.Commands.add('clickConfirmExcludeTrack', () => {
  cy.get(locators.BUTTON_CONFIRM_EXCLUDE_TRACK).should('be.visible').click()
})

Cypress.Commands.add('validateMyLibraryTrackWasExcluded', (track_position, track_name) => {
  cy.get('div.track-list_container__SKIeX > div:nth-child('+ track_position + ') > div > button > span > p:nth-child(1)', { timeout: 10000 }).should('be.visible', { timeout: 3000 }).should('not.contain', track_name, { timeout: 3000 })
})

Cypress.Commands.add('validateIfHowToStartExists', () => {
  cy.get(locators.LABEL_HOW_TO_START).should('be.visible').contains('Comece a adicionar músicas')
  cy.get(locators.LABEL_SECOND_HOW_TO_START).should('be.visible').contains('Faça upload de arquivos locais ou armazenados na nuvem')
})

Cypress.Commands.add('mouseOverToSong', (track_position) => {
  cy.get('div.track-list_container__SKIeX > div:nth-child('+ track_position + ') > div > button').trigger('mouseover')
})