// /*-------------------------------- Constants --------------------------------*/



// /*---------------------------- Variables (state) ----------------------------*/



// /*------------------------ Cached Element References ------------------------*/
const squares = document.querySelectorAll("div")
const squareArray = Array.from(squares)
////const box = document.querySelector("div")
// const resetB = document.querySelector("#reset")
const messageEl = document.querySelector("h2")

// /*----------------------------- Event Listeners -----------------------------*/
// form.addEventListener('reset', init)

// /*-------------------------------- Functions --------------------------------*/

// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state
init()
console.log(messageEl)
console.log(squares)
console.log(squareArray) 


// 4) The state of the game should be rendered to the user

// 5) Define the required constants



// 6) Handle a player clicking a square with a `handleClick` function

function init() {
messageEl.textContent = "Player 1 select a square!"
}

function render() {

}
//display updated state as changes are made
//* squareArray = div#sq0, div#sq1, div#sq2, div#sq3, div#sq4, div#sq5, div#sq6, div#sq7, div#sq8]






// 7) Build the `getWinner` function
//     // initialized by selections = 1 of 8 combinations


// //? 8) Create Reset functionality

// function init() {
//     isWinner = false
//     squares = null
//     messageEl.innerText = "Player One, select a square"
// }


// winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]
