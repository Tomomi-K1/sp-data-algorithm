/**sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)

Examples:        0       4       8       
                 L       M       R
sortedFrequency([1,1,2,2,2,2,2,2,3],2) // 4
                 L     M     R
                         L M R
                             R/L
sortedFrequency([1,1,2,2,2,2,3],3) // 1
                 L     M     R
                 L M R
                 L R
sortedFrequency([1,1,2,2,2,2,3],1) // 2
                 L     M     R
                         L M R
                            L/R
sortedFrequency([1,1,2,2,2,2,3],4) // -1
 */

function sortedFrequency(arr, num) {
    let lIdx = 0;
    let rIdx = arr.length-1;
    let mIdx;
    // 1. left = num && right = num rightIdx - leftIdx +1
    //  middle< num => left = middle+1
    // 2. middle > num => right = middle -1
    // 3. middle = num => is left != num? left +1,
                        //   is right !=num? right-1,

    while(lIdx <= rIdx){
        mIdx = Math.floor((lIdx+rIdx)/2);
        console.log(`leftIdx :${lIdx}, middle:${mIdx}, right:${rIdx}`)
        if(arr[lIdx] === num && arr[rIdx]=== num){
            return rIdx-lIdx+1;
        } else if(arr[mIdx] < num){
            lIdx = mIdx+1;
        } else if(arr[mIdx] > num){
            rIdx = mIdx -1;
        } else if(arr[mIdx] === num){
            if(arr[lIdx] !== num){lIdx+=1;}
            if(arr[rIdx] !==num){rIdx-=1;}
        }
    }
    return -1;
}

module.exports = sortedFrequency