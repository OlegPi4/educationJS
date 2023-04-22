'use strict';

let indicatOne = 'yes',
   indicatTwo = 'not';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(indicatOne || indicatTwo);
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++) {
   const a = prompt('Один из последних просмотреных фильмов ?', ''),
      b = prompt('На сколько оцените его ?', '');
   
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
   } else {
      alert('Введите корректно!!');
      i--;
   }
}
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


let numbSeen = personalMovieDB.count;

if (numbSeen < 10) { 
   alert('Просмотрено мало фильмов');
} else if ( numbSeen >= 10 && numbSeen < 30) {
   alert('Вы класический зритель !');
} else if (numbSeen >= 30) {
   alert('Киноман ! ! !');
} else {
   alert('Произошла ошибка !');
}
console.log(personalMovieDB);
