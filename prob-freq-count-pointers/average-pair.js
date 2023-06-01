// add whatever parameters you deem necessary/
/**averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)

Examples:

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false */

function averagePair(arr, target) {
    // pointers at the start of array and end of array
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        // take two numbers from array and divide by 2 and then compare with given target average
        const average = (arr[left]+arr[right])/2
        if(average === target) return true;
        if(average < target){
            // if the calculated average is smaller than target then move left pointer up
            left ++;
        } else{
            // if the calculated average is larger than target then move right pointer down
            right --;
        }
    }
    return false;   
    
}
