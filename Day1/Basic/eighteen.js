// Use a loop to count the number of digits in a given number.
let givenNumber = 162162516251625;
// console.log(givenNumber.length);
// The line console.log(givenNumber.length); will not work as expected because givenNumber is a number, and numbers in JavaScript do not have a .length property.
// let strnum = givenNumber.toString();
// console.log(strnum.length);

//another mehod using loop
let count = 0;
let newNum = givenNumber;
while (newNum > 0) {
  newNum = Math.floor(newNum / 10);
  count++;
}
console.log(count);
