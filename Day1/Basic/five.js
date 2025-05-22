// let input = prompt("Enter the Number: ");
let number = 10;

if (isNaN(number)) {
  alert("Please Enter a Valid number");
} else {
  if (number % 2 == 0) {
    console.log(number + " is an even number");
  } else {
    console.log(number + "is an odd number.");
  }
}
