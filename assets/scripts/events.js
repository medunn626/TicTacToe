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

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const games = data.games
  if (games.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
  }
}

const onGetGames = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onError)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const games = data.games
  if (games.id.length !== 0) {
    api.show(games.id)
      .then(ui.onGetGamesSuccess)
      .catch(ui.onError)
  }
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').on('submit', onCreateGame)
  $('.box').on('click', onUpdateGame)
  $('#get-games').on('submit', onGetGames)
  $('#get-games').on('submit', onGetGame)
}

module.exports = {
  addHandlers
}
