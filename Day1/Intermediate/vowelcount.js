// Count the number of vowels in a string.

let str = "kailash";
// console.log(str.length);
function countVowel(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let element = str[i].toLowerCase();
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVowel(str);
