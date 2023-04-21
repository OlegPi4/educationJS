'use strict';
// задача 1
// for (let i = 5; i <= 10; i++) {
//    console.log(i);
// }

// задача 2

// label: for (let i = 20; i >= 10; i--) {
//    console.log(i);
//    if (i == 14) {
//       break label;
//    }
// }

// задача 3

// for (let i = 1; i <= 10; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
// }

//  задача з вариант 2
// for (let i = 2; i <= 10; i += 2) {
//    console.log(i);
//  }

// for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//       continue;
//    } else {
//       console.log(i);
//    }
// }

// Задача 4
// let i = 2;

// while (i < 16) {
//    if (i % 2 === 1) {
//       console.log(i);
//    }
//    i++;
// }

//  Задача 5

const myArray = [];
for (let i = 0; i <= 5; i++) {
   myArray[i] = i + 5;
}
console.log(myArray);