// /*---------------- Constants --------------------*/



// /*---------------- Variables (state) -----------------*/

const board = [null, null, null, null, null, null, null, null, null,]
//state of the board
// const turn =
// //track whose turn it is
// let winner =
//represent if anyone has won, or if there is a tie

// /*------------ Cached Element References -------------*/
const gameBoard = document.querySelector(".board")
const squareEls = document.querySelectorAll(".gs")
const resetB = document.querySelector("#reset-button")
const messageEl = document.querySelector("#message")


// /*----------- Event Listeners ----------------*/

messageEl.addEventListener('click', handleClick)
//squareEls.addEventListener('click', handleClick)
// /*-------------- Functions ---------------*/

function init() {
    messageEl.textContent = "Player 1 select a square!"
    console.log(messageEl)
    let board = [null, null, -1, null, null, null, 1, null, null,]
    turn = 1
    winner = null
    console.log(board)
    render()
}

function render() { 
    //display updated state as changes are made
board.forEach(function(element, index) {
    if (element === 1){
        squareEls[index].textContent = 'X'
    } else if (element === -1){
        squareEls[index].textContent = "O"
        }
        console.log(element)
        console.log(board[index])
        console.log(squareEls[index])
    })
    }

    init()

function handleClick(){
    console.log("you got this!")
}

// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state


// 4) The state of the game should be rendered to the user


// 5) Define the required constants

winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 4, 8],
[2, 4, 6]
]

//***********************************************





// 6) Handle a player clicking a square with a `handleClick` function












// 7) Build the `getWinner` function
//     // initialized by selections = 1 of 8 combinations


// //? 8) Create Reset functionality



