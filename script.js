/*Write a function that accepts astring input and returns a reversed copy*/
/*Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n */

//option
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
//console.log(addUpTo(10));

//option 2
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo2(3));
