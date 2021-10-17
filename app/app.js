// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here

  // Authorization Events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Game Grid Events
  let currentPlayer = 'X'

  const onBoxClick = (event) => {
    console.log('click')

    const box = $(event.target)

    box.css('background', 'transparent')
    box.text(currentPlayer)

    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  }
  $('.box').on('click', onBoxClick)

  // Game Events
  $('#new-game').on('click', events.onNewGame)
})
