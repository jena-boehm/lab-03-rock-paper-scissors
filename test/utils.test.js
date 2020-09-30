// IMPORT MODULES under test here:
import { randomThrow, doesUserWin } from '../get-random-throw.js';

const test = QUnit.test;

test('computer should randomly throw rock, paper, or scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = randomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});

test('doesUserWin should return draw if the userThrow is the same as computerThrow', (expect) => {
    const userThrow = 'rock';
    const computerThrow = 'rock';
    const expected = 'draw';

    const actual = doesUserWin(userThrow, computerThrow);

    expect.equal(actual, expected);
});

test('doesUserWin should return win if the userThrow is rock and the computerThrow is scissors', (expect) => {
    const userThrow = 'rock';
    const computerThrow = 'scissors';
    const expected = 'win';

    const actual = doesUserWin(userThrow, computerThrow);

    expect.equal(actual, expected);
});

test('doesUserWin should return lose if the userThrow is paper and the computerThrow is scissors', (expect) => {
    const userThrow = 'paper';
    const computerThrow = 'scissors';
    const expected = 'lose';

    const actual = doesUserWin(userThrow, computerThrow);

    expect.equal(actual, expected);
});

