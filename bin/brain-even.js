import {inputEvenOddAnswer} from '../src/cli.js';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function even(num) {
    return (num % 2 === 0) ? 'yes' : 'no';
}

function checkAnswer(ans) {
    return (ans === "yes") ? 'yes' : 'no';
}

function gameEven() {
    for (let i = 0; i < 3; i += 1) {
        const rand = getRandomInt(100);
        console.log(`Question: ${rand}`);
        const answer = inputEvenOddAnswer();
            if (even(rand) === answer) {
                console.log('Correct!');
            } 
            else {
                return `'${answer}' is wrong answer ;(. Correct answer was '${even(rand)}'.
                Let's try again, `;
            }
    }
    return 'Congratulations, ';
}

export default gameEven;
 


// Answer "yes" if the number is even, otherwise answer "no".
// Question: 15
// Your answer: no
// Correct!
// Question: 6
// Your answer: yes
// Correct!
// Question: 7
// Your answer: no
// Correct!
// Congratulations, Sam!