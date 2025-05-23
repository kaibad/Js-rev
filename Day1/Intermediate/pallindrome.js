// Given a number, check if it is a palindrome (e.g., 121 → true).
let revaaay = [];
function reverseNumber(num) {
  let cpnum = num;
  while (cpnum > 0) {
    let revnum = 0;
    rem = cpnum % 10;
    revnum = revnum * 10 + rem;
    revaaay.push(revnum);
    cpnum = Math.trunc(cpnum / 10);
  }
  let reversed = parseInt(revaaay.join(""));
  if (reversed === num) {
    console.log(`${num} is pallidrome`);
  } else {
    console.log(`${num} is not pallidrome`);
  }
}
// console.log(reversed);

reverseNumber(1232);
