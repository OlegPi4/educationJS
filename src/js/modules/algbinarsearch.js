// агоритм поиска значения методом бинарного перебора масива
'use strict';
// создание масива длиной numbElem c рандомным формирование строковых
// значений c рандомной длиной до 10 символов 
// arrSimv - определяет набор символов из которых будут состоять строковые значения
const arrSimv = ['a', 'b', 'c', 'd', 'e', 'f', 'o', 'm', 'p', 'y']; 
const arrForSearch = (arrN) => {
   for (let i = 0; i <= arrN - 1; i++) {
      let line = '';
      let longName = Math.floor(Math.random() * 10);
      for (let j = 0; j <= longName; j++) {
         line += arrSimv[Math.floor(Math.random() * 10)];
      }
      arrForSearch[i] = line;
   }
   return arrForSearch;
};

// arrForSearch получился в виде объекта, поэтому на выходе
// массив arrWor

const numbElem = 120;  // Задаем число элементов в масиве
const arrWork = Object.values(arrForSearch(numbElem));

// рандомно выберем одно оз значений для поиска
const lineSearch = arrWork[Math.floor(Math.random() * numbElem)];


function binarySearch(arrSerch, nameSearch) {
   
   let low = 0;
   let high = arrSerch.length - 1;
   while (low <= high) {
      let midl = Math.round((low + high) / 2);
      if (arrSerch[midl] == nameSearch) {
         console.log(`Значение ${arrSerch[midl]}  совпадает с ${nameSearch}`);
         return arrSerch[midl];
      } else if (arrSerch[midl] > nameSearch) {
         high = midl - 1;
      } else {
         low = midl + 1;
      }
   }
   return console.log('Совпадений нет!');
} 

binarySearch(arrWork.sort(), 'fed');
binarySearch(arrWork.sort(), lineSearch);

