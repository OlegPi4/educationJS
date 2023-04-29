'use strict';


const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5
      },
      {
         width: 15,
         length: 7
      },
      {
         width: 20,
         length: 5
      },
      {
         width: 8,
         length: 10
      }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
};

function isBudgetEnough(data) {
   let allSq = 0;
   for (let el in data.shops) {
      let wid = data.shops[el].width;
      let len = data.shops[el].length;
      allSq += wid * len;
   }
   let allVol = allSq * data.height;
   
   if (allVol * data.moneyPer1m3 <= data.budget) {
      console.log('Бюджета достаточно');
   } else {
      console.log('Бюджета недостаточно');
   }
}
isBudgetEnough(shoppingMallData);
