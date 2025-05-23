// Check whether a number is a prime number.
let number = 11;
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(`${number} is prime`);
} else {
  console.log(`${number} is not prime`);
}
console.log(Math.sqrt(number));
