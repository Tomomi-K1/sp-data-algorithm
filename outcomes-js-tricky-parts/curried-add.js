// function curriedAdd(total) {
//     if(total === undefined){
//         return 0;
//     }
//     return function addNext(num){
//         console.log(total);
//         if(num === undefined) return total;
//         total +=num;
//         return addNext;
//     };
// }

function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addNext(num) {
      if (num === undefined) return total;
      total += num;
      return addNext;
    };
  }
  
//   module.exports = { curriedAdd };





// module.exports = { curriedAdd };
