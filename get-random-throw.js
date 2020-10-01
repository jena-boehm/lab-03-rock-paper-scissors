export function randomThrow() {
    const thrown = Math.ceil(Math.random() * 3);
    if (thrown === 1) {
        return 'rock';
    }
    if (thrown === 2) {
        return 'paper';
    }
    if (thrown === 3) {
        return 'scissors';
    }

}

const resultSpan = document.getElementById('round-results');

export function doesUserWin(userThrow, computerThrow) {
    if (userThrow === 'rock' && computerThrow === 'scissors') {
        resultSpan.textContent = 'Rock beats Scissors!';
        return true;
    } else if (userThrow === 'paper' && computerThrow === 'rock') {
        resultSpan.textContent = 'Paper covers Rock!';
        return true;
    } else if (userThrow === 'scissors' && computerThrow === 'paper') {
        resultSpan.textContent = 'Scissors cuts Paper!';
        return true;
    }
}

export function doesUserLose(computerThrow, userThrow) {
    if (computerThrow === 'rock' && userThrow === 'scissors') {
        resultSpan.textContent = 'Rock beats Scissors!';
    } else if (computerThrow === 'paper' && userThrow === 'rock') {
        resultSpan.textContent = 'Paper covers Rock!';
    } else if (computerThrow === 'scissors' && userThrow === 'paper') {
        resultSpan.textContent = 'Scissors cuts Paper!';
    }
}

export function displayDraw() {
    resultSpan.textContent = 'Draw!';
}