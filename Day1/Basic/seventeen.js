// Print all even numbers from 1 to 20 using a for loop.
let even = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    // even[even.length] = i;
    // even[0]
    even.push(i);
  }
}
even.forEach(printFunction);

function printFunction(item) {
  console.log(item);
}
