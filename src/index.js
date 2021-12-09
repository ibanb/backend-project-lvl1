import readlineSync from 'readline-sync';

function greeting() {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

function ask(exp) {
  console.log(`Question: ${exp}`);
}

function userAnswer() {
  const input = readlineSync.question('Your answer: ');
  return input;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

export {
  greeting, userAnswer, ask, getRandomInt, gcd,
};
