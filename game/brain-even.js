#!/usr/bin/env node
import {
  userAnswer, greeting, ask, getRandomInt,
} from '../src/index.js';

function even(num) {
  return (num % 2 === 0) ? 'yes' : 'no';
}
function gameEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const rand = getRandomInt(100);
    ask(rand);
    const answer = userAnswer();
    if (even(rand) === answer) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${even(rand)}'. Let's try again, `;
    }
  }
  return 'Congratulations, ';
}

const name = greeting();
const game = gameEven();

console.log(`${game}${name}!`);

export default gameEven;
