'use strict';


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Test', 'Bernard', 'Takesi', 'Sam'];


function sortStudentsByGroups(arr) {
   let newArr = [];
   
   let arr1 = arr.sort();
   let messag = 'Оставшиеся студенты:';
   for (let i = 0; i <= arr1.length; i += 3) {
      if (i + 2 < arr1.length) {
         newArr.push([arr1[i], arr1[i + 1], arr1[i + 2]]);
      } else {
         if (arr1[i] == undefined) {
            newArr.push(`${messag} -`);
         } else {
            newArr.push(`${messag} ${arr1.splice(i, arr1.length - i).join(', ')}`);
         }
         
      }
   }
   console.log(newArr);
   return newArr;
   
}
sortStudentsByGroups(students);