import readlineSync from 'readline-sync';

function greeting() {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

function userAnswer() {
  const input = readlineSync.question('Your answer: ');
  return input;
}

export { greeting, userAnswer };
