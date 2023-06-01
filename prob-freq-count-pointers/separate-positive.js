// add whatever parameters you deem necessary
/**separatePositive
Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).

Examples:
                
separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]
Constraints

Time Complexity: O(N) */

function separatePositive(arr) {
    // how can we sort with O(n)? cannot use sort method
    // get length of array and divide by 2 and floor the number to get mid point
    // loop each array and assign items
    let start = 0;
    let end = arr.length -1

    while( start< end){
        if(arr[start] < 0 && arr[end] > 0){
            let temp = arr[end]
            arr[end] = arr[start]
            arr[start] = temp;

            start +=1;
            end -= 1;
        } else {
            if(arr[start]> 0) start +=1;
            else end -=1;

        }
    }
    return arr;
}
