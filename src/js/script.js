'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}
start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотреных фильмов ?', ''),
         b = prompt('На сколько оцените его ?', '');
      
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
      } else {
         alert('Введите корректно!!');
         i--;
      }
   }
   
}
rememberMyFilms();

function detectPersonalLevel() {
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
} 
detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);      
   }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 0; i <= 2; i++) {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
   }
}

writeYourGenres();
console.log(personalMovieDB);  