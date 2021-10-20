// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./auth/events')

const store = require('./store')

$(() => {
  // your JS code goes here

  // Authorization Events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Game Grid Events
  let currentPlayer = 'X'
  const gameBoard = ["", "", "", "", "", "", "", "", ""]
  store.endGame = false


  const onBoxClick = (event) => {
    console.log(store.endGame)
   if (!store.endGame) {
    console.log('click')

    const box = $(event.target)

    box.css('background', 'transparent')
    box.text(currentPlayer)
    gameBoard[event.target.id] = currentPlayer
    gameEvents.checkWin(currentPlayer, gameBoard)

    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
    // winnerCheck()
    // $(this).addClass(currentPlayer)
    console.log(gameBoard)
  }}
  $('.box').on('click', onBoxClick)

  // const winnerCheck = () => {
  //   const box = $(event.target)
  //   if (box.text === 'X') {
  //     console.log('hit')
  //   }
  // }

  // Game Events
  $('#new-game').on('click', gameEvents.onNewGame)
})
