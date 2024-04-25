// cypress/e2e/signup.cy.js
import { faker } from '@faker-js/faker/locale/en'

describe('Songs suite tests', () => {
  const emailAddress = `${faker.internet.userName().toLowerCase()}@qatest.com`
  const password = Cypress.env('USER_PASSWORD')
  const track_file_name = 'TESTE FAQ.mp3'
  const track_name = 'TESTE FAQ'

  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.clearCookies()
  })

  it('Upload a Song', () => {
    cy.fillSignupFormAndSubmit(emailAddress, password)
    cy.validateLoggerUser(emailAddress)
    cy.clickToAdd()
    cy.attachFileHandler(track_file_name)
    cy.validateAttachedTrack(track_file_name)
    cy.validateYourTrackName(track_name)
    cy.clickNext()
    cy.clickSubmit()
    cy.validateUploadProgress()
    cy.validateMyLibraryTrack(2, track_name)
    cy.logOut()
  })

  it('Track Separation', () => {
    cy.fillSignupFormAndSubmit(emailAddress, password)
    cy.validateLoggerUser(emailAddress)
    cy.clickToAdd()
    cy.attachFileHandler(track_file_name)
    cy.validateAttachedTrack(track_file_name)
    cy.validateYourTrackName(track_name)
    cy.clickNext()
    cy.clickSubmit()
    cy.validateUploadProgress()
    cy.validateMyLibraryTrack(2, track_name)
    cy.accessMyLibraryTrack(2)
    cy.ClickSplitOptionMenu()
    cy.selectTwoTracks()
    cy.ClickConfirmSplit()
    cy.validateSplitProgress()
    cy.validateIfSongHasTwoTracks()
    cy.logOutWhenMenuIsHidden()
  })

  it('Hiding the Moises Collection', () => {
    cy.fillSignupFormAndSubmit(emailAddress, password)
    cy.validateLoggerUser(emailAddress)
    cy.clickToAdd()
    cy.attachFileHandler(track_file_name)
    cy.validateAttachedTrack(track_file_name)
    cy.validateYourTrackName(track_name)
    cy.clickNext()
    cy.clickSubmit()
    cy.validateUploadProgress()
    cy.validateMyLibraryTrack(2, track_name)
    cy.hideCollection()
    cy.validateCollectionIsHidden()
    cy.logOut()
  })

  it('Deleting the Uploaded Song', () => {
    cy.fillSignupFormAndSubmit(emailAddress, password)
    cy.validateLoggerUser(emailAddress)
    cy.clickToAdd()
    cy.attachFileHandler(track_file_name)
    cy.validateAttachedTrack(track_file_name)
    cy.validateYourTrackName(track_name)
    cy.clickNext()
    cy.clickSubmit()
    cy.validateUploadProgress()
    cy.validateMyLibraryTrack(2, track_name)
    cy.accessMyLibraryTrack(2)
    cy.clickTrackActions()
    cy.clickExcludeToLIbrary()
    cy.clickConfirmExcludeTrack()
    cy.validateMyLibraryTrackWasExcluded(2, track_name)
    cy.validateIfHowToStartExists()
    cy.logOut()
  })

})
