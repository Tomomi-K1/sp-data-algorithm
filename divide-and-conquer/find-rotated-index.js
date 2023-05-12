/**findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)

Examples:
findRotatedIndex([3,4,1,2],4) // 1 
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,103,104,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1 
findRotatedIndex([6, 7, 1, 2, 3, 4, 5], 12) // -1
 [1]
*/

function findRotatedIndex(arr, num) {
  
    let pivot = findPivot(arr);

    if(arr[pivot]===num) return pivot;
    if(pivot===0){
        return binarySearch(arr, num, 0, arr.length-1);
    }
    
    if(num > arr[arr.length-1]){
        return binarySearch(arr, num, 0, pivot-1)
    } else{
        return binarySearch(arr, num, pivot, arr.length-1);
    }
    /**or you could write this 
     * first if sentence is pointing at left side of array when pivot is not 0
     * second else will include pivot ===0 case, right side of pivot
     if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
        return binarySearch(array, num, 0, pivot - 1);
    } else {
        return binarySearch(array, num, pivot, array.length - 1);
    }
    }
     */


    // function to find pivoting point
    // arr[mid]> arr[mid+1]はArrayの中で一度しか起きないので、その場所がPivot場所
    function findPivot(arr){
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

    function binarySearch(arr, num, start, end){
        if(arr.length ===0) return -1;
        // numがarrに含まれない場合はー１を返す
        if(num < arr[start] || num > arr[end]) return -1;

        while(start<=end){
            let mid= Math.floor((start+end)/2);
            if(arr[mid]===num) return mid;
            else if(arr[mid] < num){
                start= mid+1;
            } else{
                end = mid-1;
            }
        }
        return -1
    }

}

module.exports = findRotatedIndex