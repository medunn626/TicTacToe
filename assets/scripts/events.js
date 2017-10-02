'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
    .then(onCreateGameSignIn)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGameSignIn = function () {
  api.create()
    .then(ui.onCreateSuccessSignIn)
    .catch(ui.signInFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = event.target
  const game = data.game
  api.update(game)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateError)
}

const onGetGames = function () {
  event.preventDefault()
  api.index()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onErrorModal)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  api.show(game.id)
    .then(ui.onGetGameSuccess)
    .catch(ui.onErrorModal)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('.new-game-button').on('click', onCreateGame)
  $('#get-games').on('click', onGetGames)
  $('#get-game').on('submit', onGetGame)
}

module.exports = {
  addHandlers,
  onUpdateGame
}
