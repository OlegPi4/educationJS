'use strict';

// циклы Продвинутые задачи
// задача 1
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// let leng = arr.length;

// for (let i = 0; i <= leng - 1; i++) {
//    result[i] = arr[i];
// }
// console.log(`длина исходного масива arr = ${leng}`);
// console.log(result);
// console.log(result.length);

// Задача 2
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// let leng = data.length;
// for (let i = 0; i <= leng - 1; i++) {
      
//    if (typeof(data[i]) === 'number') {
//       data[i] = data[i] * 2;
//    } else {
//       data[i] = data[i] + ' - done';
//    }
// }
// console.log(data);

//Задача 3
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// let leng = data.length - 1;
// const result = [];
// for (let i = 0; i <= leng; i++) {
//    result[leng - i] = data[i];
// }
// console.log(result);


//  Рисуем елочку
const lines = 5;
let result = '';

console.log(result);
for (let i = 0; i <= lines; i++) {
   for (let j = 0; j < lines - i; j++) {
      result += ' '; 
   }
   for (let k = 0; k < (i * 2 + 1); k ++) {
      result += '*';
   }
   result += '\n' ;
}
console.log(result);