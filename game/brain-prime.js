#!/usr/bin/env node
import {
  greeting, ask, userAnswer, getRandomInt,
} from '../src/index.js';

function gamePrime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(100);
    let result = 'yes';
    for (let j = 2; j <= num; j += 1) {
      if (num % j === 0 && j !== num) {
        result = 'no';
      }
    }
    ask(num);
    const answer = userAnswer();
    if (result === answer) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, `;
    }
  }
  return 'Congratulations, ';
}

const name = greeting();
const game = gamePrime();

console.log(`${game}${name}!`);
