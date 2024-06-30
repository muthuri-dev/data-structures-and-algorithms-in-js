//searching in arrays
// linear search -indexOf -includes -find -findIndex

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return arr[i];
    }
    return -1;
  }
}

// function search (arr, val) {
//      for(var num of arr){
//        if(num === val){
//            return indexOf(num);
//        }
//          return false
//      }
// }

function loop(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      console.log(arr[i]);
    }
    console.log("-1");
  }
}

// loop([2, 3, 5, 7, 9, 2, 4], 5);

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      console.log(i);
    }
  }
  console.log("-1");
}

linearSearch([35, 67, 2, 8, 10, 13], 8);

//linear search bog O
// O(1) - best case
// O(n) - avarage case
// O(n)  - worst case

//binary search
function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    console.log(start, middle, end);
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] == value) {
    return middle;
  }
  return -1;
}
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 45, 67, 89, 90], 24);

//time complexity worst case O(log n) best case O(1)

//naive string search
function strSearch(str, patt) {
  for (var i = 0; i < str.length; i++) {
    return str[i];
    for (var j = 0; j < patt.length; j++) {
      return patt[j];
    }
  }
}

strSearch("kennedymuthuri", "thu");

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        console.log("BREAK!!");
        break;
      }
      if (j === short.length - 1) {
        console.log("FOUND ONE!!");
        count++;
      }
    }
  }
  return count;
}

naiveSearch("kennehurdthury muthuri", "hur");
