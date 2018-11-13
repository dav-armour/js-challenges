// Pick any four digit number and do the following:
// Rearrange the string of digits to form the largest and smallest 4-digit numbers possible.
// Take these two numbers and subtract the smaller number from the larger.
// Suppose we choose the number 8082.
// 8820−0288=8532
// 8532−2358=6174
// 7641−1467=6174
// It hits 6174 and then stops.
// Count also how many iterations loops are required to get to this point.
// Bonus points for recognising what 6174 is.

function calcMaxMinusMin(num) {
  let digitsArr = num.toString().split("").map(Number);
  let minArr = digitsArr.sort();
  let maxArr = [...minArr].reverse();
  let min = Number(minArr.join(''));
  let max = Number(maxArr.join(''));
  return max - min;
};

let input = "";
do {
  input = prompt("Enter number (4 digits)");
} while (input.length !== 4);

let count = 0;
let answer = input;
do {
  answer = calcMaxMinusMin(answer)
  console.log(answer);
  count++;
} while (answer !== 6174);

console.log("Count:", count)