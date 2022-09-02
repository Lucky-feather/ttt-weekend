/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const squares = document.querySelector(".board")
const resetB = document.querySelector("#reset")
const guide = document.querySelector("h2")

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

1) Define the required variables used to track the state of the game
//init  playgame? isWinner


2) Store cached element references



3) Upon loading, the game state should be initialized, and a function should be 
   called to render this game state

4) The state of the game should be rendered to the user

5) Define the required constants

6) Handle a player clicking a square with a `handleClick` function

7) Build the `getWinner` function
    // initialized by selections = 1 of 8 combinations


8) Create Reset functionality

function init() {
isWinner = false
squares = ''

}

function resetG() {

}


winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
