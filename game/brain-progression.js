#!/usr/bin/env node
import {
  greeting, ask, userAnswer, getRandomInt,
} from '../src/index.js';

function gameProgression() {
  for (let j = 0; j < 3; j += 1) {
    const step = getRandomInt(10);
    const sample = getRandomInt(9);
    const strQuestion = [];
    let start = getRandomInt(10);
    let result = 0;
    for (let i = 0; i < 10; i += 1) {
      if (i === sample) {
        strQuestion.push('..');
        start += step;
        result = start;
      } else {
        start += step;
        strQuestion.push(start);
      }
    }
    ask(strQuestion.join(' '));
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
const game = gameProgression();
console.log(`${game}${name}!`);
