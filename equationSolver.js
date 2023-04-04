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