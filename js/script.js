"use strict";

let computeSumOfSquares = function (numbers) {
  let sum = numbers.reduce((total, num) => total + num * num);
  return sum;
};

function printOddNumbersOnly(numbers) {
  numbers.forEach((number) => {
    if (number % 2 == 1) console.log(number);
  });
}

function printFibo(n, a, b) {
  if (n <= 0) {
    console.log("");
    return;
  }

  let fiboSeq = [];
  fiboSeq.push(a);
  if (n > 1) fiboSeq.push(b);

  for (let i = 2; i < n; i++) {
    fiboSeq.push(fiboSeq[i - 1] + fiboSeq[i - 2]);
  }

  console.log(fiboSeq.join(", "));
}

console.log(computeSumOfSquares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
printOddNumbersOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
printFibo(10, 0, 1);
