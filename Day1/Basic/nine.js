// Write a program to find the maximum of three numbers using if-else.
let num1 = 2,
  num2 = 6,
  num3 = 5;
if (num1 >= num2 && num1 >= num3) {
  console.log(`${num1} is greateest or maximum`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`${num2} is greatest or maximum`);
} else {
  console.log(`${num3} is maximum or greated`);
}
