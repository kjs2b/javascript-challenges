//Implement insertion sort

function insertionSort (array) {
  var results = [array[0]];

  for (var i = 1; i < array.length; i++) {
    var item = array[i];
    
    var j = 0;
    while(j < results.length && item.value >= results[j].value) {
      j++;
    }
    results.splice(j, 0, item);
  }
  return results;
}