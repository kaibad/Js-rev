// Print the Fibonacci sequence up to 10 terms.

// 0 1 1 2 3 5 8 13 21 34

let firstTerm = 0;
let secondTerm = 1;
let fibonacci = [];
for (let i = 0; i < 10; i++) {
  fibonacci.push(firstTerm);
  let nextterm = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = nextterm;
}
// console.log(fibonacci);
console.log(fibonacci.join(", "));
