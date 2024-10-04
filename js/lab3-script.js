"use strict";

// Assignment 1.
// a)
function computeSumOfSquares(arr) {
  return arr.reduce((sum, num) => sum + Math.pow(num, 2), 0);
}
console.log(computeSumOfSquares([1, 2, 3])); // Output: 14

// b)
function printOddNumbersOnly(arr) {
  arr.filter((num) => num % 2 !== 0).forEach((num) => console.log(num));
}
printOddNumbersOnly([1, 2, 3, 4, 5, 6]); // Output: 1, 3, 5

// c)
function printFibo(n, a, b) {
  let fibo = [a, b];
  while (fibo.length < n) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  console.log(fibo.slice(0, n).join(", "));
}
printFibo(6, 0, 1); // Output: "0, 1, 1, 2, 3, 5"

// Assignment 2.
let user = { name: "John", years: 30 };
let { name, years: age, isAdmin = false } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// // Assignment 3.
// // a) addBook
// function addBook(title, author, ID) {
//   if (!libraryBooks.some((book) => book.ID === ID)) {
//     const newBook = { title, author, ID };
//     libraryBooks.push(newBook);
//     return newBook;
//   }
//   return null;
// }
// console.log(addBook("New Book", "New Author", 1234));

// // b) getTitles
// function getTitles() {
//   return libraryBooks.map((book) => book.title).sort();
// }
// console.log(getTitles());

// // c) findBooks
// function findBooks(keyword) {
//   return libraryBooks
//     .filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()))
//     .sort((a, b) => a.ID - b.ID);
// }
// console.log(findBooks("Road"));

// Assignment 4.
// Test code
import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from "./lab3-data.js";

// Test add_item
console.log(add_item({ id: 1, title: "Item 1" }));
console.log(add_item({ id: 1, title: "Item 1" }));

// Test get_items
console.log(get_items());

// Test update_item_title_by_id
console.log(update_item_title_by_id(1, "Updated Item 1"));
console.log(get_items());

// Test delete_item_by_id
console.log(delete_item_by_id(1));
console.log(delete_item_by_id(2));
console.log(get_items());

// Test get_item_title_by_id
add_item({ id: 2, title: "Item 2" });
console.log(get_item_title_by_id(2));
console.log(get_item_title_by_id(3));
