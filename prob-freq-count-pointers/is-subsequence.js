// add whatever parameters you deem necessary
/**isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
                    
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Constraints:

Time Complexity - O(N + M) */

function isSubsequence(str1, str2) {
    // loop over str1
    // check if the first character of 2 matchs to the letter. if not,str2 = slice(1)
    // if(str1.length > str2.length) return false;
    // for ( let i =0; i< str1.length; i++){
        
    //     const foundIdx = str2.indexOf(str1[i])
    //     if(i === str1.length-1 && foundIdx === -1) return false;
    //     if(foundIdx ===str2.length-1 && i !== str1.length-1) return false;
    //     if(foundIdx !==str2.length-1){
    //     str2 =str2.slice(foundIdx+1)
    //     if(str2.length===0) return false;
    //     }
    // }
    // return true;

    let i = 0; /*str1 pointer */
    let j = 0; /*str2 pointer */
    if(!str1) return true; /*str1 is empty, return true*/
    while(j < str2.length){
        if(str1[i] === str2[j]){
            i+=1;
        }
        if(i === str1.length) return true;
        j+=1;    
    }
    return false;
}
