// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score")
const score_board = document.getElementById("score-board")

score_board.innerText = score;

const play_again_button = document.getElementById("play-again-button")
play_again_button .onclick=()=>{
    location.href = 'game.html'
}