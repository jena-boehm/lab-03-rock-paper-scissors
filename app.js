// import functions and grab DOM elements
import { randomThrow, doesUserWin } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const resultSpan = document.getElementById('round-results');
const winSpan = document.getElementById('win-span');
const drawSpan = document.getElementById('draw-span');
const lossSpan = document.getElementById('loss-span');
const totalSpan = document.getElementById('total-span');
const resetButton = document.getElementById('reset-button');

// initialize state
let wins = 0;
let draws = 0;
let losses = 0;
let total = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    total++;

    let computerThrow = randomThrow();
    const checkedRadioButton = document.querySelector(':checked');
    const userThrow = checkedRadioButton.value;

    if (userThrow === computerThrow) {
        draws++;

        return resultSpan.textContent = 'Draw!',
        winSpan.textContent = wins,
        drawSpan.textContent = draws,
        lossSpan.textContent = losses,
        totalSpan.textContent = total;
    }

    if (userThrow === 'rock' && computerThrow === 'paper') {
        losses++;

        return resultSpan.textContent = 'Lose! Paper beats rock.',
        winSpan.textContent = wins,
        drawSpan.textContent = draws,
        lossSpan.textContent = losses,
        totalSpan.textContent = total;
    }

    if (userThrow === 'rock' && computerThrow === 'scissors') {
        wins++;

        return resultSpan.textContent = `Win! Rock beats scissors.`,
        winSpan.textContent = wins,
        drawSpan.textContent = draws,
        lossSpan.textContent = losses,
        totalSpan.textContent = total;
    }

    if (userThrow === 'paper' && computerThrow === 'scissors') {
        losses++;

        return resultSpan.textContent = 'Lose! Scissors beat paper.',
        winSpan.textContent = wins,
        drawSpan.textContent = draws,
        lossSpan.textContent = losses,
        totalSpan.textContent = total;
    }

    if (userThrow === 'paper' && computerThrow === 'rock') {
        wins++;

        return resultSpan.textContent = 'Win! Paper beats rock.',
        winSpan.textContent = wins,
        drawSpan.textContent = draws,
        lossSpan.textContent = losses,
        totalSpan.textContent = total;
    }

    if (userThrow === 'scissors' && computerThrow === 'rock') {
        losses++;

        return resultSpan.textContent = 'Lose! Rock beats scissors.',
        winSpan.textContent = wins,
        drawSpan.textContent = draws,
        lossSpan.textContent = losses,
        totalSpan.textContent = total;
    }

    if (userThrow === 'scissors' && computerThrow === 'paper') {
        wins++;

        return resultSpan.textContent = 'Win! Scissors beat paper.',
        winSpan.textContent = wins,
        drawSpan.textContent = draws,
        lossSpan.textContent = losses,
        totalSpan.textContent = total;
    }

}); 

resetButton.addEventListener('click', () => {
    document.location.reload();
});