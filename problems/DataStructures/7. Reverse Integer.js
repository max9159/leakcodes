/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
  // Version 2
  let reversed = 0;
  const isNegative = x < 0;
  x = Math.abs(x);

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  reversed = isNegative ? -reversed : reversed;
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);

  if (reversed > MAX_INT || reversed < MIN_INT) {
    return 0;
  }

  return reversed;

  // Version 1
  //   const min = -(2 ** 31);
  //   const max = 2 ** 31 - 1;
  //   const arrayX = x.toString().split(''); 
  //   const symbol = arrayX[0] === '-' ? '-' : '';
  //   const start = arrayX.length - 1;
  //   const end = 0 + symbol.length;

  //   const actualLenght = start - end;
  //   if(actualLenght > 10)
  //     return 0;

  //   let res = '';
  //   for(let i = start; i >= end; i--)
  //   { 
  //     res +=  arrayX[i];

  //     if(res.length === 10)
  //     {
  //       const numRes = Number(symbol+res); 
  //       if(numRes > max || numRes < min) 
  //         return 0;        
  //     }

  //   }
  // return Number(symbol+res);
};