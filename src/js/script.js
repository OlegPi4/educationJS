'use strict';

// let indicatOne = 'yes',
//    indicatTwo = 'not';
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// console.log(indicatOne || indicatTwo);
// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };

// for (let i = 0; i < 2; i++) {
//    const a = prompt('Один из последних просмотреных фильмов ?', ''),
//       b = prompt('На сколько оцените его ?', '');
   
//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//    } else {
//       alert('Введите корректно!!');
//       i--;
//    }
// }
// let i = 0;
// while (i < 2) {
//    const a = prompt('Один из последних просмотреных фильмов ?', ''),
//       b = prompt('На сколько оцените его ?', '');
   
//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//       i++;
//    } else {
//       alert('Введите корректно!!');
      
//    }
// }


// let numbSeen = personalMovieDB.count;

// if (numbSeen < 10) {
//    alert('Просмотрено мало фильмов');
// } else if ( numbSeen >= 10 && numbSeen < 30) {
//    alert('Вы класический зритель !');
// } else if (numbSeen >= 30) {
//    alert('Киноман ! ! !');
// } else {
//    alert('Произошла ошибка !');
// }
// console.log(personalMovieDB);

// let num = 20;

// function showInfo(text) {
//    let num = text + 10;
//    return num;
// }

// const messag = showInfo('Hello!  ');
// console.log(messag);


// function sayHello(firstName) {
//    return 'Привет ' + firstName + '!';
// }

// console.log(sayHello('Антон'));

// function formArray(a) {
//    let array = [];
//    array[0] = a - 1;
//    array[1] = a;
//    array[2] = a + 1;
//    return array;
// }

// const outArr = formArray(5);
// console.log(outArr);

function getMathResult(numb, any) {
   let result = '';
   if (typeof (any) === 'string' || any <= 0) {
      return result = +numb;
   } else {
      for (let i = 1; i <= any; i++) {
         result = result + String(numb * i);
         if (i < any) {
            result = result + '---';
         }
      }
      return result;
   }
}

const outMess = getMathResult(99, 4);
console.log(outMess);
console.log(`typeof outMess = ${typeof(outMess)}`);