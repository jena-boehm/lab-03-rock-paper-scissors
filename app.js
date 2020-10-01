// import functions and grab DOM elements
import { randomThrow, doesUserWin, doesUserLose, displayDraw } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const winSpan = document.getElementById('win-span');
const drawSpan = document.getElementById('draw-span');
const lossSpan = document.getElementById('loss-span');
const totalSpan = document.getElementById('total-span');
const resetButton = document.getElementById('reset-button');
const resetSpan = document.getElementById('reset-count');


// initialize state
let wins = 0;
let draws = 0;
let losses = 0;
let total = 0;
let resets = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    total++;

    let computerThrow = randomThrow();
    const checkedRadioButton = document.querySelector(':checked');
    const userThrow = checkedRadioButton.value;

    if (computerThrow === userThrow) {
        displayDraw();
        draws++;

        drawSpan.textContent = draws;
        totalSpan.textContent = total;
        
    } else if (doesUserWin(userThrow, computerThrow)) {
        wins++;

        winSpan.textContent = wins;
        totalSpan.textContent = total;

    } else if (!doesUserWin(userThrow, computerThrow)) {
        doesUserLose(computerThrow, userThrow);
        losses++;

        lossSpan.textContent = losses;
        totalSpan.textContent = total;
    }


}); 


resetButton.addEventListener('click', () => {
    resets++;
    resetSpan.textContent = resets;

    wins = 0;
    draws = 0;
    losses = 0;
    total = 0;

    winSpan.textContent = wins;
    drawSpan.textContent = draws;
    lossSpan.textContent = losses;
    totalSpan.textContent = total;
});