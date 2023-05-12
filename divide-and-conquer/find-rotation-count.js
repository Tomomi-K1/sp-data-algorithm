/**findRotationCount
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:

Time Complexity: O(log N)

Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0 */

// pivotのIdxがRotationした数

function findRotationCount(arr) {

        // ArrayにElementが一つしかない場合。またはArrayの最初が最後より大きい場合はPivotの場所はIndex 0となる
        if(arr.length ===1 || arr[0] < arr[arr.length-1]) return 0;
        let start = 0;
        let end = arr.length -1;

        while(start <= end){
            let mid= Math.floor((start+end)/2);

            if(arr[mid]> arr[mid+1]) return mid+1;
            else if(arr[start]<= arr[mid]){
                start = mid+1;
            } else{
                end = mid-1;
            }
        }
}

module.exports = findRotationCount