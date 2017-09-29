'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = function (newGameData) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    data: newGameData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (updateGameData) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + updateGameData.games.id,
    method: 'PATCH',
    data: updateGameData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (input) {
  return $.ajax({
    url: config.apiOrigin + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  create,
  update,
  index,
  show
}
