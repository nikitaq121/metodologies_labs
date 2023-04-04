'use strict';

const quadraticEquation = (a, b, c) => {
  let Disc = b ** 2 - 4 * a * c;
  console.log(`Equation is: (${a})x^2 + (${b})x + (${c}) = 0`);

  if (Disc < 0) return 'There are 0 roots';

  let x1 = (-1 * b + Math.sqrt(Disc)) / (2 * a);
  let x2 = (-1 * b - Math.sqrt(Disc)) / (2 * a);

  return Disc === 0
    ? `There is 1 root\n x1 = ${x1.toFixed(2)}`
    : `There are 2 roots\n x1 = ${x1.toFixed(2)}\n x2 = ${x2.toFixed(2)}`;
};

const FILENAME_POSITION = 3;

const validator = (a, b, c) => {
  const numbers = [ a, b, c ];
  return numbers.every((num => !isNaN(num))) && a !== 0;
};

const fs = require('fs');

const getNumbersFromFile = (fileName) => {
  const fileContent = fs.readFileSync(`./${fileName}`, 'utf-8');
  let [a, b, c] = fileContent.split(' ').map(Number);
  return {a, b, c};
}


const readline = require('readline');

const getNumbersFromConsole = async () => {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
  });
  
  rl.prompt();
  
  const question = (str) => new Promise((answer) => rl.question(str, answer));

  const a = Number(await question('Enter a: '));
  const b = Number(await question('Enter b: '));
  const c = Number(await question('Enter c: '));

  rl.close();
  
  return { a, b, c };
};

(async () => {
  const { a, b, c } = process.argv.length === FILENAME_POSITION ? getNumbersFromFile(process.argv[2]) : await getNumbersFromConsole();
  const isValid = validator(a, b, c);

  if (!isValid) console.log('One of number is not valid. Please enter valid numbers\nNote: a, b and c have to be numbers, a must not be zero');
  else {
    console.log(quadraticEquation(a, b, c));
  }
})();


