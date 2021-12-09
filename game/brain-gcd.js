#!/usr/bin/env node
import {
  greeting, ask, userAnswer, getRandomInt, gcd,
} from '../src/index.js';

function gameGcd() {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const expression = `${num1} ${num2}`;
    ask(expression);
    const answer = userAnswer();
    const result = gcd(num1, num2);
    if (result === Number(answer)) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, `;
    }
  }
  return 'Congratulations, ';
}

const name = greeting();
const game = gameGcd();

console.log(`${game}${name}!`);
