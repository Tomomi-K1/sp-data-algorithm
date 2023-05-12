/**countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)

Examples:
             L   M     R
                   L   R

countZeroes([1,1,1,1,0,0]) // 2   
             L   M   R
            L/MR
              L/R
countZeroes([1,0,0,0,0]) // 4
             L   R
countZeroes([0,0,0]) // 3
             L     R
countZeroes([1,1,1,1]) // 0
 */
function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length-1;
    let middleIdx = Math.floor((leftIdx + rightIdx)/2);

    while(leftIdx <= rightIdx){
        // console.log(`leftIdx :${leftIdx}, middle:${middleIdx}, right:${rightIdx}`)
        middleIdx = Math.floor((leftIdx + rightIdx)/2);
        if(arr[leftIdx] ===0){
            return arr.length-leftIdx;
        } else if(arr[rightIdx]===1){
            return 0;
        } else if(arr[middleIdx]===1){
            leftIdx = middleIdx +1;
        } else if(arr[middleIdx]===0){
            if(leftIdx===middleIdx-1){
                leftIdx=middleIdx;
            } else{
                rightIdx = middleIdx-1;
            }
        }     
    }
}

module.exports = countZeroes