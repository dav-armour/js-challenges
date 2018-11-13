// Atomic Blonde Number:
// a number is an atomic blonde number if the sum and product of its digits are equal.
// For example, 123 is an atomic blonde number, as the sum of its digits (1+2+3) is 6, which is equal to the product of its digits (1*2*3).
// Write a program to check if a number is an atomic blonde number or not.

function checkAtomicBlonde(num) {
  let digit_chars = num.toString().split('');
  let digits = digit_chars.map(Number);
  let sum = digits.reduce((a,b) => a + b, 0);
  console.log("Sum:", sum);
  console.log(digits);
  let product = digits.reduce((a,b) => a * b, 1);
  console.log("Product:", product);
  return sum === product;
}
let input = 123;
// let input = prompt("Enter number");
console.log(checkAtomicBlonde(input));