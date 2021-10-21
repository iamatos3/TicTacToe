# General Assembly Game Project

This tic tac toe game project focuses on the following topics which were covered in Unit 1: Web fundamentals topics such as

<li>Unix, Git, Javascript
<li>HTML, CSS, jQuery, Ajax,
<li>Authentication, Sass, Bootstrap

## Wireframe
![Screen Shot 2021-10-08 at 10 37 31 AM](https://user-images.githubusercontent.com/88846920/138191920-626c170c-1c4e-4e2f-a64f-2e24e197ad07.png)


## User Stories Covered

- As a user, I want to be able to Signup, sign in and sign out
- As a user, I want to be able to start a new game
- As a user, I want to be able to play the game with two players
- As a user, I want to know if player 1 or player 2 won
- As a user, I want to the users to play a game again

## How to use this repository

Please fork this repo and run the following commands to get started

- `npm install`
- `grunt serve`

## Deployed Website

[Tic Tac Toe by Ian Matos](https://iamatos3.github.io/tictactoe/)

## Deployed Application
![Screen Shot 2021-10-20 at 8 24 53 PM](https://user-images.githubusercontent.com/88846920/138191854-0fc44629-7f95-4a45-a55a-fdb16e711e5b.png)
![Screen Shot 2021-10-20 at 8 26 58 PM](https://user-images.githubusercontent.com/88846920/138191860-5f20b025-e0a2-4647-aa16-71e2e036d89f.png)
![Screen Shot 2021-10-20 at 8 27 10 PM](https://user-images.githubusercontent.com/88846920/138191870-11eb8046-c93d-49c9-9e7e-9f052a75ee9c.png)


## Project Requirements Met
- [X] Hosted and deployed on GitHub Pages, not Github Enterprise.
- [X] Sharing your work through a git repository hosted on Github.
- [X] Making frequent, cohesive commits dating back to the **first day** of the project week.

## Application Requirements

- [X] User must be able to sign up
- [X] User must be able to sign in
- [X] Signed in user must be able to sign out
- [X] Signed in user user must be able to start a tic tac toe game
- [X] When playing game, user must start as X and then rotate between X and O
- [X] When playing game, user must only select available spaces on the board
- [X] When playing game, user must be notified of win or tie
- [X] Once a game is over, user must not be able to add to that board
- [X] Once a game is over, user must be able to play again
- [X] Sign up [POST /sign-up](https://git.generalassemb.ly/seir-flex-831/game-project-api/blob/master/docs/user.md#signup)
- [X] Sign in [POST /sign-in](https://git.generalassemb.ly/seir-flex-831/game-project-api/blob/master/docs/user.md#signin)
- [X] Sign out [DELETE /sign-out](https://git.generalassemb.ly/seir-flex-831/game-project-api/blob/master/docs/user.md#signout)
- [X] New game [POST /games](https://git.generalassemb.ly/seir-flex-831/game-project-api/blob/master/docs/game.md#create)
- [X] Display a message to the user after sign in, sign up, and sign out success or failure.
- [X] Sign in and sign up forms must clear after submit success

## Other Requirements

- [X] **Do not** delete your repository at any time or start over.
- [X] **Do not** rely on refreshing the page for any functionality.
- [X] **Do not** have any user-facing bugs.
      -  Display non-functional buttons, nor buttons that do not successfully complete a task.
      -  Show actions at inappropriate times (example: sign out button when not signed in).

## Future Improvements

- UI improvements - Responsive for all screen sizes
- Add Features:
  - Track Game id
  - Creating a scoreboard for how many wins each player has won
  - Do not display console logs, errors or warnings in the console.
