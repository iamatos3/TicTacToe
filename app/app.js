// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require("./auth/events")
// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require("./auth/events")

const store = require("./store")

$(() => {
  // your JS code goes here

  // Authorization Events
  $("#sign-up").on("submit", authEvents.onSignUp)
  $("#sign-in").on("submit", authEvents.onSignIn)
  $("#change-password").on("submit", authEvents.onChangePassword)
  $("#sign-out").on("click", authEvents.onSignOut)

  // Game Grid Events
  store.currentPlayer = "X"
  store.gameBoard = ["", "", "", "", "", "", "", "", ""]
  store.endGame = false;

  store.currentPlayer = "X"

  const onBoxClick = (event) => {
    console.log(store.endGame);
    if (!store.endGame) {
      console.log("click");

      const box = $(event.target);

      box.css("background", "transparent");
      box.text(store.currentPlayer);
      store.gameBoard[event.target.id] = store.currentPlayer;
      gameEvents.checkWin(store.currentPlayer, store.gameBoard);

      store.currentPlayer = store.currentPlayer === "O" ? "X" : "O"
      // winnerCheck()
      // $(this).addClass(currentPlayer)
      console.log(store.gameBoard)
    }
  }
  $(".box").on("click", onBoxClick)

  // $(".sign-up-btn").on("click", onBoxClick);

  // const showSignUp = () => {};

  // const showSignIn = () => {
  //   $('#before-sign-in').hide()
  // }
  // $('.sign-in-btn').on('click', showSignIn)

  // const winnerCheck = () => {
  //   const box = $(event.target)
  //   if (box.text === 'X') {
  //     console.log('hit')
  //   }
  // }

  // Game Events
  $("#new-game").on("click", gameEvents.onNewGame);
});
