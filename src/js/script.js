'use strict';


const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         const a = prompt('Один из последних просмотреных фильмов ?', '').trim(),
            b = prompt('На сколько оцените его ?', '');
         
         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            alert('Введите корректно!!');
            i--;
         }
      }
   },
   detectPersonalLevel: function () {
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
   },
   showMyDB: function(hidden) {
      if (!hidden) {
         console.log(personalMovieDB);      
      }
   },
   writeYourGenres: function () {
      for (let i = 0; i < 1; i++) {
         let answ = prompt('Введите через запятую ваши любимые жанры').toLowerCase();
         if (answ == '' || answ == null) {
            console.log('Введите корректно данные !');
            i--;
         } else {
            personalMovieDB.genres = answ.split(', ');
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i+1} - это ${item}`);
      });
   },
   toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   }
   
};

// 
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);


