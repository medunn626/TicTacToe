'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

// TO-DO:
// Game API functions
// Make all files modular
// How to prevent refresh button from logging user out and making them sign in again
// Styling
// Make it look better in desktop (col length)
// Footer content

const modal = document.getElementById('modal')

const openModal = function () {
  modal.style.display = 'block'
}

const closeModal = function () {
  modal.style.display = 'none'
  $('.modal-failure').text('')
}

const value = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
let cells = []
let currentPlayer
let xScore = 0
let oScore = 0
let turn = 0
let turnsTaken = 0
let turnsLeft = 9

const keepScore = function () {
  if (xScore < 1 && oScore < 1) {
    if (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') {
      xScore++
      $('.success').text('You lost, player O. Don\'t worry. Well, maybe a little.')
      $('#x-score').text(xScore)
    } else if (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') {
      xScore++
      $('.success').text('Woops, O got squashed like a bug!')
      $('#x-score').text(xScore)
    } else if (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') {
      xScore++
      $('.success').text('You had one job, player O!')
      $('#x-score').text(xScore)
    } else if (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') {
      xScore++
      $('.success').text('Excellent...for player X that is.')
      $('#x-score').text(xScore)
    } else if (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') {
      xScore++
      $('.success').text('I guess you can try again, player O.')
      $('#x-score').text(xScore)
    } else if (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') {
      xScore++
      $('.success').text('Are you sure you\'re good at this game, player O?')
      $('#x-score').text(xScore)
    } else if (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') {
      xScore++
      $('.success').text('It\'s a sad day indeed for player O.')
      $('#x-score').text(xScore)
    } else if (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') {
      xScore++
      $('.success').text('Hope you weren\'t betting any money on this player X!')
      $('#x-score').text(xScore)
    } else if (cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') {
      oScore++
      $('.success').text('You lost, player X. Don\'t worry. Well, maybe a little.')
      $('#o-score').text(oScore)
    } else if (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') {
      oScore++
      $('.success').text('Woops, X got squashed like a bug!')
      $('#o-score').text(oScore)
    } else if (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') {
      oScore++
      $('.success').text('You had one job, player X!')
      $('#o-score').text(oScore)
    } else if (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') {
      oScore++
      $('.success').text('Excellent...for player O that is.')
      $('#o-score').text(oScore)
    } else if (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') {
      oScore++
      $('.success').text('I guess you can try again, player X.')
      $('#o-score').text(oScore)
    } else if (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') {
      oScore++
      $('.success').text('Are you sure you\'re good at this game, player X?')
      $('#o-score').text(oScore)
    } else if (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') {
      oScore++
      $('.success').text('It\'s a sad day indeed for player X.')
      $('#o-score').text(oScore)
    } else if (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O') {
      oScore++
      $('.success').text('Hope you weren\'t betting any money on this player X!')
      $('#o-score').text(oScore)
    } else if (turnsTaken === 9 && xScore === 0 && oScore === 0) {
      $('.success').text('And no one wins! Feel free to try again.')
    }
  }
}

const determineCurrentPlayer = function () {
  if (turnsTaken % 2 === 0) {
    currentPlayer = 'X'
  } else {
    currentPlayer = 'O'
  }
  return currentPlayer
}

const incrementTurns = function () {
  turnsTaken = turnsTaken + 1
  turnsLeft = turnsLeft - 1
  turn = turn + 1
}

const resetGame = function () {
  cells = []
  turn = 0
  turnsTaken = 0
  turnsLeft = 9
  xScore = 0
  oScore = 0
  $('#o-score').text(xScore)
  $('#x-score').text(xScore)
}

const getCellId = [
  document.getElementById('0'),
  document.getElementById('1'),
  document.getElementById('2'),
  document.getElementById('3'),
  document.getElementById('4'),
  document.getElementById('5'),
  document.getElementById('6'),
  document.getElementById('7'),
  document.getElementById('8')
]

const resetStyle = function () {
  getCellId[0].className = 'col-xs-4 box'
  getCellId[1].className = 'col-xs-4 box'
  getCellId[2].className = 'col-xs-4 box right'
  getCellId[3].className = 'col-xs-4 box'
  getCellId[4].className = 'col-xs-4 box'
  getCellId[5].className = 'col-xs-4 box right'
  getCellId[6].className = 'col-xs-4 box bottom'
  getCellId[7].className = 'col-xs-4 box bottom'
  getCellId[8].className = 'col-xs-4 box bottom right'
}

const move = function () {
  if (turnsTaken < 9) {
    cells[this.id] = value[turn]
    $(this).text(value[turn])
    $(this).addClass('active')
    incrementTurns()
    determineCurrentPlayer()
    keepScore()
    if (xScore > 0 || oScore > 0) {
      $('div.box').addClass('active')
    } else {
      $('.success').text('Your turn player ' + currentPlayer)
    }
    console.log('Grid Position: ' + this.id)
    console.log('cells array is: ' + cells + ', Turns taken: ' + turnsTaken + ', Turns Left: ' + turnsLeft)
    console.log('Next player is: ' + currentPlayer)
    console.log('X score is: ' + xScore)
    console.log('O score is: ' + oScore)
  }
  return cells
}

const newGame = function () {
  resetStyle()
  resetGame()
  determineCurrentPlayer()
  $('.success').text('Your turn player ' + currentPlayer)
  $('.box').text('')
  console.log('cells array is: ' + cells + ', Turns taken: ' + turnsTaken + ', Turns Left: ' + turnsLeft)
  console.log('Next player is: ' + currentPlayer)
  console.log('X score is: ' + xScore)
  console.log('O score is: ' + oScore)
  return cells
}

const freshGame = function () {
  resetStyle()
  resetGame()
  determineCurrentPlayer()
  $('.box').text('')
  console.log('cells array is: ' + cells + ', Turns taken: ' + turnsTaken + ', Turns Left: ' + turnsLeft)
  console.log('Next player is: ' + currentPlayer)
  console.log('X score is: ' + xScore)
  console.log('O score is: ' + oScore)
  return cells
}

$(() => {
  $('.box').on('click', move)
})

$(() => {
  $('.new-game-button').on('click', newGame)
})

$(() => {
  $('.new-game-button').on('click', newGame)
})

$(() => {
  $('.sign-in').on('submit', freshGame)
})

$(() => {
  $('.trigger-modal-button').on('click', openModal)
})

$(() => {
  $('.close').on('click', closeModal)
})

$(() => {
  events.addHandlers()
})

module.exports = {
  determineCurrentPlayer,
  newGame
}
