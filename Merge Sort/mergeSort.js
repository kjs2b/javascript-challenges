//Implement merge sort

function mergeSort(arr){
  //Your code here
  if (arr.length === 1) {
    return arr;
  }
  var middle = Math.floor(arr.length / 2);
  var half1 = arr.slice(0, middle);
  var half2 = arr.slice(middle);

  return merge(mergeSort(half1), mergeSort(half2));
}

function merge (left, right) {
  var results = [];
  var i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      results.push(left[i++]);
    } else {
      results.push(right[j++]);
    }
  }
  return results.concat(left.slice(i)).concat(right.slice(j));
}