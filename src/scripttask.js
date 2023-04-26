'use strict';

// функция возвращает объем куба и площадь поверхностей, 
// производится  проверка введенных значений на правильность

function calculateVolumeAndArea(a) {
   if (isNaN(a) || a <= 0 || Math.round(a)%a != 0 || typeof(a) === 'string') {
      console.log('При вычислении произошла ошибка');
   } else {
      let vKub = a * a * a;
      let povKuba = a * a * 6;
      console.log(`Объем куба: ${vKub}, Площадь всей поверхности: ${povKuba}`);
   } 
}

// Функция возвращает номер купе на ввод места от 1 до 36
// с верификацией введенного значения
function getCoupeNumber(a) {
   if (isNaN(a) ||  typeof (a) === 'string' || a < 0 || Math.ceil(a) - a) {
      console.log('Ошибка проверьте правильность введенного номера');
      return;
   }
   if (a == 0 || a > 36) {
      console.log('Таких мест в вагоне не существует');
   }  else {
      let numKupe = Math.ceil(a / 4);
      console.log(numKupe);
   } 
}

// функция принимает целое число минут и возвращает время в формате строки,
//  верификация аргумента на дробное, не число или отрицательное
// максимально еквивалент 24 часам.


function getTimeFromMinutes(min) {
   const arrHours = ['часов', 'час', 'часа', 'часа', 'часа', 'часов', 'часов', 'часов', 'часов', 'часов',
      'часов', 'часов', 'часов', 'часов', 'часов', 'часов', 'часов', 'часов', 'часов', 'часов', 'час',
      'часа', 'часа', 'часа'];
   const arrMinuts = ['минут', 'минута', 'минуты', 'минуты', 'минуты', 'минут', 'минут', 'минут', 'минут', 
      'минут', 'минут', 'минут', 'минут', 'минут', 'минут', 'минут', 'минут', 'минут', 'минут', 'минут',  
      'минут', 'минутa', 'минуты', 'минуты', 'минуты', 'минут', 'минут', 'минут', 'минут', 'минут', 'минут', 
      'минута', 'минуты', 'минуты', 'минуты', 'минут', 'минут', 'минут', 'минут', 'минут',  
      'минут', 'минута', 'минуты', 'минуты', 'минуты', 'минут', 'минут', 'минут', 'минут', 'минут',
      'минут', 'минута', 'минуты', 'минуты', 'минуты', 'минут', 'минут', 'минут', 'минут', 'минут'];
 
   if (typeof(min) !== 'number' || min < 0 || !Number.isInteger(min)) {
      console.log('Ошибка, проверьте данные');      
      return ('Ошибка, проверьте данные');
   }
   let showHour = Math.floor(min / 60);
   let showMinut = min - showHour * 60;
   let result = `Это ${showHour} ${arrHours[showHour]} и ${showMinut} ${arrMinuts[showMinut]} `;
   console.log(result);      
   return result;
   
   
}
getTimeFromMinutes(null);
getTimeFromMinutes('');

// Функция возвращаем максимальное число из четырех переданых значений
// или 0 исли не все числа или меньше 4

function findMaxNumber(a, b, c, d) {
      if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
         return 0;
      } else {
         let res = Math.max(a, b, c, d);
         return res;
   } 
}

findMaxNumber(1, 5, 6.6, 11);
findMaxNumber(1, 5, '6', '10');
findMaxNumber(1, 5, 11);

//функциявозвращает строку с рядом Фобианчи с колличеством элементов
//заданых в параметре. Между значениями - пробелы, в конце пробела нет.

function fib(num) {
   if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
      return '';
   }
   let result = '';
   let first = 0;
   let second = 1;

   for (let i = 0; i < num; i++) {
      if (i + 1 === num) {
         result += `${first}`;
          // Без пробела в конце
      } else {
         result += `${first} `;
      }

      let third = first + second;
      first = second;
      second = third;
   }
   return result;
}

