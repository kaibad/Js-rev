// Print all numbers from 1 to 100 that are divisible by 3 and 5.

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " is divisible by both 3 and 5.");
  }
}
