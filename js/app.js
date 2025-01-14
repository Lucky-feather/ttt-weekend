// /*---------------- Constants --------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
    ]
    // /*---------------- Variables (state) -----------------*/
let board = [null, null, null, null, null, null, null, null, null]
let turn 
let winner 
// /*------------ Cached Element References -------------*/
const gameBoard = document.querySelector(".board")
const squareEls = document.querySelectorAll(".gs")
const resetBtnEl = document.querySelector("#reset-button")
const messageEl = document.querySelector("#message")
// /*----------- Event Listeners ----------------*/
resetBtnEl.addEventListener('click', resetClick)
gameBoard.addEventListener('click', handleClick)
// /*-------------- Functions ---------------*/

function init() {
    messageEl.textContent = "Player 1 select a square!"
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    player = "player 1"
    render()
}

init()

function resetClick() {
    init()
}

function handleClick(evt) {
    sqIdx = parseInt(evt.target.id[2])
    if (board[sqIdx] != null) {
    return messageEl.textContent = "occupied, try a different square"
    }
    else if (winner != null) {
    return
    }
    else {
    board.splice(sqIdx, 1, turn)
    }
    getWinner()
    turn = (turn * -1)
render()
}

function render() {
board.forEach(function(object, index) {
    if 
    (object === 1)
        {squareEls[index].textContent = 'X'
    } else if ( object=== -1) {
    squareEls[index].textContent = "O"
    } else {
    squareEls[index].textContent = null}
})

    if (turn === 1) {
    player = "Player 1",
    winName = "player 2"
}
    else {
    player = "Player 2",
    winName = "Player 1"
}

    if (winner === null) {
    messageEl.textContent = `${player} select a square`
    } else if (winner === "T") {
    messageEl.textContent = "It's a tie! Try again"
} else { messageEl.textContent = `Great job ${winName}, you win!`
}
}

function getWinner() {
winningCombos.forEach(function(combo) {
    sum = Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]])
    if (sum === 3) {
    winner = turn
}
    else if ((board.includes(null) === false) && (winner === null)) {
    winner = "T"
}
    })} 

