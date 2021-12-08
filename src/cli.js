import readlineSync from 'readline-sync';

function greeting() {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  return userName;
}

function inputEvenOddAnswer() {
  const input = readlineSync.question('Your answer: ');
  return input;
}

export {greeting, inputEvenOddAnswer};
//programming is so cool