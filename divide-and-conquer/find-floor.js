/**findFloor
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

Examples:
mid = x? return mid;
mid > x? r=mid
mix < x? l =mid
when start< x && x < end              if M ===x return M
                                      if(R ==L+1) return L
           L     M        R    x ==9  arr[M]>x  R = M
           L M   R                    
             L M R                    arr[M]<x  L=M
               L R                    
findFloor([1,2,8,10,10,12,19], 9) // 8
           L      M       R
                  L  M    R
                     L  M  R
findFloor([1,2,8,10,10,12,19], 12) // 12
           L     M         R
           L M   R
             L M R
             L R
             M
findFloor([1,2,8,10,10,12,19], 7) // 2
       
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
Constraints

Time Complexity: O(log N) 

binary search location closest to the x
*/

function findFloor(arr, x) {
    let start =0;
    let end = arr.length-1

  if(x < arr[0]) return -1;
  if(x > arr[end]) return arr[end];

  while(start<=end){
    let mid= Math.floor((start+end)/2);
    if(arr[mid]===x) return arr[mid];
    else if(end === start +1){
        return arr[start];
    } else if (arr[mid] > x){
        end = mid;
    } else{
        start = mid;
    }

  }

}


/*springboard asnwer  instead of while loop this use recursion*/
 function findFloor2(arr, num, low=0, high =arr.length-1){
    // what kind of case?
    if(low > high) return -1; 
    if( num > arr[high]) return arr[high];

    let mid = Math.floor((high+low)/2);

    if(arr[mid]===num) return arr[mid];

    if(mid>0 && arr[mid-1] <=num && num <arr[mid]){
      // midがArrayの一番初めのElementじゃなくて、
      // midの隣の値が、num より小さく、
      // midの値が　numより大きい。
      // ということは、num==arr[mid]はもうチェックしたので、一番Numに近いけどnumより小さい数はarr[mid-1]となる
      return arr[mid-1]
    }

    if(num <arr[mid]){
      // arrayの左側を調べる
      return findFloor2(arr, num, low, mid-1)
    }
      //arrayの右側を調べる 　
    return findFloor2(arr, num, mid+1, high)

 }
 
module.exports = findFloor