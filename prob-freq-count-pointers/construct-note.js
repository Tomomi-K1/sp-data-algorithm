// add whatever parameters you deem necessary
/**constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true */

function constructNote(word, chars) {

    if(word.length > chars.length) return false;
    // create object for word and chars. => here we will create a separate function
    const wordMap = makeMap(word);
    const charsMap = makeMap(chars);
    // if number of keys in charsMap smaller than wordMap, return false
    if(wordMap.size > charsMap.size) return false;
    //  loop keys in wordObj
    for(let key of wordMap.keys()){
        // check if key exist in chars obj
        if(!charsMap.get(key)) return false;
        // if it does, check number of time the letter exist in chars obj is bigger than word obj key value.
        if(charsMap.get(key) < wordMap.get(key)) return false;
    }
    return true;

}

function makeMap(str){
    const map = new Map();
    for(let char of str){
        const charCount = map.get(char) || 0;
        map.set(char, charCount+1);
    }
    return map;
}
