'use strict'

const store = require('../store')
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
  $('.success').text('You are now signed in!')
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
  $('.modal-success').text('')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
