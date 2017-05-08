//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical 
//order of the strings of a1 which are substrings of strings of a2.

function inArray(array1,array2){
  //...
  var r = [];
  for (var i = 0; i < array2.length; i++) {
    for (var j = 0; j < array1.length; j++) {
      if (array2[i].includes(array1[j])) {
        if (!r.includes(array1[j])) {
          r.push(array1[j]);
        }
      }
    }
  }
  return r.sort();
}