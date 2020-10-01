export function randomThrow () {
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

export function doesUserWin(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        return 'draw';
    }
    if (userThrow === 'rock' && computerThrow === 'paper') {
        return 'lose';
    }
    if (userThrow === 'rock' && computerThrow === 'scissors') {
        return 'win';
    }
    if (userThrow === 'paper' && computerThrow === 'scissors') {
        return 'lose';
    }
    if (userThrow === 'paper' && computerThrow === 'rock') {
        return 'win';
    }
    if (userThrow === 'scissors' && computerThrow === 'rock') {
        return 'lose';
    }
    if (userThrow === 'scissors' && computerThrow === 'paper') {
        return 'win';
    }
}