#!/usr/bin/env node
import {
  greeting, ask, userAnswer, getRandomInt,
} from '../src/index.js';

function gameCalc() {
  const operators = ['+', '-', '*'];
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    let result = 0;
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const random = Math.floor(Math.random() * operators.length);
    const expression = `${num1} ${operators[random]} ${num2}`;
    ask(expression);
    switch (operators[random]) {
      case '+': result = num1 + num2;
        break;
      case '-': result = num1 - num2;
        break;
      case '*': result = num1 * num2;
        break;
      default: console.log('');
        break;
    }
    const answer = userAnswer();
    if (result === Number(answer)) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, `;
    }
  }
  return 'Congratulations, ';
}

const name = greeting();
const game = gameCalc();
console.log(`${game}${name}!`);
