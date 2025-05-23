// Use a loop to find the sum of digits of a number.

let num = 8163816316381633;
let strnum = num.toString();
console.log(strnum.length);
let sum = 0;

for (let i = 0; i < strnum.length; i++) {
  sum += parseInt(strnum[i]);
}
console.log(sum);
