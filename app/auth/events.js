const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

const store = require('../store')

// Authorization Functions
const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

function onSignIn (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Game Button Function
const onNewGame = () => {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.newGameFailure)
}

// Game Function
const checkWin = function (currentPlayer, gameBoard) {
  if (gameBoard[0] === currentPlayer &&
      gameBoard[1] === currentPlayer &&
      gameBoard[2] === currentPlayer
  ) {
    console.log(currentPlayer, 'Wins!')
    window.alert(`Player ${currentPlayer} Wins!`);
    store.endGame = true
  } else if (
    gameBoard[0] === currentPlayer &&
    gameBoard[3] === currentPlayer &&
    gameBoard[6] === currentPlayer
  ) {
    console.log(currentPlayer, 'Wins!')
    window.alert(`Player ${currentPlayer} Wins!`);
    store.endGame = true
  } else if (
    gameBoard[0] === currentPlayer &&
    gameBoard[4] === currentPlayer &&
    gameBoard[8] === currentPlayer
  ) {
    console.log(currentPlayer, 'Wins!')
    window.alert(`Player ${currentPlayer} Wins!`);
    store.endGame = true
  } else if (
    gameBoard[1] === currentPlayer &&
    gameBoard[4] === currentPlayer &&
    gameBoard[7] === currentPlayer
  ) {
    console.log(currentPlayer, 'Wins!')
    window.alert(`Player ${currentPlayer} Wins!`);
    store.endGame = true
  } else if (
    gameBoard[2] === currentPlayer &&
    gameBoard[5] === currentPlayer &&
    gameBoard[8] === currentPlayer
  ) {
    console.log(currentPlayer, 'Wins!')
    window.alert(`Player ${currentPlayer} Wins!`);
    store.endGame = true
  } else if (
    gameBoard[2] === currentPlayer &&
    gameBoard[4] === currentPlayer &&
    gameBoard[6] === currentPlayer
  ) {
    console.log(currentPlayer, 'Wins!')
    window.alert(`Player ${currentPlayer} Wins!`);
    store.endGame = true
  } else if (
    gameBoard[3] === currentPlayer &&
    gameBoard[4] === currentPlayer &&
    gameBoard[5] === currentPlayer
  ) {
    console.log(currentPlayer, 'Wins!')
    window.alert(`Player ${currentPlayer} Wins!`)
    store.endGame = true
  } else if (
    gameBoard[6] === currentPlayer &&
    gameBoard[7] === currentPlayer &&
    gameBoard[8] === currentPlayer
  ) {
    console.log(currentPlayer, 'Wins!')
    window.alert(`Player ${currentPlayer} Wins!`)
    store.endGame = true
  } else if (
    !gameBoard.includes("")
  ) {
    console.log('The game is a Draw. Play again!')
    window.alert('The game is a Draw. Play again!')
    store.endGame = true
  } else {
    console.log('Game is still in play. Keep going!')
    store.endGame = false
  }
}

// const winningCombos = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8]
// ]

// const checkPlayer = (n) => {
//   return winningCombos.some(win => {
//     winningCombos.every(cell => gameBoard[cell] === n)
//   })
// }

// const winnerCheck = (a, b) => {
//   return checkPlayer(a) || checkPlayer(b)
// }

// winnerCheck('X', 'O')

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  checkWin
}
