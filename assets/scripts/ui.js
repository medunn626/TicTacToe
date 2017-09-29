'use strict'

const store = require('./store')

const modal = document.getElementById('modal')

const signUpSuccess = function (data) {
  console.log(data)
  $('.success').text('You are now a member! Please sign in.')
  $('.failure').text('')
}

const signUpFailure = function (error) {
  console.error(error)
  $('.failure').text('Please try again. This user exists already or you need to re-enter each field correctly.')
  $('.success').text('')
}

const signInSuccess = function (data) {
  console.log(data)
  $('.success').text('You are now signed in. It\'s your turn player X')
  $('.failure').text('')
  store.user = data.user
  $('div.main-area').removeClass('hidden-content')
  $('div.sign-up').addClass('hidden-content')
  $('div.sign-in').addClass('hidden-content')
}

const signInFailure = function (error) {
  console.error(error)
  $('.failure').text('Could not find user with that email and password.')
  $('.success').text('')
}

const changePasswordSuccess = function () {
  modal.style.display = 'none'
  $('.success').text('You successfully changed your password.')
  $('.failure').text('')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('.modal-failure').text('Sorry, please try again.')
}

const signOutSuccess = function () {
  $('.success').text('You have successfully signed out.')
  $('.failure').text('')
  store.user = null
  console.log(store.user)
  $('div.main-area').addClass('hidden-content')
  $('div.sign-up').removeClass('hidden-content')
  $('div.sign-in').removeClass('hidden-content')
}

const signOutFailure = function (error) {
  console.error(error)
  $('.failure').text('Sorry, please try again.')
  $('.success').text('')
}

const onCreateSuccess = function () {
  $('.success').text('New game started.')
  $('.failure').text('')
}

const onError = function () {
  $('.failure').text('There was an issue with your request.')
  $('.success').text('')
}

// const onUpdateSuccess = function () {
//   $('.success').text('Your turn player' + index.currentPlayer)
//   $('.failure').text('')
// }

const onGetGamesSuccess = function (data) {
  if (data.games) {
    console.table(data.games)
    $('.failure').text('')
    data.games.forEach((game) => $('.success').append(`${game.id}: ${game.cells}, ${game.over}, ${game.player_x}, ${game.player_o}<br>`))
  } else {
    console.log('data is ', data)
    $('.failure').text('')
    data.games.forEach((game) => $('.success').append(`${game.id}: ${game.cells}<br>`))
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
  onCreateSuccess,
  onError,
  // onUpdateSuccess,
  onGetGamesSuccess
}
