/** product: calculate the product of an array of numbers. */

function product(nums) {
    if(nums.length === 0) return 1;

    return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. 
 * Given a list of words, return the length of the longest:
    longest(["hello", "hi", "hola"])  // 5
*/

function longest(words, idx=0, maxLength=words[idx].length) {
    if (idx >= words.length-1){
      return maxLength;
    } 

    if (maxLength < words[idx+1].length){
      maxLength = words[idx+1].length;
    }
    return longest(words, idx+1, maxLength);
}

/** everyOther: return a string with every other letter. 
 * Write a function that returns a string of every other character:
everyOther("hello")  // "hlo"
*/

function everyOther(str, idx =1) {
  if(idx >= str.length) return str;

  str =str.replace(str[idx], '');
  
  return everyOther(str, idx+1);
    
}

/** isPalindrome: checks whether a string is a palindrome or not. 
 * Write a function that returns true/false depending on whether passed-in string is a palindrome:
isPalindrome("tacocat")  // true
isPalindrome("tacodog")  // false
*/

function isPalindrome(str, idx=0, lastIdx =str.length-1) {
    if(idx >= lastIdx) return true;

    if(str[idx]!==str[lastIdx]){
      return false;
    }
    return isPalindrome(str, idx+1, lastIdx-1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). 
 * Given an array and a string, return the index of that string in the array (or -1 if not present):

let animals = ["duck", "cat", "pony"];

findIndex(animals, "cat");  // 1
findIndex(animals, "porcupine");   // -1
*/

function findIndex(arr, val, idx=0) {

  if(idx >= arr.length) return -1;
  if(arr[idx] === val) return idx;
  return findIndex(arr, val, idx+1);

}

/** revString: return a copy of a string, but in reverse. 
 * Return a copy of a string, reversed:

revString("porcupine") // 'enipucrop'
*/

function revString(str, idx = str.length-1, newStr='') {
      if(idx < 0) return newStr;
      
      newStr+=str[idx];

      return revString(str, idx-1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. 
 * 

*/

function gatherStrings(obj, arr=[]) {
    
    for(let key in obj){
      if( typeof obj[key] ==='object'){
        gatherStrings(obj[key], arr)
      }
      
      if(typeof obj[key] ==='string'){
         arr.push(obj[key]); 
      }
   }
   return arr;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left =0, right = arr.length-1) {
      let leftIdx=left;
      let rightIdx=right;
      let middle = Math.floor((leftIdx+rightIdx)/2);
      
      if(leftIdx > rightIdx) return -1;

      if(arr[middle] ===val) return middle;

      if(arr.length >0 && arr[middle] > val){
        return binarySearch(arr, val, leftIdx, middle-1);
      } else if(arr.length>0 && arr[middle] < val) {
        return binarySearch(arr, val, middle+1, rightIdx )
      }
  }


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
