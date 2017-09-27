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

const value = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
const cells = []
let i = 0
let turnsTaken = 0
let turnsLeft = 9

// Write a function that increments i to the number of turns that have occured
// but stops once it has been determined

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

const move = function () {
  cells[i] = value[i]
  $(this).text(value[i])
  incrementTurns()
  console.log('Cells array is: ' + cells + ', Turns taken: ' + turnsTaken + ', Turns Left: ' + turnsLeft)
  return cells
}

const newGame = function () {
  $('.box').text('')
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
