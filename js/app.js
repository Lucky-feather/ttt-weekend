// /*---------------- Constants --------------------*/



// /*---------------- Variables (state) -----------------*/

//const board = [null, null, null, null, null, null, null, null, null,]
//state of the board
// const turn =
// //track whose turn it is
// let winner =
//represent if anyone has won, or if there is a tie
winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]

// /*------------ Cached Element References -------------*/
const gameBoard = document.querySelector(".board")
const squareEls = document.querySelectorAll(".gs")
const resetB = document.querySelector("#reset-button")
const messageEl = document.querySelector("#message")


// /*----------- Event Listeners ----------------*/

//messageEl.addEventListener('click', handleClick)
//squareEls.addEventListener('click', handleClick)
// /*-------------- Functions ---------------*/

//board[index] = squareEls[index]

function init() {
    messageEl.textContent = "Player 1 select a square!"
    console.log(messageEl)
   // board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    //console.log(board)
    
}


const board = [-1, 1, null, 1, -1, null, null, null, -1]
render()

function render() { 
board.forEach(function(_num, index) {
    // if (_num != null){
    //     messageEl.textContent = "This square is already occupied.  Try a different one"
    // }
    if (_num === 1){
      squareEls[index].textContent = 'X'
    } else if (_num === -1){
    squareEls[index].textContent = "O"
    } else {
        squareEls[index].textContent = null
    }
        
        console.log(_num)
        console.log(board[index])
        console.log(squareEls[index])
    }) }

let player1 = winner

function isWinner() {
return winner = player1 || player2 ?  
messageEl.textContent = `${winner} wins!`
: messageEl.textContent = `${player} it's your turn`
}

init()
isWinner()

function handleClick(){
    console.log("clicked on something")
}

// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state


// 4) The state of the game should be rendered to the user


// 5) Define the required constants

//***********************************************





// 6) Handle a player clicking a square with a `handleClick` function












// 7) Build the `getWinner` function