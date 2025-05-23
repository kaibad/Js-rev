// Print a triangle of stars (*) using nested for loops (5 rows).
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
console.log("\n==========\n");
//   *
//  ***sss
// *****
let no_of_rows = 3;
for (let i = 0; i < no_of_rows; i++) {
  let row = "";
  for (let k = 0; k < no_of_rows - i - 1; k++) {
    row += " ";
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    row += "*";
  }
  console.log(row);
}
