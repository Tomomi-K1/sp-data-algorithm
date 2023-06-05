// add whatever parameters you deem necessary
function pivotIndex() {
}

function palindrome(str){
   let wordOnly =str.toLowerCase().match(/\w/g);
   return (wordOnly.join('') === wordOnly.toReversed().join(''))
}



