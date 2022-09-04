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
gameBoard.addEventListener('click', handleClick)
// /*-------------- Functions ---------------*/

function handleClick(evt) {
    console.log(evt.target.id)
}

function init() {
    messageEl.textContent = "Player 1 select a square!"
    console.log(messageEl)
   // board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    //console.log(board)
    render()
}

const board = [-1, 1, null, 1, -1, null, null, null, -1]


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
    })
// if winner = null, switch between player 1 and 2
if (winner === null) { 
    return (turn === 1 ? messageEl.textContent = `Player 1, it's your turn`
    : messageEl.textContent = `Player 2, it's your turn`)
} else if (winner === "T") {
    return messageEl.textContent = "It's a tie game!"
}   else {
    return (winner === 1 ? messageEl.textContent = "player 1 wins!" : messageEl.textContent = "player 2 wins!")
}
}
init()




// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state


// 4) The state of the game should be rendered to the user


// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function
