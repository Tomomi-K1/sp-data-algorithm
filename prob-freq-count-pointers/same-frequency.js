// add whatever parameters you deem necessary
/**sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Examples:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
Constraints

Time Complexity - O(N + M) */
// parameters 2 positive integers
function sameFrequency(int1, int2) {
    const int1obj ={}
    const int2obj = {};
    for(let num of String(int1)){
        int1obj[num] = (int1obj[num] +1) || 1;
    }
    for(let num of String(int2)){
        int2obj[num] = (int2obj[num] +1) || 1;
    }

    for (let key in int1obj){
        if(!int2obj[key]) return false;
        if(int1obj[key]!==int2obj[key]) return false;
    }

    return true;
}


