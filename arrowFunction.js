// Q1)Rewrite the following function as an arrow function://

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("zahraa"));

const greet1 = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet1("zahraa"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const summ = (n1, n2) => {
  return n1 + n2;
};
console.log(summ(8, 9));

// Q3) Write a simple arrow function that squares a number.
const sqr = (n1) => {
  return n1 * n1;
};
console.log(sqr(8));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

//google//
function doubleNumbers(numbers) {
  return numbers.map((x) => x * x);
}
console.log(doubleNumbers([1, 6, 4]));

//transferred to arrow function//
const doubleNumbers1 = (numbers) => {
  return numbers.map((x) => x * x);
};
console.log(doubleNumbers1([1, 2, 4]));
