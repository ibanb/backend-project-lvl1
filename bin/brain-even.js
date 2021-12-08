#!/usr/bin/env node
import { userAnswer, greeting } from '../src/cli.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function even(num) {
  return (num % 2 === 0) ? 'yes' : 'no';
}

function gameEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const rand = getRandomInt(100);
    console.log(`Question: ${rand}`);
    const answer = userAnswer();
      if (even(rand) === answer) {
        console.log('Correct!');
      } 
      else {
        return `'${answer}' is wrong answer ;(. Correct answer was '${even(rand)}'. Let's try again, `;
      }
  }
return 'Congratulations, ';
}

const name = greeting();
const game = gameEven();

console.log(`${game}${name}!`);

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