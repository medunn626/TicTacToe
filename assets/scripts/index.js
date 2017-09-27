'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// TO-DO:
// Prevent div from becoming clickable when there is a value
// Prevent all divs from being clickable after turns is 9
// Prevent all divs from being clickable after a game is won
// When a match is made, strikethrough values and add to player scores
// Edit cells to not be copy of value, it needs to be specific for scoring to work
// Make files modular
// Access API

const value = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
const cells = []
let score = 0
let i = 0
let turnsTaken = 0
let turnsLeft = 9

const keepScore = function () {
  if (
    (cells[0] === cells[1] === cells[2]) ||
    (cells[3] === cells[4] === cells[5]) ||
    (cells[6] === cells[7] === cells[8]) ||
    (cells[0] === cells[3] === cells[6]) ||
    (cells[1] === cells[4] === cells[7]) ||
    (cells[2] === cells[5] === cells[8]) ||
    (cells[0] === cells[4] === cells[8]) ||
    (cells[2] === cells[4] === cells[6])) {
    score++
  }
  return score
}

const incrementTurns = function () {
  turnsTaken = turnsTaken + 1
  turnsLeft = turnsLeft - 1
  i = i + 1
}

const resetTurns = function () {
  i = 0
  turnsTaken = 0
  turnsLeft = 9
}

const getResetStyle = [
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

const doResetStyle = function () {
  getResetStyle[0].className = 'col-xs-4 box'
  getResetStyle[1].className = 'col-xs-4 box'
  getResetStyle[2].className = 'col-xs-4 box right'
  getResetStyle[3].className = 'col-xs-4 box'
  getResetStyle[4].className = 'col-xs-4 box'
  getResetStyle[5].className = 'col-xs-4 box right'
  getResetStyle[6].className = 'col-xs-4 box bottom'
  getResetStyle[7].className = 'col-xs-4 box bottom'
  getResetStyle[8].className = 'col-xs-4 box bottom right'
}

const move = function () {
  cells[i] = value[i]
  $(this).text(value[i])
  this.className += ' active'
  incrementTurns()
  keepScore()
  console.log('Cells array is: ' + cells + ', Turns taken: ' + turnsTaken + ', Turns Left: ' + turnsLeft)
  console.log('Score: ' + score)
  return cells
}

const newGame = function () {
  $('.box').text('')
  doResetStyle()
  resetTurns()
  console.log('Cells array is: ' + cells + ', Turns taken: ' + turnsTaken + ', Turns Left: ' + turnsLeft)
  return cells
}

$(() => {
  $('.box').on('click', move)
})

$(() => {
  $('.new-game-button').on('click', newGame)
})
