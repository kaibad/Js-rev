// Find the largest digit in a number.
let number = 613716835183715;
let strnum = number.toString();
let maxDigit = 0;
for (let i = 0; i < strnum.length - 1; i++) {
  if (strnum[i] > maxDigit) {
    maxDigit = strnum[i];
  }
}

console.log(`${maxDigit} is geatest.`);
