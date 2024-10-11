const numbers = [1, 5, 18, 2, 77, 108];
// numbers.filter((n) => n % 2 == 1).forEach((n) => console.log(n));

function sum(arr) {
  return arr.filter((n) => n >= 20).reduce((a, b) => a + b, 0);
}
// console.log(sum([10, 20, 50, 30, 8]));

const getNewArray = function (arr) {
  return arr.filter((n) => n.length >= 5 && n.includes("a"));
};
// console.log(getNewArray(["Hello", "Wonderful", "Happy", "People", "Have a great day"]));

/*
this: 
LE[{}], tdz{}, closure{}

*/