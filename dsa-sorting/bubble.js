function bubbleSort(arr) {
    let swapped;
    for(i = 0; i< arr.length; i++){
        swapped = false;
        for(j = 0; j <arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped=true;
            }  
        }
        if(!swapped) break;
    }
    
    return arr;

}

// function bubbleSort(arr) {
//     for(i = 0; i< arr.length; i++){
//         // let swapped = false;
//         for(j = 0; j <arr.length-i; j++){
//             // swapped=false;
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//                 // swapped=true;
//             }  
//         }
//         // if(!swapped) break;
//     }
//     return arr;

// }

module.exports = bubbleSort;

