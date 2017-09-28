'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('.success').text('You have successfully signed up!')
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
}

const signInFailure = function (error) {
  console.error(error)
  $('.failure').text('Could not find user with that email and password.')
  $('.success').text('')
}

const changePasswordSuccess = function () {
  $('.success').text('You successfully changed your password.')
  $('.failure').text('')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('.failure').text('Sorry, please try again.')
  $('.success').text('')
}

const signOutSuccess = function () {
  $('.success').text('You have successfully signed out.')
  $('.failure').text('')
  store.user = null
  console.log(store.user)
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
