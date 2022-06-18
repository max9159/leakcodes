const flattern = function (arr) {
  let res = [];

  function _flattern(_arr) {
    if (Array.isArray(_arr)) {
      for (const item of _arr) {
        _flattern(item);
      }
    } else {
      res.push(_arr);
    }
  }
  _flattern(arr);
  return res;
}

module.exports = flattern;


// const flattern = function (arr) {
//   let res = [];

//   function _flattern(_arr) {
//     if (Array.isArray(_arr)) {
//       // let tempArr = [..._arr];
//       // let i = 0;
//       // while (i < tempArr.length) {
//       //   if (Array.isArray(_arr)) {
//       //     _flattern(tempArr[i]);
//       //   } else {
//               i++;
//       //   }

//       // }
//     } else {
//       res.push(_arr);
//     }
//   }
//   _flattern(arr);
//   // for (const item of arr) {
//   //   _flattern(item);
//   // }

//   return res;
// }

// module.exports = flattern;