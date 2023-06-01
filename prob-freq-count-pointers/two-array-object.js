// add whatever parameters you deem necessary
/** twoArrayObject
Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

Examples:

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}*/
function twoArrayObject(keys, values) {
    // create empty obj
    const obj = {};
    //loop keys and assign values from value if not enough value, assign null
    for(let i = 0; i< keys.length; i++){
        obj[keys[i]] = values[i] || null;
    }
    return obj;

    
    //  return keys.reduce((obj, key, idx)=>{
    //     obj[key] =values[idx] || null;
    //     return obj;
    //  }, {})
     
}
