import {inputEvenOddAnswer} from '../src/cli.js';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function even(num) {
    return (num % 2 === 0) ? true : false;
}

function checkAnswer(ans) {
    return (ans === "yes") ? true : false;
}

function gameEven() {
    for (let i = 0; i < 3; i += 1) {
        const strAns = 'yes';
        const rand = getRandomInt(100);
        console.log(`Question: ${rand}`);
        const answer = inputEvenOddAnswer();
        if (even(rand) === checkAnswer(answer)) {
            console.log('Correct!');
        } 
        else {
            if ( checkAnswer(answer) !== true) {
                strAns = 'no';
            }
            return `'${checkAnswer(answer)}' is wrong answer ;(. Correct answer was '${strAns}'.
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