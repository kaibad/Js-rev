// Reverse a given number (e.g., 123 → 321).

function reverseNumber(num) {
  let revNum = 0;
  while (num > 0) {
    let digit = num % 10; //first pass: 5
    revNum = revNum * 10 + digit; //0*10+5=5
    num = Math.floor(num / 10); //12345/10=1234.5 math.floor(1234.5) =1234
  }
  console.log(revNum);
}
reverseNumber(12345);
