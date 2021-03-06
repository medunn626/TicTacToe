'use strict'

const store = require('./store')

const modal = document.getElementById('modal')
const email = document.getElementById('email')
const password = document.getElementById('password')
const newEmail = document.getElementById('new-email')
const newPassword = document.getElementById('new-password')
const newConfirm = document.getElementById('new-confirm')
const passwordChangeOld = document.getElementById('old')
const passwordChangeNew = document.getElementById('new')

const signUpSuccess = function (data) {
  $('.success').text('You are now a member! Please sign in.')
  $('.failure').text('')
}

const signUpFailure = function () {
  $('.failure').text('Please try again. This user exists already or you need to re-enter each field correctly.')
  $('.success').text('')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('div.main-area').removeClass('hidden-content')
  $('div.display-game-id').removeClass('hidden-content')
  $('div.sign-up').addClass('hidden-content')
  $('div.sign-in').addClass('hidden-content')
}

const signInFailure = function () {
  $('.failure').text('Could not find user with that email and password.')
  $('.success').text('')
}

const changePasswordSuccess = function () {
  modal.style.display = 'none'
  $('.success').text('You successfully changed your password.')
  $('.failure').text('')
  passwordChangeOld.value = ''
  passwordChangeNew.value = ''
  $('.modal-failure').text('')
}

const changePasswordFailure = function () {
  $('.modal-failure').text('Sorry, please try again.')
}

const signOutSuccess = function () {
  store.user = null
  $('.success').text('You have successfully signed out.')
  $('.failure').text('')
  email.value = ''
  password.value = ''
  newEmail.value = ''
  newPassword.value = ''
  newConfirm.value = ''
  $('div.main-area').addClass('hidden-content')
  $('div.display-game-id').addClass('hidden-content')
  $('div.sign-up').removeClass('hidden-content')
  $('div.sign-in').removeClass('hidden-content')
}

const signOutFailure = function () {
  $('.failure').text('Sorry, please try again.')
  $('.success').text('')
}

const onCreateSuccessSignIn = function (data) {
  store.game = data.game
  $('div.display-game-id').removeClass('hidden-content')
  $('.display').text('')
  $('.display').text('Game ID: ' + store.game.id)
  $('.success').text('You are now signed in. It\'s your turn player X.')
  $('.failure').text('')
}

const onCreateSuccess = function (data) {
  store.game = data.game
  $('div.display-game-id').removeClass('hidden-content')
  $('.display').text('')
  $('.display').text('Game ID: ' + store.game.id)
  $('.success').text('New game started. It\'s your turn player X.')
  $('.failure').text('')
}

const onError = function () {
  $('.failure').text('There was an issue with your request.')
  $('.success').text('')
}

const onUpdateSuccess = function (data) {
  data.game = store.game
}

const onUpdateError = function () {
  $('.success').text('')
  $('.failure').text('There was an issue processing your move.')
  $('.box').text('')
  $('div.box').removeClass('active')
}

const onErrorModal = function () {
  $('.game-modal-failure').text('There was an issue with your request.')
  $('#see-game').text('')
}

const onGetGamesSuccess = function (data) {
  data.game = store.game
  const count = data.games.length
  $('.game-modal-failure').text('')
  $('#complete').text('You\'ve completed a total of ' + count + ' games.')
  if (data.game.winner === null || data.game.turns === undefined) {
    $('#previous').text('')
    $('#previous').append(`Game currently in progress.`)
  } else {
    $('#previous').text('')
    $('#previous').append(`Last Game Result: ${data.game.winner} with ${data.game.turns} turns.`)
  }
}

const onGetGameSuccess = function (data) {
  $('.game-modal-failure').text('')
  $('#see-game').text('')
  if (data.game.over === true) {
    $('#see-game').append(`Game # ${data.game.id}: Complete`)
  } else {
    $('#see-game').append(`Game # ${data.game.id}: Incomplete`)
  }
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onCreateSuccessSignIn,
  onCreateSuccess,
  onError,
  onUpdateSuccess,
  onUpdateError,
  onErrorModal,
  onGetGamesSuccess,
  onGetGameSuccess
}
